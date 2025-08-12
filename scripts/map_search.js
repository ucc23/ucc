import { loadCompressedCsv } from "./loadCSV.js";
import { stringDifference } from './stringDifference.js';

// Set up dimensions and projection
const plotDiv = document.getElementById("map_plot");
const width = plotDiv.offsetWidth;  // Get the width of the div

const height = width/2;

const projection = d3.geoAitoff()
    .rotate([0, 0]) 
    .scale(height / 4)
    .translate([width / 2, height / 2]);

const zoom = d3.zoom()
    .scaleExtent([1, 10])
    .on("zoom", (event) => svg.attr("transform", event.transform));

// Apply zoom with passive event listeners
d3.select("svg").call(zoom)
    .on("wheel.zoom", null, { passive: true })     // Mark wheel events as passive
    .on("touchstart.zoom", null, { passive: true }) // Mark touchstart as passive
    .on("touchmove.zoom", null, { passive: true }); // Mark touchmove as passive


const svg = d3.select("#map_plot")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom)
    .append("g");

// Define a graticule generator for the grid lines
const graticule = d3.geoGraticule()
    .step([29.99, 15]); // Step size for grid lines: 30 LON, 15 LAT
    // If I use 30 exactly in LON the last grid line for 180 is not drawn

// Draw the graticule (grid) on the projection
svg.append("path")
    .datum(graticule)
    .attr("d", d3.geoPath().projection(projection))
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-width", 0.5);

// Append title text element
const title = svg.append("text")
    .attr("x", width / 2)
    // .attr("y", 20) // Position at the top of the plot
    .attr("y", height - 10) // Position near bottom
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "black");

// Tooltip div for displaying data on hover
const tooltip = d3.select("#map_plot")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("padding", "8px")
    .style("background", "#fff")
    .style("border", "1px solid #333")
    .style("border-radius", "4px");

// Label LON along middle
for (let lon = 0; lon < 360; lon += 30) {  // Label every 30 degrees
    const [x, y] = projection([lon, 0]);  // Projection at latitude 0 (equator)
    svg.append("text")
        .attr("x", x)
        .attr("y", y - 10)
        .attr("text-anchor", "middle")
        .attr("fill", "#333")
        .style("font-size", "10px")
        .text(`${lon}°`);
}

// Label LAT
for (let lat = -90; lat <= 90; lat += 30) {  // Label every 30 degrees
    const [x, y] = projection([181, lat]); // Projection at left side

    svg.append("text")
        .attr("x", x - 25)  // Left side
        .attr("y", y + 3)
        .attr("text-anchor", "start")
        .attr("fill", "#333")
        .style("font-size", "10px")
        .text(`${lat}°`);
}

// Create container for the table below the plot
const tableContainer = d3.select("#table_results")
        .append("div")
        .attr("id", "resultsTable")
        .style("margin-top", "20px")
        .style("display", "flex")
        .style("justify-content", "center");

// Declare 'data' in the global scope
let data = [];
(async () => {
    data = await loadCompressedCsv("../assets/clusters.csv.gz", ["ID", "fnames", "RA_ICRS", "DE_ICRS", "GLON", "GLAT", "dist_pc", "N_50", "C3"]);
    updateDisplay();
})();

// Convert data to CSV format
function convertToCSV(points) {
    const headers = ["Name", "RA", "DEC", "Dist_pc", "N_50", "C3"];
    const csvContent = [
        headers.join(","), // Header row
        ...points.map(d => [
            `"${d.name}"`,
            d.ra.toFixed(2),
            d.dec.toFixed(2),
            d.dist.toFixed(0),
            d.membs,
            d.c3
        ].join(","))
    ].join("\n");
    
    return csvContent;
}

