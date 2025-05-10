async function fetchPapers() {
  try {

    // For local build
    // const res = await fetch('/arxiv.json');
    // For live build
    // const res = await fetch('/arxiv-clusters/arxiv.json');

    // Determine the path based on the environment
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const filePath = isLocal ? '/arxiv.json' : '/arxiv-clusters/arxiv.json';
    // Fetch the file
    const res = await fetch(filePath);

    const data = await res.json();
    const entries = Array.isArray(data) ? data : [data];

    const list = document.getElementById('papers');
    entries.forEach(entry => {
      const li = document.createElement('li');
      li.className = 'paper';

      const title = entry.title.trim();
      const link = entry.id?.trim() || '#';
      const authors = entry.author ? entry.author.map(a => a.name).join(', ') : 'N/A';
      const updated = entry.updated ? new Date(entry.updated).toLocaleDateString() : 'N/A';
      const abstract = entry.summary?.trim() || '';

      li.innerHTML = `
        <a class="title" href="${link}" target="_blank">${title}</a>
        <div class="meta">${authors} — ${updated}</div>
        <p class="abstract">${abstract}</p>
      `;

      list.appendChild(li);
    });
  } catch (err) {
    console.error('Error fetching or parsing arXiv data:', err.message, err);
  }
}

window.addEventListener('DOMContentLoaded', fetchPapers);