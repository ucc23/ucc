---
layout: page
permalink: /search/
style: style_search
---

<html lang="en">
    <body>
        <div class="search-box" id="search-box">
            <div class="search-grid">
                <div class="search-row">
                    <input-label>Dist</input-label>
                    <input id="dist_min" class="search-trigger" type="number" min="0" step="100" placeholder="min" title="Minimum distance in [kpc]">
                    <input id="dist_max" class="search-trigger" type="number" min="0" step="100" placeholder="max" title="Maximum distance in [kpc]">
                    <unit-label>[kpc]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_dist_nans">Hide NaN values</label>
                    </div>
                    <div class="separator"></div>
                    <input-label>Av</input-label>
                    <input id="av_min" class="search-trigger" type="number" min="0" step="0.05" placeholder="min" title="Minimum Av value">
                    <input id="av_max" class="search-trigger" type="number" min="0" step="0.05" placeholder="max" title="Maximum Av value">
                    <unit-label>[mag]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_av_nans">Hide NaN values</label>
                    </div>
                </div>
                <div class="search-row">
                    <input-label>DAv</input-label>
                    <input id="dav_min" class="search-trigger" type="number" min="0" step="0.1" placeholder="min" title="Minimum differential extinction value">
                    <input id="dav_max" class="search-trigger" type="number" min="0" step="0.1" placeholder="max" title="Maximum differential extinction value">
                    <unit-label>[mag]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_dav_nans">Hide NaN values</label>
                    </div>
                    <div class="separator"></div>
                    <input-label>Age</input-label>
                    <input id="age_min" class="search-trigger" type="number" min="0" step="500" placeholder="min" title="Minimum Age value">
                    <input id="age_max" class="search-trigger" type="number" min="0" step="500" placeholder="max" title="Maximum Age value">
                    <unit-label>[Myr]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_age_nans">Hide NaN values</label>
                    </div>
               </div>
                <div class="search-row">
                    <input-label>FeH</input-label>
                    <input id="feh_min" class="search-trigger" type="number" min="-10" max=10 step="0.05" placeholder="min" title="Minimum metallicity">
                    <input id="feh_max" class="search-trigger" type="number" min="-10" max=10 step="0.05" placeholder="max" title="Maximum metallicity">
                    <unit-label>[dex]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_feh_nans">Hide NaN values</label>
                    </div>
                    <div class="separator"></div>
                    <input-label>Mass</input-label>
                    <input id="mass_min" class="search-trigger" type="number" min="0" step="100" placeholder="min" title="Minimum mass">
                    <input id="mass_max" class="search-trigger" type="number" min="0" step="100" placeholder="max" title="Maximum mass">
                    <unit-label>[M⊙]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_mass_nans">Hide NaN values</label>
                    </div>
                </div>
                <div class="search-row">
                    <input-label>B<sub>frac</sub></input-label>
                    <input id="bf_min" class="search-trigger" type="number" min="0" max="1" step="0.1" placeholder="min" title="Minimum binary fraction">
                    <input id="bf_max" class="search-trigger" type="number" min="0" max="1" step="0.1" placeholder="max" title="Maximum binary fraction">
                    <unit-label>[ &mdash; ]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_bf_nans">Hide NaN values</label>
                    </div>
                    <div class="separator"></div>
                    <input-label>BSS</input-label>
                    <input id="bss_min" class="search-trigger" type="number" min="0" step="0.1" placeholder="min" title="Minimum BSS value">
                    <input id="bss_max" class="search-trigger" type="number" min="0" step="0.1" placeholder="max" title="Maximum BSS value">
                    <unit-label>[ &mdash; ]</unit-label>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="hide_bss_nans">Hide NaN values</label>
                    </div>
                </div>
               <div class="separator-horizontal"></div>
                <div class="search-row">
                    <input-label>N<sub>50</sub></input-label>
                    <input id="n50_min" class="search-trigger" type="number" min="0" step="10" placeholder="min" title="Minimum N50 value">
                    <input id="n50_max" class="search-trigger" type="number" min="0" step="10" placeholder="max" title="Maximum N50 value">
                    <!-- <div class="separator"></div> -->
                    <input-label>P<sub>dup</sub></input-label>
                    <input id="Pdup_min" class="search-trigger" type="number" min="0" max="1" step="0.1" placeholder="min" title="Minimum duplicate probability">
                    <input id="Pdup_max" class="search-trigger" type="number" min="0" max="1" step="0.1" placeholder="max" title="Maximum duplicate probability">
                    <!-- <div class="separator"></div> -->
                    <input-label>UTI</input-label>
                    <input id="uti_min" class="search-trigger" type="number" min="0" max="1" step="0.1" autocomplete="off" placeholder="min" title="Minimum UTI value">
                    <input id="uti_max" class="search-trigger" type="number" min="0" max="1" step="0.1" autocomplete="off" placeholder="max" title="Maximum UTI value">
                    <div class="separator"></div>
                    <div class="search-checkbox">
                        <label><input class="search-trigger" type="checkbox" id="filterOCs">Hide likely non-clusters</label>
                    </div>
               </div>
                <!-- <div class="separator-horizontal"></div> -->
                <div class="search-row">
                    <!-- [Select mode] <button id="coordToggle">Names</button> -->
                    <!-- <span class="coordToggleLike">[Select mode]</span> -->
                    <button id="coordToggle" class="coordToggle">Names</button>
                    <input id="search-bar" class="search-trigger" type="search" autofocus autocomplete="off" placeholder="Search by name...">
                    <div class="separator"></div>
                    <input-label>N<sub>max</sub></input-label>
                    <input id="Nmax" class="search-trigger" type="number" value="100" min="0" step="100" placeholder="Max results" title="Maximum number of result">
                    <div class="separator"></div>
                    <button id="searchButton" type="button">Search</button>
                    <a href="/faq/#about-the-search-page" target="_blank" class="faq-icon" title="About the Search page">ℹ️</a>
                </div>
            </div>
        </div>
        <details data-umami-event="search_map">
            <summary>Map</summary>
            <div class="content" id="search_map">
                <div id="map_plot"></div>
            </div>
        </details>
        <div id="table_results"></div>
        <script defer type="module" src="{{ site.baseurl }}/scripts/map_search.js"></script>
    </body>
</html>