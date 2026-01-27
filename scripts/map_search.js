import { loadCompressedCsv } from "./loadCSV.js";
import { setupCoordToggle } from './toggleButton.js';
import { generalSearch } from "./search.js";
import { stringDifference } from './stringDifference.js';
import { enableTableSorting } from './table-sorting.js';

// ===== CONSTANTS =====
const DEFAULTS = {
  dist: { min: 0, max: 1e6 },
  av: { min: 0, max: 100 },
  dav: { min: 0, max: 100 },
  age: { min: 0, max: 100000 },
  feh: { min: -10, max: 10 },
  mass: { min: 0, max: 1e7 },
  bf: { min: 0, max: 1.01 },
  bss: { min: 0, max: 1e6 },
  n50: { min: 0, max: 100000 },
  Pdup: { min: 0, max: 1.01 },
  uti: { min: 0, max: 1.01 },
  Nmax: 100
};

const UTI_PALETTE = [
  [223, 165, 179], [243, 187, 181], [252, 214, 194],
  [254, 239, 210], [254, 254, 232], [237, 247, 211],
  [212, 236, 201], [181, 222, 195], [165, 202, 185]
];

const RANGE_TO_NAN_CHECKBOX = {
  feh: "hide_feh_nans",
  dist: "hide_dist_nans",
  av: "hide_av_nans",
  dav: "hide_dav_nans",
  age: "hide_age_nans",
  mass: "hide_mass_nans",
  bf: "hide_bf_nans",
  bss: "hide_bss_nans",
};

// ===== CACHED ELEMENTS =====
const elements = {
  plotDiv: document.getElementById("search-box"),
  searchBar: document.getElementById("search-bar"),
  searchButton: document.getElementById("searchButton"),
  tableResults: document.getElementById("table_results"),
  mapDetails: document.querySelector("details")
};

// ===== STATE =====
let cachedPoints = [];
let baseData = [];

// ===== INITIALIZATION =====
async function initialize() {
  try {
    setupTableContainer();
    baseData = await loadAndNormalizeData();
    setupEventListeners();
    
    const hasUrlParams = applyUrlParameters();
    if (hasUrlParams) {
      await updateDisplay();
    }
  } catch (error) {
    console.error("Initialization failed:", error);
    showError("Failed to load data. Please refresh the page.");
  }
}

function setupTableContainer() {
  const tableContainer = document.createElement("div");
  tableContainer.id = "resultsTable";
  Object.assign(tableContainer.style, {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  });
  elements.tableResults.appendChild(tableContainer);
}

