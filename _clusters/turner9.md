---
layout: post
title:  Turner 9
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/aladin/turner9.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.23" 
     data-target="296.182 29.501"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G064.9+02.6</h3></td>
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
    <td style="text-align: center;">99</td>
    <td style="text-align: center;">6.9</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Turner%209%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=turner9" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | 296.204 | 29.265 | -- | -1.62 | -4.35 | -18.52 |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 296.205 | 29.26 | -- | 0.63 | -3.6 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 296.165 | 29.494 | 0.563 | 0.346 | -2.399 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 296.127 | 29.514 | 0.559 | 0.347 | -2.398 | -12.753 |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 296.182 | 29.498 | 0.548 | 0.316 | -2.457 | -19.644 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 296.185 | 29.513 | 0.548 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 296.182 | 29.498 | 0.548 | 0.316 | -2.457 | -19.644 |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 296.185 | 29.513 | -- | -- | -- | -- |
| **UCC** |296.182 | 29.501 | 0.564 | 0.313 | -2.431 | 0.976 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=296.182,+29.501" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=296.182%2029.501&output=json&radius=5&userEntry=turner9" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/turner9.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/turner9.webp" alt="Turner 9 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/HUNT23/turner9.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/HUNT23/turner9.webp" alt="Turner 9 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/CANTAT20/turner9.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/CANTAT20/turner9.webp" alt="Turner 9 CANTAT20">
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
| [Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | `Dist=852.0, Age=8.2` |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.15, distance=852, log_age=8.03` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.85, DMNN=11.25, AgeNN=8.49` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.705, Dist=1614, logage=8.565, [Fe/H]=0.289` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.602, diffAV50=1.136, MOD50=11.172, logAge50=8.78` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.77, dMod50=11.17, logAge50=8.73, [Fe/H]50=0.2` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=467.888` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.1, MA23f=-0.13, MA23g=-0.03, MZ23=0.16, MK24=-0.06, MF24=0.0` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=64.948%20&lat=2.649&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="turner9"
         data-ra-center="296.17"
         data-dec-center="29.49"
         data-rad-deg="6.9"
         data-plx="0.564">
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
|[CWWDL 14017](/_clusters/cwwdl14017/)| 72.7 | 296.18 | 29.497 | 0.568 | 0.303 | -2.447 | -0.884 |