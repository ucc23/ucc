// ============================================================================
// GALACTIC MAP VISUALIZATION - VIEWPORT CULLING OPTIMIZED
// ============================================================================
// Visualizes star clusters in Galactic coordinates with interactive pan/zoom
// Optimized: Only renders clusters visible in current viewport
// Fixed: XSS vulnerabilities, memory leaks, performance issues, accessibility

import { CONFIG, UTI_PALETTE, utiColor, galacticToCartesian } from './search-utils.js';

const SVG_NS = "http://www.w3.org/2000/svg";

// ============================================================================
// CONFIGURATION EXTENSIONS
// ============================================================================

const UI_CONFIG = {
  markerSize: 6,
  markerStrokeWidth: 2,
  axisStrokeWidth: 3,
  gridStrokeWidth: 2.5,
  gridLabelFontSize: 11,
  axisLabelFontSize: 13,
  gcLabelFontSize: 12,
  tooltipOffset: 10,
  focusRingWidth: 3,
  hoverStrokeWidth: 5,
  normalStrokeWidth: 1,
  viewportUpdateDelay: 150, // ms delay before re-rendering visible points
  maxRenderedPoints: 1000 // maximum number of points to render at once
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create an SVG element with attributes
 * @param {string} type - SVG element type
 * @param {Object} attrs - Attribute key-value pairs
 * @param {SVGElement} parent - Optional parent element
 * @returns {SVGElement}
 */
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

/**
 * Create a safe HTML element with text content (prevents XSS)
 * @param {string} tag - HTML tag name
 * @param {string} text - Text content
 * @param {string} className - Optional CSS class
 * @returns {HTMLElement}
 */
function createSafeElement(tag, text, className = '') {
  const el = document.createElement(tag);
  el.textContent = String(text);
  if (className) el.className = className;
  return el;
}

/**
 * Safely append multiple elements to a parent
 * @param {HTMLElement} parent - Parent element
 * @param {...HTMLElement} children - Child elements
 */
function appendChildren(parent, ...children) {
  children.forEach(child => {
    if (child instanceof Node) {
      parent.appendChild(child);
    }
  });
}

/**
 * Linear interpolation between two values
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} factor - Interpolation factor (0-1)
 * @returns {number}
 */
function lerp(start, end, factor) {
  return Math.round(start + factor * (end - start));
}

/**
 * Scale member count to circle radius using linear interpolation
 * @param {number} memberCount - Number of cluster members
 * @returns {number} Radius in pixels
 */
function scaleLinear(memberCount) {
  const { min: nMin, max: nMax } = CONFIG.memberCount;
  const { min: rMin, max: rMax } = CONFIG.radius;
  
  if (memberCount <= nMin) return rMin;
  if (memberCount >= nMax) return rMax;
  
  return rMin + (memberCount - nMin) * (rMax - rMin) / (nMax - nMin);
}

/**
 * Calculate grid step based on zoom level
 * @param {number} zoomLevel - Current zoom scale factor
 * @returns {number} Grid step size
 */
function getGridStep(zoomLevel) {
  const visibleSpan = (2 * CONFIG.initialRange) / zoomLevel;
  const { spanMin, spanMax } = CONFIG.grid.visibility;
  const { min: stepMin, max: stepMax } = CONFIG.grid.step;

  // Avoid division by zero
  if (spanMax === spanMin) return stepMin;

  const t = Math.min(1, Math.max(0, (visibleSpan - spanMin) / (spanMax - spanMin)));
  return stepMin + t * (stepMax - stepMin);
}

/**
 * Debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function calls using requestAnimationFrame
 * @param {Function} func - Function to throttle
 * @returns {Function}
 */
function rafThrottle(func) {
  let rafId = null;
  return function throttled(...args) {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      func(...args);
      rafId = null;
    });
  };
}

/**
 * Calculate viewport bounds in data coordinates
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @param {Object} transform - Current transform state
 * @param {number} scale - Base scale factor
 * @returns {Object} Viewport bounds {xMin, xMax, yMin, yMax}
 */
