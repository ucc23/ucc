---
layout: post
title:  Theia 1424
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q2P/main/plots/aladin/theia1424.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.337" 
     data-target="81.195 38.242"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G169.8+01.3a</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span></td>
    <td style="text-align: center;">25</td>
    <td style="text-align: center;">10.1</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Theia%201424%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=theia1424" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 81.155 | 38.246 | 0.693 | 2.316 | -5.81 | -5.013 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 81.235 | 38.242 | 0.696 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 81.155 | 38.246 | 0.693 | 2.316 | -5.81 | -5.013 |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 81.235 | 38.242 | -- | -- | -- | -- |
| **UCC** |81.195 | 38.242 | 0.701 | 2.332 | -5.825 | -9.953 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=81.195,+38.242" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=81.195%2038.242&output=json&radius=5&userEntry=theia1424" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2P/main/plots/UCC/theia1424.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2P/main/plots/UCC/theia1424.webp" alt="Theia 1424 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2P/main/plots/HUNT23/theia1424.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2P/main/plots/HUNT23/theia1424.webp" alt="Theia 1424 HUNT23">
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
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.857, diffAV50=1.657, MOD50=10.658, logAge50=8.597` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.68, dMod50=10.7, logAge50=8.71, [Fe/H]50=0.59` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=64.6694` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.13, MA23f=-0.23, MA23g=-0.03, MZ23=-0.07, MK24=-0.12, MF24=-0.13` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=169.819%20&lat=1.356&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="theia1424"
         data-ra-center="81.15"
         data-dec-center="38.25"
         data-rad-deg="10.1"
         data-plx="0.701">
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
|[CWNU 1732](/_clusters/cwnu1732/)| 92.0 | 81.174 | 38.242 | 0.706 | 2.317 | -5.825 | -9.953 |