---
layout: page
title: Cluster tables
permalink: /tables/
style: style
---

Open clusters in the UCC grouped according to various criteria to facilitate easy
exploration.

- [UTI classification](#uti-classification)
- [C3 classification](#c3-classification)
- [OCs with shared members](#ocs-with-shared-members)
- [Number of members](#number-of-members)


### UTI classification

This table shows the OCs in the UCC grouped by their [UTI value](/faq/#what-is-the-uti-parameter).

<!-- Begin table 1 -->

| UTI |  N  | UTI |  N  |
| :--: | :-: | :--: | :-: |
| == 0.0 | [893](/tables/UTI0_table) | (0.0, 0.1] | [4698](/tables/UTI1_table) |
 (0.1, 0.2] | [3053](/tables/UTI2_table) |  (0.2, 0.3] | [2099](/tables/UTI3_table) |
 (0.3, 0.4] | [1386](/tables/UTI4_table) |  (0.4, 0.5] | [1115](/tables/UTI5_table) |
 (0.5, 0.6] | [938](/tables/UTI6_table) |  (0.6, 0.7] | [709](/tables/UTI7_table) |
 (0.7, 0.8] | [554](/tables/UTI8_table) |  (0.8, 0.9] | [570](/tables/UTI9_table) |
| 0.9 < | [573](/tables/UTI10_table) | -- | -- |

<!-- End table 1 -->


### C3 classification

This table shows the OCs in the UCC grouped by their [C3 class](/faq/#what-is-the-c3-parameter).

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2280](/tables/AA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3310](/tables/AB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [379](/tables/BA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [867](/tables/AC_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [202](/tables/CA_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1540](/tables/BB_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [13](/tables/AD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [87](/tables/DA_table) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1398](/tables/BC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1178](/tables/CB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [42](/tables/BD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [730](/tables/DB_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [2145](/tables/CC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [84](/tables/CD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [2216](/tables/DC_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [117](/tables/DD_table) |

<!-- End table 2 -->


### OCs with shared members

This table groups the OCs in the UCC by the number of other OCs with which they share
members. The percentage of shared members goes from <1% to 100% in some cases, which
points to obvious duplicates.

<!-- Begin table 4 -->

| OCs with shared members |   N  |
|---------------------| :--: |
|      N_shared = 1      | [4008](/tables/Ns1_table) |
|      N_shared = 2      | [1324](/tables/Ns2_table) |
|      N_shared = 3      | [450](/tables/Ns3_table) |
|      N_shared = 4      | [120](/tables/Ns4_table) |
|     N_shared >= 5      | [63](/tables/Ns5_table) |

<!-- End table 4 -->


### Number of members

This table groups the OCs in the UCC in ranges of their _estimated number of members_
parameter `N_50`. This number is obtained identifying as members those stars with
`P>50%`, where `P` is the membership probability assigned by the [fastMP](https://asteca.readthedocs.io/en/latest/build/api/asteca.Membership.html#asteca.Membership.fastmp) method.

<!-- Begin table 5 -->

| N_50 |   N  | N_50 |   N  |
| :--: | :--: | :--: | :--: |
| == 0 | [14](/tables/N50_0_table) | (0, 25] | [8615](/tables/N50_25_table) |
| (25, 50] | [3960](/tables/N50_50_table) | (50, 75] | [1482](/tables/N50_75_table) |
| (75, 100] | [690](/tables/N50_100_table) | (100, 250] | [1191](/tables/N50_250_table) |
| (250, 500] | [413](/tables/N50_500_table) | (500, 1000] | [151](/tables/N50_1000_table) |
| (1000, 2000] | [57](/tables/N50_2000_table) | > 2000 | [15](/tables/N50_inf_table) |

<!-- End table 5 -->
