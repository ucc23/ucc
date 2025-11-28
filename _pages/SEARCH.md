---
layout: page
permalink: /search/
style: style
---

<html lang="en">
    <body>
        <details data-umami-event="search_map">
            <summary>Map</summary>
            <div class="content" id="search_map">
                <div id="map_plot"></div>
            </div>
        </details>
        <div id="download-container" style="text-align: right; margin-bottom: 10px;">
            <button id="downloadCSV" 
                title="Download table as a CSV file" 
                style="background: none; border: none; color: blue; cursor: pointer; font-size: 18px;">
                📥
            </button>
        </div>
        <div class="search-box" id="search-box">
            <div class="search-grid">
                <div class="search-row row1">
                    <button id="coordToggle">Names</button>
                    <input id="search" type="text" autofocus autocomplete="off" placeholder="Search by name(s)...">
                    <input id="radius" type="number" min="0" step="5" placeholder="Max dist [string]" title="Maximum distance value">
                    <select id="c3Filter" title="Filter by C3 value">
                        <option value="">All C3</option>
                        <option value="AA" class="c3-AA">AA</option>
                        <option value="AB" class="c3-AB">AB</option>
                        <option value="BA" class="c3-BA">BA</option>
                        <option value="AC" class="c3-AC">AC</option>
                        <option value="CA" class="c3-CA">CA</option>
                        <option value="BB" class="c3-BB">BB</option>
                        <option value="AD" class="c3-AD">AD</option>
                        <option value="DA" class="c3-DA">DA</option>
                        <option value="BC" class="c3-BC">BC</option>
                        <option value="CB" class="c3-CB">CB</option>
                        <option value="BD" class="c3-BD">BD</option>
                        <option value="DB" class="c3-DB">DB</option>
                        <option value="CC" class="c3-CC">CC</option>
                        <option value="CD" class="c3-CD">CD</option>
                        <option value="DC" class="c3-DC">DC</option>
                        <option value="DD" class="c3-DD">DD</option>
                    </select>
                </div>
                <div class="search-row row2">
                    <input id="dist_min" type="number" min="0" step="100" placeholder="Dist min" title="Minimum distance in [pc]">
                    <input id="dist_max" type="number" min="0" step="100" placeholder="Dist max" title="Maximum distance in [pc]">
                    <div class="separator"></div>
                    <input id="n50_min" type="number" min="0" step="10" placeholder="N50 min" title="Minimum N50 value">
                    <input id="n50_max" type="number" min="0" step="10" placeholder="N50 max" title="Maximum N50 value">
                    <div class="separator"></div>
                    <input id="uti_min" type="number" min="0" max="1" step="0.1" autocomplete="off" placeholder="UTI min" title="Minimum UTI value">
                    <input id="uti_max" type="number" min="0" max="1" step="0.1" autocomplete="off" placeholder="UTI max" title="Maximum UTI value">
                </div>
                <div class="search-row search-checkbox">
                    <label><input type="checkbox" id="filterOCs">Hide likely non-clusters</label>
                </div>
                <button id="searchButton" type="button">Search</button>
            </div>
        </div>
        <div id="table_results"></div>
        <script defer type="module" src="{{ site.baseurl }}/scripts/map_search.js"></script>
    </body>
</html>