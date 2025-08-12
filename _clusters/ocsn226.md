---
layout: post
title:  OCSN 226
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/aladin/ocsn226.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.527" 
     data-target="83.816 -5.959"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G209.5-19.6b</h3></td>
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
    <td style="text-align: center;">341</td>
    <td style="text-align: center;">15.8</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22OCSN%20226%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ocsn226" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | 83.82 | -5.92 | 2.62 | 1.28 | 0.56 | 26.66 |
| **UCC** |83.816 | -5.959 | 2.607 | 1.257 | 0.551 | 23.018 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=83.816,-5.959" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=83.816%20-5.959&output=json&radius=5&userEntry=ocsn226" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn226.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn226.webp" alt="OCSN 226 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | `E(B-V)=0.07, m-M=8.11, logt=6.75` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=209.543%20&lat=-19.643&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ocsn226"
         data-ra-center="83.82"
         data-dec-center="-5.92"
         data-rad-deg="15.8"
         data-plx="2.607">
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
|[UBC 208](/_clusters/ubc208/)| 96.2 | 83.811 | -5.949 | 2.6 | 1.241 | 0.54 | 23.254 |
|[NGC 1980](/_clusters/ngc1980/)| 92.4 | 83.816 | -5.958 | 2.602 | 1.239 | 0.552 | 20.884 |
|[OCSN 244](/_clusters/ocsn244/)| 57.5 | 83.825 | -5.423 | 2.537 | 1.306 | 0.345 | 22.673 |
|[OC 0347](/_clusters/oc0347/)| 28.4 | 83.987 | -6.361 | 2.598 | 1.013 | 0.32 | 24.188 |
|[OCSN 225](/_clusters/ocsn225/)| 5.3 | 83.84 | -4.962 | 2.554 | 1.254 | -0.081 | 22.732 |
|[OC 0345](/_clusters/oc0345/)| 4.4 | 83.766 | -5.869 | 2.578 | 1.056 | 0.212 | 19.859 |
|[Trapezium](/_clusters/trapezium/)| 4.1 | 83.816 | -5.566 | 2.566 | 1.253 | 0.253 | -12.99 |
|[Morgan 8](/_clusters/morgan8/)| 0.9 | 84.125 | -6.424 | 2.548 | 0.846 | 0.298 | 16.822 |