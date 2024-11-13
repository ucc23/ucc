---
layout: page
title: 
permalink: /aitoff/
---

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>

Interactive `(GLON, GLAT)` [Aitoff projection](https://en.wikipedia.org/wiki/Aitoff_projection) of the sky with data from the latest
version of the UCC. The plot below shows all the entries in the UCC for the selected
distance range.

<html lang="en">
  <head>
    <style>
      #controls {
        display: flex;
        gap: 10px; /* Optional: Adds space between inputs */
      }
    </style>
  </head>
  <body>
    <br>
    <div id="controls">
        <input type="number" id="minD" value="0" step="50" aria-label="Min dist">
      -
        <input type="number" id="maxD" value="500" step="50" aria-label="Max dist">
      [pc]
    </div>
    <br>
    <!-- Load Aitoff plot -->
    <div id="plot"></div>
    <script defer src="{{ site.baseurl }}/assets/aitoff_plot.js"></script>
  </body>
</html>


You can click+drag, and zoom in/out of the map with the scroll wheel. Clicking on a
cluster takes you to its UCC page. The sizes are proportional to the number of members,
and the colors to the distance (blue: closer, red: more distant). To improve the
performance of the plot only the 1000 most distant entries are drawn for a given
distance range.

**Important**: The distances are estimated by a simple inversion of the parallax
values associated to the cluster's members. This means that they can be inaccurate for
very distant clusters, and/or clusters with a low number of members.
