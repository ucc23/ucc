async function fetchPapers() {
  try {
    // Fetch latest version
    const res = await fetch("https://raw.githubusercontent.com/ucc23/ucc/refs/heads/main/arxiv.json");

    const data = await res.json();
    let entries = Array.isArray(data) ? data : [data];

    const list = document.getElementById('papers');
    const sortOptions = document.getElementById('arxivsort');

    // Function to render sorted entries
    function renderEntries(sortedEntries) {
      list.innerHTML = ''; // Clear existing entries
      sortedEntries.forEach(entry => {
        const li = document.createElement('li');
        li.className = 'paper';

        const title = entry.title.trim();
        const link = entry.id?.trim() || '#';
        const authors = entry.author ? entry.author.map(a => a.name).join(', ') : 'N/A';
        const updated = entry.updated ? new Date(entry.updated).toLocaleDateString() : 'N/A';
        const abstract = entry.summary?.trim() || '';

        li.innerHTML = `
          <a class="title" href="${link}" target="_blank">${title}</a>
          <div class="meta">${authors} <br>${updated} — Score: ${entry.score}</div>
          <p class="abstract">${abstract}</p>
        `;

        list.appendChild(li);
      });
    }

    // Sorting handler
    sortOptions.addEventListener('change', (event) => {
      const sortBy = event.target.value;

      const sortedEntries = [...entries].sort((a, b) => {
        if (sortBy === 'updated') {
          return new Date(b.updated) - new Date(a.updated);
        } else if (sortBy === 'score') {
          return (b.score || 0) - (a.score || 0);
        }
        return 0;
      });

      renderEntries(sortedEntries);
    });

    // Initial render
    renderEntries(entries);
  } catch (err) {
    console.error('Error fetching or parsing arXiv data:', err.message, err);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  fetchPapers();
});

