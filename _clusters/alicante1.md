---
layout: post
title:  Alicante 1
---

<div style="display: flex; justify-content: space-between;">
 <div style="text-align: center;">
 <!-- Left block -->
 <div id="aladin-lite-div" style="width:355px;height:250px;"></div>
 <script type="text/javascript" src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js" charset="utf-8"></script>
 <script type="text/javascript">
   let aladin;
   A.init.then(() => {
      aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.043, target: "59.804 57.235"});
   });
 </script>
</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G146.2+03.1</h3></td>
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
    <td>0.96</td>
    <td>0.59</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td>29</td>
    <td>1.3</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Alicante%201%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="http://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=alicante1" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 59.785 | 57.24 | -- | -1.76 | 1.36 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | 59.82 | 57.237 | -- | -1.926 | 0.4 | -32.4 |
| **UCC** |59.804 | 57.235 | 0.251 | -0.069 | 0.407 | -- |


### Probable <a href="https://ucc.ar/faq#probable-duplicates" title="See FAQ for definition of proximity">duplicates</a> and clusters in proximity

| Cluster | P (%) | RA    | DEC   | plx   | pmRA  | pmDE  | Rv    |
| :---:   | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[FSR 0647](https://ucc.ar/_clusters/fsr0647/)| 94 | 59.804 | 57.235 | 0.244 | -0.069 | 0.4 | -- |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="http://cdsportal.u-strasbg.fr/?target=59.804%2057.235" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=59.804%2057.235&output=json&radius=5&userEntry=alicante1" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q2P/main/plots/alicante1.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q2P/blob/master/notebooks/alicante1.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `Ebv=0.6, dm=13.36, logt=6.35` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | `Ebv=0.41, dm=11.78, logt=7.09, --=--` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-07-31</i></font>