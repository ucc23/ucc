import { loadCompressedCsv } from "./loadCSV.js";
import { stringDifference } from './stringDifference.js';
import { setupCoordToggle } from './toggleButton.js';

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

(async () => {
    users = await loadCompressedCsv("assets/clusters.csv.gz", ["ID", "fnames", "GLON", "GLAT", "RA_ICRS", "DE_ICRS"]);
})();


setupCoordToggle({
  buttonId: 'coordToggle',
  inputId: 'search'
});

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

    const results = users
        .map(user => {
            let distance = Infinity;
            if (coordsys == 'equ') {
                distance = Math.hypot(x - user.RA_ICRS, y - user.DE_ICRS);
            } else if (coordsys == "gal") {
                distance = Math.hypot(x - user.GLON, y - user.GLAT);
            } else {
                // Only search the string distance if the first three chars are present
                // in the fnames
                if (user.fnames.includes(normalizedQuery.slice(0, 3))) {
                    distance = Math.min(...user.fnames.split(";").map(fname =>
                        stringDifference(normalizedQuery, fname)
                    ));
                }
            }
            return { ...user, distance};
        })
        // Filter for euclidean search, string diff is always <1
        .filter(user => user.distance < 5)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 9);

    // Append new results
    results.forEach(user => {
        const element = userCardTemplate.content.cloneNode(true).children[0];
        const header = element.querySelector("[data-header]");
        const body = element.querySelector(`[data-body]`);
        const href = `./_clusters/${user.fnames.split(";")[0]}`;
        element.querySelector("a").setAttribute("href", href);
        header.textContent = user.ID;
        if (coordsys == 'equ') {
            body.textContent = `E (${user.RA_ICRS}, ${user.DE_ICRS})`;
        } else if (coordsys == "gal") {
            body.textContent = `G (${user.GLON}, ${user.GLAT})`;
        } else {
            body.textContent = user.fnames.split(";").slice(1, 3).join(", ");
        }
        userCardContainer.appendChild(element);
    });
});
