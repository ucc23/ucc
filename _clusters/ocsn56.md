---
layout: post
title:  OCSN 56
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/ocsn56_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="1.103" 
     data-target="82.645 2.366"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G201.2-16.2</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td style="text-align: center;">90</td>
    <td style="text-align: center;">33.1</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22OCSN%2056%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ocsn56" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | 82.65 | 2.51 | 2.44 | -0.8 | 0.54 | 29.31 |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 83.578 | 2.629 | 2.389 | -0.924 | 0.552 | 25.552 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 83.432 | 3.614 | 2.389 | -- | -- | -- |
| **UCC** |82.645 | 2.366 | 2.526 | -0.816 | 0.526 | 31.28 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=82.645,+2.366" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=82.645%202.366&output=json&radius=5&userEntry=ocsn56" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn56.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn56.webp" alt="OCSN 56 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/HUNT23/ocsn56.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/HUNT23/ocsn56.webp" alt="OCSN 56 HUNT23">
</a>
</div>
</div>
<div class="indicators">
<label for="slide1">1</label>
<label for="slide2">2</label>
</div>
</div>


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | `E(B-V)=0.08, m-M=8.26, logt=7.2` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.285, diffAV50=0.603, MOD50=8.053, logAge50=7.056` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.8, dMod50=8.15, logAge50=6.82, [Fe/H]50=-0.22` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=201.304%20&lat=-16.844&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ocsn56"
         data-ra-center="83.11"
         data-dec-center="2.57"
         data-rad-deg="33.1"
         data-plx="2.526">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>


#### Objects with shared members

| Cluster | <span title="Percentage of members that this OC shares with the ones listed">%</span>   | RA   | DEC   | Plx   | pmRA  | pmDE  | Rv    |
| :---:   | :-: |:---: | :---: | :---: | :---: | :---: | :---: |
|[FoF 2371](/_clusters/fof2371/)| 68.9 | 82.387 | 2.021 | 2.688 | -0.675 | 0.695 | 29.782 |
|[ASCC 20](/_clusters/ascc20/)| 64.4 | 82.1 | 1.665 | 2.725 | -0.545 | 0.776 | 29.497 |
|[OCSN 57](/_clusters/ocsn57/)| 58.9 | 82.083 | 1.667 | 2.739 | -0.525 | 0.787 | 29.188 |
|[ASCC 18](/_clusters/ascc18/)| 3.3 | 81.727 | 0.85 | 2.553 | -0.181 | 1.169 | 28.189 |