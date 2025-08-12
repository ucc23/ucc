---
layout: post
title:  SAI 99
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/sai99_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.123" 
     data-target="134.492 -43.396"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G264.7+01.4</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span></td>
    <td style="text-align: center;">142</td>
    <td style="text-align: center;">3.7</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22SAI%2099%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=sai99" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Glushkova et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010AstL...36...75G) | 134.518 | -43.411 | -- | -- | -- | -- |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B) | 134.519 | -43.409 | -- | -- | -- | -- |
| **UCC** |134.492 | -43.396 | 0.162 | -3.129 | 2.919 | 103.703 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=134.492,-43.396" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=134.492%20-43.396&output=json&radius=5&userEntry=sai99" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/sai99.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/UCC/sai99.webp" alt="SAI 99 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Glushkova et al. (2010)](https://ui.adsabs.harvard.edu/abs/2010AstL...36...75G) | `E(B-V)=1.84, Dm=12.6, Age=8.95` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=264.698%20&lat=1.483&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="sai99"
         data-ra-center="134.52"
         data-dec-center="-43.41"
         data-rad-deg="3.7"
         data-plx="0.162">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
