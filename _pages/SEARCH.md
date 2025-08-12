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
            <input id="terms" type="text" autocomplete="off" placeholder="Search by name or coordinates..." title="See the FAQ to learn how this search bar works">
            <input id="maxN" type="number" min="0" placeholder="Max results" title="Maximum number of results">
            <button id="searchButton" type="button">Search</button>
        </div>

        <div id="table_results"></div> 

        <script defer type="module" src="{{ site.baseurl }}/scripts/map_search.js"></script>
    </body>
</html>