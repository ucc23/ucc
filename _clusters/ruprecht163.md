---
layout: post
title:  Ruprecht 163
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/aladin/ruprecht163.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.817" 
     data-target="166.198 -67.922"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G293.1-07.1</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span></td>
    <td style="text-align: center;">18</td>
    <td style="text-align: center;">24.5</td>
  </tr>
</table>
</div>

<div style="text-align: center;">
   <span style="color: #99180f; font-weight: bold;">Warning: </span><span>less than 25 stars with <i>P>0.5</i> were found</span>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Ruprecht%20163%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ruprecht163" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | 166.213 | -67.95 | -- | -12.26 | 6.7 | -- |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 166.222 | -67.943 | -- | -12.26 | 6.7 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 166.172 | -67.998 | 1.042 | -5.825 | 0.139 | 16.195 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 165.791 | -67.617 | 1.043 | -- | -- | -- |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 165.791 | -67.617 | -- | -- | -- | -- |
| **UCC** |166.198 | -67.922 | 1.061 | -5.848 | 0.066 | 13.785 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=166.198,-67.922" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=166.198%20-67.922&output=json&radius=5&userEntry=ruprecht163" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/UCC/ruprecht163.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/UCC/ruprecht163.webp" alt="Ruprecht 163 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/HUNT23/ruprecht163.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/HUNT23/ruprecht163.webp" alt="Ruprecht 163 HUNT23">
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
| [Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | `E(B-V)=0.312, Dist=3019.0, Age=9.365` |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.312, distance=3019, log_age=9.365` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.381, diffAV50=0.818, MOD50=9.798, logAge50=8.573` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.39, dMod50=9.91, logAge50=8.79, [Fe/H]50=0.13` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.08, MA23f=-0.11, MZ23=-0.14, MK24=-0.08, MF24=-0.07` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=293.086%20&lat=-7.168&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ruprecht163"
         data-ra-center="166.2"
         data-dec-center="-67.97"
         data-rad-deg="24.5"
         data-plx="1.061">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
