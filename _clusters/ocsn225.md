---
layout: post
title:  OCSN 225
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/ocsn225_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.733" 
     data-target="83.84 -4.962"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G208.4-19.1b</h3></td>
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
    <td style="text-align: center;">608</td>
    <td style="text-align: center;">22.0</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22OCSN%20225%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ocsn225" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | 83.85 | -4.83 | 2.55 | 1.25 | -0.23 | 26.37 |
| **UCC** |83.84 | -4.962 | 2.554 | 1.254 | -0.081 | 22.732 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=83.84,-4.962" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=83.84%20-4.962&output=json&radius=5&userEntry=ocsn225" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn225.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/ocsn225.webp" alt="OCSN 225 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | `E(B-V)=0.03, m-M=7.87, logt=6.9` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=208.599%20&lat=-19.181&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ocsn225"
         data-ra-center="83.85"
         data-dec-center="-4.83"
         data-rad-deg="22.0"
         data-plx="2.554">
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
|[OCSN 244](/_clusters/ocsn244/)| 57.4 | 83.825 | -5.423 | 2.537 | 1.306 | 0.345 | 22.673 |
|[NGC 1977](/_clusters/ngc1977/)| 30.6 | 83.838 | -4.862 | 2.53 | 1.262 | -0.712 | 23.871 |
|[UBC 621](/_clusters/ubc621/)| 30.6 | 83.83 | -4.858 | 2.534 | 1.247 | -0.724 | 22.953 |
|[UBC 207](/_clusters/ubc207/)| 6.9 | 83.87 | -4.615 | 2.566 | 1.106 | 0.57 | 20.544 |
|[UBC 208](/_clusters/ubc208/)| 4.4 | 83.811 | -5.949 | 2.6 | 1.241 | 0.54 | 23.254 |
|[NGC 1980](/_clusters/ngc1980/)| 3.3 | 83.816 | -5.958 | 2.602 | 1.239 | 0.552 | 20.884 |
|[OCSN 226](/_clusters/ocsn226/)| 3.0 | 83.816 | -5.959 | 2.607 | 1.257 | 0.551 | 23.018 |
|[Trapezium](/_clusters/trapezium/)| 2.5 | 83.816 | -5.566 | 2.566 | 1.253 | 0.253 | -12.99 |
|[OC 0345](/_clusters/oc0345/)| 1.3 | 83.766 | -5.869 | 2.578 | 1.056 | 0.212 | 19.859 |