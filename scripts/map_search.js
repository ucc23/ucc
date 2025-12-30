import { loadCompressedCsv } from "./loadCSV.js";
import { setupCoordToggle } from './toggleButton.js';
import { generalSearch } from "./search.js";
import { stringDifference } from './stringDifference.js';
import { enableTableSorting } from './table-sorting.js';

// Set up dimensions
const plotDiv = document.getElementById("search-box");
const width = plotDiv.offsetWidth;  // width of the div

// Select the parent container using standard JS
const parentContainer = document.getElementById("table_results");
const tableContainer = document.createElement("div");
tableContainer.setAttribute("id", "resultsTable");
tableContainer.style.marginTop = "20px";
tableContainer.style.display = "flex";
tableContainer.style.flexDirection = "column";
tableContainer.style.alignItems = "center";
tableContainer.style.justifyContent = "center";
// Append the new element to the parent container
parentContainer.appendChild(tableContainer);

// Pre-build C3 letter fragments
const letterHTML = {
    A: '<span class="c3-A">A</span>',
    B: '<span class="c3-B">B</span>',
    C: '<span class="c3-C">C</span>',
    D: '<span class="c3-D">D</span>'
};

// Load compressed data
const data = await loadCompressedCsv();

function getInputValues() {
    return {
        coordsys : window.coordsys,
        search: document.getElementById("search").value,
        Nmax: document.getElementById("Nmax").value,
        distmin: document.getElementById("dist_min").value,
        distmax: document.getElementById("dist_max").value,
        n50min: document.getElementById("n50_min").value,
        n50max: document.getElementById("n50_max").value,
        utimin: document.getElementById("uti_min").value,
        utimax: document.getElementById("uti_max").value,
        Pdupmax: document.getElementById("Pdupmax").value,
        c3Filter: document.getElementById("c3Filter").value,
        filterOCs: document.getElementById("filterOCs").checked,
    };
}


function getPoints() {
    let { 
        coordsys,
        search: query,  // Rename
        Nmax,
        distmin,
        distmax,
        n50min,
        n50max,
        utimin,
        utimax,
        Pdupmax,
        c3Filter,
        filterOCs,
    } = getInputValues();

    // If 'query' is empty return empty array
    query = query.trim();
    if (!query) {
        return [];
    }

    // Ensure valid defaults
    Nmax = parseFloat(Nmax);
    if (isNaN(Nmax)) {
        Nmax = 100;
    }
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
    Pdupmax = parseFloat(Pdupmax);
    if (isNaN(Pdupmax)) {
        Pdupmax = 1.01;
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
                pdup: parseFloat(d.P_dup),
                c3: d.C3,
                badoc: d.bad_oc,
            };
        })
        // .filter(d => d.distance <= radius)
        .filter(d => d.dist_pc >= distmin && d.dist_pc <= distmax)
        .filter(d => d.membs >= n50min && d.membs <= n50max)
        .filter(d => d.uti >= utimin && d.uti <= utimax);

    // Apply C3 filter if set
    if (c3Filter) {
        results = results.filter(d => d.c3 === c3Filter);
    }

    // Apply P_dup filter if set
    results = results.filter(d => d.pdup <= Pdupmax);

    // Apply bad OC filter if set
    if (filterOCs) {
        results = results.filter(d => d.badoc === "n");
    }

    // Exclude 'Infinity' distances
    if (coordsys === "names") {
        results = results.filter(d => d.distance <= 1);
    }

    // // Return only exact matches if any found
    // const exactMatches = results.filter(d => d.distance === 0);
    // if (exactMatches.length === 1) {
    //     return exactMatches;
    // }

    results = results.sort((a, b) => a.distance - b.distance);

    // Get the count BEFORE applying the slice (Nmax limit)
    const totalCount = results.length; 
    const limitedResults = results.slice(0, Nmax);
    return {
        points: limitedResults, 
        totalCount: totalCount 
    };
}


