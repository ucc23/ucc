---
layout: post
title:  BDSB 96
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">
<!-- WEBP image -->
<img id="myImage" src="https://raw.githubusercontent.com/ucc23/Q3N/main/plots/bdsb96_aladin.webp" alt="Clickable Image" style="width:355px;height:250px; cursor: pointer;">

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
            let aladin = A.aladin('#aladin-lite-div', {survey:"P/DSS2/color", fov:0.313, target: "106.34 -12.329"});
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
    <td colspan="5"><h3>UCC G225.4-02.5</h3></td>
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
    <td>0.48</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span></td>
    <td>245</td>
    <td>9.4</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22BDSB%2096%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=bdsb96" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 106.332 | -12.327 | 0.844 | -3.843 | 1.071 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 106.349 | -12.322 | 0.863 | -3.715 | 1.05 | -- |
|[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | 106.534 | -12.603 | 0.864 | -3.45 | 0.92 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | 106.332 | -12.325 | 0.865 | -3.661 | 0.996 | 15.613 |
| **UCC** |106.34 | -12.329 | 0.86 | -3.809 | 1.17 | 32.519 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="https://cdsportal.u-strasbg.fr/?target=106.34,-12.329" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=106.34%20-12.329&output=json&radius=5&userEntry=bdsb96" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q3N/main/plots/bdsb96.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q3N/blob/master/notebooks/bdsb96.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.22, DMNN=10.29, AgeNN=6.9` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=1.48, Dist=1155.0, logage=6.87, [Fe/H]=-0.14` |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | `A0=1.55, logAge=6.9` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | `AV50=0.97, MOD50=10.22, logAge50=6.83` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-11-06</i></font>
