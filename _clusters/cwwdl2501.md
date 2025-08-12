---
layout: post
title:  CWWDL 2501
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/cwwdl2501_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.42" 
     data-target="305.475 38.742"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G076.8+01.1</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span></td>
    <td style="text-align: center;">21</td>
    <td style="text-align: center;">12.6</td>
  </tr>
</table>
</div>

<div style="text-align: center;">
   <span style="color: #99180f; font-weight: bold;">Warning: </span><span>less than 25 stars with <i>P>0.5</i> were found</span>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22CWWDL%202501%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=cwwdl2501" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..266...36C) | 305.429 | 38.781 | 0.564 | -3.28 | -5.691 | -3.113 |
| **UCC** |305.475 | 38.742 | 0.561 | -3.283 | -5.684 | -- |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=305.475,+38.742" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=305.475%2038.742&output=json&radius=5&userEntry=cwwdl2501" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/cwwdl2501.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/cwwdl2501.webp" alt="CWWDL 2501 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..266...36C) | `logAge=6.2, Z=0.4` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=76.841%20&lat=1.02&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="cwwdl2501"
         data-ra-center="305.43"
         data-dec-center="38.78"
         data-rad-deg="12.6"
         data-plx="0.561">
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
|[FoF 2179](/_clusters/fof2179/)| 16.0 | 305.386 | 38.607 | 0.56 | -3.254 | -5.977 | -22.57 |
|[NGC 6913](/_clusters/ngc6913/)| 12.0 | 305.929 | 38.505 | 0.559 | -3.421 | -5.791 | -21.902 |
|[UBC 140](/_clusters/ubc140/)| 12.0 | 305.369 | 38.6 | 0.561 | -3.237 | -5.996 | -22.57 |
|[OC 0114](/_clusters/oc0114/)| 4.0 | 305.806 | 38.939 | 0.569 | -3.42 | -5.725 | 5.161 |
|[Berkeley 86](/_clusters/berkeley86/)| 4.0 | 305.081 | 38.707 | 0.562 | -3.441 | -5.433 | -0.478 |