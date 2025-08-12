---
layout: post
title:  Pismis 5
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/pismis5_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.36" 
     data-target="129.409 -39.619"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G259.3+00.9</h3></td>
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
    <td style="text-align: center;">360</td>
    <td style="text-align: center;">10.8</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Pismis%205%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=pismis5" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Dambis (1999)](https://ui.adsabs.harvard.edu/abs/1999AstL...25....7D) | 129.408 | -39.584 | -- | -- | -- | -- |
|[Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | 129.408 | -39.583 | -- | -4.9 | 2.84 | -- |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 129.416 | -39.58 | -- | -6.96 | 4.25 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | 129.405 | -39.583 | -- | -4.9 | 2.84 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 129.407 | -39.603 | 1.026 | -5.494 | 4.275 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 129.373 | -39.645 | 1.038 | -5.493 | 4.267 | -- |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | 129.494 | -40.213 | 1.082 | -5.555 | 3.762 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 129.414 | -39.584 | 1.065 | -5.476 | 4.27 | 12.031 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 129.396 | -39.631 | 1.065 | -- | -- | -- |
|[Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | 129.397 | -39.969 | 1.029 | -5.561 | 3.981 | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 129.414 | -39.584 | 1.065 | -5.476 | 4.27 | 12.031 |
| **UCC** |129.409 | -39.619 | 1.055 | -5.475 | 4.255 | 19.644 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=129.409,-39.619" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=129.409%20-39.619&output=json&radius=5&userEntry=pismis5" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/pismis5.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/pismis5.webp" alt="Pismis 5 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/HUNT23/pismis5.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/HUNT23/pismis5.webp" alt="Pismis 5 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/CANTAT20/pismis5.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/CANTAT20/pismis5.webp" alt="Pismis 5 CANTAT20">
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
| [Dambis (1999)](https://ui.adsabs.harvard.edu/abs/1999AstL...25....7D) | `E_B-V_=0.552, DM0=9.75, log_age_=7.7` |
| [Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | `E(B-V)=0.421, Dist=869.0, Age=7.197` |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.833, distance=702, log_age=7.3` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | `E(B-V)=0.421, Dmod=9.695, logt=7.197` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.48, DMNN=9.87, AgeNN=7` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=1.388, Dist=921, logage=6.883, [Fe/H]=-0.034` |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | `A0=1.35, logAge=6.55` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=1.588, diffAV50=2.097, MOD50=9.789, logAge50=6.637` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=1.76, dMod50=9.85, logAge50=6.38, [Fe/H]50=-0.29` |
| [Alfonso et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A) | `AV=1.47772, MOD=9.85055, logAge=6.98722, Z=-0.0335` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=298.426` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=259.352%20&lat=0.913&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="pismis5"
         data-ra-center="129.41"
         data-dec-center="-39.6"
         data-rad-deg="10.8"
         data-plx="1.055">
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
|[FoF 2221](/_clusters/fof2221/)| 13.1 | 129.428 | -40.234 | 1.058 | -5.616 | 3.77 | 21.566 |
|[OC 0460](/_clusters/oc0460/)| 6.9 | 129.398 | -39.587 | 1.067 | -5.512 | 4.313 | 11.446 |