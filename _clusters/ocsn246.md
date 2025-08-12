---
layout: post
title:  OCSN 246
---
<h3><span style="color: #808080;"><i>(Ophiuchi p2)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q4P/main/plots/aladin/ocsn246.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="3.893" 
     data-target="244.714 -24.212"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G351.9+17.9</h3></td>
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
    <td style="text-align: center;">1007</td>
    <td style="text-align: center;">116.8</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22OCSN%20246%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=ocsn246" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | 244.95 | -24.49 | 6.74 | -10.54 | -22.65 | -5.63 |
| **UCC** |244.714 | -24.212 | 6.768 | -10.349 | -22.975 | -6.677 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=244.714,-24.212" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=244.714%20-24.212&output=json&radius=5&userEntry=ocsn246" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q4P/main/plots/UCC/ocsn246.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q4P/main/plots/UCC/ocsn246.webp" alt="OCSN 246 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | `E(B-V)=0.26, m-M=6.69, logt=6.95` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=351.944%20&lat=18.301&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="ocsn246"
         data-ra-center="244.95"
         data-dec-center="-24.49"
         data-rad-deg="116.8"
         data-plx="6.768">
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
|[HSC 2907](/_clusters/hsc2907/)| 35.3 | 244.86 | -24.989 | 6.365 | -10.631 | -21.498 | -5.444 |
|[OCSN 245](/_clusters/ocsn245/)| 16.4 | 246.403 | -24.035 | 7.195 | -7.055 | -25.649 | -7.743 |
|[OCSN 96](/_clusters/ocsn96/)| 14.9 | 240.859 | -22.579 | 7.024 | -11.739 | -23.903 | -7.427 |
|[CWWDL 14698](/_clusters/cwwdl14698/)| 9.6 | 244.651 | -25.038 | 6.282 | -10.791 | -21.611 | -4.485 |
|[HSC 2919](/_clusters/hsc2919/)| 3.0 | 246.54 | -24.018 | 7.209 | -6.805 | -25.976 | -8.441 |
|[HSC 2931](/_clusters/hsc2931/)| 1.5 | 245.13 | -21.677 | 7.406 | -11.332 | -25.067 | -5.207 |
|[OCSN 100](/_clusters/ocsn100/)| 1.3 | 242.706 | -19.441 | 7.174 | -8.761 | -24.38 | -7.18 |
|[OC 0690](/_clusters/oc0690/)| 0.9 | 246.392 | -23.477 | 7.181 | -6.962 | -25.511 | -7.743 |
|[OCSN 98](/_clusters/ocsn98/)| 0.5 | 241.26 | -19.698 | 6.561 | -9.892 | -21.689 | -7.92 |
|[Upper Sco](/_clusters/uppersco/)| 0.2 | 241.771 | -27.093 | 7.017 | -15.58 | -23.303 | -1.408 |