function buildTable(points, totalCount) {
    // Get a reference to the container element previously created
    const tableContainerElement = document.getElementById("resultsTable");
    if (!points || points.length === 0) {
        if (tableContainerElement) {
            tableContainerElement.innerHTML = "";   // Clear previous table
        }
        return;
    }

    // Determine coordinate labels
    const coordsys = window.coordsys;
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
                <th class="center">P<sub>dup</sub></th>
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
                <td class="center">${d.pdup}</td>
                <td class="center">${d.uti}</td>
            </tr>`;
    });
    tableBody += "</tbody>";

    // Ensure the element exists before attempting to modify its content
    if (tableContainerElement) {
        // const nrows = points.length;
        // const titleHTML = `<div class="results-title">Showing ${nrows} rows</div>`;
        tableContainerElement.innerHTML = `
            <div style="width:${width}px; display:flex; justify-content:center; align-items:center; margin-bottom:4px; font-weight:bold; color:#666; position:relative;">
                <!-- Centered title -->
                <span style="text-align:center; width:100%;">
                    Showing ${points.length} objects (${totalCount} found)
                </span>
                <!-- Right-aligned download button -->
                <div id="download-container" style="position:absolute; right:0;">
                    <button id="downloadCSV"
                        title="Download table as a CSV file"
                        style="background:none; border:none; color:blue; cursor:pointer; font-size:18px;">
                        📥
                    </button>
                </div>
            </div>
            <table id="resultsTableData" class="results-table" style="width:${width}px">
                ${tableHeader}
                ${tableBody}
            </table>
        `;
    }
}


// Variable to cache the latest results object
let cachedPoints = []; 

// Update map
async function updateMapIfOpen(points, table) {
  const details = document.querySelector("details");
  if (details && details.open) {
    const module = await import("./mapPlotter.js");
    module.drawMap(points, table);
  }
}

// Call map update when details is opened
const mapDetails = document.querySelector("details");
mapDetails.addEventListener("toggle", async (event) => {
  if (event.target.open) {
    // Use the cached data
    const points = cachedPoints; 
    const table = document.getElementById("resultsTable");
    await updateMapIfOpen(points, table); 
  }
});


function getCSV() {
    const points = cachedPoints; 
    if (!points || points.length === 0) {
        console.warn("No data in cache to download.");
        return; 
    }

    // CSV Conversion
    const headers = ["Name", "RA", "DEC", "GLON", "GLAT", "Dist_pc", "N_50", "C3", "P_dup", "UTI", "bad_oc"];
    const csvContent = [
        headers.join(","), // Header row
        ...points.map(d => [
            `"${d.name}"`, // Quote the name to handle commas/spaces
            d.ra,
            d.dec,
            d.lon,
            d.lat,
            d.dist_pc.toFixed(0), // Ensure distance is formatted as integer string
            d.membs,
            d.c3,
            d.pdup,
            d.uti,
            d.badoc
        ].join(","))
    ].join("\n");

    // Trigger Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    
    // Standard client-side download mechanism
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "ucc_clusters_table.csv");
        
        // Use hidden link element to trigger the download programmatically
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Revoke the object URL to release resources
        URL.revokeObjectURL(url); 
    }
}


// Main update function
async function updateDisplay() {
  const { points, totalCount } = getPoints();
  // Cache the full result object for the map event listener
  cachedPoints = points;
  buildTable(points, totalCount);
  const table = document.getElementById("resultsTable");
  enableTableSorting(table);
  await updateMapIfOpen(points, table); 
  if (cachedPoints && cachedPoints.length > 0) {
      const downloadButton = document.getElementById('downloadCSV');
      downloadButton.addEventListener('click', getCSV);
      // downloadButton.onclick = () => umami.track('search_downl_csv');
  }
}


// Search toggle button
setupCoordToggle({ buttonId: 'coordToggle', inputId: 'search', includeName: true });

// Add event listener for the Search button
document.getElementById("searchButton").addEventListener("click", updateDisplay);

// Allow Enter key to trigger search from any input field
document.querySelectorAll(".search-trigger").forEach(el => {
    el.addEventListener("keypress", (e) => {
        if (e.key === "Enter") updateDisplay();
    });
});
