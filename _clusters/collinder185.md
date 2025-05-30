---
layout: post
title:  Collinder 185
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.233" 
     data-target="125.833 -36.365"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G255.0+00.5</h3></td>
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
    <td>0.65</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td>95</td>
    <td>7.0</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Collinder%20185%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=collinder185" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 125.835 | -36.33 | -- | -5.61 | 4.01 | -- |
|[Bossini et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B) | 125.833 | -36.349 | -- | -- | -- | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 125.833 | -36.349 | 0.626 | -4.924 | 3.879 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 125.818 | -36.346 | 0.63 | -4.913 | 3.888 | -- |
|[Jaehnig et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J) | 125.831 | -36.349 | 0.65 | -5.005 | 3.855 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 125.827 | -36.357 | 0.643 | -4.939 | 3.873 | 28.179 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 125.911 | -36.421 | 0.643 | -- | -- | -- |
| **UCC** |125.833 | -36.365 | 0.645 | -4.949 | 3.876 | 32.28 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=125.833,-36.365" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=125.833%20-36.365&output=json&radius=5&userEntry=collinder185" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185.webp" alt="Collinder 185 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185_HUNT23.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185_HUNT23.webp" alt="Collinder 185 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185_CANTAT20.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/collinder185_CANTAT20.webp" alt="Collinder 185 CANTAT20">
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
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.25, distance=1477, log_age=8.18` |
| [Bossini et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B) | `AV=0.692, Dist=10.984, logA=7.698, Fe/H=0.0` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.61, DMNN=10.97, AgeNN=7.79` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.647, Dist=1423, logage=8.015, [Fe/H]=0.103` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.534, diffAV50=0.666, MOD50=10.822, logAge50=8.027` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.67, dMod50=10.78, logAge50=8.04, [Fe/H]50=0.18` |

<br>
<font color="b3b1b1"><i>Last modified: 2025-05-25</i></font>
