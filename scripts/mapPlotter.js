import { geoAitoff } from "https://cdn.skypack.dev/d3-geo-projection@4";
import { geoGraticule, geoPath } from "https://cdn.jsdelivr.net/npm/d3-geo@3/+esm";

const svgNS = "http://www.w3.org/2000/svg";

// --- Helpers ---
function createNode(type, attrs = {}, parent = null) {
    const el = document.createElementNS(svgNS, type);
    for (let [k, v] of Object.entries(attrs)) {
        if (v !== null && v !== undefined) el.setAttribute(k, v);
    }
    if (parent) parent.appendChild(el);
    return el;
}

const scaleLinear = (v, dMin, dMax, rMin, rMax) => {
    if (dMax === dMin) return rMin;
    return rMin + (v - dMin) * (rMax - rMin) / (dMax - dMin);
};

const scaleLog = (v, dMin, dMax) => {
    const safeMin = Math.max(1e-5, dMin);
    const nN = (Math.log(v) - Math.log(safeMin)) / (Math.log(dMax) - Math.log(safeMin));
    const clamp = Math.max(0, Math.min(1, nN));
    // Linear blend: Blue (0,0,255) to Red (255,0,0)
    return `rgb(${Math.round(255 * clamp)}, 0, ${Math.round(255 * (1 - clamp))})`;
};

// --- Main Draw Function ---
export function drawMap(points, table) {
    const plotDiv = document.getElementById("map_plot") || document.getElementById("search_map");
    const width = plotDiv.offsetWidth;
    const height = width / 2;

    // Clear container
    const container = document.querySelector("#map_plot");
    container.style.position = "relative";
    container.innerHTML = ""; 

    const svg = createNode("svg", { width, height }, container);
    
    // Projection & Path
    const projection = geoAitoff().rotate([0, 0]).scale(height / 4).translate([width / 2, height / 2]);
    const pathGen = geoPath().projection(projection);
    
    // Grid Generation
    const graticuleGenerator = geoGraticule().step([29.99, 15]);
    const graticuleGeoJSON = graticuleGenerator(); // <--- FIX: Execute generator to get JSON

    const g = createNode("g", {}, svg);

    // Draw Graticule
    createNode("path", {
        d: pathGen(graticuleGeoJSON),
        fill: "none",
        stroke: "#ccc",
        "stroke-width": 0.5
    }, g);

    // --- Zoom & Pan Logic ---
    let transform = { x: 0, y: 0, k: 1 };
    const updateTransform = () => g.setAttribute("transform", `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
    
    svg.addEventListener("wheel", (e) => {
        e.preventDefault(); // Required for map zooming/panning without scrolling page
        const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1;
        const oldK = transform.k;
        transform.k = Math.max(1, Math.min(10, transform.k * scaleFactor)); 
        
        if (transform.k !== oldK) {
            const rect = svg.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;
            transform.x = mx - (mx - transform.x) * (transform.k / oldK);
            transform.y = my - (my - transform.y) * (transform.k / oldK);
            updateTransform();
        }
    }, { passive: false });  // Suppress 'Violation' warning

    let isDragging = false;
    let start = { x: 0, y: 0 };

    svg.addEventListener("mousedown", e => { 
        isDragging = true; 
        start = { x: e.clientX - transform.x, y: e.clientY - transform.y }; 
    });
    
    // Attach mousemove/up to window to handle dragging outside the SVG bounds
    window.addEventListener("mouseup", () => isDragging = false);
    window.addEventListener("mousemove", e => {
        if (!isDragging) return;
        e.preventDefault();
        transform.x = e.clientX - start.x;
        transform.y = e.clientY - start.y;
        updateTransform();
    });

    // --- Tooltip ---
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    Object.assign(tooltip.style, {
        position: "absolute", visibility: "hidden", padding: "8px", 
        background: "#fff", border: "1px solid #333", borderRadius: "4px", pointerEvents: "none"
    });
    container.appendChild(tooltip);

    // --- Labels ---
    const addLabel = (x, y, txt, anchor) => {
        const t = createNode("text", { x, y, "text-anchor": anchor, fill: "#333", "font-size": "10px" }, g);
        t.textContent = txt;
    };

    // Longitude Labels
    for (let lon = 0; lon < 360; lon += 30) {
        const c = projection([lon, 0]);
        if (c) addLabel(c[0], c[1] - 10, `${lon}°`, "middle");
    }
    // Latitude Labels
    for (let lat = -90; lat <= 90; lat += 30) {
        const c = projection([180, lat]);
        if (c) addLabel(c[0] - 25, c[1] + 3, `${lat}°`, "start");
    }

    // Title
    const title = createNode("text", { x: width / 2, y: height - 10, "text-anchor": "middle", "font-size": "16px", fill: "black" }, svg);
    title.textContent = `N=${points.length}`;

    // --- Points Processing ---
    if (!points || points.length === 0) return;

    const dists = points.map(d => d.dist_pc);
    const membs = points.map(d => d.membs);
    const minDist = Math.min(...dists);
    const maxDist = Math.min(4000, Math.max(...dists));
    const minMemb = Math.min(...membs);
    const maxMemb = Math.max(...membs);

    const circleEls = [];
    
    points.forEach((d, i) => {
        const coords = projection([parseFloat(d.lon), parseFloat(d.lat)]);
        if (!coords) return;

        const r = scaleLinear(d.membs, minMemb, maxMemb, 1, 25);
        const color = scaleLog(d.dist_pc, minDist, maxDist);

        const circle = createNode("circle", {
            cx: coords[0], cy: coords[1], r: r,
            fill: color, stroke: "black", "stroke-width": 1, opacity: 0.25, cursor: "pointer"
        }, g);
        
        circleEls[i] = { el: circle, baseR: r };

        circle.addEventListener("mouseover", () => {
            tooltip.innerHTML = `<strong>${d.name}</strong><br>RA: ${d.ra}°<br>DEC: ${d.dec}°<br>D: ${d.dist_pc} [pc]<br>N_50: ${d.membs}`;
            tooltip.style.visibility = "visible";
        });
        circle.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            // Adjust tooltip position relative to container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            tooltip.style.left = `${x + 10}px`;
            tooltip.style.top = `${y + 10}px`;
        });
        circle.addEventListener("mouseout", () => tooltip.style.visibility = "hidden");
        circle.addEventListener("click", () => window.open(`https://ucc.ar/_clusters/${d.fname}`, "_blank"));
    });

    if (table) handleRowHover(table, circleEls);
}

