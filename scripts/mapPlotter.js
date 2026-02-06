// ============================================================================
// GALACTIC MAP VISUALIZATION
// ============================================================================
// Visualizes star clusters in Galactic coordinates with interactive pan/zoom

import { utiColor, UTI_PALETTE } from './search-utils.js';
const SVG_NS = "http://www.w3.org/2000/svg";

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const CONFIG = {
  // Scaling ranges
  memberCount: { min: 5, max: 1000 },
  radius: { min: 5, max: 50 },
  
  // Galactic coordinates (Sun position)
  sun: { x: -8, y: 0 }, // kpc
  
  // Grid settings
  grid: {
    range: 15,      // kpc
    step: {
      min: 0.1,     // kpc at close zoom
      max: 2.5      // kpc at far zoom
    },
    visibility: {
      spanMin: 1,   // start increasing grid spacing
      spanMax: 10   // fully coarse grid
    }
  },
  
  // Initial view
  initialRange: 2,  // kpc
  
  // Zoom limits
  zoom: {
    min: 0.1,       // Most zoomed out (10x initial view)
    max: 10         // Most zoomed in (10x initial view)
  },
  
  // Interaction delays (ms)
  hoverDelay: {
    small: 100,     // < 500 points
    medium: 200,    // 500-2000 points
    large: 500      // > 2000 points
  },
  
  // Performance thresholds
  tooltipThreshold: 5000,  // Disable tooltips above this
  hoverThreshold: 1000     // Disable row hover above this
};

// // UTI (Unassigned Target Intensity) color palette
// const UTI_PALETTE = [
//   [223, 165, 179], [243, 187, 181], [252, 214, 194],
//   [254, 239, 210], [254, 254, 232], [237, 247, 211],
//   [212, 236, 201], [181, 222, 195], [165, 202, 185]
// ];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Create an SVG element with attributes
function createNode(type, attrs = {}, parent = null) {
  const el = document.createElementNS(SVG_NS, type);
  for (let [key, value] of Object.entries(attrs)) {
    if (value !== null && value !== undefined) {
      el.setAttribute(key, value);
    }
  }
  if (parent) parent.appendChild(el);
  return el;
}

// Linear interpolation between two values
function lerp(start, end, factor) {
  return Math.round(start + factor * (end - start));
}

// Scale member count to circle radius
function scaleLinear(memberCount) {
  const { min: nMin, max: nMax } = CONFIG.memberCount;
  const { min: rMin, max: rMax } = CONFIG.radius;
  
  if (memberCount <= nMin) return rMin;
  if (memberCount >= nMax) return rMax;
  
  return rMin + (memberCount - nMin) * (rMax - rMin) / (nMax - nMin);
}

// // Map UTI value to color using palette
// function utiColor(value) {
//   const normalized = Math.min(1, Math.max(0, value));
//   const scaled = normalized * (UTI_PALETTE.length - 1);
//   const i = Math.floor(scaled);
//   const j = Math.min(i + 1, UTI_PALETTE.length - 1);
//   const t = scaled - i;

//   const r = lerp(UTI_PALETTE[i][0], UTI_PALETTE[j][0], t);
//   const g = lerp(UTI_PALETTE[i][1], UTI_PALETTE[j][1], t);
//   const b = lerp(UTI_PALETTE[i][2], UTI_PALETTE[j][2], t);

//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// }

// Calculate grid step based on zoom level
function getGridStep(zoomLevel) {
  const visibleSpan = (2 * CONFIG.initialRange) / zoomLevel;
  const { spanMin, spanMax } = CONFIG.grid.visibility;
  const { min: stepMin, max: stepMax } = CONFIG.grid.step;

  const t = Math.min(1, Math.max(0, (visibleSpan - spanMin) / (spanMax - spanMin)));
  return stepMin + t * (stepMax - stepMin);
}

/**
 * Convert Galactic coordinates (lon, lat, distance) to Cartesian (x, y)
 * Sun is at X_GC = sun.x kpc, Y_GC = sun.y kpc
 * l = 0 points toward Galactic Center from Sun
 */
