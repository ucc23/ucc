---
layout: post
title:  Gulliver 18
---

<div style="display: flex; justify-content: space-between;">
 <div style="text-align: center;">
 <!-- Left block -->
 <div id="aladin-lite-div" style="width:355px;height:250px;"></div>
 <script type="text/javascript" src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js" charset="utf-8"></script>
 <script type="text/javascript">
   let aladin;
   A.init.then(() => {
      aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.24, target: "302.909 26.548"});
   });
 </script>
</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G065.5-03.9</h3></td>
  </tr>
  <!-- Row 2 -->
  <tr>
    <th><a href="https://ucc.ar/faq#what-are-the-c1-c2-and-c3-parameters" title="Photometric class">C1</a></th>
    <th><a href="https://ucc.ar/faq#what-are-the-c1-c2-and-c3-parameters" title="Density class">C2</a></th>
    <th><a href="https://ucc.ar/faq#what-are-the-c1-c2-and-c3-parameters" title="Combined class">C3</a></th>
    <th><div title="Stars with membership probability >50%">N_50</div></th>
    <th><div title="Radius that contains half the members [arcmin]">r_50</div></th>
  </tr>
  <!-- Row 3 -->
  <tr>
    <td>1.0</td>
    <td>0.83</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td>267</td>
    <td>7.2</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Gulliver%2018%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="http://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=gulliver18" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 302.905 | 26.532 | 0.613 | -3.198 | -5.646 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 302.921 | 26.518 | 0.612 | -3.182 | -5.638 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | 302.903 | 26.541 | 0.609 | -3.201 | -5.657 | 2.249 |
| **UCC** |302.909 | 26.548 | 0.615 | -3.204 | -5.672 | -3.423 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="http://cdsportal.u-strasbg.fr/?target=302.909%2026.548" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=302.909%2026.548&output=json&radius=5&userEntry=gulliver18" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q1N/main/plots/gulliver18.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q1N/blob/master/notebooks/gulliver18.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `Av=1.59, dm=11.01, logt=7.6, --=--` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=1.86, d_pc=1420.0, logt=7.76, FeH=0.24` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | `Av=1.94, d_pc=1545.2, logt=7.83, --=--` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-07-31</i></font>