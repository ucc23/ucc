---
layout: page
title: 
permalink: /database/
---

The latest full version of the UCC catalogue can be found in its
[Zenodo repository](https://zenodo.org/doi/10.5281/zenodo.8250523) in compressed `csv` format.

The compressed `parquet` file with the estimated members for the UCC can also be
downloaded from the same repository. To extract the data simply use the
[pandas](https://pandas.pydata.org/) Python package:

{% raw %}
```
df = pd.read_parquet('UCC_members.parquet.gz')
```
{% endraw %}


&nbsp;

---

&nbsp;

- [Catalogues in the UCC](#catalogues-in-the-ucc)
- [C3 classification](#c3-classification)
- [OCs per quadrants](#ocs-per-quadrants)




### Catalogues in the UCC

![Catalogued OCs in the literature](/images/catalogued_ocs.webp "Catalogued OCs in the literature")

<!-- Begin table 1 -->

| Name | N | Name | N |
| ---- | :-: | ---- | :-: |
| [Koposov et al. (2008)](https://ui.adsabs.harvard.edu/abs/2008A%26A...486..771K/abstract) | 11 | [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | 2852 |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | 1048 | [Castro-Ginard et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C/abstract) | 23 |
| [Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract) | 3555 | [Bossini et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B/abstract) | 265 |
| [Castro-Ginard et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...627A..35C/abstract) | 53 | [Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S/abstract) | 207 |
| [Liu & Pang (2019)](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L/abstract) | 76 | [Ferreira et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F/abstract) | 3 |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | 2017 | [Castro-Ginard et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...635A..45C/abstract) | 570 |
| [Ferreira et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020MNRAS.496.2021F/abstract) | 25 | [Hao et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020PASP..132c4502H/abstract) | 16 |
| [Donor et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D/abstract) | 128 | [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | 1741 |
| [Casado (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21..117C/abstract) | 20 | [Ferreira et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.502L..90F/abstract) | 34 |
| [Hunt & Reffert (2021)](https://ui.adsabs.harvard.edu/abs/2021A%26A...646A.104H/abstract) | 41 | [Jaehnig et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J/abstract) | 430 |
| [Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S/abstract) | 15 | [He et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21...93H/abstract) | 74 |
| [Castro-Ginard et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...661A.118C/abstract) | 628 | [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | 467 |
| [Li et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..259...19L/abstract) | 61 | [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H/abstract) | 541 |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | 836 | [Hao et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...660A...4H/abstract) | 703 |
| [Perren et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P/abstract) | 24 | [Casado & Hendy (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.521.1399C/abstract) | 2 |
| [He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..264....8H/abstract) | 1656 | [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | 6806 |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q/abstract) | 101 | [Li & Mao (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265....3L/abstract) | 35 |
| [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...20C/abstract) | 46 | [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230208926C/abstract) | 82 |
| [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230310380C/abstract) | 1179 | [He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..267...34H/abstract) | 2056 |

<!-- End table 1 -->


### C3 classification

![C3 classification](/images/classif_bar.webp "C3 classification")

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2316](https://ucc.ar/AA_table/) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3262](https://ucc.ar/AB_table/) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [443](https://ucc.ar/BA_table/) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [1244](https://ucc.ar/AC_table/) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [245](https://ucc.ar/CA_table/) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1324](https://ucc.ar/BB_table/) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [24](https://ucc.ar/AD_table/) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [105](https://ucc.ar/DA_table/) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1475](https://ucc.ar/BC_table/) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1001](https://ucc.ar/CB_table/) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [85](https://ucc.ar/BD_table/) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [670](https://ucc.ar/DB_table/) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [1868](https://ucc.ar/CC_table/) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [184](https://ucc.ar/CD_table/) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [1717](https://ucc.ar/DC_table/) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [216](https://ucc.ar/DD_table/) |

<!-- End table 2 -->


### OCs per quadrants

<!-- Begin table 3 -->

| Region  | lon range  | lat range  |   N |
|---------|------------|------------| :-: |
| [Q1P: 1st quadrant, positive latitude](https://ucc.ar/Q1P_table/) | [0, 90)    | [0, 90]    | 1887 |
| [Q1N: 1st quadrant, negative latitude](https://ucc.ar/Q1N_table/) | [0, 90)    | (0, -90]   | 1874 |
| [Q2P: 2nd quadrant, positive latitude](https://ucc.ar/Q2P_table/) | [90, 180)  | [0, 90]    | 1900 |
| [Q2N: 2nd quadrant, negative latitude](https://ucc.ar/Q2N_table/) | [90, 180)  | (0, -90]   | 1793 |
| [Q3P: 3rd quadrant, positive latitude](https://ucc.ar/Q3P_table/) | [180, 270) | [0, 90]    | 1830 |
| [Q3N: 3rd quadrant, negative latitude](https://ucc.ar/Q3N_table/) | [180, 270) | (0, -90]   | 2539 |
| [Q4P: 4th quadrant, positive latitude](https://ucc.ar/Q4P_table/) | [270, 360) | [0, 90]    | 1815 |
| [Q4N: 4th quadrant, negative latitude](https://ucc.ar/Q4N_table/) | [270, 360) | (0, -90]   | 2541 |

<!-- End table 3 -->
