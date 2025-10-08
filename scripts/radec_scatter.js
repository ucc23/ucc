
import { loadCompressedCsv } from "./loadCSV.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Retrieve center data from the HTML
    const plotContainer = document.getElementById("plot-container");
    const plotParamsElem = document.getElementById("plot-params");
    const ocName = plotParamsElem.getAttribute("data-oc-name");
    const raCenter = parseFloat(plotParamsElem.getAttribute("data-ra-center"));
    const decCenter = parseFloat(plotParamsElem.getAttribute("data-dec-center"));
    const radArcmin = Math.max(.05, 2*parseFloat(plotParamsElem.getAttribute("data-rad-deg")) / 60);
    // Handle very small and/or negative plx values, use a max dist of 50 Kpc
    const ocDistpc = 1000 / Math.max(0.02, parseFloat(plotParamsElem.getAttribute("data-plx")));;

    let Nmax = 100;

    let minScatterSize;
    if (radArcmin > 5) {
        minScatterSize = 0.1;
    } else if (radArcmin > 2.5) {
        minScatterSize = 0.05;
    } else {
        minScatterSize = 0.01;
    }

    const dataUrl = "../../assets/clusters.csv.gz";
    const columns = ["Name", "fnames", "RA_ICRS", "DE_ICRS", "dist_pc", "r_50"];
    let points = await loadCompressedCsv(dataUrl, columns);

    // Function to filter points within the current bounds
    function filterPoints(points, currentXRange, currentYRange, currentDistRange, currentNmax) {
        // Filter points within the given bounds
        const filteredPoints = points.filter(point => 
            point.RA_ICRS >= currentXRange[0] && point.RA_ICRS <= currentXRange[1] &&
            point.DE_ICRS >= currentYRange[0] && point.DE_ICRS <= currentYRange[1] &&
            point.dist_pc >= ocDistpc - currentDistRange && point.dist_pc <= ocDistpc + currentDistRange
        );
        // Sort by the absolute difference between point.dist_pc and ocDistpc
        filteredPoints.sort((a, b) => 
            Math.abs(a.dist_pc - ocDistpc) - Math.abs(b.dist_pc - ocDistpc)
        );
        // Return the top 100 points or all if fewer than 100
        return filteredPoints.slice(0, currentNmax);
    }

    // Prepare data for Plotly
    function getPlotData(filteredPoints, xRange, yRange) {
        // Extract coordinates and parallax values for initial plot
        const ra_values = filteredPoints.map(point => point.RA_ICRS);
        const dec_values = filteredPoints.map(point => point.DE_ICRS);
        const rad_values = filteredPoints.map(point =>  Math.max(.05, 2*parseFloat(point.r_50) / 60));
        const dpc_values = filteredPoints.map(point => parseFloat(point.dist_pc));

        const traces = [];

        // Add center point
        traces.push({
            x: [raCenter],
            y: [decCenter],
            mode: 'markers',
            type: 'scatter',
            marker: {
                color: "red",
                size: 8,
                symbol: 'x'
            },
            hoverinfo: "skip"
        });

        traces.push({
            x: ra_values,
            y: dec_values,
            mode: 'markers',
            type: 'scatter',
            marker: {
                color: dpc_values,
                colorscale: 'Viridis',
                opacity: 0.25,
                size: rad_values,
                sizemode: 'diameter',
                sizeref: Math.min(minScatterSize, (xRange[1]-xRange[0]) / (2*557)),
                colorbar: {
                    title: {
                        text: "Dist [pc]",
                        font: { size: 14, family: "Arial, sans-serif" },
                    },
                }
            },
            text: filteredPoints.map(point => point.Name),
            customdata: filteredPoints.map(point => [point.fnames.split(';')[0], point.dist_pc]),
            hovertemplate: 'Name: %{text}<br>RA: %{x}<br>Dec: %{y}<br>Dist: %{customdata[1]} [pc]<extra></extra>',
        });

        return traces;
    }

    // Function to update plot based on current parameters
    function updatePlot(currentXRange, currentYRange, currentDistRange, currentNmax) {
        const filteredPoints = filterPoints(points, currentXRange, currentYRange, currentDistRange, currentNmax);
        const plotData = getPlotData(filteredPoints, currentXRange, currentYRange);
        Plotly.react(plotContainer, plotData, layout);
    }

    // Initial plot bounds
    let xRange = [raCenter - 3 * radArcmin, raCenter + 3 * radArcmin];
    let yRange = [decCenter - 3 * radArcmin, decCenter + 3 * radArcmin];
    let distRange = 250;
    // Create copies to prevent overwriting
    const initialXRange = [...xRange];
    const initialYRange = [...yRange];

    // Filter and plot the initial data
    const filteredPoints = filterPoints(points, xRange, yRange, distRange, Nmax);
    const plotData = getPlotData(filteredPoints, xRange, yRange);

    // Plot layout
    const layout = {
        autosize: false,
        // width: "100%",
        height: 650,
        margin: {
            t: 50, // Removes the top margin
            // l: 50, // Optional: Adjust left margin
            // r: 50, // Optional: Adjust right margin
            // b: 50  // Optional: Adjust bottom margin
        },
        xaxis: {
            title: {
                text: "RA [deg]",
                font: { size: 14, family: "Arial, sans-serif" },
            },
            range: [xRange[1], xRange[0]], // Reverse the x range
        },
        yaxis: {
            title: {
                text: "DEC [deg]",
                font: { size: 14, family: "Arial, sans-serif" },
            },
            range: yRange,
        },
        showlegend: false,
        dragmode: "pan",
        sliders: [
            {
                active: 4, // Default to 250 (index 4 in the steps array)
                currentvalue: {
                    prefix: "Distance Range: ±",
                    suffix: " pc",
                    font: { size: 14 },
                    visible: true,
                    xanchor: "right",
                    offset: 10
                },
                pad: { t: 65 },
                steps: Array.from({ length: 20 }, (_, i) => {
                    const value = 50 + i * 50; // Distances from 50 to 1000 in steps of 50
                    return {
                        label: `${value}`,
                        method: "restyle",
                        args: [
                            {}, // Empty object for restyle (we'll handle the update manually)
                            []
                        ],
                        value: value,
                    };
                }),
                x: 0.1,
                xanchor: "left",
                y: 0,
                yanchor: "top",
                len: 0.8,
                thickness: 15
            },
            {
                active: 9, // Default to 100 (index 9 in the steps array: 10 + 9*10 = 100)
                currentvalue: {
                    prefix: "Max clusters: ",
                    suffix: "",
                    font: { size: 14 },
                    visible: true,
                    xanchor: "right",
                    offset: 10
                },
                pad: { t: 100 }, // Position below the first slider
                steps: Array.from({ length: 25 }, (_, i) => {
                    const value = 10 + i * 10; // Points from 10 to 250 in steps of 10
                    return {
                        label: `${value}`,
                        method: "restyle",
                        args: [
                            {}, // Empty object for restyle (we'll handle the update manually)
                            []
                        ],
                        value: value,
                    };
                }),
                x: 0.1,
                xanchor: "left",
                y: -0.15, // Position below the first slider
                yanchor: "top",
                len: 0.8,
                thickness: 15
            },
        ],
    };

    const config = {
        toImageButtonOptions: {
            format: 'png', // one of png, svg, jpeg, webp
            filename: ocName, // Use ocName for file name
            height: 500,
            width: 700,
            scale: 3
        },
        scrollZoom: true,
        displaylogo: false,
        responsive: true,
        displayModeBar: true, // Always visible
        modeBarButtonsToRemove: ['select2d', 'lasso2d', 'autoscale'],
        showLink: true,
        plotlyServerURL: "https://chart-studio.plotly.com",
        linkText: 'View and edit'
    };

    // Render the initial plot
    Plotly.newPlot(plotContainer, plotData, layout, config);

    // // Handle slider changes
    // plotContainer.on('plotly_sliderchange', eventData => {
    //     const newDistRange = eventData.slider.steps[eventData.slider.active].value;
    //     distRange = parseInt(newDistRange);
    //     updatePlot(xRange, yRange, distRange);
    // });

    // Handle slider changes
    plotContainer.on('plotly_sliderchange', eventData => {
        const sliderIndex = eventData.slider.active;
        const newValue = eventData.slider.steps[sliderIndex].value;
        
        // Determine which slider was changed based on the slider's y position
        if (eventData.slider.y >= 0) {
            // First slider (Distance Range)
            distRange = parseInt(newValue);
        } else {
            // Second slider (Max Points)
            Nmax = parseInt(newValue);
        }
        
        updatePlot(xRange, yRange, distRange, Nmax);
    });

    // Handle pan/zoom or reset changes
    plotContainer.on('plotly_relayout', eventData => {
        // Check if ranges are updated (pan, zoom)
        if (eventData['xaxis.range[0]'] !== undefined && eventData['yaxis.range[0]'] !== undefined) {
            xRange = [eventData['xaxis.range[1]'], eventData['xaxis.range[0]']];
            yRange = [eventData['yaxis.range[0]'], eventData['yaxis.range[1]']];
            updatePlot(xRange, yRange, distRange, Nmax);

        // Check if the "Reset axes" button is clicked
        // This "should" work:
        // if (eventData['xaxis.autorange'] === true && eventData['yaxis.autorange'] === true) {
        // But this actually does
        } else if (eventData['xaxis.showspikes'] === false && eventData['yaxis.showspikes'] === false) {
            xRange = [...initialXRange];
            yRange = [...initialYRange];
            updatePlot(initialXRange, initialYRange, distRange, Nmax);

        }
        // else {
        //     console.log('Unhandled relayout event:', eventData);
        // }
    });

    let lastDoubleClickTime = 0; // Tracks the timestamp of the last double-click

    // Detect double-click
    plotContainer.on('plotly_doubleclick', () => {
        lastDoubleClickTime = Date.now(); // Update the timestamp for the double-click event
        xRange = [...initialXRange];
        yRange = [...initialYRange];
        updatePlot(initialXRange, initialYRange, distRange, Nmax);
    });

    // Detect click
    plotContainer.on('plotly_click', eventData => {
        const currentTime = Date.now();
        if (currentTime - lastDoubleClickTime < 300) {
            return; // Ignore single click if a double-click happened within 300ms
        }
        if (eventData.points.length > 0) {
            const fname = eventData.points[0].customdata[0];
            const url = `https://ucc.ar/_clusters/${fname}`;
            window.open(url, '_blank');
        }
    });
});
