---
layout: post
title:  Ferrero 17
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/aladin/ferrero17.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.05" 
     data-target="77.194 17.982"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G184.5-13.0</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td style="text-align: center;">24</td>
    <td style="text-align: center;">1.5</td>
  </tr>
</table>
</div>

<div style="text-align: center;">
   <span style="color: #99180f; font-weight: bold;">Warning: </span><span>less than 25 stars with <i>P>0.5</i> were found</span>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Ferrero%2017%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ferrero17" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B) | 77.183 | 17.987 | -- | -- | -- | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 77.186 | 17.987 | 0.187 | 1.031 | -0.659 | -- |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 77.198 | 17.957 | 0.187 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 77.186 | 17.987 | 0.187 | 1.031 | -0.659 | -- |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 77.198 | 17.957 | -- | -- | -- | -- |
| **UCC** |77.194 | 17.982 | 0.193 | 0.99 | -0.638 | 22.971 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=77.194,+17.982" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=77.194%2017.982&output=json&radius=5&userEntry=ferrero17" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ferrero17.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ferrero17.webp" alt="Ferrero 17 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/HUNT23/ferrero17.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/HUNT23/ferrero17.webp" alt="Ferrero 17 HUNT23">
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
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.401, diffAV50=1.126, MOD50=13.326, logAge50=9.477` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=1.45, dMod50=13.17, logAge50=9.23, [Fe/H]50=-0.22` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=283.137` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.47, MA23f=-0.57, MZ23=-0.54, MK24=-0.36, MF24=-0.31` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=184.574%20&lat=-13.054&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ferrero17"
         data-ra-center="77.18"
         data-dec-center="17.99"
         data-rad-deg="1.5"
         data-plx="0.193">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
