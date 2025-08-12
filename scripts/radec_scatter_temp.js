document.addEventListener('DOMContentLoaded', async function () {
            // --- Global State ---
            const plotDiv = document.getElementById('plot');
            const infoDiv = document.getElementById('info');
            const paramsDiv = document.getElementById('plot-params');
            let allClusterData = [];

            // --- Function to Load and Parse Data (runs once) ---
            async function loadData() {
                try {
                    infoDiv.innerHTML = '<p>Fetching and decompressing `clusters.csv.gz`...</p>';
                    const response = await fetch('../../assets/clusters.csv.gz');
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}. Could not fetch clusters.csv.gz.`);
                    const compressedData = await response.arrayBuffer();
                    const decompressedData = pako.inflate(compressedData, { to: 'string' });

                    infoDiv.innerHTML += '<p>Parsing CSV data...</p>';
                    const parseResult = Papa.parse(decompressedData, { header: true, dynamicTyping: true, skipEmptyLines: true });
                    
                    const requiredCols = ['ID', 'RA_ICRS', 'DE_ICRS', 'dist_pc', 'r_50', 'fnames'];
                    if (parseResult.data.length > 0 && !requiredCols.every(col => col in parseResult.data[0])) {
                        throw new Error(`One or more required columns (${requiredCols.join(', ')}) not found in the CSV.`);
                    }
                    // Filter out any rows with null essential values
                    return parseResult.data.filter(d => d.RA_ICRS != null && d.DE_ICRS != null && d.dist_pc != null && d.r_50 != null);
                } catch (error) {
                    handleError(error);
                    return null;
                }
            }
            
            // --- Function to Update the Plot (runs on init and on pan/zoom) ---
            function updatePlot(viewBox) {
                const { raMin, raMax, decMin, decMax } = viewBox;
                infoDiv.innerHTML = `<p>Updating view for RA [${raMin.toFixed(2)}, ${raMax.toFixed(2)}] and Dec [${decMin.toFixed(2)}, ${decMax.toFixed(2)}]...</p>`;

                // 1. Filter data to only include points within the current viewbox
                const visibleData = allClusterData.filter(d =>
                    d.RA_ICRS >= raMin && d.RA_ICRS <= raMax &&
                    d.DE_ICRS >= decMin && d.DE_ICRS <= decMax
                );
                
                infoDiv.innerHTML += `<p>Found ${visibleData.length} clusters in this view.</p>`;
                if (visibleData.length === 0) {
                     Plotly.react(plotDiv, [], {
                        'xaxis.range': [raMax, raMin],
                        'yaxis.range': [decMin, decMax]
                    });
                    return; // No need to draw anything
                }

                // 2. Create the colorscale based on the visible data's distance
                const dists = visibleData.map(d => d.dist_pc);
                const colorScale = d3.scaleSequential(d3.interpolateViridis)
                                     .domain([Math.min(...dists), Math.max(...dists)]);

                // 3. Generate shapes (circles) and hover data
                const shapes = [];
                const hoverData = { x: [], y: [], customdata: [] };

                visibleData.forEach(d => {
                    shapes.push({
                        type: 'circle', xref: 'x', yref: 'y',
                        x0: d.RA_ICRS - (2 * d.r_50/60), y0: d.DE_ICRS - (2 * d.r_50/60),
                        x1: d.RA_ICRS + (2 * d.r_50/60), y1: d.DE_ICRS + (2 * d.r_50/60),
                        fillcolor: colorScale(d.dist_pc),
                        opacity: 0.5,
                        line: { width: 0 }
                    });
                    hoverData.x.push(d.RA_ICRS);
                    hoverData.y.push(d.DE_ICRS);
                    hoverData.customdata.push([d.ID, d.fnames]);
                });

                // 4. Define the invisible trace for hover/click events
                const hoverTrace = {
                    x: hoverData.x, y: hoverData.y, customdata: hoverData.customdata,
                    mode: 'markers', type: 'scatter',
                    marker: { color: 'rgba(0,0,0,0)' },
                    hoverinfo: 'text',
                    text: hoverData.customdata.map(cd => `ID: ${cd[0]}`),
                    hovertemplate: '<b>%{customdata[0]}</b><br>RA: %{x:.4f}<br>Dec: %{y:.4f}<extra></extra>'
                };

                // 5. Define the plot layout for the current view
                const layoutUpdate = {
                    shapes: shapes,
                    'xaxis.range': [raMax, raMin], // Reversed RA axis
                    'yaxis.range': [decMin, decMax]
                };
                
                // 6. Update the plot using Plotly.react for efficiency
                Plotly.react(plotDiv, [hoverTrace], layoutUpdate);
            }
            
            function handleError(error) {
                console.error("Plotting Error:", error);
                infoDiv.innerHTML = `<p style="color:red; font-weight:bold;">Error: ${error.message}</p><p>Please check the developer console (F12) for details.</p>`;
            }

            // --- Main Execution ---
            allClusterData = await loadData();
            if (!allClusterData) return; // Stop if data loading failed

            // Get initial view parameters from the div
            const raCenter = parseFloat(paramsDiv.dataset.raCenter);
            const decCenter = parseFloat(paramsDiv.dataset.decCenter);
            const radDeg = parseFloat(paramsDiv.dataset.radDeg);
            const plotSize = 4 * radDeg;

            const initialViewBox = {
                raMin: raCenter - plotSize, raMax: raCenter + plotSize,
                decMin: decCenter - plotSize, decMax: decCenter + plotSize
            };

            // Define the full, one-time layout configuration
            const initialLayout = {
                title: 'Cluster Map',
                xaxis: { title: 'Right Ascension (RA_ICRS)', range: [initialViewBox.raMax, initialViewBox.raMin] },
                yaxis: { title: 'Declination (DE_ICRS)', range: [initialViewBox.decMin, initialViewBox.decMax], scaleanchor: 'x', scaleratio: 1 },
                hovermode: 'closest',
                showlegend: false,
                autosize: true
            };

            const config = {
                toImageButtonOptions: {
                    format: 'png',
                    // filename: ocName,
                    height: 500,
                    width: 700,
                    scale: 1
                },
                scrollZoom: true,
                displaylogo: false,
                responsive: true
            };

            // Create the initial plot
            await Plotly.newPlot(plotDiv, [], initialLayout, config);

            // Immediately run the first update to draw the initial points
            updatePlot(initialViewBox);

            // Add the event listener for panning and zooming
            plotDiv.on('plotly_relayout', (eventData) => {
                // Extract the new axis ranges from the event data
                const newViewBox = {
                    raMin: eventData['xaxis.range[0]'],
                    raMax: eventData['xaxis.range[1]'],
                    decMin: eventData['yaxis.range[0]'],
                    decMax: eventData['yaxis.range[1]']
                };
                
                // Check if ranges are valid (they are undefined on simple clicks)
                if (newViewBox.raMin !== undefined) {
                    updatePlot(newViewBox);
                }
            });

            // Add the click handler (only needs to be done once)
            plotDiv.on('plotly_click', (data) => {
                const point = data.points[0];
                if (point && point.customdata) {
                    const fname = point.customdata[1];
                    const url = `https://ucc.ar/_clusters/${fname}`;
                    window.open(url, '_blank');
                }
            });
        });
