import { loadCompressedCsv } from "./loadCSV.js";
import { setupCoordToggle } from './toggleButton.js';
import { generalSearch } from "./search.js";
import { stringDifference } from './stringDifference.js';
import { enableTableSorting } from './table-sorting.js';

import {geoAitoff} from "https://cdn.skypack.dev/d3-geo-projection@4";
// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { select } from "https://cdn.jsdelivr.net/npm/d3-selection@3/+esm";
import { zoom } from "https://cdn.jsdelivr.net/npm/d3-zoom@3/+esm";
import { geoGraticule, geoPath } from "https://cdn.jsdelivr.net/npm/d3-geo@3/+esm";
import { min, max } from "https://cdn.jsdelivr.net/npm/d3-array@3/+esm";
import { scaleLinear, scaleLog } from "https://cdn.jsdelivr.net/npm/d3-scale@4/+esm";


// Set up dimensions and projection
const plotDiv = document.getElementById("map_plot");
const width = plotDiv.offsetWidth;  // width of the div
const height = width/2;

const projection = geoAitoff()
    .rotate([0, 0]) 
    .scale(height / 4)
    .translate([width / 2, height / 2]);

const zoomBehavior = zoom()
    .scaleExtent([1, 10])
    .on("zoom", (event) => svg.attr("transform", event.transform));

// Apply zoom with passive event listeners
select("svg").call(zoomBehavior)
    .on("wheel.zoom", null, { passive: true })
    .on("touchstart.zoom", null, { passive: true })
    .on("touchmove.zoom", null, { passive: true });


const svg = select("#map_plot")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoomBehavior)
    .append("g");

// Define a graticule generator for the grid lines
const graticule = geoGraticule()
    .step([29.99, 15]); // Step size for grid lines: 30 LON, 15 LAT
    // If I use 30 exactly in LON the last grid line for 180 is not drawn

// Draw the graticule (grid) on the projection
svg.append("path")
    .datum(graticule)
    .attr("d", geoPath().projection(projection))
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
const tooltip = select("#map_plot")
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
const tableContainer = select("#table_results")
        .append("div")
        .attr("id", "resultsTable")
        .style("margin-top", "20px")
        .style("display", "flex")
        .style("justify-content", "center");


// Convert data to CSV format
function convertToCSV(points) {
    const headers = ["Name", "RA", "DEC", "GLON", "GLAT", "Dist_pc", "N_50", "C3", "UTI", "bad_oc"];
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
            d.uti,
            d.badoc
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


function getPoints(
    query, coordsys, radius, distmin, distmax, n50min, n50max, utimin, utimax,
    c3Filter, filterOCs) {
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
                fnames: d.fnames,
                distance: distance,
                dist_pc: parseFloat(d.dist_pc),
                membs: parseFloat(d.N_50),
                uti: parseFloat(d.UTI),
                c3: d.C3,
                badoc: d.bad_oc,
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

    // Apply bad OC filter if set
    if (filterOCs) {
        results = results.filter(d => d.badoc === "n");
    }

    // // Return only exact matches if any found
    // const exactMatches = results.filter(d => d.distance === 0);
    // if (exactMatches.length === 1) {
    //     return exactMatches;
    // }

    return results.sort((a, b) => a.distance - b.distance)
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
    const dr = coordsys === "names" ? "d [str]" : "d [ ' ]";
    const coord1 = coordsys === "gal" ? "LON" : "RA";
    const coord2 = coordsys === "gal" ? "LAT" : "DEC";

    // Build header HTML
    const tableHeader = `
        <thead>
            <tr>
                <th class="left">Name</th>
                <th class="center">${dr}</th>
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

        const nameStyle = d.badoc === "y" ? 'style="color:red;"' : "";
        // const btitle = d.badoc === "y" ? `${d.name.slice(0, 20)} *` : `${d.name.slice(0, 20)}`;

        tableBody += `
            <tr data-index="${i}">
                <td class="left">
                  <a href="../_clusters/${d.fname}" target="_blank" title="${d.fnames}" ${nameStyle}>
                    ${d.name.slice(0, 20)}
                  </a>
                </td>
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
    const minDist = min(points, d => d.dist_pc);
    const maxDist = Math.min(4000, max(points, d => d.dist_pc));
    const colorScale = scaleLog()
        .domain([minDist, maxDist])     // domain must be strictly positive
        .range(["blue", "red"]);
    const minMembs = min(points, d => d.membs);
    const maxMembs = max(points, d => d.membs);
    const sizeScale = scaleLinear().domain([minMembs, maxMembs]).range([1, 25]);

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

const data = await loadCompressedCsv();

function getInputValues() {
    return {
        search: document.getElementById("search").value,
        radius: document.getElementById("radius").value,
        distmin: document.getElementById("dist_min").value,
        distmax: document.getElementById("dist_max").value,
        n50min: document.getElementById("n50_min").value,
        n50max: document.getElementById("n50_max").value,
        utimin: document.getElementById("uti_min").value,
        utimax: document.getElementById("uti_max").value,
        c3Filter: document.getElementById("c3Filter").value,
        filterOCs: document.getElementById("filterOCs").checked,
    };
}

// Update the display with current input values
function updateDisplay() {
    const v = getInputValues();
    const points = getPoints(
        v.search, window.coordsys, v.radius,
        v.distmin, v.distmax, v.n50min, v.n50max,
        v.utimin, v.utimax, v.c3Filter, v.filterOCs
    );
    const { circles, sizeScale } = displayData(points);
    buildTable(points, circles, sizeScale, window.coordsys);
}

// Function to download the data as CVS
function getCSV() {
    const v = getInputValues();
    const points = getPoints(
        v.search, window.coordsys, v.radius,
        v.distmin, v.distmax, v.n50min, v.n50max,
        v.utimin, v.utimax, v.c3Filter, v.filterOCs
    );
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
