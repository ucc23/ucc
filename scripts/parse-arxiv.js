async function fetchPapers() {
  try {
    // Fetch latest version
    const res = await fetch("https://raw.githubusercontent.com/ucc23/ucc/refs/heads/main/assets/arxiv.json");
    // Fetch local version for testing
    // const res = await fetch("../arxiv.json");
    const data = await res.json();

    // Extract fetched_at value
    const fetchedAt = data.fetched_at ? new Date(data.fetched_at) : null;

    // Extract entries from the JSON
    const entries = Array.isArray(data.entries) ? data.entries : [];

    const list = document.getElementById('papers');
    const sortOptions = document.getElementById('arxivsort');

    // Display fetched_at value
    if (fetchedAt) {
      const fetchedAtElement = document.getElementById('fetched-at');
      if (fetchedAtElement) {
        fetchedAtElement.textContent = `Last updated: ${fetchedAt.toLocaleString()}`;
      } else {
        console.log(`Fetched at: ${fetchedAt.toISOString()}`);
      }
    }

    // Function to render sorted entries
    function renderEntries(sortedEntries) {
      list.innerHTML = ''; // Clear existing entries
      sortedEntries.forEach(entry => {
        const li = document.createElement('li');
        li.className = 'paper';

        const title = entry.title.trim();
        const link = entry.id?.trim() || '#';

        // Normalize authors to an array of names
        const authors = Array.isArray(entry.author)
          ? entry.author.map(a => a.name).join(', ')
          : entry.author?.name || 'N/A';

        const updated = entry.updated ? new Date(entry.updated).toLocaleDateString() : 'N/A';
        const abstract = entry.summary?.trim() || '';

        // Generate truncated abstract
        const truncatedAbstract = abstract.substring(0, 200);

        li.innerHTML = `
          <a class="title" href="${link}" target="_blank">${title}</a>
          <div class="authors">${authors}</div>
          <div class="meta">${updated} — Score: ${entry.score}</div>
          <div class="abstract" data-full="${abstract}" data-truncated="${truncatedAbstract}">
            ${truncatedAbstract}...
          </div>
          <span class="toggle-button" onclick="toggleAbstract(this)">Expand</span>
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

// Add the toggleAbstract function for the dropdown functionality
function toggleAbstract(button) {
  const abstractDiv = button.previousElementSibling;
  const isExpanded = abstractDiv.classList.toggle('expanded');

  if (isExpanded) {
    abstractDiv.textContent = abstractDiv.getAttribute('data-full');
    button.textContent = 'Hide';
  } else {
    abstractDiv.textContent = abstractDiv.getAttribute('data-truncated') + '...';
    button.textContent = 'Expand';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  fetchPapers();
});
