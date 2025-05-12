async function fetchPapers() {
  try {
    const res = await fetch('/arxiv.json');

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
        <div class="meta">${authors} — ${updated} — Score: ${entry.score}</div>
        <p class="abstract">${abstract}</p>
      `;

      list.appendChild(li);
    });
  } catch (err) {
    console.error('Error fetching or parsing arXiv data:', err.message, err);
  }
}

window.addEventListener('DOMContentLoaded', fetchPapers);