function galacticToCartesian(lon, lat, distPc) {
  const lonRad = lon * Math.PI / 180;
  const latRad = lat * Math.PI / 180;
  
  // Position relative to Sun (convert pc to kpc)
  const distKpc = distPc / 1000;
  const xSun = distKpc * Math.cos(latRad) * Math.cos(lonRad);
  const ySun = distKpc * Math.cos(latRad) * Math.sin(lonRad);
  
  // Convert to Galactic Center coordinates
  return {
    x: xSun + CONFIG.sun.x,
    y: ySun + CONFIG.sun.y
  };
}

// ============================================================================
// COORDINATE SYSTEM
// ============================================================================

// Create scale functions for coordinate transformation
function createScaleFunctions(width, height) {
  const scale = Math.min(width, height) / (2 * CONFIG.initialRange) * 0.9;
  
  return {
    x: (x) => width / 2 + (x - CONFIG.sun.x) * scale,
    y: (y) => height / 2 - (y - CONFIG.sun.y) * scale,
    scale
  };
}

// ============================================================================
// DRAWING FUNCTIONS
// ============================================================================

// Draw grid lines and labels
function drawGrid(parent, xScale, yScale, transform) {
  // Remove old grid elements
  parent.querySelectorAll(".grid-line, .grid-label").forEach(el => el.remove());

  const gridStep = getGridStep(transform.k);
  const { range } = CONFIG.grid;

  // Get or create grid group (below all other elements)
  let gridGroup = parent.querySelector(".grid-group");
  if (!gridGroup) {
    gridGroup = createNode("g", { class: "grid-group" });
    parent.insertBefore(gridGroup, parent.firstChild);
  } else {
    gridGroup.innerHTML = "";
  }

  // Draw vertical grid lines (constant X)
  for (let x = -range; x <= range; x += gridStep) {
    if (Math.abs(x) < 0.01) continue; // Skip axis
    
    createNode("line", {
      x1: xScale(x), y1: yScale(-range),
      x2: xScale(x), y2: yScale(range),
      stroke: "#ddd",
      "stroke-width": 2.5,
      class: "grid-line"
    }, gridGroup);
    
    // Add labels
    if (Math.abs(x) >= gridStep * 0.9) {
      const label = createNode("text", {
        x: xScale(x),
        y: yScale(0) + 15 / transform.k,
        "text-anchor": "middle",
        "font-size": `${11 / transform.k}px`,
        fill: "#666",
        class: "grid-label"
      }, gridGroup);
      label.textContent = x.toFixed(1);
    }
  }

  // Draw horizontal grid lines (constant Y)
  for (let y = -range; y <= range; y += gridStep) {
    if (Math.abs(y) < 0.01) continue; // Skip axis
    
    createNode("line", {
      x1: xScale(-range), y1: yScale(y),
      x2: xScale(range), y2: yScale(y),
      stroke: "#ddd",
      "stroke-width": 2.5,
      class: "grid-line"
    }, gridGroup);
    
    // Add labels
    if (Math.abs(y) >= gridStep * 0.9) {
      const label = createNode("text", {
        x: xScale(0) - 15 / transform.k,
        y: yScale(y) + 4 / transform.k,
        "text-anchor": "end",
        "font-size": `${11 / transform.k}px`,
        fill: "#666",
        class: "grid-label"
      }, gridGroup);
      label.textContent = y.toFixed(1);
    }
  }
}

// Draw coordinate axes
function drawAxes(axisGroup, xScale, yScale, transform) {
  axisGroup.innerHTML = "";
  const { range } = CONFIG.grid;
  
  // X-axis (vertical line at x=0)
  createNode("line", {
    x1: xScale(0), y1: yScale(-range),
    x2: xScale(0), y2: yScale(range),
    stroke: "#666",
    "stroke-width": 3 / transform.k,
    class: "axis-line"
  }, axisGroup);
  
  // Y-axis (horizontal line at y=0)
  createNode("line", {
    x1: xScale(-range), y1: yScale(0),
    x2: xScale(range), y2: yScale(0),
    stroke: "#666",
    "stroke-width": 3 / transform.k,
    class: "axis-line"
  }, axisGroup);
}

// Create axis labels
function createAxisLabels(svg, width, height) {
  createNode("text", {
    x: width / 2,
    y: height - 5,
    "text-anchor": "middle",
    "font-size": "13px",
    fill: "#000",
    "font-weight": "bold"
  }, svg).textContent = "X [kpc]";

  createNode("text", {
    x: 15,
    y: height / 2,
    "text-anchor": "middle",
    "font-size": "13px",
    fill: "#000",
    "font-weight": "bold",
    transform: `rotate(-90, 15, ${height / 2})`
  }, svg).textContent = "Y [kpc]";
}