function getViewportBounds(width, height, transform, scale) {
  // Calculate data space extent for current viewport
  const invK = 1 / transform.k;
  
  // Get the data coordinates of viewport corners
  const xMin = (0 - transform.x) * invK / scale - width / 2 / scale + CONFIG.sun.x;
  const xMax = (width - transform.x) * invK / scale - width / 2 / scale + CONFIG.sun.x;
  const yMin = -(height - transform.y) * invK / scale + height / 2 / scale + CONFIG.sun.y;
  const yMax = -(0 - transform.y) * invK / scale + height / 2 / scale + CONFIG.sun.y;
  
  // Add margin for points near edges (based on max possible radius in data units)
  const margin = CONFIG.radius.max / (scale * transform.k);
  
  return {
    xMin: xMin - margin,
    xMax: xMax + margin,
    yMin: yMin - margin,
    yMax: yMax + margin
  };
}

/**
 * Check if a point is within viewport bounds
 * @param {Object} point - Point with x, y coordinates
 * @param {Object} bounds - Viewport bounds
 * @returns {boolean}
 */
function isInViewport(point, bounds) {
  return point.x >= bounds.xMin && point.x <= bounds.xMax &&
         point.y >= bounds.yMin && point.y <= bounds.yMax;
}

// ============================================================================
// COORDINATE SYSTEM
// ============================================================================

/**
 * Create scale functions for coordinate transformation
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @returns {Object} Scale functions and scale factor
 */
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

/**
 * Draw grid lines and labels
 * @param {SVGElement} parent - Parent SVG group
 * @param {Function} xScale - X coordinate scale function
 * @param {Function} yScale - Y coordinate scale function
 * @param {Object} transform - Current transform state
 */
