---
layout: post
title:  Berkeley 31
---
<h3><span style="color: #808080;"><i>(Biurakan 7; OCL 513; FSR 1012; MWSC 1032)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">
<!-- WEBP image -->
<img id="myImage" src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/berkeley31_aladin.webp" alt="Clickable Image" style="width:355px;height:250px; cursor: pointer;">

<!-- Div to contain Aladin Lite viewer -->
<div id="aladin-lite-div" style="width:355px;height:250px;display:none;"></div>

<!-- Aladin Lite script (will be loaded after the image is clicked) -->
<script type="text/javascript">
// Function to load Aladin Lite after image click and hide the image
function loadAladinLiteAndHideImage() {
    // Dynamically load the Aladin Lite script
    let aladinScript = document.createElement('script');
    aladinScript.src = "https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js";
    aladinScript.charset = "utf-8";
    aladinScript.onload = function () {
        A.init.then(() => {
            let aladin = A.aladin('#aladin-lite-div', {survey:"P/DSS2/color", fov:0.19, target: "104.406 8.288"});
            // Remove the image
            document.getElementById('myImage').remove();
            // Hide the image
            //document.getElementById('myImage').style.visibility = "hidden";
            // Show the Aladin Lite viewer
            document.getElementById('aladin-lite-div').style.display = 'block';
        });
     };
    document.head.appendChild(aladinScript);
}
// Event listener for image click
document.getElementById('myImage').addEventListener('click', loadAladinLiteAndHideImage);
</script>
</div>
<!-- Left block -->

<table style="text-align: center; width:355px;height:250px;">
  <!-- Row 1 (title) -->
  <tr>
    <td colspan="5"><h3>UCC G206.2+05.1</h3></td>
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
    <td>0.56</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td>907</td>
    <td>5.7</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Berkeley%2031%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=berkeley31" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 104.395 | 8.298 | -- | -1.06 | -5.13 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | 104.4 | 8.268 | -- | -2.43 | -2.33 | 61.0 |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract) | 104.399 | 8.292 | -- | -- | -- | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 104.406 | 8.285 | 0.141 | 0.169 | -0.926 | -- |
|[Donor et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D/abstract) | 104.395 | 8.298 | -- | 0.24 | -1.08 | 59.6 |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 104.396 | 8.281 | 0.128 | 0.178 | -0.905 | -- |
|[Jaehnig et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J/abstract) | 104.406 | 8.279 | 0.172 | 0.055 | -0.884 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | 104.407 | 8.288 | 0.123 | 0.114 | -0.922 | 65.271 |
| **UCC** |104.406 | 8.288 | 0.164 | 0.105 | -0.91 | 61.498 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="https://cdsportal.u-strasbg.fr/?target=104.406,+8.288" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=104.406%208.288&output=json&radius=5&userEntry=berkeley31" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q3P/main/plots/berkeley31.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q3P/blob/master/notebooks/berkeley31.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.07, distance=6242.0, log_age=9.3, metallicity=-0.4` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | `E(B-V)=0.08, Dmod=14.59, logt=9.31` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.35, DMNN=14.28, AgeNN=9.45` |
| [Donor et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D/abstract) | `Fe/H=-0.45` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.36, Dist=6180.0, logage=9.57, [Fe/H]=-0.13` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | `AV50=0.43, MOD50=13.9, logAge50=9.08` |

<br>
<font color="b3b1b1"><i>Last modified: 2024-05-11</i></font>
