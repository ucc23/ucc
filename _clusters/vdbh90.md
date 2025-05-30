---
layout: post
title:  VDBH 90
---
<h3><span style="color: #808080;"><i>(vdBergh-Hagen 90; BH 90)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.123" 
     data-target="153.064 -58.069"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G283.1-01.4a</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th><a href="https://ucc.ar/faq#what-are-the-c1-c2-and-c3-parameters" title="Photometric class">C1</a></th>
    <th><a href="https://ucc.ar/faq#what-are-the-c1-c2-and-c3-parameters" title="Density class">C2</a></th>
    <th><a href="https://ucc.ar/faq#what-are-the-c1-c2-and-c3-parameters" title="Combined class">C3</a></th>
    <th><div title="Stars with membership probability >50%">N_50</div></th>
    <th><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td>0.99</td>
    <td>0.77</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td>351</td>
    <td>3.7</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22VDBH%2090%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=vdbh90" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 153.045 | -58.06 | -- | -1.69 | 3.14 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 153.064 | -58.069 | 0.369 | -5.385 | 2.295 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 153.07 | -58.07 | 0.352 | -5.386 | 2.309 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 153.052 | -58.075 | 0.374 | -5.409 | 2.35 | 25.524 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 153.081 | -58.067 | 0.375 | -- | -- | -- |
| **UCC** |153.064 | -58.069 | 0.373 | -5.403 | 2.337 | 27.488 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=153.064,-58.069" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=153.064%20-58.069&output=json&radius=5&userEntry=vdbh90" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90.webp" alt="VDBH 90 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90_HUNT23.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90_HUNT23.webp" alt="VDBH 90 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90_CANTAT20.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/vdbh90_CANTAT20.webp" alt="VDBH 90 CANTAT20">
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
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.541, distance=1928, log_age=8.465` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.39, DMNN=12.23, AgeNN=8.1` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=1.785, Dist=2294, logage=8.312, [Fe/H]=-0.016` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=1.974, diffAV50=2.392, MOD50=11.931, logAge50=7.848` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=1.85, dMod50=11.7, logAge50=8.36, [Fe/H]50=0.09` |

### Probable <a href="https://ucc.ar/faq#how-are-probable-duplicates-identified" title="See FAQ for definition of proximity">duplicates</a>

| Cluster | P (%) | RA    | DEC   | Plx   | pmRA  | pmDE  | Rv    |
| :---:   | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[Bochum 8](/_clusters/bochum8/)| 96 | 153.06 | -58.069 | 0.375 | -5.399 | 2.339 | 25.531 |


<br>
<font color="b3b1b1"><i>Last modified: 2025-05-25</i></font>
