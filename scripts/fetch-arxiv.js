import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

const ARXIV_URL = 'https://export.arxiv.org/api/query?search_query=cat:astro-ph.GA*&sortBy=submittedDate&sortOrder=descending&max_results=200';
const keywords = ['open cluster', 'star cluster', 'stellar cluster'];

async function main() {
  // Load existing entries from arxiv.json, if the file exists
  let existingEntries = [];
  try {
    const data = await fs.readFile('arxiv.json', 'utf-8');
    existingEntries = JSON.parse(data);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err; // Ignore if file doesn't exist
  }

  // Calculate the date 7 days back
  const date7DaysBack = new Date();
  date7DaysBack.setDate(date7DaysBack.getDate() - 7);
  const date7DaysBackStr = date7DaysBack.toISOString().split('T')[0];

  // Filter out entries older than 7 days from the existing data
  existingEntries = existingEntries.filter(entry => entry.published >= date7DaysBackStr);

  // Fetch XML data from arXiv
  const res = await fetch(ARXIV_URL);
  const xml = await res.text();
  const obj = await parseStringPromise(xml, { explicitArray: false });
  const entries = Array.isArray(obj.feed.entry) ? obj.feed.entry : [obj.feed.entry];

  // Filter and score new entries
  const newEntries = entries
    .filter(entry => entry.published >= date7DaysBackStr) // Include only recent entries
    .map(entry => {
      const title = entry.title.toLowerCase();
      const summary = entry.summary.toLowerCase();

      // Calculate the score
      let score = 0;
      keywords.forEach(keyword => {
        if (title.includes(keyword)) score += 2;
        if (summary.includes(keyword)) score += 1;
      });

      return { ...entry, score };
    })
    .filter(entry => entry.score > 0); // Exclude entries with score=0

  // Merge and deduplicate entries
  const allEntries = [...existingEntries, ...newEntries];
  const uniqueEntries = Array.from(new Map(allEntries.map(entry => [entry.id, entry])).values());

  // Remove entries with the title 'No articles found'
  const filteredEntries = uniqueEntries.filter(entry => entry.title.toLowerCase() !== 'no articles found');

  // Sort entries by published date (descending)
  filteredEntries.sort((a, b) => new Date(b.published) - new Date(a.published));

  // If no entries are to be saved, save a placeholder entry
  const entriesToSave = filteredEntries.length > 0
    ? filteredEntries
    : [{
        title: 'No articles found',
        id: '#',
        author: [{ name: ' ' }],
        updated: new Date().toISOString().split('T')[0],
        score: 0,
        summary: 'No articles matching the filters were found in the current submissions.',
      }];

  // Save the updated entries to arxiv.json
  await fs.writeFile(
    'arxiv.json',
    JSON.stringify(entriesToSave, null, 2),
    'utf-8'
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
