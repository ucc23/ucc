---
layout: post
title:  Gulliver 27
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/aladin/gulliver27.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.083" 
     data-target="146.085 -54.109"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G277.6-00.6</h3></td>
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
    <td style="text-align: center;">121</td>
    <td style="text-align: center;">2.5</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Gulliver%2027%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=gulliver27" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 146.088 | -54.117 | 0.322 | -4.658 | 3.467 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 146.08 | -54.115 | 0.322 | -4.662 | 3.467 | 18.368 |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 146.088 | -54.112 | 0.333 | -4.656 | 3.442 | 16.662 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 146.089 | -54.108 | 0.332 | -- | -- | -- |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 146.089 | -54.108 | -- | -- | -- | -- |
| **UCC** |146.085 | -54.109 | 0.331 | -4.645 | 3.446 | 17.293 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=146.085,-54.109" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=146.085%20-54.109&output=json&radius=5&userEntry=gulliver27" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/UCC/gulliver27.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/UCC/gulliver27.webp" alt="Gulliver 27 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/HUNT23/gulliver27.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/HUNT23/gulliver27.webp" alt="Gulliver 27 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/CANTAT20/gulliver27.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/CANTAT20/gulliver27.webp" alt="Gulliver 27 CANTAT20">
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
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.09, DMNN=12.17, AgeNN=8.78` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=1.67, Dist=2530, logage=8.535, [Fe/H]=0.022` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=1.449, diffAV50=0.933, MOD50=12.12, logAge50=8.422` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=1.42, dMod50=11.94, logAge50=8.74, [Fe/H]50=0.08` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.11, MA23f=-0.36, MA23g=-0.1, MZ23=-0.19, MK24=-0.2, MF24=-0.3` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=277.645%20&lat=-0.695&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="gulliver27"
         data-ra-center="146.09"
         data-dec-center="-54.12"
         data-rad-deg="2.5"
         data-plx="0.331">
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
|[Teutsch 68](/_clusters/teutsch68/)| 81.0 | 146.084 | -54.112 | 0.331 | -4.644 | 3.445 | 17.293 |