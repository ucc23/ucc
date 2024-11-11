// Set up dimensions and projection
const width = 800, height = 400;

const projection = d3.geoAitoff()
    .rotate([0, 0]) 
    .scale(100)
    .translate([width / 2, height / 2]);

const zoom = d3.zoom()
    .scaleExtent([1, 10])
    .on("zoom", (event) => svg.attr("transform", event.transform));

// Apply zoom with passive event listeners
d3.select("svg").call(zoom)
    .on("wheel.zoom", null, { passive: true })     // Mark wheel events as passive
    .on("touchstart.zoom", null, { passive: true }) // Mark touchstart as passive
    .on("touchmove.zoom", null, { passive: true }); // Mark touchmove as passive


const svg = d3.select("#plot")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom)
    .append("g");

// Define a graticule generator for the grid lines
const graticule = d3.geoGraticule()
    .step([15, 15]); // Step size for grid lines: 15° intervals

// Draw the graticule (grid) on the projection
svg.append("path")
    .datum(graticule)
    .attr("d", d3.geoPath().projection(projection))
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-width", 0.5);

// Tooltip div for displaying data on hover
const tooltip = d3.select("#plot")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("padding", "8px")
    .style("background", "#fff")
    .style("border", "1px solid #333")
    .style("border-radius", "4px");

// Label RA (Right Ascension) along the top edge
for (let lon = 0; lon < 360; lon += 30) {  // Label every 30 degrees
    const [x, y] = projection([lon, 0]);  // Projection at declination 0 (equator)
    svg.append("text")
        .attr("x", x)
        .attr("y", y - 10)
        .attr("text-anchor", "middle")
        .attr("fill", "#333")
        .style("font-size", "10px")
        .text(`${lon}°`);
}

// Label Dec (Declination) along both sides
for (let lat = -90; lat <= 90; lat += 30) {  // Label every 30 degrees
    const [x1, y1] = projection([0, lat]);   // Projection at RA 0
    const [x2, y2] = projection([180, lat]); // Projection at RA 180 (opposite side)

    svg.append("text")
        .attr("x", x2 + 15)  // Right side
        .attr("y", y2 + 3)
        .attr("text-anchor", "start")
        .attr("fill", "#333")
        .style("font-size", "10px")
        .text(`${lat}°`);
}

// Function to load and display data with specified L range
function loadAndDisplayData(minD, maxD) {
    // Fetch and decompress the gzipped JSON file
    fetch("/../clusters.json.gz")
        .then(response => response.arrayBuffer())
        .then(buffer => {
            // Decompress using pako
            const decompressedData = pako.ungzip(new Uint8Array(buffer), { to: 'string' });
            const data = JSON.parse(decompressedData);

            // Filter and map data to include only entries within [minD, maxD]
            const points = data
                .filter(d => d.P >= minD && d.P <= maxD) // Use specified minD and maxD
                .map(d => {
                    const name0 = d.F.split(';')[0];
                    return {
                        name: d.N,
                        ra: d.R,
                        dec: d.D,
                        fname: name0,
                        dist: d.P,
                        membs: d.M,
                        coordinates: projection([d.L, d.B])
                    };
                });

            // Find the min and max distance for color normalization
            const minDist = d3.min(points, d => d.dist);
            const maxDist = d3.max(points, d => d.dist);

            // Define color scale for 'dist' normalization (e.g., blue for near and red for far)
            const colorScale = d3.scaleLinear()
                .domain([minDist, maxDist])
                .range(["blue", "red"]);

            // Find the min and max members for size scaling
            const minMembs = d3.min(points, d => d.membs);
            const maxMembs = d3.max(points, d => d.membs);

            // Define size scale for 'membs' normalization (1 to 25 radius)
            const sizeScale = d3.scaleLinear()
                .domain([minMembs, maxMembs])
                .range([1, 25]);

            // Clear any existing circles before drawing new points
            svg.selectAll("circle").remove();

            // Draw points
            svg.selectAll("circle")
                .data(points)
                .enter()
                .append("circle")
                .attr("cx", d => d.coordinates[0])
                .attr("cy", d => d.coordinates[1])
                // .attr("r", 3)
                .attr("r", d => sizeScale(d.membs))       // Set radius based on normalized 'membs'
                // .style("fill", "none")                // Make circles empty
                .style("fill", d => colorScale(d.dist)) // Set color based on normalized 'dist'
                .style("stroke", "black")             // Border color
                .style("stroke-width", 1)             // Border thickness
                .style("opacity", 0.25)               // Alpha transparency
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
                    window.open("https://ucc.ar/_clusters/" + d.fname, "_blank");  // Open the URL in a new tab
                });
        });
}

// Initialize plot with default L range
loadAndDisplayData(0, 500);

// Add live updates on input changes
document.getElementById("minD").addEventListener("input", () => {
    const minD = parseFloat(document.getElementById("minD").value);
    const maxD = parseFloat(document.getElementById("maxD").value);
    loadAndDisplayData(minD, maxD);  // Update plot with new minD and maxD
});

document.getElementById("maxD").addEventListener("input", () => {
    const minD = parseFloat(document.getElementById("minD").value);
    const maxD = parseFloat(document.getElementById("maxD").value);
    loadAndDisplayData(minD, maxD);  // Update plot with new minD and maxD
});