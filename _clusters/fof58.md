---
layout: post
title:  FoF 58
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/fof58_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.207" 
     data-target="129.902 -46.287"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G264.9-02.8</h3></td>
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
    <td style="text-align: center;">137</td>
    <td style="text-align: center;">6.2</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22FoF%2058%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=fof58" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Liu & Pang (2019)](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L) | 129.957 | -46.364 | 0.524 | -5.813 | 5.063 | -- |
| **UCC** |129.902 | -46.287 | 0.54 | -5.833 | 5.087 | -1.509 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=129.902,-46.287" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=129.902%20-46.287&output=json&radius=5&userEntry=fof58" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/fof58.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/fof58.webp" alt="FoF 58 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Liu & Pang (2019)](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L) | `Age=0.023, Z=0.25` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=264.895%20&lat=-2.866&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="fof58"
         data-ra-center="129.96"
         data-dec-center="-46.36"
         data-rad-deg="6.2"
         data-plx="0.54">
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
|[SAI 92](/_clusters/sai92/)| 91.2 | 129.866 | -46.272 | 0.544 | -5.852 | 5.115 | 27.315 |
|[NGC 2645](/_clusters/ngc2645/)| 75.2 | 129.826 | -46.253 | 0.543 | -5.874 | 5.108 | 17.727 |
|[OC 0481](/_clusters/oc0481/)| 18.2 | 129.646 | -46.224 | 0.542 | -5.808 | 5.151 | -9.58 |
|[OC 0484](/_clusters/oc0484/)| 10.2 | 130.253 | -46.519 | 0.544 | -5.744 | 5.051 | 41.735 |
|[CWWDL 13332](/_clusters/cwwdl13332/)| 9.5 | 129.656 | -46.256 | 0.541 | -5.784 | 5.127 | -9.58 |
|[Pismis 8](/_clusters/pismis8/)| 6.6 | 130.391 | -46.274 | 0.537 | -5.713 | 4.986 | -- |
|[OC 0482](/_clusters/oc0482/)| 4.4 | 130.273 | -46.408 | 0.559 | -5.786 | 5.1 | -- |
|[OC 0485](/_clusters/oc0485/)| 4.4 | 130.174 | -46.651 | 0.546 | -5.704 | 5.013 | -- |