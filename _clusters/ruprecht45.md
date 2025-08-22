---
layout: post
title:  Ruprecht 45
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/aladin/ruprecht45.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.167" 
     data-target="119.895 -16.293"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G235.3+07.0</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td style="text-align: center;">257</td>
    <td style="text-align: center;">5.0</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Ruprecht%2045%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ruprecht45" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 119.876 | -16.305 | -- | -4.58 | 0.19 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 119.894 | -16.292 | 0.192 | -2.712 | 2.817 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 119.892 | -16.284 | 0.195 | -2.697 | 2.831 | 97.63 |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 119.9 | -16.291 | 0.21 | -2.669 | 2.851 | 98.771 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 119.892 | -16.295 | 0.209 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 119.9 | -16.291 | 0.21 | -2.669 | 2.851 | 98.771 |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 119.892 | -16.295 | -- | -- | -- | -- |
| **UCC** |119.895 | -16.293 | 0.213 | -2.682 | 2.844 | 97.414 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=119.895,-16.293" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=119.895%20-16.293&output=json&radius=5&userEntry=ruprecht45" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/ruprecht45.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/ruprecht45.webp" alt="Ruprecht 45 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/HUNT23/ruprecht45.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/HUNT23/ruprecht45.webp" alt="Ruprecht 45 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/CANTAT20/ruprecht45.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/CANTAT20/ruprecht45.webp" alt="Ruprecht 45 CANTAT20">
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
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.062, distance=1888, log_age=9.3` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.2, DMNN=13.03, AgeNN=9.5` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.32, Dist=4228, logage=9.557, [Fe/H]=-0.307` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.093, diffAV50=0.961, MOD50=13.025, logAge50=9.312` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.84, dMod50=12.27, logAge50=9.55, [Fe/H]50=-1.02` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=961.487` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.25, MA23f=-0.47, MA23g=-0.42, MZ23=-0.46, MK24=-0.39, MF24=-0.35` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=235.308%20&lat=7.025&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ruprecht45"
         data-ra-center="119.89"
         data-dec-center="-16.29"
         data-rad-deg="5.0"
         data-plx="0.213">
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
|[OC 0402](/_clusters/oc0402/)| 21.8 | 119.886 | -16.295 | 0.225 | -2.65 | 2.85 | 96.821 |