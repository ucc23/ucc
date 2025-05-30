---
layout: post
title:  COIN-Gaia 25
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.553" 
     data-target="91.713 20.309"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G189.8-00.2a</h3></td>
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
    <td>0.83</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td>123</td>
    <td>16.6</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22COIN-Gaia%2025%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=coingaia25" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 91.691 | 20.276 | 1.201 | -0.499 | -2.595 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 91.677 | 20.253 | 1.208 | -0.51 | -2.632 | -14.298 |
|[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | 91.812 | 20.451 | 1.231 | -0.5 | -2.652 | -- |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | 91.678 | 20.3 | 1.231 | -0.507 | -2.646 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 91.662 | 20.457 | 1.226 | -0.492 | -2.651 | -13.562 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 91.66 | 20.272 | 1.228 | -- | -- | -- |
| **UCC** |91.713 | 20.309 | 1.23 | -0.5 | -2.644 | -14.476 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=91.713,+20.309" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=91.713%2020.309&output=json&radius=5&userEntry=coingaia25" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25.webp" alt="COIN-Gaia 25 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25_HUNT23.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25_HUNT23.webp" alt="COIN-Gaia 25 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25_CANTAT20.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/coingaia25_CANTAT20.webp" alt="COIN-Gaia 25 CANTAT20">
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
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.38, DMNN=9.58, AgeNN=8.75` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.609, Dist=774, logage=8.796, [Fe/H]=0.012` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | `Dist=806, logAgeNN=8.78` |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | `A0=0.85, logAge=8.5` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.359, diffAV50=0.708, MOD50=9.439, logAge50=8.759` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.65, dMod50=9.57, logAge50=8.69, [Fe/H]50=0.31` |

### Probable <a href="https://ucc.ar/faq#how-are-probable-duplicates-identified" title="See FAQ for definition of proximity">duplicates</a>

| Cluster | P (%) | RA    | DEC   | Plx   | pmRA  | pmDE  | Rv    |
| :---:   | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[CWWDL 14374](/_clusters/cwwdl14374/)| 98 | 91.713 | 20.305 | 1.23 | -0.5 | -2.644 | -14.476 |


<br>
<font color="b3b1b1"><i>Last modified: 2025-05-25</i></font>
