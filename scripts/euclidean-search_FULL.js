const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

// Function to calculate minimum distance between strings
const stringDifference = (str1, str2) => {
    if (str1 === str2) return 0;

    // Lengths of both strings
    const len1 = str1.length, len2 = str2.length;
    // Absolute distance between lengths
    const n = Math.abs(len1 - len2);

    // Early exit for strings with significant length difference
    if (n > 3) return 1; // If length diff > 3, consider different

    // Max length
    const s = Math.max(len1, len2);

    // Counts different characters
    let o = 0;
    for (let i = 0; i < Math.min(len1, len2); i++) str1[i] !== str2[i] && o++;
    // Normalized measure of the difference between two strings:
    // 0 == equal
    // 1 == completely different
    const norm_diff = (n + o) / s;

    // 2D matrix of dimensions (len1 + 1) x (len2 + 1) (rows and columns), all
    // elements are 0
    const c = Array.from({length: len1 + 1}, () => Array(len2 + 1).fill(0));

    // Normalized edit distance (Levenshtein) between strings e and t
    for (let i = 0; i <= len1; i++) c[i][0] = i;
    for (let j = 0; j <= len2; j++) c[0][j] = j;
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            c[i][j] = Math.min(c[i - 1][j] + 1, c[i][j - 1] + 1, c[i - 1][j - 1] + cost)
        }
    }
    // The value c[len1][len2] is the value in the bottom-right cell of the matrix,
    // representing the minimum edit distance between the two strings.
    //
    // The '1.01' value is a small penalty designed to ensure that the minimum distance
    // between for example 'NGC 251' matches first with 'NGC 2516' over 'NGC 2251'
    const norm_l_dist = c[len1][len2] / s * 1.01;

    return Math.min(norm_diff, norm_l_dist)
};

// Function to handle search input
searchInput.addEventListener("input", (event) => {

    // Clear previous results
    userCardContainer.innerHTML = "";

    // Only process for strings with more than 3 characters
    if (event.target.value.length < 4) return;

    const query = event.target.value.toLowerCase().trim();
    const terms = query.split(" ");

    const results = users
        .map(user => {
            let distance = Infinity, matchType = null;
            if (terms[0].match(/^\d/)) {
                // RA/DEC search
                distance = Math.hypot(parseFloat(terms[0]) - user.RA, parseFloat(terms[1]) - user.DEC);
                matchType = "ra_dec";
            } else if (terms[0] === "g") {
                // GLON/GLAT search
                distance = Math.hypot(parseFloat(terms[1]) - user.GLON, parseFloat(terms[2]) - user.GLAT);
                matchType = "galactic";
            } else {
                // Removes spaces, underscores, periods, and hyphens and the 'g' flag
                // Replaces '+' with 'p'
                const normalizedQuery = query.replace(/[\s_.\-]/g, "").replace(/\+/g, "p");
                // Only search the string distance if the first three chars are present
                // in the user.fnames
                if (user.fnames.includes(normalizedQuery.slice(0, 3))) {
                    distance = Math.min(...user.fnames.split(";").map(fname =>
                        stringDifference(normalizedQuery, fname)
                    ));
                    matchType = "name";
                }
            }

            return { ...user, distance, matchType };
        })
        // This is a reasonable value for both string an euclidean search
        .filter(user => user.distance < 5)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 9);

    // Append new results
    results.forEach(user => {
        const element = user[`element_${user.matchType === "name" ? 1 : user.matchType === "galactic" ? 2 : 3}`];
        userCardContainer.appendChild(element);
    });
});

// Fetch and decompress data
fetch("clusters.json.gz")
    .then(response => response.arrayBuffer())
    .then(buffer => {
        const decompressed = pako.ungzip(new Uint8Array(buffer), { to: "string" });
        const data = JSON.parse(decompressed);

        users = data.map(entry => {
            const template = userCardTemplate.content.cloneNode(true);
            const elements = ["element_1", "element_2", "element_3"].map((key, i) => {
                const clone = template.cloneNode(true).children[0];
                const header = clone.querySelector("[data-header]");
                const body = clone.querySelector(`[data-body_${i + 1}]`);
                const href = `./_clusters/${entry.F.split(";")[0]}`;
                
                clone.querySelector("a").setAttribute("href", href);
                header.textContent = entry.N;

                if (i === 0) body.textContent = entry.F.split(";").slice(1, 3).join(", ");
                if (i === 1) body.textContent = `G (${entry.L}, ${entry.B})`;
                if (i === 2) body.textContent = `E (${entry.R}, ${entry.D})`;

                return { key, element: clone };
            });

            return {
                fnames: entry.F,
                GLON: entry.L,
                GLAT: entry.B,
                RA: entry.R,
                DEC: entry.D,
                ...Object.fromEntries(elements.map(({ key, element }) => [key, element]))
            };
        });
    })
    .catch(error => console.error("Error fetching or decompressing data:", error));