// Trigger the download
function downloadCSV(points) {
    const csvContent = convertToCSV(points);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "ucc_clusters_table.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}


function getPoints(terms, maxN) {
    // If maxN is not provided return empty array
    if (!maxN || isNaN(parseFloat(maxN))) {
        return [];
    }

    const terms_in = terms.split(/[ \t,;]+/)

    let equatorial_s = false, galactic_s = false, normalizedQuery = null;
    let x = null, y = null;
    if (terms_in[0].match(/^\d/)) {
        equatorial_s = true; // RA/DEC search
        x = parseFloat(terms_in[0]);
        y = parseFloat(terms_in[1]);
    } else if (terms_in[0] === "g") {
        galactic_s = true; // GLON/GLAT search
        x = parseFloat(terms_in[1]);
        y = parseFloat(terms_in[2]);
    } else {
        // Globally removes spaces, underscores, periods, and hyphens,
        // globally replaces '+' with 'p'
        normalizedQuery = terms.replace(/[\s_.\-]/g, "").replace(/\+/g, "p");
    }

    let results = data
        .map(d => {
            let dist_c = Infinity;
            if (equatorial_s) {
                dist_c = Math.hypot(x - d.RA_ICRS, y - d.DE_ICRS);
            } else if (galactic_s) {
                dist_c = Math.hypot(x - d.GLON, y - d.GLAT);
            } else {
                // Only search the string distance if the first three chars are present
                // in the fnames
                if (d.fnames.includes(normalizedQuery.slice(0, 3))) {
                    dist_c = Math.min(...d.fnames.split(";").map(fname =>
                        stringDifference(normalizedQuery, fname)
                    ));
                }
            }

            return {
                name: d.ID,
                ra: parseFloat(d.RA_ICRS),
                dec: parseFloat(d.DE_ICRS),
                fname: d.fnames.split(';')[0],
                dist_c: dist_c,
                dist: parseFloat(d.dist_pc),
                membs: parseFloat(d.N_50),
                c3: d.C3,
                coordinates: projection([parseFloat(d.GLON), parseFloat(d.GLAT)])
            };
        })
        // Filter for euclidean search, string diff is always <1
        // .filter(user => user.distance < 10)
        .sort((a, b) => a.dist_c - b.dist_c)
        .slice(0, maxN);

    return results;
}


// Remember last column sorting
let lastSort = { columnIndex: null, ascending: true };

function enableTableSorting(table) {
    const headers = table.querySelectorAll("th");

    headers.forEach((header, columnIndex) => {
        header.style.cursor = "pointer";

        header.addEventListener("click", () => {
            const tbody = table.querySelector("tbody");
            const rows = Array.from(tbody.querySelectorAll("tr"));

            // Toggle direction if same column, otherwise start ascending
            let ascending;
            if (lastSort.columnIndex === columnIndex) {
                ascending = !lastSort.ascending;
            } else {
                ascending = true;
            }
            lastSort = { columnIndex, ascending };

            // Remove old indicators
            headers.forEach(th => {
                th.classList.remove("sorted-asc", "sorted-desc");
                const indicator = th.querySelector(".sort-indicator");
                if (indicator) indicator.remove();
            });

            // Apply new indicator
            header.classList.toggle("sorted-asc", ascending);
            header.classList.toggle("sorted-desc", !ascending);
            const arrow = document.createElement("span");
            arrow.className = "sort-indicator";
            arrow.textContent = ascending ? "▲" : "▼";
            header.appendChild(arrow);

            // Sort
            rows.sort((a, b) => {
                const cellA = a.cells[columnIndex].textContent.trim();
                const cellB = b.cells[columnIndex].textContent.trim();
                const numA = parseFloat(cellA.replace(/,/g, ""));
                const numB = parseFloat(cellB.replace(/,/g, ""));
                if (!isNaN(numA) && !isNaN(numB)) {
                    return ascending ? numA - numB : numB - numA;
                }
                return ascending
                    ? cellA.localeCompare(cellB)
                    : cellB.localeCompare(cellA);
            });

            tbody.append(...rows);
        });
    });
}


// Map letters to colors
const letterColors = {
    A: "green",
    B: "#FFC300",
    C: "red",
    D: "purple"
};

function buildTable(points, circles, sizeScale) {
    // Clear old table
    tableContainer.html("");

    const table = tableContainer.append("table")
        .attr("id", "resultsTable")
        .style("border-collapse", "collapse")
        .style("width", `${width}px`)
        .style("border", "1px solid #ccc")
        .style("background", "#fff");

    // Table header
    const header = table.append("thead").append("tr");
    ["ID", "RA", "DEC", "Dist (pc)", "N_50", "C3"].forEach((col, i) => {
        header.append("th")
            .text(col)
            .style("border", "1px solid #ccc")
            .style("text-align", i === 0 ? "left" : "center")
            .style("padding-left", i === 0 ? "12px" : null) // ~2 spaces
            .style("background", "#f0f0f0");
    });

    // Body
    const tbody = table.append("tbody");
    points.forEach((d, i) => {
        const row = tbody.append("tr")
            .style("cursor", "pointer")
            .on("click", () => {
                // Reset all circles
                circles
                    .attr("r", d => sizeScale(d.membs))
                    .style("opacity", 0.25)
                    .style("stroke", "black");

                // Highlight selected circle
                const circle = circles.filter((p, idx) => idx === i);
                circle.raise() // Bring to front
                    .attr("r", d => sizeScale(d.membs) * 1.) // Double size
                    .style("opacity", 0.75)
                    .style("stroke", "yellow")
                    .style("stroke-width", 2);
            });

        // ID clickable link
        row.append("td")
            .append("a")
            .attr("href", "https://ucc.ar/_clusters/" + d.fname)
            .attr("target", "_blank")
            .text(d.name)
            .style("color", "blue");

        row.append("td").text(d.ra.toFixed(2)).style("border", "1px solid #ccc").style("text-align", "center");
        row.append("td").text(d.dec.toFixed(2)).style("border", "1px solid #ccc").style("text-align", "center");
        row.append("td").text(d.dist.toFixed(0)).style("border", "1px solid #ccc").style("text-align", "center");
        row.append("td").text(d.membs).style("border", "1px solid #ccc").style("text-align", "center");
        // c3 colored letters
        const c3Cell = row.append("td").style("border", "1px solid #ccc").style("text-align", "center");
        d.c3.split("").forEach(letter => {
            c3Cell.append("span")
                .text(letter)
                .style("color", letterColors[letter] || "black")
                .style("font-weight", "bold");
        });
    });

    // Enable sorting
    enableTableSorting(document.getElementById("resultsTable"));
}


function displayData(points) {
    title.text(`N=${points.length}`);

    // --- Draw points ---
    const minDist = d3.min(points, d => d.dist);
    const maxDist = d3.max(points, d => d.dist);
    const colorScale = d3.scaleLinear().domain([minDist, maxDist]).range(["blue", "red"]);
    const minMembs = d3.min(points, d => d.membs);
    const maxMembs = d3.max(points, d => d.membs);
    const sizeScale = d3.scaleLinear().domain([minMembs, maxMembs]).range([1, 25]);

    svg.selectAll("circle").remove();

    const circles = svg.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", d => d.coordinates[0])
        .attr("cy", d => d.coordinates[1])
        .attr("r", d => sizeScale(d.membs))
        .style("fill", d => colorScale(d.dist))
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity", 0.25)
        .style("cursor", "pointer")
        .on("mouseover", (event, d) => {
            tooltip.html(`<strong>${d.name}</strong><br>RA: ${d.ra}°<br>DEC: ${d.dec}°<br>D: ${d.dist} [pc]<br>N_50: ${d.membs}`)
                .style("visibility", "visible");
        })
        .on("mousemove", (event) => {
            tooltip.style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", () => tooltip.style("visibility", "hidden"))
        .on("click", (event, d) => {
            window.open("https://ucc.ar/_clusters/" + d.fname, "_blank");
        });

    return { circles, sizeScale };
}

// Update the display with current input values
function updateDisplay() {
    const terms = document.getElementById("terms").value;
    const maxN = parseFloat(document.getElementById("maxN").value);

    const points = getPoints(terms, maxN);
    const { circles, sizeScale } = displayData(points);
    buildTable(points, circles, sizeScale);

}

// Add event listener for the Search button
document.getElementById("searchButton").addEventListener("click", updateDisplay);

// Allow Enter key to trigger search from any input field
["terms", "maxN"].forEach(id => {
    document.getElementById(id).addEventListener("keypress", (e) => {
        if (e.key === "Enter") updateDisplay();
    });
});

// Function to download the data as CVS
function getCSV() {
    const terms = document.getElementById("terms").value;
    const maxN = parseFloat(document.getElementById("maxN").value);
    const points = getPoints(terms, maxN);
    downloadCSV(points);
}

const downloadContainer = document.getElementById('download-container');
downloadContainer.addEventListener('click', getCSV);