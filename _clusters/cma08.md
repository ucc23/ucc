---
layout: post
title:  CMa 08
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/cma08_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.477" 
     data-target="107.43 -12.276"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G225.9-01.5</h3></td>
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
    <td style="text-align: center;">132</td>
    <td style="text-align: center;">14.3</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22CMa%2008%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=cma08" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S) | 107.43 | -12.3 | 0.84 | -3.13 | 0.87 | -- |
| **UCC** |107.43 | -12.276 | 0.856 | -3.149 | 0.882 | 26.435 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=107.43,-12.276" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=107.43%20-12.276&output=json&radius=5&userEntry=cma08" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/cma08.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/cma08.webp" alt="CMa 08 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S) | `AVPs=1.01;0.99, DPs=1138;1005.0, Ages=18.0;18, [Fe/H]s=0.05;0.05` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=225.921%20&lat=-1.545&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="cma08"
         data-ra-center="107.43"
         data-dec-center="-12.3"
         data-rad-deg="14.3"
         data-plx="0.856">
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
|[CWWDL 14345](/_clusters/cwwdl14345/)| 40.2 | 107.433 | -12.139 | 0.867 | -3.197 | 0.922 | 22.81 |
|[CWWDL 14343](/_clusters/cwwdl14343/)| 22.0 | 107.359 | -12.038 | 0.854 | -3.281 | 0.961 | 21.103 |
|[OC 0379](/_clusters/oc0379/)| 22.0 | 107.565 | -12.446 | 0.841 | -3.047 | 0.84 | 25.919 |
|[OC 0377](/_clusters/oc0377/)| 21.2 | 107.417 | -12.038 | 0.853 | -3.258 | 0.937 | 20.73 |
|[XDOCC 3](/_clusters/xdocc3/)| 0.8 | 106.913 | -13.034 | 0.86 | -3.376 | 0.605 | 29.192 |