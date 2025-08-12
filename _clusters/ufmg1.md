---
layout: post
title:  UFMG 1
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/ufmg1_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.2" 
     data-target="236.581 -56.797"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G325.1-01.6d</h3></td>
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
    <td style="text-align: center;">335</td>
    <td style="text-align: center;">6.0</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22UFMG%201%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ufmg1" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Ferreira et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F) | 236.616 | -56.808 | -- | -1.634 | -3.22 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 236.593 | -56.792 | 0.36 | -1.63 | -3.196 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 236.587 | -56.796 | 0.375 | -1.632 | -3.207 | -- |
| **UCC** |236.581 | -56.797 | 0.374 | -1.668 | -3.227 | -43.977 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=236.581,-56.797" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=236.581%20-56.797&output=json&radius=5&userEntry=ufmg1" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/UCC/ufmg1.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/UCC/ufmg1.webp" alt="UFMG 1 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/CANTAT20/ufmg1.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4N/main/plots/CANTAT20/ufmg1.webp" alt="UFMG 1 CANTAT20">
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
| [Ferreira et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F) | `E(B-V)=0.75, m-M=11.0, logt=8.9, [Fe/H]=-0.2` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=2.38, DMNN=11.9, AgeNN=8.43` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=2.385, Dist=1902, logage=8.412, [Fe/H]=0.003` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=325.182%20&lat=-1.683&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ufmg1"
         data-ra-center="236.59"
         data-dec-center="-56.79"
         data-rad-deg="6.0"
         data-plx="0.374">
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
|[UBC 306](/_clusters/ubc306/)| 99.7 | 236.574 | -56.803 | 0.373 | -1.685 | -3.225 | -43.623 |
|[FoF 1180](/_clusters/fof1180/)| 53.7 | 236.576 | -56.804 | 0.376 | -1.684 | -3.217 | -45.532 |
|[CWWDL 5648](/_clusters/cwwdl5648/)| 28.1 | 236.583 | -56.801 | 0.381 | -1.68 | -3.219 | -43.576 |
|[OC 0633](/_clusters/oc0633/)| 10.7 | 236.593 | -56.802 | 0.38 | -1.672 | -3.205 | 99.625 |