async function loadAndNormalizeData() {
  const data = await loadCompressedCsv();
  
  return data.map(d => {
    const fnames = d.fnames || "";
    const num = v => (v === "" || v == null) ? NaN : +v;
    
    return {
      Name: d.Name,
      RA_ICRS: +d.RA_ICRS,
      DE_ICRS: +d.DE_ICRS,
      GLON: +d.GLON,
      GLAT: +d.GLAT,
      fname: fnames.split(";")[0],
      fnames,
      dist_kpc: num(d.dist),
      av: num(d.av),
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
}

// ===== INPUT HANDLING =====
function getInputValues() {
  const getValue = id => document.getElementById(id)?.value;
  const getChecked = id => document.getElementById(id)?.checked || false;
  
  return {
    coordsys: window.coordsys,
    search: getValue("search-bar") || "",
    Nmax: getValue("Nmax"),
    filterOCs: getChecked("filterOCs"),
    distmin: getValue("dist_min"),
    distmax: getValue("dist_max"),
    hide_dist_nans: getChecked("hide_dist_nans"),
    avmin: getValue("av_min"),
    avmax: getValue("av_max"),
    hide_av_nans: getChecked("hide_av_nans"),
    davmin: getValue("dav_min"),
    davmax: getValue("dav_max"),
    hide_dav_nans: getChecked("hide_dav_nans"),
    agemin: getValue("age_min"),
    agemax: getValue("age_max"),
    hide_age_nans: getChecked("hide_age_nans"),
    fehmin: getValue("feh_min"),
    fehmax: getValue("feh_max"),
    hide_feh_nans: getChecked("hide_feh_nans"),
    massmin: getValue("mass_min"),
    massmax: getValue("mass_max"),
    hide_mass_nans: getChecked("hide_mass_nans"),
    bfmin: getValue("bf_min"),
    bfmax: getValue("bf_max"),
    hide_bf_nans: getChecked("hide_bf_nans"),
    bssmin: getValue("bss_min"),
    bssmax: getValue("bss_max"),
    hide_bss_nans: getChecked("hide_bss_nans"),
    n50min: getValue("n50_min"),
    n50max: getValue("n50_max"),
    Pdupmin: getValue("Pdup_min"),
    Pdupmax: getValue("Pdup_max"),
    utimin: getValue("uti_min"),
    utimax: getValue("uti_max"),
  };
}

// ===== FILTERING LOGIC =====
function parseWithDefault(value, defaultValue) {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

function inRange(hideNans, x, min, max) {
  return Number.isNaN(x) ? !hideNans : (x >= min && x <= max);
}

function getFilteredPoints() {
  const inputs = getInputValues();
  const query = inputs.search.trim();
  
  // Parse all filter values
  const filters = {
    dist: {
      min: parseWithDefault(inputs.distmin, DEFAULTS.dist.min),
      max: parseWithDefault(inputs.distmax, DEFAULTS.dist.max),
      hideNans: inputs.hide_dist_nans
    },
    av: {
      min: parseWithDefault(inputs.avmin, DEFAULTS.av.min),
      max: parseWithDefault(inputs.avmax, DEFAULTS.av.max),
      hideNans: inputs.hide_av_nans
    },
    dav: {
      min: parseWithDefault(inputs.davmin, DEFAULTS.dav.min),
      max: parseWithDefault(inputs.davmax, DEFAULTS.dav.max),
      hideNans: inputs.hide_dav_nans
    },
    age: {
      min: parseWithDefault(inputs.agemin, DEFAULTS.age.min),
      max: parseWithDefault(inputs.agemax, DEFAULTS.age.max),
      hideNans: inputs.hide_age_nans
    },
    feh: {
      min: parseWithDefault(inputs.fehmin, DEFAULTS.feh.min),
      max: parseWithDefault(inputs.fehmax, DEFAULTS.feh.max),
      hideNans: inputs.hide_feh_nans
    },
    mass: {
      min: parseWithDefault(inputs.massmin, DEFAULTS.mass.min),
      max: parseWithDefault(inputs.massmax, DEFAULTS.mass.max),
      hideNans: inputs.hide_mass_nans
    },
    bf: {
      min: parseWithDefault(inputs.bfmin, DEFAULTS.bf.min),
      max: parseWithDefault(inputs.bfmax, DEFAULTS.bf.max),
      hideNans: inputs.hide_bf_nans
    },
    bss: {
      min: parseWithDefault(inputs.bssmin, DEFAULTS.bss.min),
      max: parseWithDefault(inputs.bssmax, DEFAULTS.bss.max),
      hideNans: inputs.hide_bss_nans
    },
    n50: {
      min: parseWithDefault(inputs.n50min, DEFAULTS.n50.min),
      max: parseWithDefault(inputs.n50max, DEFAULTS.n50.max)
    },
    Pdup: {
      min: parseWithDefault(inputs.Pdupmin, DEFAULTS.Pdup.min),
      max: parseWithDefault(inputs.Pdupmax, DEFAULTS.Pdup.max)
    },
    uti: {
      min: parseWithDefault(inputs.utimin, DEFAULTS.uti.min),
      max: parseWithDefault(inputs.utimax, DEFAULTS.uti.max)
    }
  };
  
  const Nmax = parseWithDefault(inputs.Nmax, DEFAULTS.Nmax);

  // Add distance property and filter in one pass
  const results = baseData
    .map(d => ({
      ...d,
      distance: !query ? NaN : generalSearch(d, inputs.coordsys, query)
    }))
    .filter(d => {
      // Range filters with NaN handling
      if (!inRange(filters.dist.hideNans, d.dist_kpc, filters.dist.min, filters.dist.max)) return false;
      if (!inRange(filters.av.hideNans, d.av, filters.av.min, filters.av.max)) return false;
      if (!inRange(filters.dav.hideNans, d.dav, filters.dav.min, filters.dav.max)) return false;
      if (!inRange(filters.age.hideNans, d.age, filters.age.min, filters.age.max)) return false;
      if (!inRange(filters.feh.hideNans, d.met, filters.feh.min, filters.feh.max)) return false;
      if (!inRange(filters.mass.hideNans, d.mass, filters.mass.min, filters.mass.max)) return false;
      if (!inRange(filters.bf.hideNans, d.bfrac, filters.bf.min, filters.bf.max)) return false;
      if (!inRange(filters.bss.hideNans, d.bss, filters.bss.min, filters.bss.max)) return false;
      
      // Simple numeric filters
      if (d.membs < filters.n50.min || d.membs > filters.n50.max) return false;
      if (d.pdup < filters.Pdup.min || d.pdup > filters.Pdup.max) return false;
      if (d.uti < filters.uti.min || d.uti > filters.uti.max) return false;
      
      // Quality filter
      if (inputs.filterOCs && d.badoc !== "n") return false;
      
      // Distance validation based on coordinate system
      if (inputs.coordsys === "names") {
        if ((Number.isFinite(d.distance) && d.distance > 1) || 
            !Number.isFinite(d.distance) && !Number.isNaN(d.distance)) {
          return false;
        }
      } else {
        if (!Number.isFinite(d.distance) && !Number.isNaN(d.distance)) return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      if (Number.isNaN(a.distance)) return 1;
      if (Number.isNaN(b.distance)) return -1;
      return a.distance - b.distance;
    });

  return {
    points: results.slice(0, Nmax),
    totalCount: results.length
  };
}

// ===== UI RENDERING =====
function utiColor(v) {
  const x = Math.min(1, Math.max(0, v));
  const scaled = x * (UTI_PALETTE.length - 1);
  const i = Math.floor(scaled);
  const j = Math.min(i + 1, UTI_PALETTE.length - 1);
  const t = scaled - i;

  const lerp = (start, end, factor) => Math.round(start + factor * (end - start));
  const r = lerp(UTI_PALETTE[i][0], UTI_PALETTE[j][0], t);
  const g = lerp(UTI_PALETTE[i][1], UTI_PALETTE[j][1], t);
  const b = lerp(UTI_PALETTE[i][2], UTI_PALETTE[j][2], t);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function buildTable(points, totalCount) {
  const tableContainer = document.getElementById("resultsTable");
  if (!tableContainer) return;
  
  if (!points || points.length === 0) {
    tableContainer.innerHTML = "";
    return;
  }

  const coordsys = window.coordsys;
  const width = elements.plotDiv.offsetWidth;
  const dr = coordsys === "names" ? "[str]" : "[ º ]";
  const coord1 = coordsys === "gal" ? "LON" : "RA";
  const coord2 = coordsys === "gal" ? "LAT" : "DEC";

  const tableRows = points.map((d, i) => {
    const xCoord = coordsys === "gal" ? d.GLON : d.RA_ICRS;
    const yCoord = coordsys === "gal" ? d.GLAT : d.DE_ICRS;
    const nameStyle = d.badoc === "y" ? 'style="color:red;"' : "";
    
    return `
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
          <span style="color:black;">${d.uti.toFixed(2)}</span>
        </td>
      </tr>`;
  }).join('');

  tableContainer.innerHTML = `
    <div style="width:${width}px; display:flex; justify-content:center; align-items:center; margin-bottom:4px; font-weight:bold; color:#666; position:relative;">
      <span style="text-align:center; width:100%;">
        Showing ${points.length} objects (${totalCount} found)
      </span>
      <div id="download-container" style="position:absolute; right:0;">
        <button id="downloadCSV"
          title="Download table as a CSV file"
          style="background:none; border:none; color:blue; cursor:pointer; font-size:18px;">
          📥
        </button>
      </div>
    </div>
    <table id="resultsTableData" class="results-table" style="width:${width}px">
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
      </thead>
      <tbody>${tableRows}</tbody>
    </table>
  `;
}

// ===== CSV EXPORT =====
function downloadCSV() {
  if (!cachedPoints || cachedPoints.length === 0) {
    console.warn("No data to download.");
    return;
  }

  const headers = ["Name", "RA", "DEC", "GLON", "GLAT", "Dist", "Av", "DAv", "Age", "FeH", "Mass", "BF", "BSS", "N_50", "P_dup", "UTI", "bad_oc"];
  const rows = cachedPoints.map(d => [
    `"${d.Name}"`,
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
  ].join(","));
  
  const csvContent = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = "ucc_clusters_table.csv";
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ===== MAP INTEGRATION =====
async function updateMapIfOpen(points, table) {
  if (elements.mapDetails?.open) {
    const module = await import("./mapPlotter.js");
    module.drawMap(points, table);
  }
}

// ===== MAIN UPDATE FUNCTION =====
async function updateDisplay() {
  try {
    const { points, totalCount } = getFilteredPoints();
    cachedPoints = points;
    
    buildTable(points, totalCount);
    
    const table = document.getElementById("resultsTable");
    if (table) {
      enableTableSorting(table);
    }
    
    await updateMapIfOpen(points, table);
    
    // Attach download listener (button is recreated each time in buildTable)
    if (points?.length > 0) {
      const downloadButton = document.getElementById('downloadCSV');
      if (downloadButton) {
        downloadButton.addEventListener('click', downloadCSV);
      }
    }
  } catch (error) {
    console.error("Update display failed:", error);
    showError("Failed to update results. Please try again.");
  }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Search button
  elements.searchButton?.addEventListener("click", updateDisplay);
  
  // Enter key triggers
  document.querySelectorAll(".search-trigger").forEach(el => {
    el.addEventListener("keypress", (e) => {
      if (e.key === "Enter") updateDisplay();
    });
  });
  
  // Map toggle
  elements.mapDetails?.addEventListener("toggle", async (event) => {
    if (event.target.open) {
      const table = document.getElementById("resultsTable");
      await updateMapIfOpen(cachedPoints, table);
    }
  });
  
  // Coordinate system toggle
  setupCoordToggle({ 
    buttonId: 'coordToggle', 
    inputId: 'search-bar', 
    includeName: true 
  });
}

// ===== URL PARAMETERS =====
function applyUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  if (params.size === 0) return false;

  const activeRanges = new Set();

  params.forEach((value, key) => {
    const field = document.querySelector(`[name="${key}"]`);
    if (!field) return;

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
  });

  // Enable corresponding NaN checkboxes
  activeRanges.forEach(range => {
    const checkboxId = RANGE_TO_NAN_CHECKBOX[range];
    const checkbox = checkboxId ? document.getElementById(checkboxId) : null;
    if (checkbox) checkbox.checked = true;
  });

  return true;
}

// ===== ERROR HANDLING =====
function showError(message) {
  const tableContainer = document.getElementById("resultsTable");
  if (tableContainer) {
    tableContainer.innerHTML = `
      <div style="color: red; padding: 20px; text-align: center;">
        ${message}
      </div>
    `;
  }
}

// ===== START APPLICATION =====
initialize();
