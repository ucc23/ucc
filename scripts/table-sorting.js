// Initialize lastSort to track sorting state
let lastSort = { columnIndex: -1, ascending: true };

/**
 * Enables table sorting functionality for a given table element
 * @param {HTMLTableElement} table - The table element to make sortable
 */
function enableTableSorting(table) {
    if (!table) return;
    
    const headers = table.querySelectorAll("thead tr th");
    if (!headers.length) return;
    
    let tbody = table.querySelector("tbody");
    if (!tbody) return;
    
    Array.from(headers).forEach((header, columnIndex) => {
        header.addEventListener("click", () => {
            const rows = Array.from(tbody.rows);
            let ascending = lastSort.columnIndex !== columnIndex || !lastSort.ascending;
            lastSort = { columnIndex, ascending };
            
            // Clear previous sorting indicators
            headers.forEach(h => {
                h.classList.remove("sorted-asc", "sorted-desc");
                const arrow = h.querySelector(".sort-indicator");
                if (arrow) arrow.remove();
            });
            
            // Add current sorting indicator
            header.classList.add(ascending ? "sorted-asc" : "sorted-desc");
            const arrow = document.createElement("span");
            arrow.className = "sort-indicator";
            arrow.textContent = ascending ? "▲" : "▼";
            header.appendChild(arrow);
            
            // Sort the rows
            const colValues = rows.map(row => {
                const text = row.cells[columnIndex].textContent.trim();
                const num = parseFloat(text.replace(/,/g, ""));
                return {
                    row,
                    value: isNaN(num) ? text : num,
                    isNum: !isNaN(num)
                };
            });
            
            colValues.sort((a, b) => {
                if (a.isNum && b.isNum) {
                    return ascending ? a.value - b.value : b.value - a.value;
                }
                return ascending
                    ? String(a.value).localeCompare(String(b.value))
                    : String(b.value).localeCompare(String(a.value));
            });
            
            // Update the table with sorted rows
            const frag = document.createDocumentFragment();
            colValues.forEach(item => frag.appendChild(item.row));
            tbody.appendChild(frag);
        });
    });
}

// For ES6 modules (modern):
export { enableTableSorting };