function drawGrid(parent, xScale, yScale, transform) {
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

  const scaledFontSize = UI_CONFIG.gridLabelFontSize / transform.k;
  const scaledStrokeWidth = UI_CONFIG.gridStrokeWidth / transform.k;

  // Draw vertical grid lines (constant X)
  for (let x = -range; x <= range; x += gridStep) {
    if (Math.abs(x) < 0.01) continue; // Skip axis
    
    createNode("line", {
      x1: xScale(x), y1: yScale(-range),
      x2: xScale(x), y2: yScale(range),
      stroke: "#ddd",
      "stroke-width": scaledStrokeWidth,
      class: "grid-line"
    }, gridGroup);
    
    // Add labels
    if (Math.abs(x) >= gridStep * 0.9) {
      const label = createNode("text", {
        x: xScale(x),
        y: yScale(0) + 15 / transform.k,
        "text-anchor": "middle",
        "font-size": `${scaledFontSize}px`,
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
      "stroke-width": scaledStrokeWidth,
      class: "grid-line"
    }, gridGroup);
    
    // Add labels
    if (Math.abs(y) >= gridStep * 0.9) {
      const label = createNode("text", {
        x: xScale(0) - 15 / transform.k,
        y: yScale(y) + 4 / transform.k,
        "text-anchor": "end",
        "font-size": `${scaledFontSize}px`,
        fill: "#666",
        class: "grid-label"
      }, gridGroup);
      label.textContent = y.toFixed(1);
    }
  }
}

/**
 * Draw coordinate axes
 * @param {SVGElement} axisGroup - Axis group element
 * @param {Function} xScale - X coordinate scale function
 * @param {Function} yScale - Y coordinate scale function
 * @param {Object} transform - Current transform state
 */
function drawAxes(axisGroup, xScale, yScale, transform) {
  axisGroup.innerHTML = "";
  const { range } = CONFIG.grid;
  const scaledStrokeWidth = UI_CONFIG.axisStrokeWidth / transform.k;
  
  // X-axis (vertical line at x=0)
  createNode("line", {
    x1: xScale(0), y1: yScale(-range),
    x2: xScale(0), y2: yScale(range),
    stroke: "#666",
    "stroke-width": scaledStrokeWidth,
    class: "axis-line"
  }, axisGroup);
  
  // Y-axis (horizontal line at y=0)
  createNode("line", {
    x1: xScale(-range), y1: yScale(0),
    x2: xScale(range), y2: yScale(0),
    stroke: "#666",
    "stroke-width": scaledStrokeWidth,
    class: "axis-line"
  }, axisGroup);
}

/**
 * Create axis labels
 * @param {SVGElement} svg - SVG element
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 */
function createAxisLabels(svg, width, height) {
  createNode("text", {
    x: width / 2,
    y: height - 5,
    "text-anchor": "middle",
    "font-size": `${UI_CONFIG.axisLabelFontSize}px`,
    fill: "#000",
    "font-weight": "bold"
  }, svg).textContent = "X [kpc]";

  createNode("text", {
    x: 15,
    y: height / 2,
    "text-anchor": "middle",
    "font-size": `${UI_CONFIG.axisLabelFontSize}px`,
    fill: "#000",
    "font-weight": "bold",
    transform: `rotate(-90, 15, ${height / 2})`
  }, svg).textContent = "Y [kpc]";
}

/**
 * Create reference markers (Sun and Galactic Center)
 * @param {SVGElement} parent - Parent SVG group
 * @param {Function} xScale - X coordinate scale function
 * @param {Function} yScale - Y coordinate scale function
 * @returns {Object} Marker elements
 */
function createMarkers(parent, xScale, yScale) {
  // Sun marker
  const sunMarker = createNode("circle", {
    cx: xScale(CONFIG.sun.x),
    cy: yScale(CONFIG.sun.y),
    r: UI_CONFIG.markerSize,
    fill: "gold",
    stroke: "orange",
    "stroke-width": UI_CONFIG.markerStrokeWidth,
    "vector-effect": "non-scaling-stroke",
    role: "img",
    "aria-label": "Sun position"
  }, parent);

  // Galactic Center marker
  const gcMarker = createNode("circle", {
    cx: xScale(0),
    cy: yScale(0),
    r: UI_CONFIG.markerSize,
    fill: "red",
    stroke: "darkred",
    "stroke-width": UI_CONFIG.markerStrokeWidth,
    "vector-effect": "non-scaling-stroke",
    role: "img",
    "aria-label": "Galactic Center"
  }, parent);

  // Galactic Center label
  const gcLabel = createNode("text", {
    x: xScale(0) - 10,
    y: yScale(0) - 8,
    "text-anchor": "end",
    "font-size": `${UI_CONFIG.gcLabelFontSize}px`,
    fill: "#000",
    "font-weight": "bold",
    "aria-hidden": "true"
  }, parent);
  gcLabel.textContent = "GC";

  return { sunMarker, gcMarker, gcLabel };
}

/**
 * Create tooltip element
 * @param {HTMLElement} container - Container element
 * @returns {HTMLElement} Tooltip element
 */
function createTooltip(container) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("aria-live", "polite");
  
  Object.assign(tooltip.style, {
    position: "absolute",
    visibility: "hidden",
    padding: "8px",
    background: "#fff",
    border: "1px solid #333",
    borderRadius: "4px",
    pointerEvents: "none",
    zIndex: "1000"
  });
  
  container.appendChild(tooltip);
  return tooltip;
}

/**
 * Update tooltip content safely (prevents XSS)
 * @param {HTMLElement} tooltip - Tooltip element
 * @param {Object} data - Cluster data
 */
