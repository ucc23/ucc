import { loadCompressedCsv } from "./loadCSV.js";
import { stringDifference } from './stringDifference.js';
import { setupCoordToggle } from './toggleButton.js';

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let data = [];
(async () => {
    data = await loadCompressedCsv("assets/clusters.csv.gz", ["ID", "fnames", "GLON", "GLAT", "RA_ICRS", "DE_ICRS"]);
})();

// Search toggle button
setupCoordToggle({ buttonId: 'coordToggle', inputId: 'search', includeName: false });

// Function to handle search input
searchInput.addEventListener("input", (event) => {
    // Clear previous results
    userCardContainer.innerHTML = "";

    const query = event.target.value;

    // Only process for strings with more than 3 characters
    if (query.length < 4) return;

    let x = null, y = null, normalizedQuery = null;
    if ((coordsys == 'equ') || (coordsys === "gal")){
        const xy = query.split(/[ \t,;]+/)
        // RA/DEC or GLON/GLAT search
        x = parseFloat(xy[0]);
        y = parseFloat(xy[1]);
    } else {
        // Globally removes spaces, underscores, periods, and hyphens, globally replaces '+' with 'p'
        normalizedQuery = query.toLowerCase().replace(/[\s_.\-]/g, "").replace(/\+/g, "p");
    }

    const results = data
        .map(d => {
            let distance = Infinity;
            if (coordsys == 'equ') {
                distance = Math.hypot(x - d.RA_ICRS, y - d.DE_ICRS);
            } else if (coordsys == "gal") {
                distance = Math.hypot(x - d.GLON, y - d.GLAT);
            } else {
                // Only search the string distance if the first three chars are present
                // in the fnames
                if (d.fnames.includes(normalizedQuery.slice(0, 3))) {
                    distance = Math.min(...d.fnames.split(";").map(fname =>
                        stringDifference(normalizedQuery, fname)
                    ));
                }
            }
            return { ...d, distance};
        })
        // Filter for euclidean search, string diff is always <1
        .filter(d => d.distance < 5)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 9);

    // Append new results
    results.forEach(d => {
        const element = userCardTemplate.content.cloneNode(true).children[0];
        const header = element.querySelector("[data-header]");
        const body = element.querySelector(`[data-body]`);
        const href = `./_clusters/${d.fnames.split(";")[0]}`;
        element.querySelector("a").setAttribute("href", href);
        header.textContent = d.ID;
        if (coordsys == 'equ') {
            body.textContent = `E (${d.RA_ICRS}, ${d.DE_ICRS})`;
        } else if (coordsys == "gal") {
            body.textContent = `G (${d.GLON}, ${d.GLAT})`;
        } else {
            body.textContent = d.fnames.split(";").slice(1, 3).join(", ");
        }
        userCardContainer.appendChild(element);
    });
});
