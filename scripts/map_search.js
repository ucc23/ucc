import { loadCompressedCsv } from "./loadCSV.js";
import { setupCoordToggle } from './toggleButton.js';
import { stringDifference } from './stringDifference.js';
import { enableTableSorting } from './table-sorting.js';

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


function getPoints(search, coordsys, maxN) {
    // If 'search' is empty or maxN invalid, return empty array
    if (!search || search.trim() === "" || !maxN || isNaN(parseFloat(maxN))) {
        return [];
    }

    let x = null, y = null, normalizedQuery = null;
    let radius = 180;
    if ((coordsys == 'equ') || (coordsys === "gal")){
        const xy = search.split(/[ \t,;]+/)
        // RA/DEC or GLON/GLAT search
        x = parseFloat(xy[0]);
        y = parseFloat(xy[1]);
    } else {
        // Globally removes spaces, underscores, periods, and hyphens, globally replaces '+' with 'p'
        normalizedQuery = search.toLowerCase().replace(/[\s_.\-]/g, "").replace(/\+/g, "p");
        radius = 1;
    }

    const results = data
        .map(d => {
            let distance = Infinity;
            if (coordsys == 'equ') {
                distance = Math.hypot(x - d.RA_ICRS, y - d.DE_ICRS);
            } else if (coordsys == "gal") {
                distance = Math.hypot(x - d.GLON, y - d.GLAT);
            } else if (coordsys == 'allnames') {
                // Only search the string distance if the first three chars are present
                if (d.fnames.includes(normalizedQuery.slice(0, 3))) {
                    distance = Math.min(...d.fnames.split(";").map(fname =>
                        stringDifference(normalizedQuery, fname)
                    ));
                }
            } else {
                // Only search the string distance if the first three chars are present
                let normName = d.ID.toLowerCase().replace(/[\s_.\-]/g, "");
                if (normName.includes(normalizedQuery.slice(0, 3))) {
                        distance = stringDifference(normalizedQuery, normName)
                }
            }

            return {
                name: d.ID,
                ra: parseFloat(d.RA_ICRS),
                dec: parseFloat(d.DE_ICRS),
                fname: d.fnames.split(';')[0],
                distance: distance,
                dist: parseFloat(d.dist_pc),
                membs: parseFloat(d.N_50),
                c3: d.C3,
                coordinates: projection([parseFloat(d.GLON), parseFloat(d.GLAT)])
            };
        })
        // Filter for euclidean search, string diff is always <1
        .filter(d => d.distance <= radius)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, maxN);

    return results;
}



// Pre-build C3 letter fragments
const letterHTML = {
    A: '<span class="c3-A">A</span>',
    B: '<span class="c3-B">B</span>',
    C: '<span class="c3-C">C</span>',
    D: '<span class="c3-D">D</span>'
};


function buildTable(points, circles, sizeScale) {
    // Build header HTML
    const tableHeader = `
        <thead>
            <tr>
                <th class="left">ID</th>
                <th class="center">RA</th>
                <th class="center">DEC</th>
                <th class="center">Dist (pc)</th>
                <th class="center">N_50</th>
                <th class="center">C3</th>
            </tr>
        </thead>`;

    // Build body HTML
    let tableBody = "<tbody>";
    points.forEach((d, i) => {
        const c3HTML = d.c3.split("").map(l => letterHTML[l] || l).join("");
        tableBody += `
            <tr data-index="${i}">
                <td class="left"><a href="https://ucc.ar/_clusters/${d.fname}" target="_blank">${d.name}</a></td>
                <td class="center">${d.ra.toFixed(2)}</td>
                <td class="center">${d.dec.toFixed(2)}</td>
                <td class="center">${d.dist.toFixed(0)}</td>
                <td class="center">${d.membs}</td>
                <td class="center">${c3HTML}</td>
            </tr>`;
    });
    tableBody += "</tbody>";

    // Inject table
    tableContainer.html(`
        <table id="resultsTable" class="results-table" style="width:${width}px"">
            ${tableHeader}
            ${tableBody}
        </table>
    `);

    const table = document.getElementById("resultsTable");

    // Event delegation for row clicks
    table.addEventListener("click", (e) => {
        const row = e.target.closest("tr[data-index]");
        if (row) {
            const idx = +row.dataset.index;
            const d = points[idx];
            // Reset all circles
            circles
                .attr("r", p => sizeScale(p.membs))
                .style("opacity", 0.25)
                .style("stroke", "black");
            // Highlight selected circle
            const circle = circles.filter((p, i) => i === idx);
            circle.raise()
                .attr("r", p => sizeScale(p.membs) * 1.0)
                .style("opacity", 0.75)
                .style("stroke", "yellow")
                .style("stroke-width", 2);
        }
    });

    // Enable sorting
    enableTableSorting(table);
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
    const search = document.getElementById("search").value;
    const maxN = parseFloat(document.getElementById("maxN").value);

    const points = getPoints(search, window.coordsys, maxN);
    const { circles, sizeScale } = displayData(points);
    buildTable(points, circles, sizeScale);

}

// Search toggle button
setupCoordToggle({
  buttonId: 'coordToggle',
  inputId: 'search'
});


// Add event listener for the Search button
document.getElementById("searchButton").addEventListener("click", updateDisplay);

// Allow Enter key to trigger search from any input field
["search", "maxN"].forEach(id => {
    document.getElementById(id).addEventListener("keypress", (e) => {
        if (e.key === "Enter") updateDisplay();
    });
});

// Function to download the data as CVS
function getCSV() {
    const search = document.getElementById("search").value;
    const maxN = parseFloat(document.getElementById("maxN").value);
    const points = getPoints(search, window.coordsys, maxN);
    downloadCSV(points);
}

const downloadContainer = document.getElementById('download-container');
downloadContainer.addEventListener('click', getCSV);
