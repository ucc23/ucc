// Fuzzy search implementation for article tables
class FuzzySearch {
  constructor(tableElement, searchInputElement, statsElement) {
    this.table = tableElement;
    this.searchInput = searchInputElement;
    this.statsElement = statsElement;
    
    // Initialize
    this.init();
  }
  
  init() {
    this.searchInput.addEventListener('input', (e) => {
      this.filterTable(e.target.value);
    });
    
    this.refreshRows();
    this.updateStats(this.rows.length, this.rows.length);
  }
  
  // Refresh row references from the current DOM
  refreshRows() {
    this.tbody = this.table.querySelector('tbody');
    this.rows = Array.from(this.tbody.querySelectorAll('tr'));
  }
  
  // Calculate fuzzy match score
  fuzzyMatch(text, query) {
    if (!query) return { matches: true, score: 0 };

    // 1. Alphanumeric Normalization: Strip non-alphanumeric chars
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const target = normalize(text);
    const search = normalize(query);

    if (target.includes(search)) return { matches: true, score: 1 };

    // 2. Levenshtein Distance Calculation
    const distance = this.levenshtein(target, search);
    
    // 3. Similarity Threshold
    // Determine similarity as a percentage: 1 - (distance / max_length)
    const maxLength = Math.max(target.length, search.length);
    const similarity = 1 - (distance / maxLength);

    // Define a threshold (e.g., 0.6) for what constitutes a "match"
    const threshold = 0.49;
    
    return {
      matches: similarity > threshold,
      score: parseFloat(similarity.toFixed(4))
    };
  }

  levenshtein(a, b) {
    const tmp = [];
    for (let i = 0; i <= a.length; i++) {
      tmp[i] = [i];
    }
    for (let j = 0; j <= b.length; j++) {
      tmp[0][j] = j;
    }
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        tmp[i][j] = Math.min(
          tmp[i - 1][j] + 1,
          tmp[i][j - 1] + 1,
          tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
    }
    return tmp[a.length][b.length];
  }


  filterTable(searchTerm) {
    // Refresh rows in case the DOM has changed (e.g., from sorting)
    this.refreshRows();
    
    searchTerm = searchTerm.trim();
    
    if (!searchTerm) {
      // Show all rows
      this.rows.forEach(row => {
        row.classList.remove('hidden', 'no-match');
      });
      this.updateStats(this.rows.length, this.rows.length);
      return;
    }
    
    let visibleCount = 0;
    const results = [];
    
    this.rows.forEach(row => {
      const cells = row.querySelectorAll('td');

      const link  = cells[0]?.querySelector('a');
      const title = link?.getAttribute('title') || link?.textContent || '';

      const author = cells[1]?.textContent || '';
      const year = cells[2]?.textContent || '';
    
      // Search across title, author, and year
      const titleMatch = this.fuzzyMatch(title, searchTerm);
      const authorMatch = this.fuzzyMatch(author, searchTerm);
      const yearMatch = this.fuzzyMatch(year, searchTerm);
      
      const bestMatch = Math.max(
        titleMatch.matches ? titleMatch.score : 0,
        authorMatch.matches ? 1.1 * authorMatch.score : 0,
        yearMatch.matches ? yearMatch.score : 0
      );

      const matches = titleMatch.matches || authorMatch.matches || yearMatch.matches;

      if (matches) {
        results.push({ row, score: bestMatch });
        row.classList.remove('hidden', 'no-match');
        visibleCount++;
      } else {
        row.classList.add('hidden');
        row.classList.remove('no-match');
      }
    });
    
    // Sort by relevance (only if there's a search term)
    results.sort((a, b) => b.score - a.score);
    
    // console.table(results.map(r => ({
    //   score: r.score,
    //   text: r.row.textContent.trim()
    // })));

    // Reorder rows by relevance
    results.forEach((result, index) => {
      this.tbody.appendChild(result.row);
    });
    
    this.updateStats(visibleCount, this.rows.length);
  }
  
  updateStats(visible, total) {
    if (visible === total) {
      this.statsElement.textContent = `Showing all ${total} articles`;
    } else {
      this.statsElement.textContent = `Showing ${visible} of ${total} articles`;
    }
  }
}

// Auto-initialize fuzzy search
function initFuzzySearch() {
  // Look for search container with class 'search-container'
  const searchContainer = document.querySelector('.search-container');
  
  if (!searchContainer) {
    console.warn('No search container found with class "search-container"');
    return;
  }
  
  // Find the search input within the container
  const searchInput = searchContainer.querySelector('.search-input');
  
  if (!searchInput) {
    console.warn('No search input found with class "search-input"');
    return;
  }
  
  // Find the stats element within the container
  const searchStats = searchContainer.querySelector('.search-stats');
  
  // Find the table - look for the first table after the search container
  let table = searchContainer.nextElementSibling;
  
  // Keep looking for a table element
  while (table && table.tagName !== 'TABLE') {
    table = table.nextElementSibling;
  }
  
  // If not found after, try finding any table in the document
  if (!table) {
    table = document.querySelector('table');
  }
  
  if (!table) {
    console.warn('No table found in the document');
    return;
  }
  
  // Initialize fuzzy search
  const fuzzySearch = new FuzzySearch(table, searchInput, searchStats);
  
  // Set up a MutationObserver to detect when the table sorting replaces the tbody
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // Check if tbody was replaced
        const addedNodes = Array.from(mutation.addedNodes);
        const removedNodes = Array.from(mutation.removedNodes);
        
        const tbodyReplaced = addedNodes.some(node => node.tagName === 'TBODY') ||
                             removedNodes.some(node => node.tagName === 'TBODY');
        
        if (tbodyReplaced) {
          // Re-apply the current search filter
          const currentSearchTerm = searchInput.value;
          if (currentSearchTerm) {
            fuzzySearch.filterTable(currentSearchTerm);
          }
        }
      }
    });
  });
  
  // Observe the table for changes
  observer.observe(table, { childList: true, subtree: false });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFuzzySearch);
} else {
  initFuzzySearch();
}