function updateTooltipContent(tooltip, data) {
  // Clear existing content
  tooltip.innerHTML = "";
  
  // Validate and format data
  const name = String(data.Name || 'Unknown');
  const ra = typeof data.RA_ICRS === 'number' ? data.RA_ICRS.toFixed(2) : 'N/A';
  const dec = typeof data.DE_ICRS === 'number' ? data.DE_ICRS.toFixed(2) : 'N/A';
  const distPlx = typeof data.dist_plx_pc === 'number' ? (data.dist_plx_pc / 1000).toFixed(2) : 'N/A';
  const dist = typeof data.dist_kpc === 'number' ? data.dist_kpc.toFixed(2) : 'N/A';
  
  // Build tooltip using safe text nodes
  const title = createSafeElement('strong', name);
  const br1 = document.createElement('br');
  const raText = createSafeElement('span', `RA: ${ra}º`);
  const br2 = document.createElement('br');
  const decText = createSafeElement('span', `DEC: ${dec}º`);
  const br3 = document.createElement('br');
  const distPlxText = createSafeElement('span', `Dist_plx: ${distPlx} kpc`);
  const br4 = document.createElement('br');
  const distText = createSafeElement('span', `Dist: ${dist} kpc`);
  
  appendChildren(tooltip, title, br1, raText, br2, decText, br3, distPlxText, br4, distText);
}

// ============================================================================
// INTERACTION HANDLERS
// ============================================================================

/**
 * Setup zoom functionality
 * @param {SVGElement} svg - SVG element
 * @param {Object} transform - Transform state object
 * @param {Function} onZoom - Zoom callback
 * @returns {Function} Cleanup function
 */
function setupZoom(svg, transform, onZoom) {
  const throttledZoom = rafThrottle(onZoom);
  
  const handleWheel = (e) => {
    e.preventDefault();
    
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const oldK = transform.k;
    transform.k = Math.max(
      CONFIG.zoom.min,
      Math.min(CONFIG.zoom.max, transform.k * scaleFactor)
    );
    
    if (transform.k !== oldK) {
      const rect = svg.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      transform.x = mouseX - (mouseX - transform.x) * (transform.k / oldK);
      transform.y = mouseY - (mouseY - transform.y) * (transform.k / oldK);
      throttledZoom();
    }
  };
  
  svg.addEventListener("wheel", handleWheel, { passive: false });
  
  // Return cleanup function
  return () => {
    svg.removeEventListener("wheel", handleWheel);
  };
}

/**
 * Setup pan functionality
 * @param {SVGElement} svg - SVG element
 * @param {Object} transform - Transform state object
 * @param {Function} onPan - Pan callback
 * @returns {Function} Cleanup function
 */
