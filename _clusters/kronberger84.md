---
layout: post
title:  Kronberger 84
---
<h3><span style="color: #808080;"><i>(DSH J2135.5+5330; MWSC 3532)</i></span></h3><div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">
<!-- WEBP image -->
<img id="myImage" src="https://raw.githubusercontent.com/ucc23/Q2P/main/plots/kronberger84_aladin.webp" alt="Clickable Image" style="width:355px;height:250px; cursor: pointer;">

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
            let aladin = A.aladin('#aladin-lite-div', {survey:"P/DSS2/color", fov:0.04, target: "323.885 53.518"});
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
    <td colspan="5"><h3>UCC G096.2+01.1</h3></td>
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
    <td>0.74</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span></td>
    <td>37</td>
    <td>1.2</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Kronberger%2084%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=kronberger84" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 323.91 | 53.488 | -- | -4.26 | -0.16 | -- |
|[Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | 323.88 | 53.514 | -- | -1.426 | -0.749 | -- |
|[Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract) | 323.884 | 53.51 | -- | -- | -- | -- |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 323.884 | 53.517 | 0.225 | -3.085 | -2.908 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 323.883 | 53.518 | 0.232 | -3.087 | -2.953 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | 323.888 | 53.514 | 0.194 | -2.92 | -3.032 | -61.546 |
| **UCC** |323.885 | 53.518 | 0.205 | -2.897 | -3.046 | -61.549 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="https://cdsportal.u-strasbg.fr/?target=323.885,+53.518" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=323.885%2053.518&output=json&radius=5&userEntry=kronberger84" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q2P/main/plots/kronberger84.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q2P/blob/master/notebooks/kronberger84.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | `e_bv=0.54, distance=1310.0, log_age=8.82` |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | `E(B-V)=0.31, Dmod=11.99, logt=8.75` |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.94, DMNN=13.03, AgeNN=8.46` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=2.43, Dist=3404.0, logage=8.39, [Fe/H]=-0.27` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | `AV50=2.8, MOD50=13.4, logAge50=8.04` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-11-06</i></font>
