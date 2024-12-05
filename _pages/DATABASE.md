---
layout: page
title: 
permalink: /database/
---

The UCC currently contains <!-- NT1 -->16179<!-- NT2 --> objects compiled
from <!-- ND1 -->40<!-- ND2 --> databases, and it is regularly updated.
The latest full version of the UCC catalogue can be found in its
<a data-umami-event="zenodo_repo" href="https://zenodo.org/doi/10.5281/zenodo.8250523">Zenodo repository</a>
in compressed `csv` format.

![Catalogued OCs in the literature](/images/catalogued_ocs.webp "Catalogued OCs in the literature")

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


Below are tables that group the OCs in the UCC by various criteria.

- [Catalogues in the UCC](#catalogues-in-the-ucc)
- [Number of members](#number-of-members)
- [C3 classification](#c3-classification)
- [Duplicated OCs](#duplicated-ocs)
- [OCs per quadrants](#ocs-per-quadrants)

&nbsp;



### Catalogues in the UCC

This table contains all the catalogues used to generate the UCC. The modifications and
corrections made to each database before including it in the UCC
can be seen <a data-umami-event="dbs_edits" href="/../dbs_edits">here</a>.


<!-- Begin table 1 -->

| Name | N | Name | N |
| ---- | :-: | ---- | :-: |
| [Dambis (1999)](https://ui.adsabs.harvard.edu/abs/1999AstL...25....7D) | [201](/DAMBIS99_table) | [Koposov et al. (2008)](https://ui.adsabs.harvard.edu/abs/2008A%26A...486..771K) | [11](/KOPOSOV08_table) |
| [Kharchenko et al. (2012)](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K) | [2852](/KHARCHENKO12_table) | [Loktin & Popova (2017)](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L) | [1048](/LOKTIN17_table) |
| [Castro-Ginard et al. (2018)](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C) | [23](/CASTRO18_table) | [Bica et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B) | [3555](/BICA19_table) |
| [Bossini et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B) | [265](/BOSSINI19_table) | [Castro-Ginard et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...627A..35C) | [53](/CASTRO19_table) |
| [Sim et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S) | [207](/SIM19_table) | [Liu & Pang (2019)](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L) | [76](/LIUPANG19_table) |
| [Ferreira et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F) | [4](/FERREIRA19_table) | [Cantat-Gaudin et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C) | [2017](/CANTAT20_table) |
| [Castro-Ginard et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020A%26A...635A..45C) | [570](/CASTRO20_table) | [Ferreira et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020MNRAS.496.2021F) | [25](/FERREIRA20_table) |
| [Hao et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020PASP..132c4502H) | [16](/HAO20_table) | [Donor et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D) | [128](/DONOR20_table) |
| [Dias et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D) | [1741](/DIAS21_table) | [Casado (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21..117C) | [20](/CASADO21_table) |
| [Ferreira et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.502L..90F) | [34](/FERREIRA21_table) | [Hunt & Reffert (2021)](https://ui.adsabs.harvard.edu/abs/2021A%26A...646A.104H) | [41](/HUNT21_table) |
| [Jaehnig et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J) | [430](/JAEHNIG21_table) | [Santos-Silva et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S) | [15](/SANTOS21_table) |
| [He et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21...93H) | [74](/HE21_table) | [Castro-Ginard et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...661A.118C) | [628](/CASTRO22_table) |
| [Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T) | [467](/TARRICQ22_table) | [Li et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..259...19L) | [61](/LI22_table) |
| [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H) | [541](/HE22_table) | [He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H) | [836](/HE22_1_table) |
| [Hao et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...660A...4H) | [703](/HAO22_table) | [Perren et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P) | [24](/PERREN22_table) |
| [Casado & Hendy (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.521.1399C) | [2](/CASADOHENDY23_table) | [He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..264....8H) | [1656](/HE23_table) |
| [Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023A%26A...673A.114H) | [6806](/HUNT23_table) | [Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q) | [101](/QIN23_table) |
| [Li & Mao (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265....3L) | [35](/LI23_table) | [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...20C) | [46](/CHI23_2_table) |
| [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230208926C) | [82](/CHI23_table) | [Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230310380C) | [1179](/CHI23_3_table) |
| [He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..267...34H) | [2056](/HE23_1_table) | [Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C) | [6140](/CAVALLO24_table) |

<!-- End table 1 -->


### Number of members

This table groups the OCs in the UCC in ranges of their _estimated number of members_
parameter `N_50`. This number is obtained identifying as members those stars with
`P>50%`, where `P` is the membership probability assigned by the [fastMP](https://asteca.readthedocs.io/en/latest/apidocs/asteca/asteca.membership.html#asteca.membership.Membership.fastmp) method.

<!-- Begin table 5 -->

| N_50 |   N  | N_50 |   N  |
| :--: | :--: | :--: | :--: |
| == 0 | [3531](/N50_0_table) | (0, 25] | [1674](/N50_25_table) |
| (25, 50] | [4958](/N50_50_table) | (50, 75] | [1979](/N50_75_table) |
| (75, 100] | [1147](/N50_100_table) | (100, 250] | [1979](/N50_250_table) |
| (250, 500] | [595](/N50_500_table) | (500, 1000] | [225](/N50_1000_table) |
| (1000, 2000] | [76](/N50_2000_table) | > 2000 | [15](/N50_inf_table) |

<!-- End table 5 -->


### C3 classification

This table shows the OCs in the UCC grouped by their [C3 class](/faq/#what-are-the-c1-c2-and-c3-parameters).

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2316](/AA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3262](/AB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [443](/BA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [1244](/AC_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [245](/CA_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1324](/BB_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [24](/AD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [105](/DA_table) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1475](/BC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1001](/CB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [85](/BD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [670](/DB_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [1868](/CC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [184](/CD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [1717](/DC_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [216](/DD_table) |

<!-- End table 2 -->


![C3 classification](/images/classif_bar.webp "C3 classification")



### Duplicated OCs

This table groups the OCs in the UCC by the number of probable duplicates assigned,
as explained [here](/faq/#how-are-probable-duplicates-identified).

<!-- Begin table 4 -->

| Probable duplicates |   N  |
|---------------------| :--: |
|      N_dup = 1      | [3234](/Nd1_table) |
|      N_dup = 2      | [778](/Nd2_table) |
|      N_dup = 3      | [186](/Nd3_table) |
|      N_dup = 4      | [25](/Nd4_table) |
|     N_dup >= 5      | [6](/Nd5_table) |

<!-- End table 4 -->



### OCs per quadrants

This table groups the OCs in the UCC by their position in the Galactic quadrants,
given by their `(lon, lat)` coordinates.

<!-- Begin table 3 -->

| Region  | lon range  | lat range  |   N |
|---------|------------|------------| :-: |
| Q1P: 1st quadrant, positive latitude | [0, 90)    | [0, 90]    | [1887](/Q1P_table) |
| Q1N: 1st quadrant, negative latitude | [0, 90)    | (0, -90]   | [1874](/Q1N_table) |
| Q2P: 2nd quadrant, positive latitude | [90, 180)  | [0, 90]    | [1900](/Q2P_table) |
| Q2N: 2nd quadrant, negative latitude | [90, 180)  | (0, -90]   | [1793](/Q2N_table) |
| Q3P: 3rd quadrant, positive latitude | [180, 270) | [0, 90]    | [1830](/Q3P_table) |
| Q3N: 3rd quadrant, negative latitude | [180, 270) | (0, -90]   | [2539](/Q3N_table) |
| Q4P: 4th quadrant, positive latitude | [270, 360) | [0, 90]    | [1815](/Q4P_table) |
| Q4N: 4th quadrant, negative latitude | [270, 360) | (0, -90]   | [2541](/Q4N_table) |

<!-- End table 3 -->