function setupPan(svg, transform, onPan) {
  let isDragging = false;
  let start = { x: 0, y: 0 };
  const throttledPan = rafThrottle(onPan);

  const handleMouseDown = (e) => {
    isDragging = true;
    start = {
      x: e.clientX - transform.x,
      y: e.clientY - transform.y
    };
    svg.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    isDragging = false;
    svg.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    transform.x = e.clientX - start.x;
    transform.y = e.clientY - start.y;
    throttledPan();
  };

  svg.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mouseup", handleMouseUp);
  window.addEventListener("mousemove", handleMouseMove);
  
  svg.style.cursor = 'grab';
  
  // Return cleanup function
  return () => {
    svg.removeEventListener("mousedown", handleMouseDown);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}

/**
 * Setup keyboard navigation
 * @param {SVGElement} svg - SVG element
 * @param {Object} transform - Transform state object
 * @param {Function} onUpdate - Update callback
 * @returns {Function} Cleanup function
 */
function setupKeyboardNavigation(svg, transform, onUpdate) {
  const panStep = 50;
  const zoomStep = 0.1;
  
  const handleKeyDown = (e) => {
    let updated = false;
    
    switch(e.key) {
      case 'ArrowUp':
        e.preventDefault();
        transform.y += panStep;
        updated = true;
        break;
      case 'ArrowDown':
        e.preventDefault();
        transform.y -= panStep;
        updated = true;
        break;
      case 'ArrowLeft':
        e.preventDefault();
        transform.x += panStep;
        updated = true;
        break;
      case 'ArrowRight':
        e.preventDefault();
        transform.x -= panStep;
        updated = true;
        break;
      case '+':
      case '=':
        e.preventDefault();
        transform.k = Math.min(CONFIG.zoom.max, transform.k * (1 + zoomStep));
        updated = true;
        break;
      case '-':
      case '_':
        e.preventDefault();
        transform.k = Math.max(CONFIG.zoom.min, transform.k * (1 - zoomStep));
        updated = true;
        break;
    }
    
    if (updated) {
      onUpdate();
    }
  };
  
  svg.setAttribute('tabindex', '0');
  svg.setAttribute('role', 'application');
  svg.setAttribute('aria-label', 'Galactic map visualization. Use arrow keys to pan, +/- to zoom.');
  svg.addEventListener('keydown', handleKeyDown);
  
  return () => {
    svg.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Setup tooltip interactions for data points
 * @param {SVGElement} circle - Circle element
 * @param {Object} data - Cluster data
 * @param {HTMLElement} tooltip - Tooltip element
 * @param {HTMLElement} container - Container element
 * @returns {Function} Cleanup function
 */
function setupTooltips(circle, data, tooltip, container) {
  let isActive = false;
  
  const handleMouseOver = () => {
    isActive = true;
    updateTooltipContent(tooltip, data);
    tooltip.style.visibility = "visible";
  };

  const handleMouseMove = (e) => {
    if (!isActive) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tooltip.style.left = `${x + UI_CONFIG.tooltipOffset}px`;
    tooltip.style.top = `${y + UI_CONFIG.tooltipOffset}px`;
  };

  const handleMouseOut = () => {
    isActive = false;
    tooltip.style.visibility = "hidden";
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (data.fname) {
      window.open(`https://ucc.ar/_clusters/${data.fname}`, "_blank", "noopener,noreferrer");
    }
    // Remove focus after click to prevent persistent focus ring
    circle.blur();
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  circle.addEventListener("mouseover", handleMouseOver);
  circle.addEventListener("mousemove", handleMouseMove);
  circle.addEventListener("mouseout", handleMouseOut);
  circle.addEventListener("click", handleClick);
  circle.addEventListener("keydown", handleKeyDown);
  
  // Make circles keyboard accessible
  circle.setAttribute('tabindex', '0');
  circle.setAttribute('role', 'button');
  circle.setAttribute('aria-label', `Star cluster: ${data.Name || 'Unknown'}`);
  
  // Return cleanup function
  return () => {
    circle.removeEventListener("mouseover", handleMouseOver);
    circle.removeEventListener("mousemove", handleMouseMove);
    circle.removeEventListener("mouseout", handleMouseOut);
    circle.removeEventListener("click", handleClick);
    circle.removeEventListener("keydown", handleKeyDown);
  };
}

/**
 * Setup table row hover interactions
 * @param {HTMLElement} table - Table element
 * @param {Array} circleElements - Array of circle element data
 * @param {Function} getTransform - Function to get current transform
 * @returns {Function} Cleanup function
 */
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
        c.el.setAttribute("stroke-width", UI_CONFIG.normalStrokeWidth);
      }
    });
  };

  // Helper to highlight a circle
  const highlightCircle = (index) => {
    const target = circleElements[index];
    if (!target || !target.el) return;
    
    target.el.parentElement.appendChild(target.el); // Bring to front
    target.el.style.opacity = "0.75";
    target.el.style.stroke = "cyan";
    target.el.setAttribute("stroke-width", UI_CONFIG.hoverStrokeWidth);
  };

  const handleMouseOver = (e) => {
    const row = e.target.closest("tr[data-index]");
    if (!row) return;
    
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      const idx = +row.dataset.index;
      resetCircles();
      highlightCircle(idx);
    }, delay);
  };

  const handleMouseOut = (e) => {
    const row = e.target.closest("tr[data-index]");
    if (!row) return;
    
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      resetCircles();
    }, delay);
  };

  table.addEventListener("mouseover", handleMouseOver);
  table.addEventListener("mouseout", handleMouseOut);
  
  // Return cleanup function
  return () => {
    clearTimeout(hoverTimeout);
    table.removeEventListener("mouseover", handleMouseOver);
    table.removeEventListener("mouseout", handleMouseOut);
  };
}

// ============================================================================
// VIEWPORT CULLING - DYNAMIC RENDERING
// ============================================================================

