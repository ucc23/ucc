---
layout: post
title:  Collinder 428
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/aladin/collinder428.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.043" 
     data-target="315.741 44.503"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G086.1-01.4</h3></td>
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
    <td style="text-align: center;">48</td>
    <td style="text-align: center;">1.3</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Collinder%20428%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=collinder428" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | 315.8 | 44.583 | -- | -3.13 | -1.47 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | 315.795 | 44.583 | -- | -1.213 | -0.257 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 315.742 | 44.5 | 0.088 | -2.889 | -3.063 | -72.031 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 315.744 | 44.495 | 0.097 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 315.742 | 44.5 | 0.088 | -2.889 | -3.063 | -72.031 |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 315.745 | 44.495 | -- | -- | -- | -- |
| **UCC** |315.741 | 44.503 | 0.098 | -2.911 | -3.039 | -86.071 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=315.741,+44.503" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=315.741%2044.503&output=json&radius=5&userEntry=collinder428" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/UCC/collinder428.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/UCC/collinder428.webp" alt="Collinder 428 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/HUNT23/collinder428.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/HUNT23/collinder428.webp" alt="Collinder 428 HUNT23">
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
| [Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | `E(B-V)=0.1, Dist=1000.0` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | `E(B-V)=0.453, Dmod=12.651, logt=8.78` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=2.901, diffAV50=1.566, MOD50=14.426, logAge50=8.198` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=1.83, dMod50=13.31, logAge50=8.9, [Fe/H]50=0.39` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=1156.43` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.23, MA23f=-0.46, MZ23=-0.34, MK24=-0.36, MF24=-0.63` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=86.122%20&lat=-1.429&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="collinder428"
         data-ra-center="315.77"
         data-dec-center="44.54"
         data-rad-deg="1.3"
         data-plx="0.098">
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
|[CWNU 3030](/_clusters/cwnu3030/)| 89.6 | 315.741 | 44.497 | 0.113 | -2.897 | -3.039 | -72.05 |