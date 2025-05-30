---
layout: post
title:  CWNU 45
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/cwnu45_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="1.087" 
     data-target="107.917 -27.867"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G240.1-08.2</h3></td>
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
    <td>1.0</td>
    <td>0.76</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td>106</td>
    <td>32.6</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22CWNU%2045%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=cwnu45" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H) | 107.845 | -27.911 | 1.67 | -3.26 | 6.35 | 44.4 |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 108.099 | -27.984 | 1.613 | -3.139 | 6.275 | 36.461 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 108.283 | -28.061 | 1.618 | -- | -- | -- |
| **UCC** |107.917 | -27.867 | 1.645 | -3.207 | 6.349 | 36.671 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=107.917,-27.867" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=107.917%20-27.867&output=json&radius=5&userEntry=cwnu45" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/cwnu45.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/cwnu45.webp" alt="CWNU 45 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/cwnu45_HUNT23.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/cwnu45_HUNT23.webp" alt="CWNU 45 HUNT23">
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
| :---         |     :---:      |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H) | `AG=0.05, m-M=8.7, logAge=7.6, Z=0.024` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.128, diffAV50=0.597, MOD50=8.861, logAge50=7.52` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.33, dMod50=9.1, logAge50=7.08, [Fe/H]50=0.06` |

<br>
<font color="b3b1b1"><i>Last modified: 2025-05-25</i></font>
