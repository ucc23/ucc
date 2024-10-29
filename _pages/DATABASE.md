---
layout: page
title: 
permalink: /database/
---

The latest full version of the UCC catalogue can be found in its
<a data-umami-event="zenodo_repo" href="https://zenodo.org/doi/10.5281/zenodo.8250523">Zenodo repository</a>
in compressed `csv` format.

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
| [Koposov et al. (2008)](https://ui.adsabs.harvard.edu/abs/2008A%26A...486..771K/abstract) | [11](/tables/KOPOSOV08_table.md) | [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | [2852](/tables/KHARCHENKO12_table.md) |
| [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract) | [1048](/tables/LOKTIN17_table.md) | [Castro-Ginard et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C/abstract) | [23](/tables/CASTRO18_table.md) |
| [Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract) | [3555](/tables/BICA19_table.md) | [Bossini et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B/abstract) | [265](/tables/BOSSINI19_table.md) |
| [Castro-Ginard et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...627A..35C/abstract) | [53](/tables/CASTRO19_table.md) | [Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S/abstract) | [207](/tables/SIM19_table.md) |
| [Liu & Pang (2019)](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L/abstract) | [76](/tables/LIUPANG19_table.md) | [Ferreira et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F/abstract) | [3](/tables/FERREIRA19_table.md) |
| [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | [2017](/tables/CANTAT20_table.md) | [Castro-Ginard et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...635A..45C/abstract) | [570](/tables/CASTRO20_table.md) |
| [Ferreira et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020MNRAS.496.2021F/abstract) | [25](/tables/FERREIRA20_table.md) | [Hao et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020PASP..132c4502H/abstract) | [16](/tables/HAO20_table.md) |
| [Donor et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D/abstract) | [128](/tables/DONOR20_table.md) | [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | [1741](/tables/DIAS21_table.md) |
| [Casado (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21..117C/abstract) | [20](/tables/CASADO21_table.md) | [Ferreira et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.502L..90F/abstract) | [34](/tables/FERREIRA21_table.md) |
| [Hunt & Reffert (2021)](https://ui.adsabs.harvard.edu/abs/2021A%26A...646A.104H/abstract) | [41](/tables/HUNT21_table.md) | [Jaehnig et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J/abstract) | [430](/tables/JAEHNIG21_table.md) |
| [Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S/abstract) | [15](/tables/SANTOS21_table.md) | [He et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21...93H/abstract) | [74](/tables/HE21_table.md) |
| [Castro-Ginard et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...661A.118C/abstract) | [628](/tables/CASTRO22_table.md) | [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract) | [467](/tables/TARRICQ22_table.md) |
| [Li et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..259...19L/abstract) | [61](/tables/LI22_table.md) | [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H/abstract) | [541](/tables/HE22_table.md) |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract) | [836](/tables/HE22_1_table.md) | [Hao et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...660A...4H/abstract) | [703](/tables/HAO22_table.md) |
| [Perren et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P/abstract) | [24](/tables/PERREN22_table.md) | [Casado & Hendy (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.521.1399C/abstract) | [2](/tables/CASADOHENDY23_table.md) |
| [He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..264....8H/abstract) | [1656](/tables/HE23_table.md) | [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H/abstract) | [6806](/tables/HUNT23_table.md) |
| [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q/abstract) | [101](/tables/QIN23_table.md) | [Li & Mao (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265....3L/abstract) | [35](/tables/LI23_table.md) |
| [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...20C/abstract) | [46](/tables/CHI23_2_table.md) | [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230208926C/abstract) | [82](/tables/CHI23_table.md) |
| [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230310380C/abstract) | [1179](/tables/CHI23_3_table.md) | [He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..267...34H/abstract) | [2056](/tables/HE23_1_table.md) |

<!-- End table 1 -->

The modifications and corrections made to each database before including it in the UCC
can be seen <a data-umami-event="dbs_edits" href="/../dbs_edits">here</a>.



### C3 classification

![C3 classification](/images/classif_bar.webp "C3 classification")

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2316](/tables/AA_table.md) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3262](/tables/AB_table.md) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [443](/tables/BA_table.md) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [1244](/tables/AC_table.md) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [245](/tables/CA_table.md) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1324](/tables/BB_table.md) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [24](/tables/AD_table.md) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [105](/tables/DA_table.md) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1475](/tables/BC_table.md) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1001](/tables/CB_table.md) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [85](/tables/BD_table.md) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [670](/tables/DB_table.md) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [1868](/tables/CC_table.md) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [184](/tables/CD_table.md) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [1717](/tables/DC_table.md) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [216](/tables/DD_table.md) |

<!-- End table 2 -->


### OCs per quadrants

<!-- Begin table 3 -->

| Region  | lon range  | lat range  |   N |
|---------|------------|------------| :-: |
| Q1P: 1st quadrant, positive latitude | [0, 90)    | [0, 90]    | [1887](/tables/Q1P_table.md) |
| Q1N: 1st quadrant, negative latitude | [0, 90)    | (0, -90]   | [1874](/tables/Q1N_table.md) |
| Q2P: 2nd quadrant, positive latitude | [90, 180)  | [0, 90]    | [1900](/tables/Q2P_table.md) |
| Q2N: 2nd quadrant, negative latitude | [90, 180)  | (0, -90]   | [1793](/tables/Q2N_table.md) |
| Q3P: 3rd quadrant, positive latitude | [180, 270) | [0, 90]    | [1830](/tables/Q3P_table.md) |
| Q3N: 3rd quadrant, negative latitude | [180, 270) | (0, -90]   | [2539](/tables/Q3N_table.md) |
| Q4P: 4th quadrant, positive latitude | [270, 360) | [0, 90]    | [1815](/tables/Q4P_table.md) |
| Q4N: 4th quadrant, negative latitude | [270, 360) | (0, -90]   | [2541](/tables/Q4N_table.md) |

<!-- End table 3 -->
