---
layout: post
title:  Bica 6
---
<h3><span style="color: #808080;"><i>(BBS 1; MWSC 465)</i></span></h3>
<div style="display: flex; justify-content: space-between;">
 <div style="text-align: center;">
 <!-- Left block -->
 <div id="aladin-lite-div" style="width:355px;height:250px;"></div>
 <script type="text/javascript" src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js" charset="utf-8"></script>
 <script type="text/javascript">
   let aladin;
   A.init.then(() => {
      aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.32, target: "76.638 39.224"});
   });
 </script>
</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G166.9-01.0</h3></td>
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
    <td>0.8</td>
    <td>0.44</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span></td>
    <td>228</td>
    <td>9.6</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Bica%206%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="http://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=bica6" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 76.582 | 39.165 | -- | -5.03 | -0.88 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | 76.575 | 39.165 | -- | -1.266 | -0.743 | 57.1 |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract) | 77.427 | 39.633 | -- | -- | -- | -- |
| **UCC** |76.638 | 39.224 | 0.226 | 0.419 | -1.489 | -33.523 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="http://cdsportal.u-strasbg.fr/?target=76.638%2039.224" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=76.638%2039.224&output=json&radius=5&userEntry=bica6" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q2N/main/plots/bica6.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q2N/blob/master/notebooks/bica6.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `Ebv=0.31, dm=10.4, logt=9.19` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | `Ebv=0.73, dm=12.96, logt=8.76, --=--` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-07-31</i></font>