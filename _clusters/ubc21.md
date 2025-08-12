---
layout: post
title:  UBC 21
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/ubc21_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="1.537" 
     data-target="130.507 -20.723"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G244.6+12.9</h3></td>
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
    <td style="text-align: center;">26</td>
    <td style="text-align: center;">46.1</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22UBC%2021%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ubc21" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Castro-Ginard et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C) | 130.35 | -20.685 | 1.12 | -6.511 | 2.482 | -- |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B) | 130.318 | -20.697 | -- | -- | -- | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 130.455 | -20.747 | 1.118 | -6.5 | 2.464 | -- |
|[Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | 130.342 | -22.272 | 0.932 | -6.046 | 2.418 | -- |
| **UCC** |130.507 | -20.723 | 1.107 | -6.471 | 2.541 | 19.418 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=130.507,-20.723" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=130.507%20-20.723&output=json&radius=5&userEntry=ubc21" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/ubc21.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/ubc21.webp" alt="UBC 21 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/CANTAT20/ubc21.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/CANTAT20/ubc21.webp" alt="UBC 21 CANTAT20">
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
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.1, DMNN=9.82, AgeNN=8.48` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | `Dist=894, logAgeNN=8.47` |
| [Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | `AV=0.09865, MOD=9.82086, logAge=9.56185, Z=0.00916` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=244.773%20&lat=13.059&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ubc21"
         data-ra-center="130.46"
         data-dec-center="-20.75"
         data-rad-deg="46.1"
         data-plx="1.107">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
