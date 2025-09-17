---
layout: page
permalink: /search/
---

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>

<html lang="en">
    <body>
        <div id="map_plot"></div>

        <div id="download-container" style="text-align: right; margin-bottom: 10px;">
            <button id="downloadCSV" 
                title="Download table as a CSV file" 
                style="background: none; border: none; color: blue; cursor: pointer; font-size: 18px;">
                📥
            </button>
        </div>

        <div class="search-box">
            <button id="coordToggle">All names</button>
            <input id="search" type="text" autofocus autocomplete="off" placeholder="Search across all names...">
            <input id="maxN" type="number" min="0" value="100" step="100" placeholder="Maximum number of results" title="Maximum number of results">
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
            <button id="searchButton" type="button">Search</button>
        </div>

        <div id="table_results"></div> 

        <script defer type="module" src="{{ site.baseurl }}/scripts/map_search.js"></script>
    </body>
</html>