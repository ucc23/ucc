---
layout: post
title:  Gulliver 14
---
<div style="display: flex; justify-content: space-between; width:720px;height:250px">
<div style="text-align: center;">
<!-- WEBP image -->
<img id="myImage" src="https://raw.githubusercontent.com/ucc23/Q4P/main/plots/gulliver14_aladin.webp" alt="Clickable Image" style="width:355px;height:250px; cursor: pointer;">

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
            let aladin = A.aladin('#aladin-lite-div', {survey:"P/DSS2/color", fov:0.277, target: "259.926 -36.74"});
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
    <td colspan="5"><h3>UCC G350.4+00.2</h3></td>
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
    <td>0.78</td>
    <td>0.8</td>
    <td><span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span></td>
    <td>72</td>
    <td>8.3</td>
  </tr>
</table>
</div>

> <p style="text-align:center; font-weight: bold; font-size:20px">Search object in <a href="https://ui.adsabs.harvard.edu/search/q=%20collection%3Aastronomy%20body%3A%22Gulliver%2014%22&sort=date%20desc%2C%20bibcode%20desc&p_=0" target="_blank">NASA/SAO ADS</a> | <a href="https://simbad.cds.unistra.fr/simbad/sim-id-refs?Ident=gulliver14" target="_blank">Simbad</a></p>


### Position in UCC and published works (not exhaustive)

| Reference    | RA    | DEC   | plx  | pmRA  | pmDE   |  Rv  |
| :---         | :---: | :---: | :---: | :---: | :---: | :---: |
|[Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 259.928 | -36.785 | 0.745 | -3.719 | -4.792 | -- |
|[Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 259.915 | -36.763 | 0.741 | -3.733 | -4.779 | -- |
|[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | 259.956 | -36.702 | 0.748 | -3.751 | -4.795 | -- |
|[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | 259.946 | -36.708 | 0.763 | -3.759 | -4.756 | -16.263 |
| **UCC** |259.926 | -36.74 | 0.761 | -3.76 | -4.79 | -15.77 |

> <p style="text-align:center; font-weight: bold; font-size:20px">Search coordinates in <a href="https://cdsportal.u-strasbg.fr/?target=259.926,-36.74" target="_blank">CDS</a> | <a href="https://simbad.cds.unistra.fr/mobile/object_list.html?coord=259.926%20-36.74&output=json&radius=5&userEntry=gulliver14" target="_blank">Simbad</a></p>

### Plots for selected probable members

![CLUSTER](https://raw.githubusercontent.com/ucc23/Q4P/main/plots/gulliver14.webp)


> <p style="text-align:center; font-weight: bold; font-size:20px">Explore data in <a href="https://colab.research.google.com/github/UCC23/Q4P/blob/master/notebooks/gulliver14.ipynb" target="_blank">Colab</a></p>


### Fundamental parameters in literature (not exhaustive)

| Reference |  Fundamental parameters |
| :---         |     :---:      |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | `AVNN=1.63, DMNN=10.48, AgeNN=8.78` |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | `Av=2.0, Dist=1262.0, logage=8.54, [Fe/H]=0.17` |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | `Dist=1204.0, logAgeNN=8.82` |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | `AV50=1.93, MOD50=10.47, logAge50=8.6` |

<br>
<font color="b3b1b1"><i>Last modified: 2023-11-07</i></font>
