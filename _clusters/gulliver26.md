---
layout: post
title:  Gulliver 26
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/aladin/gulliver26.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.153" 
     data-target="80.681 35.273"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G172.0-00.6</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span></td>
    <td style="text-align: center;">131</td>
    <td style="text-align: center;">4.6</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Gulliver%2026%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=gulliver26" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 80.689 | 35.27 | 0.36 | 2.018 | -2.874 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 80.705 | 35.277 | 0.359 | 2.05 | -2.904 | 2.559 |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 80.688 | 35.274 | 0.364 | 1.852 | -2.846 | 32.376 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 80.682 | 35.271 | 0.359 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 80.688 | 35.274 | 0.364 | 1.852 | -2.846 | 32.376 |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 80.682 | 35.271 | -- | -- | -- | -- |
| **UCC** |80.681 | 35.273 | 0.376 | 1.851 | -2.856 | 14.269 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=80.681,+35.273" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=80.681%2035.273&output=json&radius=5&userEntry=gulliver26" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/UCC/gulliver26.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/UCC/gulliver26.webp" alt="Gulliver 26 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/HUNT23/gulliver26.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/HUNT23/gulliver26.webp" alt="Gulliver 26 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/CANTAT20/gulliver26.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q2N/main/plots/CANTAT20/gulliver26.webp" alt="Gulliver 26 CANTAT20">
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
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.62, DMNN=12.13, AgeNN=8.58` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=2.221, Dist=2554, logage=7.516, [Fe/H]=-0.024` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=1.884, diffAV50=1.283, MOD50=11.932, logAge50=8.597` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=1.53, dMod50=11.81, logAge50=8.89, [Fe/H]50=0.42` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=625.187` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.28, MA23f=-0.38, MA23g=-0.16, MZ23=-0.34, MK24=-0.15, MF24=-0.28` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=172.044%20&lat=-0.619&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="gulliver26"
         data-ra-center="80.69"
         data-dec-center="35.27"
         data-rad-deg="4.6"
         data-plx="0.376">
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
|[HXWHB 7](/_clusters/hxwhb7/)| 6.9 | 80.64 | 35.32 | 0.55 | 1.542 | -2.872 | 5.901 |