function handleRowHover(table, circleEls) {
    let hoverTimeout = null;
    const delayTimeout = circleEls.length > 2000 ? 500 : (circleEls.length > 500 ? 200 : 100);

    table.addEventListener("mouseover", (e) => {
        const row = e.target.closest("tr[data-index]");
        if (row) {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                const idx = +row.dataset.index;
                if (!circleEls[idx]) return;

                circleEls.forEach(c => {
                    if(c && c.el) {
                        c.el.setAttribute("r", c.baseR);
                        c.el.style.opacity = "0.25";
                        c.el.style.stroke = "black";
                        c.el.style.strokeWidth = "1px";
                    }
                });

                const target = circleEls[idx];
                target.el.parentElement.appendChild(target.el); 
                target.el.setAttribute("r", target.baseR * 1.0); 
                target.el.style.opacity = "0.75";
                target.el.style.stroke = "yellow";
                target.el.style.strokeWidth = "2px";
            }, delayTimeout);
        }
    });

    table.addEventListener("mouseout", (e) => {
        const row = e.target.closest("tr[data-index]");
        if (row) {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                circleEls.forEach(c => {
                    if(c && c.el) {
                         c.el.setAttribute("r", c.baseR);
                         c.el.style.opacity = "0.25";
                         c.el.style.stroke = "black";
                         c.el.style.strokeWidth = "1px";
                    }
                });
            }, delayTimeout);
        }
    });
}
