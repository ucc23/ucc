import { loadCompressedCsv } from "./loadCSV.js";
import { setupCoordToggle } from './toggleButton.js';
import { generalSearch } from "./search.js";
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
    data = await loadCompressedCsv("../assets/clusters.csv.gz", ["Name", "fnames", "RA_ICRS", "DE_ICRS", "GLON", "GLAT", "dist_pc", "N_50", "C3", "UTI"]);
    updateDisplay();
})();

// Convert data to CSV format
function convertToCSV(points) {
    const headers = ["Name", "RA", "DEC", "GLON", "GLAT", "Dist_pc", "N_50", "C3", "UTI"];
    const csvContent = [
        headers.join(","), // Header row
        ...points.map(d => [
            `"${d.name}"`,
            d.ra,
            d.dec,
            d.lon,
            d.lat,
            d.dist_pc.toFixed(0),
            d.membs,
            d.c3,
            d.uti
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


function getPoints(query, coordsys, radius, distmin, distmax, n50min, n50max, utimin, utimax, c3Filter) {
    // If 'query' is empty return empty array
    if (!query || query.trim() === "") {
        return [];
    }

    // Default radius to 10 if invalid
    radius = parseFloat(radius);
    if (isNaN(radius)) {
        radius = 10;
    }

    // Ensure valid defaults
    distmin = parseFloat(distmin);
    if (isNaN(distmin)) {
        distmin = 0;
    }
    distmax = parseFloat(distmax);
    if (isNaN(distmax)) {
        distmax = 50001;
    }
    console.log(n50min, n50max);
    n50min = parseFloat(n50min);
    if (isNaN(n50min)) {
        n50min = 0;
    }
    n50max = parseFloat(n50max);
    if (isNaN(n50max)) {
        n50max = 100000;
    }
    utimin = parseFloat(utimin);
    if (isNaN(utimin)) {
        utimin = 0;
    }
    utimax = parseFloat(utimax);
    if (isNaN(utimax)) {
        utimax = 1.01;
    }

    let results = data
        .map(d => {
            const distance = generalSearch(d, coordsys, query);
            return {
                name: d.Name,
                ra: parseFloat(d.RA_ICRS),
                dec: parseFloat(d.DE_ICRS),
                lon: parseFloat(d.GLON),
                lat: parseFloat(d.GLAT),
                fname: d.fnames.split(';')[0],
                distance: distance,
                dist_pc: parseFloat(d.dist_pc),
                membs: parseFloat(d.N_50),
                uti: parseFloat(d.UTI),
                c3: d.C3,
                coordinates: projection([parseFloat(d.GLON), parseFloat(d.GLAT)])
            };
        })
        .filter(d => d.distance <= radius)
        .filter(d => d.dist_pc >= distmin && d.dist_pc <= distmax)
        .filter(d => d.membs >= n50min && d.membs <= n50max)
        .filter(d => d.uti >= utimin && d.uti <= utimax);

    // Apply C3 filter if set
    if (c3Filter) {
        results = results.filter(d => d.c3 === c3Filter);
    }

    return results
        .sort((a, b) => a.distance - b.distance)
        // .slice(0, maxN);
}



// Pre-build C3 letter fragments
const letterHTML = {
    A: '<span class="c3-A">A</span>',
    B: '<span class="c3-B">B</span>',
    C: '<span class="c3-C">C</span>',
    D: '<span class="c3-D">D</span>'
};


function buildTable(points, circles, sizeScale, coordsys) {
    // Determine coordinate labels
    const coord1 = coordsys === "gal" ? "LON" : "RA";
    const coord2 = coordsys === "gal" ? "LAT" : "DEC";

    // Build header HTML
    const tableHeader = `
        <thead>
            <tr>
                <th class="left">Name</th>
                <th class="center">Rad</th>
                <th class="center">${coord1}</th>
                <th class="center">${coord2}</th>
                <th class="center">Dist [pc]</th>
                <th class="center">N50</th>
                <th class="center">C3</th>
                <th class="center">UTI</th>
            </tr>
        </thead>`;

    // Build body HTML
    let tableBody = "<tbody>";
    points.forEach((d, i) => {
        const c3HTML = d.c3.split("").map(l => letterHTML[l] || l).join("");
        const xCoord = coordsys === "gal" ? d.lon : d.ra;
        const yCoord = coordsys === "gal" ? d.lat : d.dec;

        tableBody += `
            <tr data-index="${i}">
                <td class="left"><a href="https://ucc.ar/_clusters/${d.fname}" target="_blank">${d.name.slice(0, 20)}</a></td>
                <td class="center">${d.distance.toFixed(2)}</td>
                <td class="center">${xCoord.toFixed(2)}</td>
                <td class="center">${yCoord.toFixed(2)}</td>
                <td class="center">${d.dist_pc.toFixed(0)}</td>
                <td class="center">${d.membs}</td>
                <td class="center">${c3HTML}</td>
                <td class="center">${d.uti}</td>
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

    // Only enable hover if fewer than 100 rows
    // if (points.length < 5000) {
    handleRowHover(table, points, circles, sizeScale);

    // Enable sorting
    enableTableSorting(table);
}

// Hover handling with delay
function handleRowHover(table, points, circles, sizeScale) {
    let hoverTimeout = null;

    let delayTimeout = 100;
    if (points.length > 2000) {
        delayTimeout = 500;
    } else if (points.length > 1000) {
        delayTimeout = 400;
    } else if (points.length > 750) {
        delayTimeout = 300;
    } else if (points.length > 500) {
        delayTimeout = 200;
    }

    table.addEventListener("mouseover", (e) => {
        const row = e.target.closest("tr[data-index]");
        if (row) {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
            const idx = +row.dataset.index;
            // Reset all circles
            circles
                .attr("r", p => sizeScale(p.membs))
                .style("opacity", 0.25)
                .style("stroke", "black");
            // Highlight hovered circle
            const circle = circles.filter((p, i) => i === idx);
            circle.raise()
                .attr("r", p => sizeScale(p.membs) * 1.0)
                .style("opacity", 0.75)
                .style("stroke", "yellow")
                .style("stroke-width", 2);
            }, delayTimeout);
        }
    });

    // Reset highlight when leaving the row
    table.addEventListener("mouseout", (e) => {
        const row = e.target.closest("tr[data-index]");
        if (row) {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                circles
                .attr("r", p => sizeScale(p.membs))
                .style("opacity", 0.25)
                .style("stroke", "black")
                .style("stroke-width", 1);
            }, delayTimeout);
        }
    });
}


function displayData(points) {
    title.text(`N=${points.length}`);

    // --- Draw points ---
    const minDist = d3.min(points, d => d.dist_pc);
    const maxDist = Math.min(4000, d3.max(points, d => d.dist_pc));
    const colorScale = d3.scaleLog()
        .domain([minDist, maxDist])     // domain must be strictly positive
        .range(["blue", "red"]);
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
        .style("fill", d => colorScale(d.dist_pc))
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity", 0.25)
        .style("cursor", "pointer")
        .on("mouseover", (event, d) => {
            tooltip.html(`<strong>${d.name}</strong><br>RA: ${d.ra}°<br>DEC: ${d.dec}°<br>D: ${d.dist_pc} [pc]<br>N_50: ${d.membs}`)
                .style("visibility", "visible");
        })
        .on("mousemove", (event) => {
            // Prevent the tooltip from getting squished at the right edge of the map
            const offsetX = event.offsetX > 600 ? event.offsetX - (event.offsetX - 600) : event.offsetX + 10;
            tooltip
                .style("left", (offsetX) + "px")
                .style("top", (event.offsetY + 10) + "px");
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
    const radius = document.getElementById("radius").value;
    const distmin = document.getElementById("dist_min").value;
    const distmax = document.getElementById("dist_max").value;
    const n50min = document.getElementById("n50_min").value;
    const n50max = document.getElementById("n50_max").value;
    const utimin = document.getElementById("uti_min").value;
    const utimax = document.getElementById("uti_max").value;
    const c3Filter = document.getElementById("c3Filter").value;

    const points = getPoints(search, window.coordsys, radius, distmin, distmax, n50min, n50max, utimin, utimax, c3Filter);
    const { circles, sizeScale } = displayData(points);
    buildTable(points, circles, sizeScale, window.coordsys);
}

// Function to download the data as CVS
function getCSV() {
    const search = document.getElementById("search").value;
    const radius = document.getElementById("radius").value;
    const distmin = document.getElementById("dist_min").value;
    const distmax = document.getElementById("dist_max").value;
    const n50min = document.getElementById("n50_min").value;
    const n50max = document.getElementById("n50_max").value;
    const utimin = document.getElementById("uti_min").value;
    const utimax = document.getElementById("uti_max").value;
    const c3Filter = document.getElementById("c3Filter").value;
    const points = getPoints(search, window.coordsys, radius, distmin, distmax, n50min, n50max, utimin, utimax, c3Filter);
    downloadCSV(points);
}


// Search toggle button
setupCoordToggle({ buttonId: 'coordToggle', inputId: 'search', includeName: true });

// Add event listener for the Search button
document.getElementById("searchButton").addEventListener("click", updateDisplay);

// Allow Enter key to trigger search from any input field
["search", "radius", "dist_min", "dist_max", "n50_min", "n50_max", "uti_min", "uti_max", "c3Filter"].forEach(id => {
    document.getElementById(id).addEventListener("keypress", (e) => {
        if (e.key === "Enter") updateDisplay();
    });
});

const downloadContainer = document.getElementById('download-container');
downloadContainer.addEventListener('click', getCSV);
