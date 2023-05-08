---
layout: post
title:  Berkeley 73
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
      <script type="text/javascript">var aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:0.25, target: "95.52 -6.321"});</script>
   </div>
   <!-- Aladin Lite viewer -->
   <!-- Left block -->
   <!-- Right block -->
   <table style="text-align: center;">
      <!-- Row 0 (title) -->
      <tr>
         <td align="center" colspan="5"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UCC G215.2-09.3 (<a href="#" title="Cluster class">0.8</a>)</b></td>
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
         <td>95.52</td>
         <td>-6.321</td>
         <td>215.259</td>
         <td>-9.393</td>
         <td>
<span style="color: green; font-weight: bold;">A</span>
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
         <td>0.116</td>
         <td>0.203</td>
         <td>1.053</td>
         <td>96.164</td>
         <td>181</td>
      </tr>
   </table>
   <!-- Right block -->
</div>

<div style="text-align: left;">
   <span style="color: #99180f; font-weight: bold;">Other denominations: </span><span>OCL 546, MWSC 847</span>
</div>

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q3N/main/plots/berkeley73.png)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q3N/blob/master/notebooks/berkeley73.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `E_BV=0.21, dm=14.55, logAge=9.15, FeH=-0.22` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.69, DMNN=13.95, AgeNN=9.15, ---=---` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.86, Dist=5832.0, logage=9.35, [Fe/H]=-0.23` |
| [Perren et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P/abstract) | `E(B-V)=0.16, MOD=13.7, log(Age)=9.6, [Fe/H]=-0.41` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | `av=0.61, dm=14.17, log_age=9.13, ---=---` |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search name in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20%3Dbody%3A%22Berkeley%2073%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a></p>


### Position in published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 95.516 | -6.319 | -- | 3.47 | -1.72 | --  |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract) | 95.522 | -6.319 | -- | -- | -- | --  |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 95.52 | -6.321 | 0.128 | 0.227 | 1.11 | --  |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 95.516 | -6.328 | 0.12 | 0.2 | 1.065 | --  |
|[Perren et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P/abstract) | 95.52 | -6.321 | -- | -- | -- | --  |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract) | 95.52 | -6.319 | 0.122 | 0.214 | 1.012 | 94.289  |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search region in <a href="http://cdsportal.u-strasbg.fr/?target=95.52%20-6.321" target="_blank">CDS</a></p>


<br>
<font color="b3b1b1"><i>Last time modified 2023-05-08</i></font>
