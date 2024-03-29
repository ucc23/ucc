---
layout: post
title:  Bochum 4
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">
<!-- WEBP image -->
<img id="myImage" src="https://raw.githubusercontent.com/ucc23/Q3P/main/plots/bochum4_aladin.webp" alt="Clickable Image" style="width:355px;height:250px; cursor: pointer;">

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
            let aladin = A.aladin('#aladin-lite-div', {survey:"P/DSS2/color", fov:0.417, target: "112.908 -17.202"});
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
    <td colspan="5"><h3>UCC G232.7+00.7</h3></td>
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
    <td>0.99</td>
    <td>0.69</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td>115</td>
    <td>12.5</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Bochum%204%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=bochum4" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 112.905 | -17.19 | -- | -0.43 | 0.39 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | 112.905 | -17.192 | -- | -2.462 | 0.594 | 16.0 |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 112.877 | -17.229 | 0.761 | -3.014 | 1.848 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 112.882 | -17.216 | 0.764 | -3.019 | 1.85 | -- |
|[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | 112.886 | -17.24 | 0.766 | -3.016 | 1.889 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | 112.897 | -17.199 | 0.765 | -3.002 | 1.899 | 34.858 |
| **UCC** |112.908 | -17.202 | 0.763 | -3.027 | 1.892 | 34.751 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="https://cdsportal.u-strasbg.fr/?target=112.908,-17.202" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=112.908%20-17.202&output=json&radius=5&userEntry=bochum4" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q3P/main/plots/bochum4.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q3P/blob/master/notebooks/bochum4.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.21, distance=870.0, log_age=8.41` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | `E(B-V)=0.19, Dmod=9.7, logt=7.57` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=0.39, DMNN=10.55, AgeNN=7.98` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=0.77, Dist=1258.0, logage=8.53, [Fe/H]=-0.03` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | `Dist=1243.0, logAgeNN=7.96` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | `AV50=0.46, MOD50=10.45, logAge50=8.39` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-11-06</i></font>
