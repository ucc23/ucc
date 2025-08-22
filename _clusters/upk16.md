---
layout: post
title:  UPK 16
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/aladin/upk16.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.493" 
     data-target="287.29 -19.101"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G017.6-12.4</h3></td>
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
    <td style="text-align: center;">51</td>
    <td style="text-align: center;">14.8</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22UPK%2016%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=upk16" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | 287.268 | -19.08 | -- | -0.4 | -5.14 | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 287.36 | -19.11 | 1.196 | -0.428 | -5.166 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 287.222 | -19.106 | 1.221 | -0.416 | -5.132 | 13.566 |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | 287.324 | -19.093 | 1.27 | -0.309 | -5.135 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | 287.366 | -19.069 | 1.214 | -0.38 | -5.149 | 0.968 |
|[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | 287.298 | -19.07 | 1.226 | -- | -- | -- |
|[Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | 287.366 | -19.069 | 1.214 | -0.38 | -5.149 | 0.968 |
|[Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | 287.298 | -19.07 | -- | -- | -- | -- |
| **UCC** |287.29 | -19.101 | 1.238 | -0.376 | -5.173 | 4.837 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=287.29,-19.101" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=287.29%20-19.101&output=json&radius=5&userEntry=upk16" target="_blank">Simbad</a></p>

### Estimated members

<div class="carousel">
<input type="radio" name="radio-btn" id="slide1" checked>
<input type="radio" name="radio-btn" id="slide1">
<input type="radio" name="radio-btn" id="slide2">
<input type="radio" name="radio-btn" id="slide3">
<div class="slides">
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/UCC/upk16.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/UCC/upk16.webp" alt="UPK 16 UCC">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/HUNT23/upk16.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/HUNT23/upk16.webp" alt="UPK 16 HUNT23">
</a>
</div>
<div class="slide">
<a href="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/CANTAT20/upk16.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q1N/main/plots/CANTAT20/upk16.webp" alt="UPK 16 CANTAT20">
</a>
</div>
</div>
<div class="indicators">
<label for="slide1">1</label>
<label for="slide2">2</label>
<label for="slide3">3</label>
</div>
</div>


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | `d_pc=802, log(age)=7.9` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.603, Dist=793, logage=7.933, [Fe/H]=0.023` |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | `A0=0.55, logAge=7.85` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | `AV50=0.371, diffAV50=0.839, MOD50=9.469, logAge50=8.36` |
| [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | `AV50=0.0, dMod50=9.58, logAge50=8.79, [Fe/H]50=0.8` |
| [Hunt & Reffert (2024)](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H) | `MassJ=140.649` |
| [Hu & Soubiran (2025)](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H) | `MA22=-0.13, MA23f=-0.16, MZ23=-0.1, MK24=-0.13, MF24=-0.08` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=17.637%20&lat=-12.384&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="upk16"
         data-ra-center="287.36"
         data-dec-center="-19.11"
         data-rad-deg="14.8"
         data-plx="1.238">
    </div>
    <div id="plot-container">
        <div id="plot"></div>
    </div>
    <script defer type="module" src="{{ site.baseurl }}/scripts/radec_scatter.js"></script>
    </center>
  </body>
</html>
<br>
