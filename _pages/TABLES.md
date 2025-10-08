---
layout: page
title: Cluster tables
permalink: /tables/
style: style
---

Open clusters in the UCC grouped according to various criteria to facilitate easy
exploration.

- [Number of members](#number-of-members)
- [C3 classification](#c3-classification)
- [OCs with shared members](#ocs-with-shared-members)
- [OCs per quadrants](#ocs-per-quadrants)


### Number of members

This table groups the OCs in the UCC in ranges of their _estimated number of members_
parameter `N_50`. This number is obtained identifying as members those stars with
`P>50%`, where `P` is the membership probability assigned by the [fastMP](https://asteca.readthedocs.io/en/latest/build/api/asteca.Membership.html#asteca.Membership.fastmp) method.

<!-- Begin table 5 -->

| N_50 |   N  | N_50 |   N  |
| :--: | :--: | :--: | :--: |
| == 0 | [14](/tables/N50_0_table) | (0, 25] | [8615](/tables/N50_25_table) |
| (25, 50] | [3960](/tables/N50_50_table) | (50, 75] | [1481](/tables/N50_75_table) |
| (75, 100] | [690](/tables/N50_100_table) | (100, 250] | [1192](/tables/N50_250_table) |
| (250, 500] | [413](/tables/N50_500_table) | (500, 1000] | [151](/tables/N50_1000_table) |
| (1000, 2000] | [57](/tables/N50_2000_table) | > 2000 | [15](/tables/N50_inf_table) |

<!-- End table 5 -->


### C3 classification

This table shows the OCs in the UCC grouped by their [C3 class](/faq/#what-is-the-c3-parameter).

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2280](/tables/AA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3311](/tables/AB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [380](/tables/BA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [867](/tables/AC_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [202](/tables/CA_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1540](/tables/BB_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [13](/tables/AD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [86](/tables/DA_table) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1395](/tables/BC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1177](/tables/CB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [42](/tables/BD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [730](/tables/DB_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [2146](/tables/CC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [83](/tables/CD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [2219](/tables/DC_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [117](/tables/DD_table) |

<!-- End table 2 -->


### OCs with shared members

This table groups the OCs in the UCC by the number of other OCs with which they share
members. The percentage of shared members goes from <1% to 100% in some cases, which
points to obvious duplicates.

<!-- Begin table 4 -->

| OCs with shared members |   N  |
|---------------------| :--: |
|      N_shared = 1      | [4010](/tables/Ns1_table) |
|      N_shared = 2      | [1323](/tables/Ns2_table) |
|      N_shared = 3      | [446](/tables/Ns3_table) |
|      N_shared = 4      | [125](/tables/Ns4_table) |
|     N_shared >= 5      | [63](/tables/Ns5_table) |

<!-- End table 4 -->


### OCs per quadrants

This table groups the OCs in the UCC by their position in the Galactic quadrants,
given by their `(lon, lat)` coordinates.

<!-- Begin table 3 -->

| Region  | lon range  | lat range  |   N |
|---------|------------|------------| :-: |
| Q1P: 1st quadrant, positive latitude | [0, 90)    | [0, 90]    | [1940](/tables/Q1P_table) |
| Q1N: 1st quadrant, negative latitude | [0, 90)    | (0, -90]   | [1923](/tables/Q1N_table) |
| Q2P: 2nd quadrant, positive latitude | [90, 180)  | [0, 90]    | [1939](/tables/Q2P_table) |
| Q2N: 2nd quadrant, negative latitude | [90, 180)  | (0, -90]   | [1828](/tables/Q2N_table) |
| Q3P: 3rd quadrant, positive latitude | [180, 270) | [0, 90]    | [1843](/tables/Q3P_table) |
| Q3N: 3rd quadrant, negative latitude | [180, 270) | (0, -90]   | [2592](/tables/Q3N_table) |
| Q4P: 4th quadrant, positive latitude | [270, 360) | [0, 90]    | [1901](/tables/Q4P_table) |
| Q4N: 4th quadrant, negative latitude | [270, 360) | (0, -90]   | [2622](/tables/Q4N_table) |

<!-- End table 3 -->
