// Set up dimensions and projection
const width = 740, height = 400;

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
    .step([29.99, 15]); // Step size for grid lines: 30 LON, 15 LAT
    // If I use 30 exactly in LON the last grid line for 180 is not drawn

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

// Append title text element
const title = svg.append("text")
    .attr("x", width / 2)
    .attr("y", 20) // Position at the top of the plot
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "black");

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
                .filter(d => d.P >= minD && d.P <= maxD) // Filter using specified minD and maxD
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
                })
                .sort((a, b) => b.dist - a.dist) // Sort by 'dist' in descending order
                .slice(0, 1000) // Select top 1000 entries with largest 'dist'
                .sort((a, b) => b.membs - a.membs); // Sort by 'membs' in descending order

            // Update title with number of points
            title.text(`N=${points.length}`);

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