/**
 * Update visible data points based on current viewport
 * @param {SVGElement} dataGroup - Group containing data points
 * @param {Array} points - All data points
 * @param {Array} colors - Precomputed colors
 * @param {Function} xScale - X coordinate scale function
 * @param {Function} yScale - Y coordinate scale function
 * @param {Object} transform - Current transform state
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @param {number} baseScale - Base scale factor
 * @param {HTMLElement} tooltip - Tooltip element
 * @param {HTMLElement} container - Container element
 * @param {Array} cleanupFunctions - Array to collect cleanup functions
 * @param {Array} circleElements - Array to track circle elements
 * @returns {number} Number of rendered points
 */
function updateVisiblePoints(dataGroup, points, colors, xScale, yScale, transform, 
                             width, height, baseScale, tooltip, container, 
                             cleanupFunctions, circleElements) {
  // Calculate viewport bounds in data coordinates
  const bounds = getViewportBounds(width, height, transform, baseScale);
  
  // Track which points are visible with their indices and sizes
  const visiblePoints = [];
  points.forEach((d, i) => {
    if (isInViewport(d, bounds)) {
      visiblePoints.push({
        index: i,
        size: scaleLinear(d.membs || 0)
      });
    }
  });
  
  // Sort by size (largest first) and limit to max rendered points
  visiblePoints.sort((a, b) => b.size - a.size);
  const pointsToRender = visiblePoints.slice(0, UI_CONFIG.maxRenderedPoints);
  
  // Clear existing data points
  dataGroup.innerHTML = "";
  
  // Reset circle elements tracking
  circleElements.length = 0;
  circleElements.length = points.length;
  
  // Enable tooltips if not too many visible points
  const enableTooltips = pointsToRender.length < CONFIG.tooltipThreshold;
  
  // Render selected points (already sorted by size, largest first)
  pointsToRender.forEach(({index: i, size: r}) => {
    const d = points[i];
    
    // Validate required data
    if (typeof d.x !== 'number' || typeof d.y !== 'number') {
      return;
    }
    
    const cx = xScale(d.x);
    const cy = yScale(d.y);

    const circle = createNode("circle", {
      cx, cy, r,
      fill: colors[i],
      stroke: "black",
      "stroke-width": UI_CONFIG.normalStrokeWidth,
      "vector-effect": "non-scaling-stroke",
      opacity: 0.5,
      cursor: "pointer"
    }, dataGroup);

    circle.addEventListener('blur', () => {
      circle.setAttribute('stroke', 'black');
      circle.setAttribute('stroke-width', UI_CONFIG.normalStrokeWidth);
    });

    circleElements[i] = { el: circle, baseR: r, membs: d.membs || 0 };

    if (enableTooltips) {
      const cleanup = setupTooltips(circle, d, tooltip, container);
      cleanupFunctions.push(cleanup);
    }
  });
  
  return pointsToRender.length;
}

// ============================================================================
// MAIN DRAW FUNCTION
// ============================================================================

/**
 * Draw the galactic map visualization with viewport culling
 * @param {Array} points - Array of cluster data objects
 * @param {HTMLElement} table - Optional table element for row hover interaction
 * @returns {Function} Cleanup function to remove all event listeners
 */
