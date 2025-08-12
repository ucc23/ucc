import { loadCompressedCsv } from "./loadCSV.js";
import { stringDifference } from './stringDifference.js';

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

(async () => {
    users = await loadCompressedCsv("assets/clusters.csv.gz", ["ID", "fnames", "GLON", "GLAT", "RA_ICRS", "DE_ICRS"]);
})();


// Function to handle search input
searchInput.addEventListener("input", (event) => {
    // Clear previous results
    userCardContainer.innerHTML = "";
    // Only process for strings with more than 3 characters
    if (event.target.value.length < 4) return;

    const query = event.target.value.toLowerCase().trim();
    const terms = query.split(/[ \t,;]+/);
    const results = users
        .map(user => {
            let distance = Infinity, matchType = null;
            if (terms[0].match(/^\d/)) {
                // RA/DEC search
                distance = Math.hypot(parseFloat(terms[0]) - user.RA_ICRS, parseFloat(terms[1]) - user.DE_ICRS);
                matchType = 1;
            } else if (terms[0] === "g") {
                // GLON/GLAT search
                distance = Math.hypot(parseFloat(terms[1]) - user.GLON, parseFloat(terms[2]) - user.GLAT);
                matchType = 2;
            } else {
                // Globally removes spaces, underscores, periods, and hyphens,
                // globally replaces '+' with 'p'
                const normalizedQuery = query.replace(/[\s_.\-]/g, "").replace(/\+/g, "p");
                // Only search the string distance if the first three chars are present
                // in the fnames
                if (user.fnames.includes(normalizedQuery.slice(0, 3))) {
                    distance = Math.min(...user.fnames.split(";").map(fname =>
                        stringDifference(normalizedQuery, fname)
                    ));
                    matchType = 3;
                }
            }
            return { ...user, distance, matchType };
        })
        // Filter for euclidean search, string diff is always <1
        .filter(user => user.distance < 5)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 9);

    // Append new results
    results.forEach(user => {
        const element = userCardTemplate.content.cloneNode(true).children[0];
        const header = element.querySelector("[data-header]");
        const body = element.querySelector(`[data-body_${user.matchType}]`);
        const href = `./_clusters/${user.fnames.split(";")[0]}`;
        element.querySelector("a").setAttribute("href", href);
        header.textContent = user.ID;
        //
        if (user.matchType === 1) {
            body.textContent = `E (${user.RA_ICRS}, ${user.DE_ICRS})`;
        } else if (user.matchType === 2) {
            body.textContent = `G (${user.GLON}, ${user.GLAT})`;
        } else if (user.matchType === 3) {
            body.textContent = user.fnames.split(";").slice(1, 3).join(", ");
        }
        //
        userCardContainer.appendChild(element);
    });
});
