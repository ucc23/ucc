---
layout: post
title:  UPK 64
---
<h3><span style="color: #808080;"><i>(OCSN 126)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/upk64_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="1.433" 
     data-target="281.746 24.752"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G054.7+11.9</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th style="text-align: center;"><a href="https://ucc.ar/faq#what-is-the-c3-parameter" title="Combined class">C3</a></th>
    <th style="text-align: center;"><div title="Stars with membership probability >50%">N_50</div></th>
    <th style="text-align: center;"><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td style="text-align: center;"><span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td style="text-align: center;">26</td>
    <td style="text-align: center;">43.0</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22UPK%2064%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=upk64" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | 281.748 | 24.698 | -- | -0.93 | -5.03 | -- |
|[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | 284.07 | 25.53 | 2.32 | -0.6 | -4.88 | -15.91 |
| **UCC** |281.746 | 24.752 | 2.359 | -0.915 | -5.066 | -14.956 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=281.746,+24.752" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=281.746%2024.752&output=json&radius=5&userEntry=upk64" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/upk64.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1P/main/plots/UCC/upk64.webp" alt="UPK 64 UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | `d_pc=442, log(age)=8.0` |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | `E(B-V)=0.26, m-M=8.82, logt=7.6` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=54.807%20&lat=11.955&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="upk64"
         data-ra-center="281.75"
         data-dec-center="24.7"
         data-rad-deg="43.0"
         data-plx="2.359">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
