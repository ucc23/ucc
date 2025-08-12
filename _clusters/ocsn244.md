---
layout: post
title:  OCSN 244
---
<h3><span style="color: #808080;"><i>(ONC)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/aladin/ocsn244.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.563" 
     data-target="83.825 -5.423"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G209.0-19.3a</h3></td>
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
    <td style="text-align: center;">1012</td>
    <td style="text-align: center;">16.9</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22OCSN%20244%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ocsn244" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | 83.82 | -5.39 | 2.49 | 1.41 | 0.35 | 23.68 |
| **UCC** |83.825 | -5.423 | 2.537 | 1.306 | 0.345 | 22.673 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=83.825,-5.423" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=83.825%20-5.423&output=json&radius=5&userEntry=ocsn244" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn244.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn244.webp" alt="OCSN 244 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | `E(B-V)=0.53, m-M=9.39, logt=6.65` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=209.05%20&lat=-19.392&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ocsn244"
         data-ra-center="83.82"
         data-dec-center="-5.39"
         data-rad-deg="16.9"
         data-plx="2.537">
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
|[OCSN 225](/_clusters/ocsn225/)| 34.5 | 83.84 | -4.962 | 2.554 | 1.254 | -0.081 | 22.732 |
|[UBC 208](/_clusters/ubc208/)| 23.1 | 83.811 | -5.949 | 2.6 | 1.241 | 0.54 | 23.254 |
|[NGC 1980](/_clusters/ngc1980/)| 20.6 | 83.816 | -5.958 | 2.602 | 1.239 | 0.552 | 20.884 |
|[OCSN 226](/_clusters/ocsn226/)| 19.4 | 83.816 | -5.959 | 2.607 | 1.257 | 0.551 | 23.018 |
|[NGC 1977](/_clusters/ngc1977/)| 8.0 | 83.838 | -4.862 | 2.53 | 1.262 | -0.712 | 23.871 |
|[UBC 621](/_clusters/ubc621/)| 7.5 | 83.83 | -4.858 | 2.534 | 1.247 | -0.724 | 22.953 |
|[OC 0347](/_clusters/oc0347/)| 5.5 | 83.987 | -6.361 | 2.598 | 1.013 | 0.32 | 24.188 |
|[Trapezium](/_clusters/trapezium/)| 2.5 | 83.816 | -5.566 | 2.566 | 1.253 | 0.253 | -12.99 |
|[OC 0345](/_clusters/oc0345/)| 2.1 | 83.766 | -5.869 | 2.578 | 1.056 | 0.212 | 19.859 |
|[UBC 207](/_clusters/ubc207/)| 1.9 | 83.87 | -4.615 | 2.566 | 1.106 | 0.57 | 20.544 |