// Create reference markers (Sun and Galactic Center)
function createMarkers(parent, xScale, yScale) {
  // Sun marker
  const sunMarker = createNode("circle", {
    cx: xScale(CONFIG.sun.x),
    cy: yScale(CONFIG.sun.y),
    r: 6,
    fill: "gold",
    stroke: "orange",
    "stroke-width": 2
  }, parent);

  // Galactic Center marker
  const gcMarker = createNode("circle", {
    cx: xScale(0),
    cy: yScale(0),
    r: 6,
    fill: "red",
    stroke: "darkred",
    "stroke-width": 2
  }, parent);

  // Galactic Center label
  const gcLabel = createNode("text", {
    x: xScale(0) - 10,
    y: yScale(0) - 8,
    "text-anchor": "end",
    "font-size": "12px",
    fill: "#000",
    "font-weight": "bold"
  }, parent);
  gcLabel.textContent = "GC";

  return { sunMarker, gcMarker, gcLabel };
}

// Create tooltip element
function createTooltip(container) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  Object.assign(tooltip.style, {
    position: "absolute",
    visibility: "hidden",
    padding: "8px",
    background: "#fff",
    border: "1px solid #333",
    borderRadius: "4px",
    pointerEvents: "none"
  });
  container.appendChild(tooltip);
  return tooltip;
}

// ============================================================================
// INTERACTION HANDLERS
// ============================================================================

// Setup zoom functionality
function setupZoom(svg, transform, onZoom) {
  svg.addEventListener("wheel", (e) => {
    e.preventDefault();
    
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const oldK = transform.k;
    transform.k = Math.max(
      CONFIG.zoom.min,
      Math.min(CONFIG.zoom.max, transform.k * scaleFactor)
    );
    
    if (transform.k !== oldK) {
      const rect = svg.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      transform.x = mx - (mx - transform.x) * (transform.k / oldK);
      transform.y = my - (my - transform.y) * (transform.k / oldK);
      onZoom();
    }
  }, { passive: false });
}

// Setup pan functionality
function setupPan(svg, transform, onPan) {
  let isDragging = false;
  let start = { x: 0, y: 0 };

  svg.addEventListener("mousedown", (e) => {
    isDragging = true;
    start = {
      x: e.clientX - transform.x,
      y: e.clientY - transform.y
    };
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    transform.x = e.clientX - start.x;
    transform.y = e.clientY - start.y;
    onPan();
  });
}

// Setup tooltip interactions for data points
function setupTooltips(circle, data, tooltip, container) {
  circle.addEventListener("mouseover", () => {
    tooltip.innerHTML = `
      <strong>${data.Name}</strong><br>
      X_GC: ${data.x.toFixed(2)} kpc<br>
      Y_GC: ${data.y.toFixed(2)} kpc<br>
      D: ${data.dist_plx_pc} pc<br>
      N_50: ${data.membs}
    `;
    tooltip.style.visibility = "visible";
  });

  circle.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tooltip.style.left = `${x + 10}px`;
    tooltip.style.top = `${y + 10}px`;
  });

  circle.addEventListener("mouseout", () => {
    tooltip.style.visibility = "hidden";
  });

  circle.addEventListener("click", () => {
    window.open(`https://ucc.ar/_clusters/${data.fname}`, "_blank");
  });
}

// Setup table row hover interactions
function setupTableHover(table, circleElements, getTransform) {
  let hoverTimeout = null;
  
  // Determine delay based on dataset size
  const count = circleElements.length;
  const delay = count > 2000 ? CONFIG.hoverDelay.large :
                count > 500 ? CONFIG.hoverDelay.medium :
                CONFIG.hoverDelay.small;

  // Helper to reset all circles
  const resetCircles = () => {
    circleElements.forEach(c => {
      if (c && c.el) {
        c.el.style.opacity = "0.5";
        c.el.style.stroke = "black";
        c.el.setAttribute("stroke-width", "1px");
      }
    });
  };

  // Helper to highlight a circle
  const highlightCircle = (index) => {
    const target = circleElements[index];
    if (!target) return;
    
    target.el.parentElement.appendChild(target.el); // Bring to front
    target.el.style.opacity = "0.75";
    target.el.style.stroke = "cyan";
    target.el.setAttribute("stroke-width", "5px");
  };

  table.addEventListener("mouseover", (e) => {
    const row = e.target.closest("tr[data-index]");
    if (!row) return;
    
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      const idx = +row.dataset.index;
      resetCircles();
      highlightCircle(idx);
    }, delay);
  });

  table.addEventListener("mouseout", (e) => {
    const row = e.target.closest("tr[data-index]");
    if (!row) return;
    
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      resetCircles();
    }, delay);
  });
}

