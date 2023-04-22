---
layout: post
title:  VDBH 99
---

<!-- include Aladin Lite CSS file in the head section of your page -->
<link rel="stylesheet" href="https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.1.min.js" charset="utf-8"></script>
<!-- Aladin Lite CS -->

<div style="display: flex; justify-content: space-between;">
   <div style="text-align: center;">
      <!-- Left block -->
      <!-- Aladin Lite viewer -->
      <div id="aladin-lite-div" align="left" style="width:285px;height:250px;"></div>
      <script type="text/javascript" src="https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.js" charset="utf-8"></script>
      <script type="text/javascript">var aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.5, target: "159.521 -59.152"});</script>
   </div>
   <!-- Aladin Lite viewer -->
   <!-- Left block -->
   <!-- Right block -->
   <table style="text-align: center;">
      <!-- Row 0 (title) -->
      <tr>
         <td align="center" colspan="5"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UCC G286.5-00.5 (<a href="#" title="Cluster class">0.5</a>)</b></td>
      </tr>
      <!-- Row 1 -->
      <tr>
         <th>RA</th>
         <th>DEC</th>
         <th>GLON</th>
         <th>GLAT</th>
         <th>Class</th>
      </tr>
      <!-- Row 2 -->
      <tr>
         <td>159.521</td>
         <td>-59.152</td>
         <td>286.555</td>
         <td>-0.57</td>
         <td>
<span style="color: red; font-weight: bold;">C</span>
<span style="color: green; font-weight: bold;">A</span>
<span style="color: red; font-weight: bold;">C</span>
         </td>
      </tr>
      <!-- Row 3 -->
      <tr>
         <th>plx</th>
         <th>pmRA</th>
         <th>pmDE</th>
         <th>Rv</th>
         <th>N_20</th>
      </tr>
      <!-- Row 4 -->
      <tr>
         <td>2.232</td>
         <td>-14.46</td>
         <td>0.99</td>
         <td>--</td>
         <td>855</td>
      </tr>
   </table>
   <!-- Right block -->
</div>

![CLUSTER](https://raw.githubusercontent.com/ucc23/datafiles/main/plots/vdbh99.png)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/datafiles/blob/master/notebooks/vdbh99.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code> | <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>Fundamental parameters<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>|
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `E_BV=0.1, dm=8.6, logAge=8.0, FeH=90.13` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.34, DMNN=8.35, AgeNN=7.98` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.27, Dist=443.0, logage=7.79, [Fe/H]=0.07` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | `Dist=461.0, logAgeNN=7.98` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | `av=0.11, dm=8.17, log_age=7.65` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search name in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20%3Dbody%3A%22VDBH%2099%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a></p>


### Position in published works (not exhaustive)

| Reference    | RA    | DEC   | Plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 159.465 | -59.125 | -- | -13.85 | 0.05 | --  |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 159.553 | -59.168 | 2.225 | -14.494 | 0.919 | --  |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 159.499 | -59.15 | 2.213 | -14.449 | 0.963 | --  |
|[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | nan | nan | nan | nan | nan | --  |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | 159.554 | -59.109 | 2.224 | -14.477 | 0.98 | 5.823  |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search region in <a href="http://cdsportal.u-strasbg.fr/?target=159.521%20-59.152" target="_blank">CDS</a></p>


<br>
<font color="b3b1b1"><i>Last time modified 2023-04-22</i></font>
