---
layout: post
title:  Pozzo 1
---

<div style="display: flex; justify-content: space-between;">
 <div style="text-align: center;">
 <!-- Left block -->
 <div id="aladin-lite-div" style="width:355px;height:250px;"></div>
 <script type="text/javascript" src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js" charset="utf-8"></script>
 <script type="text/javascript">
   let aladin;
   A.init.then(() => {
      aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.577, target: "122.284 -47.349"});
   });
 </script>
</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G262.7-07.6</h3></td>
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
    <td>1.0</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td>124</td>
    <td>17.3</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Pozzo%201%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="http://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=pozzo1" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 122.374 | -47.335 | 2.853 | -6.516 | 9.53 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 122.331 | -47.301 | 2.855 | -6.475 | 9.587 | -- |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | 122.494 | -46.623 | 2.847 | -6.549 | 9.497 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | 122.375 | -47.354 | 2.847 | -6.364 | 9.437 | 14.001 |
| **UCC** |122.284 | -47.349 | 2.929 | -6.395 | 9.759 | 14.775 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="http://cdsportal.u-strasbg.fr/?target=122.284%20-47.349" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=122.284%20-47.349&output=json&radius=5&userEntry=pozzo1" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q3N/main/plots/pozzo1.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q3N/blob/master/notebooks/pozzo1.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `Av=0.07, dm=7.6, logt=6.98, --=--` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.16, d_pc=345.0, logt=7.09, FeH=-0.07` |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | `A0=0.2, --=--, logt=7.05, --=--` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | `Av=0.35, d_pc=346.88, logt=6.97, --=--` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-07-31</i></font>