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
- [Number of members](#number-of-members)
- [Probable duplicates](#probable-duplicates)


### UTI classification

This table shows the OCs in the UCC grouped by their [UTI value](/faq/#what-is-the-uti-parameter).

<!-- Begin table 1 -->

| UTI |  N  | UTI |  N  |
| :--: | :-: | :--: | :-: |
| == 0.0 | [884](/tables/UTI0_table) | (0.0, 0.1] | [4542](/tables/UTI1_table) |
 (0.1, 0.2] | [3079](/tables/UTI2_table) |  (0.2, 0.3] | [2222](/tables/UTI3_table) |
 (0.3, 0.4] | [1391](/tables/UTI4_table) |  (0.4, 0.5] | [1128](/tables/UTI5_table) |
 (0.5, 0.6] | [938](/tables/UTI6_table) |  (0.6, 0.7] | [704](/tables/UTI7_table) |
 (0.7, 0.8] | [543](/tables/UTI8_table) |  (0.8, 0.9] | [577](/tables/UTI9_table) |
| 0.9 < | [596](/tables/UTI10_table) | -- | -- |

<!-- End table 1 -->


### C3 classification

This table shows the OCs in the UCC grouped by their [C3 class](/faq/#what-is-the-c3-parameter).

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2279](/tables/AA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3305](/tables/AB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [379](/tables/BA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [873](/tables/AC_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [202](/tables/CA_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1539](/tables/BB_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [13](/tables/AD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [87](/tables/DA_table) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1403](/tables/BC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1176](/tables/CB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [42](/tables/BD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [731](/tables/DB_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [2152](/tables/CC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [84](/tables/CD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [2223](/tables/DC_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [116](/tables/DD_table) |

<!-- End table 2 -->


### Number of members

This table groups the OCs in the UCC in ranges of their _estimated number of members_
parameter `N_50`. This number is obtained identifying as members those stars with
`P>50%`, where `P` is the membership probability assigned by the [fastMP](https://asteca.readthedocs.io/en/latest/build/api/asteca.Membership.html#asteca.Membership.fastmp) method.

<!-- Begin table 5 -->

| N_50 |   N  | N_50 |   N  |
| :--: | :--: | :--: | :--: |
| == 0 | [14](/tables/N50_0_table) | (0, 25] | [8636](/tables/N50_25_table) |
| (25, 50] | [3958](/tables/N50_50_table) | (50, 75] | [1481](/tables/N50_75_table) |
| (75, 100] | [687](/tables/N50_100_table) | (100, 250] | [1193](/tables/N50_250_table) |
| (250, 500] | [412](/tables/N50_500_table) | (500, 1000] | [150](/tables/N50_1000_table) |
| (1000, 2000] | [58](/tables/N50_2000_table) | > 2000 | [15](/tables/N50_inf_table) |

<!-- End table 5 -->



### Probable duplicates

This table groups the OCs in the UCC by their estimated probability
members. The percentage of shared members goes from <1% to 100% in some cases, which
points to obvious duplicates.

<!-- Begin table 4 -->

| C_dup |  N  | C_dup |  N  |
| :--: | :-: | :--: | :-: |
| == 0.0 | [864](/tables/Cdup0_table) | (0.0, 0.1] | [570](/tables/Cdup1_table) |
 (0.1, 0.2] | [419](/tables/Cdup2_table) |  (0.2, 0.3] | [273](/tables/Cdup3_table) |
 (0.3, 0.4] | [205](/tables/Cdup4_table) |  (0.4, 0.5] | [169](/tables/Cdup5_table) |
 (0.5, 0.6] | [151](/tables/Cdup6_table) |  (0.6, 0.7] | [113](/tables/Cdup7_table) |
 (0.7, 0.8] | [124](/tables/Cdup8_table) |  (0.8, 0.9] | [120](/tables/Cdup9_table) |
| 0.9 < | [13596](/tables/Cdup10_table) | -- | -- |

<!-- End table 4 -->
