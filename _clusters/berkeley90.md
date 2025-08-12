---
layout: post
title:  Berkeley 90
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/berkeley90_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.143" 
     data-target="308.818 46.843"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G084.8+03.7</h3></td>
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
    <td style="text-align: center;">189</td>
    <td style="text-align: center;">4.3</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Berkeley%2090%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=berkeley90" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | 308.825 | 46.833 | -- | -2.13 | -0.52 | -- |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 308.812 | 46.841 | -- | -2.09 | -0.63 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | 308.805 | 46.841 | -- | -0.267 | -0.155 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 308.819 | 46.843 | 0.302 | -2.829 | -4.369 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 308.812 | 46.844 | 0.343 | -2.875 | -4.367 | -19.413 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 308.823 | 46.841 | 0.342 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 308.812 | 46.844 | 0.343 | -2.875 | -4.367 | -19.413 |
| **UCC** |308.818 | 46.843 | 0.333 | -2.869 | -4.364 | -45.116 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=308.818,+46.843" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=308.818%2046.843&output=json&radius=5&userEntry=berkeley90" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/berkeley90.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/berkeley90.webp" alt="Berkeley 90 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/HUNT23/berkeley90.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/HUNT23/berkeley90.webp" alt="Berkeley 90 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/CANTAT20/berkeley90.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/CANTAT20/berkeley90.webp" alt="Berkeley 90 CANTAT20">
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
| [Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | `E(B-V)=1.19, Dist=2070.0, Age=8.05` |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=1.187, distance=2652, log_age=8.3` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | `E(B-V)=0.655, Dmod=11.066, logt=9.02` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=3.6, DMNN=12.4, AgeNN=6.71` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=3.901, diffAV50=2.824, MOD50=12.201, logAge50=6.876` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=3.85, dMod50=11.99, logAge50=7.65, [Fe/H]50=0.42` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=1923.03` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=84.882%20&lat=3.796&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="berkeley90"
         data-ra-center="308.82"
         data-dec-center="46.84"
         data-rad-deg="4.3"
         data-plx="0.333">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
