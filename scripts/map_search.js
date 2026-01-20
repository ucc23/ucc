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

// // Pre-build C3 letter fragments
// const letterHTML = {
//     A: '<span class="c3-A">A</span>',
//     B: '<span class="c3-B">B</span>',
//     C: '<span class="c3-C">C</span>',
//     D: '<span class="c3-D">D</span>'
// };

// Load compressed data
const data = await loadCompressedCsv();

function getInputValues() {
    return {
        coordsys : window.coordsys,
        search: document.getElementById("search").value,
        Nmax: document.getElementById("Nmax").value,
        filterOCs: document.getElementById("filterOCs").checked,
        distmin: document.getElementById("dist_min").value,
        distmax: document.getElementById("dist_max").value,
        hide_dist_nans: document.getElementById("hide_dist_nans").checked,
        avmin: document.getElementById("av_min").value,
        avmax: document.getElementById("av_max").value,
        hide_av_nans: document.getElementById("hide_av_nans").checked,
        davmin: document.getElementById("dav_min").value,
        davmax: document.getElementById("dav_max").value,
        hide_dav_nans: document.getElementById("hide_dav_nans").checked,
        agemin: document.getElementById("age_min").value,
        agemax: document.getElementById("age_max").value,
        hide_age_nans: document.getElementById("hide_age_nans").checked,
        fehmin: document.getElementById("feh_min").value,
        fehmax: document.getElementById("feh_max").value,
        hide_feh_nans: document.getElementById("hide_feh_nans").checked,
        massmin: document.getElementById("mass_min").value,
        massmax: document.getElementById("mass_max").value,
        hide_mass_nans: document.getElementById("hide_mass_nans").checked,
        bfmin: document.getElementById("bf_min").value,
        bfmax: document.getElementById("bf_max").value,
        hide_bf_nans: document.getElementById("hide_bf_nans").checked,
        bssmin: document.getElementById("bss_min").value,
        bssmax: document.getElementById("bss_max").value,
        hide_bss_nans: document.getElementById("hide_bss_nans").checked,
        n50min: document.getElementById("n50_min").value,
        n50max: document.getElementById("n50_max").value,
        Pdupmin: document.getElementById("Pdup_min").value,
        Pdupmax: document.getElementById("Pdup_max").value,
        utimin: document.getElementById("uti_min").value,
        utimax: document.getElementById("uti_max").value,
    };
}

function getPoints() {
    let { 
        coordsys,
        search: query,  // Rename
        Nmax,
        filterOCs,
        distmin,
        distmax,
        hide_dist_nans,
        avmin,
        avmax,
        hide_av_nans,
        davmin,
        davmax,
        hide_dav_nans,
        agemin,
        agemax,
        hide_age_nans,
        fehmin,
        fehmax,
        hide_feh_nans,  
        massmin,
        massmax,
        hide_mass_nans,
        bfmin,
        bfmax,
        hide_bf_nans,
        bssmin,
        bssmax,
        hide_bss_nans,
        n50min,
        n50max,
        Pdupmin,
        Pdupmax,
        utimin,
        utimax,        
    } = getInputValues();

    // If 'query' is empty return empty array
    query = query.trim();
    if (!query) {
        return [];
    }

    distmin = parseFloat(distmin) || 0;
    distmax = parseFloat(distmax) || 1e6;
    avmin = parseFloat(avmin) || 0;
    avmax = parseFloat(avmax) || 100;
    davmin = parseFloat(davmin) || 0;
    davmax = parseFloat(davmax) || 100;
    agemin = parseFloat(agemin) || 0;
    agemax = parseFloat(agemax) || 100000;
    fehmin = parseFloat(fehmin) || -10;
    fehmax = parseFloat(fehmax) || 10;
    massmin = parseFloat(massmin) || 0;
    massmax = parseFloat(massmax) || 1e7;
    bfmin = parseFloat(bfmin) || 0;
    bfmax = parseFloat(bfmax) || 1.01;
    bssmin = parseFloat(bssmin) || 0;
    bssmax = parseFloat(bssmax) || 1e6;

    n50min = parseFloat(n50min) || 0;
    n50max = parseFloat(n50max) || 100000;
    Pdupmin = parseFloat(Pdupmin) || 0;
    Pdupmax = parseFloat(Pdupmax) || 1.01;
    utimin = parseFloat(utimin) || 0;
    utimax = parseFloat(utimax) || 1.01;    

    Nmax = parseFloat(Nmax) || 100;

    const inRange = (hide_nans, x, min, max) =>
        Number.isNaN(x) ? !hide_nans : (x >= min && x <= max);

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
                dist_kpc: parseFloat(d.dist),
                av: parseFloat(d.ext),
                dav: parseFloat(d.diff_ext),
                age: parseFloat(d.age),
                met: parseFloat(d.met),
                mass: parseFloat(d.mass),
                bfrac: parseFloat(d.bi_frac),
                bss: parseFloat(d.blue_str),
                dist_plx_pc: parseFloat(d.dist_plx_pc),
                membs: parseFloat(d.N_50),
                uti: parseFloat(d.UTI),
                pdup: parseFloat(d.P_dup),
                badoc: d.bad_oc,
            };
        })
        .filter(d => inRange(hide_dist_nans, d.dist_kpc, distmin, distmax))
        .filter(d => inRange(hide_av_nans, d.av,      avmin,   avmax))
        .filter(d => inRange(hide_dav_nans, d.dav,     davmin,  davmax))
        .filter(d => inRange(hide_age_nans, d.age,     agemin,  agemax))
        .filter(d => inRange(hide_feh_nans, d.met,     fehmin,  fehmax))
        .filter(d => inRange(hide_mass_nans, d.mass,    massmin, massmax))
        .filter(d => inRange(hide_bf_nans, d.bfrac,   bfmin,   bfmax))
        .filter(d => inRange(hide_bss_nans, d.bss,     bssmin,  bssmax))
        .filter(d => d.membs >= n50min && d.membs <= n50max)
        .filter(d => d.pdup >= Pdupmin && d.pdup <= Pdupmax)
        .filter(d => d.uti >= utimin && d.uti <= utimax);


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


