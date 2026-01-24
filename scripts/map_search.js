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

// Load compressed data
const data = await loadCompressedCsv();

// Normalize once
const baseData = data.map(d => {
    const fnames = d.fnames || "";

    // Empty fields to NaN
    const num = v => v === "" || v == null ? NaN : +v;
    return {
        Name: d.Name,
        RA_ICRS: +d.RA_ICRS,
        DE_ICRS: +d.DE_ICRS,
        GLON: +d.GLON,
        GLAT: +d.GLAT,
        fname: fnames.split(";")[0],
        fnames,

        dist_kpc: num(d.dist),
        av: num(d.ext),
        dav: num(d.diff_ext),
        age: num(d.age),
        met: num(d.met),
        mass: num(d.mass),
        bfrac: num(d.bi_frac),
        bss: num(d.blue_str),

        dist_plx_pc: +d.dist_plx_pc,
        membs: +d.N_50,
        uti: +d.UTI,
        pdup: +d.P_dup,

        badoc: d.bad_oc,
    };
});


function getInputValues() {
    return {
        coordsys : window.coordsys,
        search: document.getElementById("search-bar").value,
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
        search: query,
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

    query = query.trim();

    const parseWithDefault = (value, defaultValue) => parseFloat(value) || defaultValue;

    distmin = parseWithDefault(distmin, 0);
    distmax = parseWithDefault(distmax, 1e6);
    avmin = parseWithDefault(avmin, 0);
    avmax = parseWithDefault(avmax, 100);
    davmin = parseWithDefault(davmin, 0);
    davmax = parseWithDefault(davmax, 100);
    agemin = parseWithDefault(agemin, 0);
    agemax = parseWithDefault(agemax, 100000);
    fehmin = parseWithDefault(fehmin, -10);
    fehmax = parseWithDefault(fehmax, 10);
    massmin = parseWithDefault(massmin, 0);
    massmax = parseWithDefault(massmax, 1e7);
    bfmin = parseWithDefault(bfmin, 0);
    bfmax = parseWithDefault(bfmax, 1.01);
    bssmin = parseWithDefault(bssmin, 0);
    bssmax = parseWithDefault(bssmax, 1e6);
    n50min = parseWithDefault(n50min, 0);
    n50max = parseWithDefault(n50max, 100000);
    Pdupmin = parseWithDefault(Pdupmin, 0);
    Pdupmax = parseWithDefault(Pdupmax, 1.01);
    utimin = parseWithDefault(utimin, 0);
    utimax = parseWithDefault(utimax, 1.01);
    Nmax = parseWithDefault(Nmax, 100);

    const inRange = (hide_nans, x, min, max) =>
        Number.isNaN(x) ? !hide_nans : (x >= min && x <= max);

    // Add the distance property to the cached data
    let results = baseData.map(d => ({
        ...d,
        distance: !query ? NaN : generalSearch(d, coordsys, query)
    }));

    // Combined filter in a single pass
    results = results.filter(d => {
        if (!inRange(hide_dist_nans, d.dist_kpc, distmin, distmax)) return false;
        if (!inRange(hide_av_nans, d.av, avmin, avmax)) return false;
        if (!inRange(hide_dav_nans, d.dav, davmin, davmax)) return false;
        if (!inRange(hide_age_nans, d.age, agemin, agemax)) return false;
        if (!inRange(hide_feh_nans, d.met, fehmin, fehmax)) return false;
        if (!inRange(hide_mass_nans, d.mass, massmin, massmax)) return false;
        if (!inRange(hide_bf_nans, d.bfrac, bfmin, bfmax)) return false;
        if (!inRange(hide_bss_nans, d.bss, bssmin, bssmax)) return false;
        
        if (d.membs < n50min || d.membs > n50max) return false;
        if (d.pdup < Pdupmin || d.pdup > Pdupmax) return false;
        if (d.uti < utimin || d.uti > utimax) return false;
        
        if (filterOCs && d.badoc !== "n") return false;
        
        if (coordsys === "names") {
            // Exclude finite distances > 1 and exclude infinities; keep NaNs
            if (
                (Number.isFinite(d.distance) && d.distance > 1) ||
                d.distance === Infinity ||
                d.distance === -Infinity
            ) return false;
        } else {
            // For coords search exclude Infinities but include NaNs
            if (!Number.isFinite(d.distance) && !Number.isNaN(d.distance)) return false;
        }

        return true;
    });

    results = results.sort((a, b) => {
        if (isNaN(a.distance)) return 1;
        if (isNaN(b.distance)) return -1;
        return a.distance - b.distance;
    });

    return {
        points: results.slice(0, Nmax), 
        totalCount: results.length 
    };
}


function utiColor(v) {
    // Mimics the Python function used to define the C coefficients and UTI colors
    const x = Math.min(1, Math.max(0, v));
    
    // Pre-parsed RGB values for performance
    const palette = [
        [223, 165, 179], // 0.000: #dfa5b3
        [243, 187, 181], // 0.125: #f3bbb5
        [252, 214, 194], // 0.250: #fcd6c2
        [254, 239, 210], // 0.375: #feefd2
        [254, 254, 232], // 0.500: #fefee8
        [237, 247, 211], // 0.625: #edf7d3
        [212, 236, 201], // 0.750: #d4ecc9
        [181, 222, 195], // 0.875: #b5dec3
        [165, 202, 185]  // 1.000: #a5cab9
    ];

    const scaled = x * (palette.length - 1);
    const i = Math.floor(scaled);
    const j = Math.min(i + 1, palette.length - 1);
    const t = scaled - i; // Fractional part for interpolation

    // Linear interpolation per channel
    const lerp = (start, end, factor) => Math.round(start + factor * (end - start));

    const r = lerp(palette[i][0], palette[j][0], t);
    const g = lerp(palette[i][1], palette[j][1], t);
    const b = lerp(palette[i][2], palette[j][2], t);

    // Bitwise conversion to Hex string
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
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
    const dr = coordsys === "names" ? "[str]" : "[ º ]";
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
        const xCoord = coordsys === "gal" ? d.GLON : d.RA_ICRS;
        const yCoord = coordsys === "gal" ? d.GLAT : d.DE_ICRS;

        const nameStyle = d.badoc === "y" ? 'style="color:red;"' : "";
        // const btitle = d.badoc === "y" ? `${d.name.slice(0, 20)} *` : `${d.name.slice(0, 20)}`;

        tableBody += `
            <tr data-index="${i}">
                <td class="left name-col">
                  <a href="../_clusters/${d.fname}" target="_blank" title="${d.fnames}" ${nameStyle}>
                    ${d.Name}
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
                <td class="center uti-cell" style="--uti-bg:${utiColor(d.uti)};">
                  <span style="color:black;">
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
            `"${d.Name}"`, // Quote the name to handle commas/spaces
            d.RA_ICRS,
            d.DE_ICRS,
            d.GLON,
            d.GLAT,
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
setupCoordToggle({ buttonId: 'coordToggle', inputId: 'search-bar', includeName: true });

// Add event listener for the Search button
document.getElementById("searchButton").addEventListener("click", updateDisplay);


// Allow Enter key to trigger search from any input field
document.querySelectorAll(".search-trigger").forEach(el => {
    el.addEventListener("keypress", (e) => {
        if (e.key === "Enter") updateDisplay();
    });
});


const rangeToNaNCheckbox = {
    feh: "hide_feh_nans",
    dist: "hide_dist_nans",
    av: "hide_av_nans",
    dav: "hide_dav_nans",
    age: "hide_age_nans",
    mass: "hide_mass_nans",
    bf: "hide_bf_nans",
    bss: "hide_bss_nans",
};

function applyUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    let hasParams = false;

    // Track which ranges appear in the URL
    const activeRanges = new Set();

    params.forEach((value, key) => {
        const field = document.querySelector(`[name="${key}"]`);
        if (!field) return;

        // Detect range parameters (e.g. feh_min, feh_max)
        const match = key.match(/^(.+?)_(min|max)$/);
        if (match) {
            activeRanges.add(match[1]);
        }

        if (field.type === "number") {
            field.valueAsNumber = Number(value);
        } else if (field.type === "checkbox") {
            field.checked = value === "true" || value === "1";
        } else {
            field.value = value;
        }

        hasParams = true;
    });

    // Enable corresponding "hide NaN" checkboxes
    activeRanges.forEach(range => {
        const checkboxId = rangeToNaNCheckbox[range];
        if (!checkboxId) return;

        const checkbox = document.getElementById(checkboxId);
        if (checkbox) checkbox.checked = true;
    });

    return hasParams;
}


// Apply URL parameters and trigger search if present
const hasUrlParams = applyUrlParameters();
if (hasUrlParams) {
    updateDisplay();
}