import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

const ARXIV_URL = 'https://export.arxiv.org/api/query?search_query=cat:astro-ph*&sortBy=submittedDate&sortOrder=descending&max_results=100';
const keywords = ['open cluster', 'star cluster', 'stellar cluster'];

async function main() {
  // Fetch XML data
  const res = await fetch(ARXIV_URL);
  const xml = await res.text();
  const obj = await parseStringPromise(xml, { explicitArray: false });
  const entries = Array.isArray(obj.feed.entry) ? obj.feed.entry : [obj.feed.entry];

  // Calculate yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0]; // Format as YYYY-MM-DD

  // Filter entries by published date and keywords
  const scoredEntries = entries
    // Filter out entries older than the day before
    .filter(entry => entry.published.startsWith(yesterdayStr))
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

  // Sort entries by score in descending order
  const sortedEntries = scoredEntries.sort((a, b) => b.score - a.score);

  // If no entries are to be saved, save a placeholder entry
  const entriesToSave = sortedEntries.length > 0
    ? sortedEntries
    : [{
        title: 'No articles found',
        id: '#',
        author: [{ name: ' ' }],
        updated: new Date().toISOString().split('T')[0],
        summary: 'No articles matching the filters were found in the current submissions.',
      }];

  // Save filtered entries to JSON file
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