export function drawMap(points, table) {
  // Get container element
  const plotDiv = document.getElementById("map_plot") || 
                  document.getElementById("search_map");
  if (!plotDiv) {
    console.warn('Map container element not found');
    return () => {};
  }
  
  // Setup dimensions
  const width = plotDiv.offsetWidth;
  const height = width / 2;

  // Clear container
  plotDiv.style.position = "relative";
  plotDiv.innerHTML = "";

  // Validate input
  if (!points || points.length === 0) {
    console.warn('No data points provided to drawMap');
    return () => {};
  }

  // Create SVG
  const svg = createNode("svg", { 
    width, 
    height,
    role: "img",
    "aria-label": "Galactic map showing star cluster positions"
  }, plotDiv);
  svg.style.userSelect = "none";

  // Create main group for transformations
  const g = createNode("g", {}, svg);

  // Create axis group (won't be cleared during updates)
  const axisGroup = createNode("g", { class: "axis-group" }, g);
  
  // Create data group (will be updated dynamically)
  const dataGroup = createNode("g", { class: "data-group" }, g);

  // Create coordinate scale functions
  const { x: xScale, y: yScale, scale: baseScale } = createScaleFunctions(width, height);

  // Initialize transform state
  const transform = { x: 0, y: 0, k: 1 };

  // Create UI elements
  createAxisLabels(svg, width, height);
  const markers = createMarkers(g, xScale, yScale);
  const tooltip = createTooltip(plotDiv);

  // Pre-calculate colors (only once)
  const colors = points.map(d => utiColor(d.uti));
  
  // Track circle elements and cleanup functions
  const circleElements = [];
  const cleanupFunctions = [];
  
  // Debounced viewport update
  let viewportUpdateTimer = null;
  const debouncedViewportUpdate = () => {
    clearTimeout(viewportUpdateTimer);
    viewportUpdateTimer = setTimeout(() => {
      const visibleCount = updateVisiblePoints(
        dataGroup, points, colors, xScale, yScale, transform,
        width, height, baseScale, tooltip, plotDiv, cleanupFunctions, circleElements
      );
      statsDiv.textContent = `Rendering ${visibleCount} / ${points.length} objects`;
    }, UI_CONFIG.viewportUpdateDelay);
  };
  
  // Stats display (optional - can be removed)
  const statsDiv = document.createElement('div');
  statsDiv.style.cssText = 'position:absolute;top:10px;right:10px;background:rgba(255,255,255,0.9);padding:8px;border-radius:4px;font-size:12px;pointer-events:none;';
  plotDiv.appendChild(statsDiv);

  // Update function for zoom/pan changes
  const updateTransform = () => {
    g.setAttribute("transform", 
      `translate(${transform.x}, ${transform.y}) scale(${transform.k})`
    );
    
    drawAxes(axisGroup, xScale, yScale, transform);

    // Update marker sizes to maintain constant screen size
    const markerSize = UI_CONFIG.markerSize / transform.k;
    markers.sunMarker.setAttribute("r", markerSize);
    markers.gcMarker.setAttribute("r", markerSize);
    
    markers.gcLabel.setAttribute("font-size", `${UI_CONFIG.gcLabelFontSize / transform.k}px`);
    markers.gcLabel.setAttribute("x", xScale(0) - 10 / transform.k);
    markers.gcLabel.setAttribute("y", yScale(0) - 8 / transform.k);
    
    // Debounced update of visible data points
    debouncedViewportUpdate();
  };

  const handleZoom = () => {
    drawGrid(g, xScale, yScale, transform);
    updateTransform();
  };

  // Initial render
  drawGrid(g, xScale, yScale, transform);
  drawAxes(axisGroup, xScale, yScale, transform);
  
  // Initial data render with viewport culling
  const initialVisibleCount = updateVisiblePoints(
    dataGroup, points, colors, xScale, yScale, transform,
    width, height, baseScale, tooltip, plotDiv, cleanupFunctions, circleElements
  );
  statsDiv.textContent = `Rendering ${initialVisibleCount} / ${points.length} objects`;

  // Setup interactions and collect cleanup functions
  cleanupFunctions.push(setupZoom(svg, transform, handleZoom));
  cleanupFunctions.push(setupPan(svg, transform, updateTransform));
  cleanupFunctions.push(setupKeyboardNavigation(svg, transform, handleZoom));

  // Setup table hover if applicable
  if (table && circleElements.length < CONFIG.hoverThreshold) {
    const cleanup = setupTableHover(table, circleElements, () => transform);
    cleanupFunctions.push(cleanup);
  }
  
  // Return master cleanup function
  return () => {
    // Clear any pending viewport updates
    clearTimeout(viewportUpdateTimer);
    
    cleanupFunctions.forEach(fn => {
      try {
        fn();
      } catch (err) {
        console.error('Error during cleanup:', err);
      }
    });
    
    // Clear the container
    if (plotDiv) {
      plotDiv.innerHTML = "";
    }
  };
}