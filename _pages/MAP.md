---
layout: page
title: Interactive map
permalink: /map/
---

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>

Interactive galactic (`GLON, GLAT`) [Aitoff projection](https://en.wikipedia.org/wiki/Aitoff_projection) of the sky with data taken
from the latest version of the UCC.

<html lang="en">
  <body>
    <br>
    <!-- Load Aitoff plot -->
    <div id="plot"></div>
    <script defer src="{{ site.baseurl }}/scripts/map_search.js"></script>
    <center>
    <div id="controls">
        <div class="control-group">
          <label for="minD">dmin [pc]</label>
          <input type="number" id="minD" value="0" min=0 step="50" aria-label="Min dist">
        </div>
        <div class="control-group">
          <label for="maxD">dmax [pc]</label>
          <input type="number" id="maxD" value="500" min=0 step="50" aria-label="Max dist">
        </div>
        <div class="control-group">
          <label for="maxN">N<sub>max</sub></label>
          <input type="number" id="maxN" value="1000" min=0 step="100" aria-label="Max N">
        </div>
    </div>
    </center>

  </body>
</html>


<br>

---
The plot shows all the entries in the UCC for the selected distance range `dmin, dmax`.
You can click+drag, and zoom in/out of the map with the scroll wheel. Clicking on a
cluster takes you to its UCC page. The sizes are proportional to the number of members,
and the colors to the distance (blue: closer, red: more distant). Only the `Nmax` most
distant entries are drawn for a given distance range.

**Important**: The distances are estimated by a simple inversion of the (median of the)
parallax values associated to the cluster's members. This means that they can be
inaccurate for very distant clusters, and/or clusters with a low number of members.
