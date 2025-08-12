---
layout: post
title:  UBC 4
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/ubc4_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.803" 
     data-target="60.906 35.385"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G161.4-12.7</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span></td>
    <td style="text-align: center;">26</td>
    <td style="text-align: center;">24.1</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22UBC%204%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ubc4" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Castro-Ginard et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C) | 60.968 | 35.357 | 1.645 | -0.75 | -5.725 | 3.67 |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 61.002 | 35.347 | 1.649 | -0.759 | -5.696 | -- |
|[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | 60.737 | 35.55 | 1.66 | -0.799 | -5.743 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 60.658 | 35.561 | 1.669 | -0.717 | -5.728 | 0.441 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 60.861 | 35.456 | 1.671 | -- | -- | -- |
|[Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | 60.65 | 35.621 | 1.633 | -0.789 | -5.756 | -- |
| **UCC** |60.906 | 35.385 | 1.681 | -0.788 | -5.737 | 0.746 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=60.906,+35.385" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=60.906%2035.385&output=json&radius=5&userEntry=ubc4" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/UCC/ubc4.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/UCC/ubc4.webp" alt="UBC 4 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/HUNT23/ubc4.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/HUNT23/ubc4.webp" alt="UBC 4 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/CANTAT20/ubc4.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/CANTAT20/ubc4.webp" alt="UBC 4 CANTAT20">
</a>
</div>
</div>
<div class="indicators">
<label for="slide1">1</label>
<label for="slide2">2</label>
<label for="slide3">3</label>
</div>
</div>


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.54, DMNN=8.91, AgeNN=8.72` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | `Dist=595, logAgeNN=8.74` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.741, diffAV50=1.242, MOD50=8.779, logAge50=8.315` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.87, dMod50=8.86, logAge50=8.44, [Fe/H]50=0.26` |
| [Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | `AV=0.54021, MOD=8.90968, logAge=8.88672, Z=-0.1117` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=161.436%20&lat=-12.695&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ubc4"
         data-ra-center="61.0"
         data-dec-center="35.35"
         data-rad-deg="24.1"
         data-plx="1.681">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
