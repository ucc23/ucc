---
layout: post
title:  COIN-Gaia 17
---

<div style="display: flex; justify-content: space-between;">
 <div style="text-align: center;">
 <!-- Left block -->
 <div id="aladin-lite-div" style="width:355px;height:250px;"></div>
 <script type="text/javascript" src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js" charset="utf-8"></script>
 <script type="text/javascript">
   let aladin;
   A.init.then(() => {
      aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.317, target: "81.236 37.563"});
   });
 </script>
</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G170.4+01.0a</h3></td>
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
    <td>0.91</td>
    <td>0.64</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td>122</td>
    <td>9.5</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22COIN-Gaia%2017%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="http://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=coingaia17" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 81.244 | 37.558 | 0.885 | 0.358 | -4.297 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 81.22 | 37.538 | 0.902 | 0.387 | -4.281 | -- |
|[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | 81.22 | 37.563 | 0.889 | 0.289 | -4.281 | -- |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | 81.2 | 37.568 | 0.908 | 0.275 | -4.301 | -- |
| **UCC** |81.236 | 37.563 | 0.895 | 0.285 | -4.308 | 8.916 |


### Probable <a href="https://ucc.ar/faq#probable-duplicates" title="See FAQ for definition of proximity">duplicates</a> and clusters in proximity

| Cluster | P (%) | RA    | DEC   | plx   | pmRA  | pmDE  | Rv    |
| :---:   | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[UBC 89](https://ucc.ar/_clusters/ubc89/)| 89 | 81.23 | 37.561 | 0.893 | 0.31 | -4.296 | 5.376 |
|[Saloranta 10](https://ucc.ar/_clusters/saloranta10/)| 83 | 81.227 | 37.558 | 0.896 | 0.281 | -4.304 | 8.916 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="http://cdsportal.u-strasbg.fr/?target=81.236%2037.563" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=81.236%2037.563&output=json&radius=5&userEntry=coingaia17" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q2P/main/plots/coingaia17.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q2P/blob/master/notebooks/coingaia17.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `Av=0.75, dm=10.17, logt=8.6, --=--` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=1.48, d_pc=1039.0, logt=7.93, FeH=-0.12` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | `--=--, d_pc=1049.0, logt=8.57, --=--` |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | `A0=1.35, --=--, logt=8.55, --=--` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-07-31</i></font>