function utiColor(v) {
    const x = Math.min(1, Math.max(0, v)); // clamp [0,1]

    let r, g;
    if (x <= 0.5) {
        // red (255,0,0) → dark yellow (180,140,0)
        const t = x / 0.5;
        r = Math.round(255 + t * (180 - 255));
        g = Math.round(0   + t * 140);
    } else {
        // dark yellow (180,140,0) → dark green (0,120,0)
        const t = (x - 0.5) / 0.5;
        r = Math.round(180 * (1 - t));
        g = Math.round(140 + t * (120 - 140));
    }

    return `rgb(${r}, ${g}, 0)`;
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
    const dr = coordsys === "names" ? "[str]" : "[ ' ]";
    const coord1 = coordsys === "gal" ? "LON" : "RA";
    const coord2 = coordsys === "gal" ? "LAT" : "DEC";

    // Build header HTML
    const tableHeader = `
        <thead>
            <tr>
                <th class="left name-col">Name</th>
                <th class="center">d <br><span style="font-size:0.85em;">${dr}</span></th>
                <th class="center">${coord1}<br><span style="font-size:0.85em;">[deg]</span></th>
                <th class="center">${coord2}<br><span style="font-size:0.85em;">[deg]</span></th>
                <th class="center">Dist<br><span style="font-size:0.85em;">[kpc]</span></th>
                <th class="center">Av<br><span style="font-size:0.85em;">[mag]</span></th>
                <th class="center">DAv<br><span style="font-size:0.85em;">[mag]</span></th>
                <th class="center">Age<br><span style="font-size:0.85em;">[Myr]</span></th>
                <th class="center">FeH<br><span style="font-size:0.85em;">[dex]</span></th>
                <th class="center">Mass<br><span style="font-size:0.85em;">[M⊙]</span></th>
                <th class="center">B<sub>frac</sub></th>
                <th class="center">BSS</th>
                <th class="center">N<sub>50</sub></th>
                <th class="center">P<sub>dup</sub></th>
                <th class="center">UTI</th>
            </tr>
        </thead>`;


    // Build body HTML
    let tableBody = "<tbody>";
    points.forEach((d, i) => {
        // const c3HTML = d.c3.split("").map(l => letterHTML[l] || l).join("");
        const xCoord = coordsys === "gal" ? d.lon : d.ra;
        const yCoord = coordsys === "gal" ? d.lat : d.dec;

        const nameStyle = d.badoc === "y" ? 'style="color:red;"' : "";
        // const btitle = d.badoc === "y" ? `${d.name.slice(0, 20)} *` : `${d.name.slice(0, 20)}`;

        tableBody += `
            <tr data-index="${i}">
                <td class="left name-col">
                  <a href="../_clusters/${d.fname}" target="_blank" title="${d.fnames}" ${nameStyle}>
                    ${d.name}
                  </a>
                </td>
                <td class="center">${d.distance.toFixed(2)}</td>
                <td class="center">${xCoord.toFixed(2)}</td>
                <td class="center">${yCoord.toFixed(2)}</td>
                <td class="center">${d.dist_kpc.toFixed(2)}</td>
                <td class="center">${d.av.toFixed(2)}</td>
                <td class="center">${d.dav.toFixed(2)}</td>
                <td class="center">${d.age.toFixed(0)}</td>
                <td class="center">${d.met.toFixed(3)}</td>
                <td class="center">${d.mass.toFixed(0)}</td>
                <td class="center">${d.bfrac.toFixed(2)}</td>
                <td class="center">${d.bss}</td>
                <td class="center">${d.membs}</td>
                <td class="center">${d.pdup}</td>
                <td class="center">
                  <span style="font-weight:bold; color:${utiColor(d.uti)};">
                    ${d.uti.toFixed(2)}
                  </span>
                </td>
            </tr>`;
    });
    tableBody += "</tbody>";

    // Ensure the element exists before attempting to modify its content
    if (tableContainerElement) {
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
    const headers = ["Name", "RA", "DEC", "GLON", "GLAT", "Dist", "Av", "DAv", "Age", "FeH", "Mass", "BF", "BSS", "N_50", "P_dup", "UTI", "bad_oc"];
    const csvContent = [
        headers.join(","), // Header row
        ...points.map(d => [
            `"${d.name}"`, // Quote the name to handle commas/spaces
            d.ra,
            d.dec,
            d.lon,
            d.lat,
            d.dist_kpc.toFixed(2),
            d.av.toFixed(2),
            d.dav.toFixed(2),
            d.age.toFixed(0),
            d.met.toFixed(3),
            d.mass.toFixed(0),
            d.bfrac.toFixed(2),
            d.bss,
            d.membs,
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
