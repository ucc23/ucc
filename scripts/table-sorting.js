let lastSort = { columnIndex: -1, ascending: true };
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

function enableTableSorting(table) {
    if (!table) return;
    table.classList.add("sortable");

    const headers = table.querySelectorAll("thead th");
    const tbody = table.querySelector("tbody");
    if (!headers.length || !tbody) return;

    // Precompute sortable values for all cells
    const rows = Array.from(tbody.rows);
    const data = rows.map(row => {
        const cells = Array.from(row.cells).map(cell => {
            const text = cell.textContent.trim();
            let value, isNum, isMissing = false;
            if (text === "–") { // THIS IS NOT A DASH '-'
                value = null;
                isNum = false;
                isMissing = true;
            } else {
                const num = parseFloat(text.replace(/,/g, ""));
                isNum = !isNaN(num);
                value = isNum ? num : text;
            }
            return { raw: cell, value, isNum, isMissing };
        });
        return { row, cells };
    });

    headers.forEach((header, columnIndex) => {
        header.addEventListener("click", () => {
            let ascending = lastSort.columnIndex !== columnIndex || !lastSort.ascending;
            lastSort = { columnIndex, ascending };

            // Clear indicators
            headers.forEach(h => {
                h.classList.remove("sorted-asc", "sorted-desc");
                h.querySelector(".sort-indicator")?.remove();
            });

            // Add indicator
            header.classList.add(ascending ? "sorted-asc" : "sorted-desc");
            const arrow = document.createElement("span");
            arrow.className = "sort-indicator";
            arrow.textContent = ascending ? "▲" : "▼";
            header.appendChild(arrow);

            data.sort((a, b) => {
                const va = a.cells[columnIndex];
                const vb = b.cells[columnIndex];
                // Missing values always last
                if (va.isMissing && vb.isMissing) return 0;
                if (va.isMissing) return 1;
                if (vb.isMissing) return -1;
                // Numeric comparison
                if (va.isNum && vb.isNum) {
                    return ascending ? va.value - vb.value : vb.value - va.value;
                }
                // String comparison
                return ascending
                    ? collator.compare(va.value, vb.value)
                    : collator.compare(vb.value, va.value);
            });

            // Replace tbody fresh each time
            const oldTbody = table.querySelector("tbody");
            const newTbody = oldTbody.cloneNode(false);
            data.forEach(item => newTbody.appendChild(item.row));
            oldTbody.parentNode.replaceChild(newTbody, oldTbody);
        });
    });
}

export { enableTableSorting };
