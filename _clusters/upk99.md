---
layout: post
title:  UPK 99
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/aladin/upk99.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.777" 
     data-target="312.459 25.556"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G069.6-11.5</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span></td>
    <td style="text-align: center;">20</td>
    <td style="text-align: center;">23.3</td>
  </tr>
</table>
</div>

<div style="text-align: center;">
   <span style="color: #99180f; font-weight: bold;">Warning: </span><span>less than 25 stars with <i>P>0.5</i> were found</span>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22UPK%2099%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=upk99" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | 312.486 | 25.604 | -- | 0.27 | -7.84 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 312.427 | 25.488 | 1.291 | 0.422 | -8.02 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 312.423 | 25.505 | 1.276 | 0.351 | -7.897 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 312.479 | 25.561 | 1.258 | 0.225 | -7.911 | -11.93 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 312.476 | 25.713 | 1.256 | -- | -- | -- |
|[Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | 312.567 | 25.552 | 1.174 | 0.38 | -7.667 | -- |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 312.476 | 25.713 | -- | -- | -- | -- |
| **UCC** |312.459 | 25.556 | 1.249 | 0.311 | -7.976 | -15.464 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=312.459,+25.556" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=312.459%2025.556&output=json&radius=5&userEntry=upk99" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/UCC/upk99.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/UCC/upk99.webp" alt="UPK 99 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/HUNT23/upk99.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/HUNT23/upk99.webp" alt="UPK 99 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/CANTAT20/upk99.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/CANTAT20/upk99.webp" alt="UPK 99 CANTAT20">
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
| [Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | `d_pc=783, log(age)=8.1` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.28, DMNN=9.41, AgeNN=8.2` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.513, Dist=771, logage=8.327, [Fe/H]=-0.1` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | `Dist=747, logAgeNN=8.22` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.227, diffAV50=0.396, MOD50=9.416, logAge50=8.335` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.06, dMod50=9.53, logAge50=8.91, [Fe/H]50=0.27` |
| [Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | `AV=0.27981, MOD=9.40996, logAge=8.12905, Z=-0.1000` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.21, MA23f=0.0, MZ23=0.04, MK24=-0.02, MF24=0.05` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=69.776%20&lat=-11.513&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="upk99"
         data-ra-center="312.43"
         data-dec-center="25.49"
         data-rad-deg="23.3"
         data-plx="1.249">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
