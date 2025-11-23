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
| == 0.0 | [894](/tables/UTI0_table) | (0.0, 0.1] | [5437](/tables/UTI1_table) |
 (0.1, 0.2] | [3068](/tables/UTI2_table) |  (0.2, 0.3] | [1893](/tables/UTI3_table) |
 (0.3, 0.4] | [1291](/tables/UTI4_table) |  (0.4, 0.5] | [1154](/tables/UTI5_table) |
 (0.5, 0.6] | [884](/tables/UTI6_table) |  (0.6, 0.7] | [661](/tables/UTI7_table) |
 (0.7, 0.8] | [564](/tables/UTI8_table) |  (0.8, 0.9] | [477](/tables/UTI9_table) |
| 0.9 < | [424](/tables/UTI10_table) | -- | -- |

<!-- End table 1 -->


### C3 classification

This table shows the OCs in the UCC grouped by their [C3 class](/faq/#what-is-the-c3-parameter).

<!-- Begin table 2 -->

| C3 |  N  | C3 |  N  | C3 |  N  | C3 |  N  |
|----| :-: |----| :-: |----| :-: |----| :-: |
| <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | [2285](/tables/AA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | [3317](/tables/AB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | [379](/tables/BA_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: red; font-weight: bold;">C</span> | [879](/tables/AC_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: green; font-weight: bold;">A</span> | [203](/tables/CA_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1546](/tables/BB_table) | <span style="color: green; font-weight: bold;">A</span><span style="color: purple; font-weight: bold;">D</span> | [13](/tables/AD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: green; font-weight: bold;">A</span> | [88](/tables/DA_table) |
| <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: red; font-weight: bold;">C</span> | [1417](/tables/BC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: #FFC300; font-weight: bold;">B</span> | [1180](/tables/CB_table) | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: purple; font-weight: bold;">D</span> | [42](/tables/BD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: #FFC300; font-weight: bold;">B</span> | [735](/tables/DB_table) |
| <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | [2188](/tables/CC_table) | <span style="color: red; font-weight: bold;">C</span><span style="color: purple; font-weight: bold;">D</span> | [84](/tables/CD_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: red; font-weight: bold;">C</span> | [2274](/tables/DC_table) | <span style="color: purple; font-weight: bold;">D</span><span style="color: purple; font-weight: bold;">D</span> | [117](/tables/DD_table) |

<!-- End table 2 -->


### Number of members

This table groups the OCs in the UCC in ranges of their _estimated number of members_
parameter `N_50`. This number is obtained identifying as members those stars with
`P>50%`, where `P` is the membership probability assigned by the [fastMP](https://asteca.readthedocs.io/en/latest/build/api/asteca.Membership.html#asteca.Membership.fastmp) method.

<!-- Begin table 5 -->

| N_50 |   N  | N_50 |   N  |
| :--: | :--: | :--: | :--: |
| == 0 | [14](/tables/N50_0_table) | (0, 25] | [8752](/tables/N50_25_table) |
| (25, 50] | [3971](/tables/N50_50_table) | (50, 75] | [1484](/tables/N50_75_table) |
| (75, 100] | [690](/tables/N50_100_table) | (100, 250] | [1197](/tables/N50_250_table) |
| (250, 500] | [414](/tables/N50_500_table) | (500, 1000] | [152](/tables/N50_1000_table) |
| (1000, 2000] | [58](/tables/N50_2000_table) | > 2000 | [15](/tables/N50_inf_table) |

<!-- End table 5 -->



### Probable duplicates

This table groups the OCs in the UCC by their estimated likelihood
of being a duplicate of a previous entry. The parameter `C_dup` ranges from `0`
(definitely a duplicate) to `1` (not a duplicate). See [here](/faq/#what-is-the-uti-parameter) for more details.


<!-- Begin table 4 -->

| C_dup |  N  | C_dup |  N  |
| :--: | :-: | :--: | :-: |
| == 0.0 | [872](/tables/Cdup0_table) | (0.0, 0.1] | [571](/tables/Cdup1_table) |
 (0.1, 0.2] | [425](/tables/Cdup2_table) |  (0.2, 0.3] | [276](/tables/Cdup3_table) |
 (0.3, 0.4] | [210](/tables/Cdup4_table) |  (0.4, 0.5] | [172](/tables/Cdup5_table) |
 (0.5, 0.6] | [153](/tables/Cdup6_table) |  (0.6, 0.7] | [116](/tables/Cdup7_table) |
 (0.7, 0.8] | [126](/tables/Cdup8_table) |  (0.8, 0.9] | [124](/tables/Cdup9_table) |
| 0.9 < | [13702](/tables/Cdup10_table) | -- | -- |

<!-- End table 4 -->
