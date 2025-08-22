---
layout: post
title:  CMa 02
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/aladin/cma02.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.353" 
     data-target="105.681 -7.749"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G221.1-01.0a</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td style="text-align: center;">66</td>
    <td style="text-align: center;">10.6</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22CMa%2002%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=cma02" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S) | 105.68 | -7.74 | 0.87 | -1.59 | -3.45 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 105.682 | -7.757 | 0.873 | -1.576 | -3.467 | 5.707 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 105.67 | -7.71 | 0.873 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 105.682 | -7.757 | 0.873 | -1.576 | -3.467 | 5.707 |
| **UCC** |105.681 | -7.749 | 0.876 | -1.59 | -3.484 | 5.879 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=105.681,-7.749" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=105.681%20-7.749&output=json&radius=5&userEntry=cma02" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/cma02.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/cma02.webp" alt="CMa 02 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/HUNT23/cma02.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/HUNT23/cma02.webp" alt="CMa 02 HUNT23">
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
| [Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S) | `AVPM=0.99, AVPf=1.25, DPM=1071, DPf=1020.0, AgeM=137.0, AgeF=125, [Fe/H]M=-0.15, [Fe/H]f=-0.48` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.505, diffAV50=0.424, MOD50=10.121, logAge50=8.379` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.34, dMod50=10.77, logAge50=8.58, [Fe/H]50=1.09` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=170.615` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=221.111%20&lat=-1.049&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="cma02"
         data-ra-center="105.68"
         data-dec-center="-7.75"
         data-rad-deg="10.6"
         data-plx="0.876">
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
|[HXHWL 32](/_clusters/hxhwl32/)| 98.5 | 105.681 | -7.744 | 0.876 | -1.588 | -3.484 | 6.472 |
|[H21OC 32](/_clusters/h21oc32/)| 97.0 | 105.681 | -7.739 | 0.876 | -1.588 | -3.483 | 6.472 |
|[CWWDL 14378](/_clusters/cwwdl14378/)| 77.3 | 105.681 | -7.72 | 0.876 | -1.583 | -3.482 | 5.879 |