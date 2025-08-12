---
layout: post
title:  Trapezium
---
<h3><span style="color: #808080;"><i>(Ori Trapezium)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">

<!-- Static image + data attributes for FOV and target -->
<img id="aladin_img"
     data-umami-event="aladin_load"
     src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/trapezium_aladin.webp"
     alt="Click to load Aladin Lite" 
     style="width:355px;height:250px; cursor: pointer;"
     data-fov="0.423" 
     data-target="83.816 -5.566"/>
<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>
<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script src="{{ site.baseurl }}/scripts/aladin_load.js"></script>

</div>
<!-- Left block -->

<table style="width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G209.0-19.3</h3></td>
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
    <td style="text-align: center;">22</td>
    <td style="text-align: center;">12.7</td>
  </tr>
</table>
</div>

<div style="text-align: center;">
   <span style="color: #99180f; font-weight: bold;">Warning: </span><span>less than 25 stars with <i>P>0.5</i> were found</span>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a data-umami-event="nasa_search" href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Trapezium%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a data-umami-event="simbad_search" href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=trapezium" target="_blank">Simbad</a></p>


### Positions

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Dambis (1999)](https://ui.adsabs.harvard.edu/abs/1999AstL...25....7D) | 83.822 | -5.391 | -- | -- | -- | -- |
|[Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | 83.817 | -5.39 | -- | 2.05 | 1.56 | 31.98 |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | 83.82 | -5.39 | -- | 2.05 | 1.56 | 28.9 |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 83.835 | -5.41 | 2.557 | 1.262 | 0.274 | 23.841 |
|[Jaehnig et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J) | 83.829 | -5.417 | 2.57 | 1.276 | 0.176 | -- |
| **UCC** |83.816 | -5.566 | 2.566 | 1.253 | 0.253 | -12.99 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="cds_coord_search" href="https://cdsportal.u-strasbg.fr/?target=83.816,-5.566" target="_blank">CDS</a> | <a data-umami-event="simbad_coord_search" href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=83.816%20-5.566&output=json&radius=5&userEntry=trapezium" target="_blank">Simbad</a></p>

### Estimated members

<a href="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/trapezium.webp" target="_blank">
<img src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/UCC/trapezium.webp" alt="Trapezium UCC">
</a>



> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a data-umami-event="colab" href="https://colab.research.google.com/github/ucc23/ucc/blob/main/assets/notebook.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters

| Reference |  Values |
| :---      |  :---:  |
| [Dambis (1999)](https://ui.adsabs.harvard.edu/abs/1999AstL...25....7D) | `E_B-V_=0.06, DM0=7.81, log_age_=6.5` |
| [Dias et al. (2002)](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D) | `E(B-V)=0.05, Dist=414.0, Age=7.11` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | `E(B-V)=0.31, Dmod=8.442, logt=7.01` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.246, Dist=381, logage=6.778, [Fe/H]=-0.146` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a data-umami-event="bayestar" href="http://argonaut.skymaps.info/query?lon=209.156%20&lat=-19.482&coordsys=gal&mapname=bayestar2019" target="_blank">Bayestar19</a></p>


### Cluster region

<html lang="en">
  <body>
    <center>
    <div id="plot-params"
         data-oc-name="trapezium"
         data-ra-center="83.83"
         data-dec-center="-5.4"
         data-rad-deg="12.7"
         data-plx="2.566">
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
|[OCSN 244](/_clusters/ocsn244/)| 100.0 | 83.825 | -5.423 | 2.537 | 1.306 | 0.345 | 22.673 |
|[UBC 208](/_clusters/ubc208/)| 68.0 | 83.811 | -5.949 | 2.6 | 1.241 | 0.54 | 23.254 |
|[NGC 1980](/_clusters/ngc1980/)| 64.0 | 83.816 | -5.958 | 2.602 | 1.239 | 0.552 | 20.884 |
|[OCSN 225](/_clusters/ocsn225/)| 60.0 | 83.84 | -4.962 | 2.554 | 1.254 | -0.081 | 22.732 |
|[OCSN 226](/_clusters/ocsn226/)| 56.0 | 83.816 | -5.959 | 2.607 | 1.257 | 0.551 | 23.018 |
|[OC 0347](/_clusters/oc0347/)| 20.0 | 83.987 | -6.361 | 2.598 | 1.013 | 0.32 | 24.188 |
|[OC 0345](/_clusters/oc0345/)| 20.0 | 83.766 | -5.869 | 2.578 | 1.056 | 0.212 | 19.859 |