// ============================================================================
// MAIN DRAW FUNCTION
// ============================================================================

/**
 * Draw the galactic map visualization
 * @param {Array} points - Array of cluster data objects
 * @param {HTMLElement} table - Optional table element for row hover interaction
 */
export function drawMap(points, table) {
  // Get container element
  const plotDiv = document.getElementById("map_plot") || 
                  document.getElementById("search_map");
  if (!plotDiv) return;
  
  // Setup dimensions
  const width = plotDiv.offsetWidth;
  const height = width / 2;

  // Clear container
  plotDiv.style.position = "relative";
  plotDiv.innerHTML = "";

  // Validate input
  if (!points || points.length === 0) return;

  // Create SVG
  const svg = createNode("svg", { width, height }, plotDiv);
  svg.style.userSelect = "none";

  // Create main group for transformations
  const g = createNode("g", {}, svg);

  // Create axis group (won't be cleared during updates)
  const axisGroup = createNode("g", { class: "axis-group" }, g);

  // Convert points to Cartesian coordinates
  const cartesianPoints = points.map(d => ({
    ...d,
    ...galacticToCartesian(
      parseFloat(d.GLON),
      parseFloat(d.GLAT),
      d.dist_plx_pc
    )
  }));

  // Create coordinate scale functions
  const { x: xScale, y: yScale } = createScaleFunctions(width, height);

  // Initialize transform state
  const transform = { x: 0, y: 0, k: 1 };

  // Create UI elements
  createAxisLabels(svg, width, height);
  const markers = createMarkers(g, xScale, yScale);
  const tooltip = createTooltip(plotDiv);

  // Update function for zoom/pan changes
  const updateTransform = () => {
    g.setAttribute("transform", 
      `translate(${transform.x}, ${transform.y}) scale(${transform.k})`
    );
    
    drawAxes(axisGroup, xScale, yScale, transform);
    
    // Update marker sizes
    const markerSize = 6 / transform.k;
    const strokeWidth = 2 / transform.k;
    
    markers.sunMarker.setAttribute("r", markerSize);
    markers.sunMarker.setAttribute("stroke-width", strokeWidth);
    markers.gcMarker.setAttribute("r", markerSize);
    markers.gcMarker.setAttribute("stroke-width", strokeWidth);
    
    markers.gcLabel.setAttribute("font-size", `${12 / transform.k}px`);
    markers.gcLabel.setAttribute("x", xScale(0) - 10 / transform.k);
    markers.gcLabel.setAttribute("y", yScale(0) - 8 / transform.k);
  };

  const handleZoom = () => {
    drawGrid(g, xScale, yScale, transform);
    updateTransform();
  };

  // Initial render
  drawGrid(g, xScale, yScale, transform);
  drawAxes(axisGroup, xScale, yScale, transform);

  // Setup interactions
  setupZoom(svg, transform, handleZoom);
  setupPan(svg, transform, updateTransform);

  // Calculate colors
  const colors = points.map(d => utiColor(d.uti));

  // Draw data points
  const circleElements = [];
  const enableTooltips = cartesianPoints.length < CONFIG.tooltipThreshold;

  cartesianPoints.forEach((d, i) => {
    const cx = xScale(d.x);
    const cy = yScale(d.y);
    const r = scaleLinear(d.membs);

    const circle = createNode("circle", {
      cx, cy, r,
      fill: colors[i],
      stroke: "black",
      opacity: 0.5,
      cursor: "pointer"
    }, g);

    circleElements[i] = { el: circle, baseR: r, membs: d.membs };

    if (enableTooltips) {
      setupTooltips(circle, d, tooltip, plotDiv);
    }
  });

  // Setup table hover if applicable
  if (table && circleElements.length < CONFIG.hoverThreshold) {
    setupTableHover(table, circleElements, () => transform);
  }
}