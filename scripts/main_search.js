import { loadCompressedCsv } from "./loadCSV.js";
import { generalSearch } from "./search.js";
import { stringDifference } from './stringDifference.js';
import { setupCoordToggle } from './toggleButton.js';

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

const data = await loadCompressedCsv();

// Search toggle button
setupCoordToggle({ buttonId: 'coordToggle', inputId: 'search', includeName: false });

// Function to handle search input
searchInput.addEventListener("input", (event) => {
    // Clear previous results
    userCardContainer.innerHTML = "";

    const query = event.target.value.trim().toLowerCase();

    // Only process for strings with more than 3 characters
    if (query.length < 4) return;

    // Handle "random" query
    if (query === "random") {
        const element = userCardTemplate.content.cloneNode(true).children[0];
        const header = element.querySelector("[data-header]");
        const body = element.querySelector("[data-body]");
        element.querySelector("a").setAttribute("href", "random");
        header.textContent = "Random";
        body.textContent = "Load a random cluster page";
        userCardContainer.appendChild(element);
        return;
    }

    const results = data
        .map(d => {
            const distance = generalSearch(d, coordsys, query);
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
        const anchor = element.querySelector("a");
        const href = `./_clusters/${d.fnames.split(";")[0]}`;

        anchor.setAttribute("href", href);
        header.textContent = d.Name;
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
