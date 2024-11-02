---
layout: page
title: 
permalink: /dbs_edits/
---

Every database employed to generate the UCC is listed here, with a full description
of the modifications and corrections made before merging it in to our final catalogue.

We split the file into two sections. First we show the 32 databases used in the
original [UCC article](https://doi.org/10.1093/mnras/stad2826). After that, we show the databases that were
added after the publication of the article.

- [Initial databases](#initial-databases)
- [Added after publication](#added-after-publication)

&nbsp;

---

&nbsp;

## Initial databases


### 1. KHARCHENKO12

[Kharchenko et al. 2012](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K); _Global survey of star clusters in the Milky Way. I. The
pipeline and fundamental parameters in the second quadrant_

Retrieved the data from the [HEASARC](https://heasarc.gsfc.nasa.gov/W3Browse/all/mwsc.html) service selecting all clusters with
`class` equal to `OPEN STAR CLUSTER`, resulting in 2858 entries.

This DB lists the FSR clusters as "FSR XXXX" with leading zeros and the ESO
clusters as "ESO XXX-XX" with leading zeroes.

Name changes:

* vdBergh-Hagen --> VDBH per CDS recommendation (added 'vdBergh-Hagen' so that the
naming isn't lost)
* vdBergh       --> VDB per CDS recommendation (added 'vdBergh' so that the
naming isn't lost)

Removed entries pointing to a GC:

* ESO 456-29 (Gran 1)
* FSR 1716
* FSR 1758
* VDBH 140,vdBergh-Hagen 140

We do not use the values listed here to generate the positions for the clusters
in the UCC.


### 2. LOKTIN17

[Loktin & Popova 2017](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract); _Updated version of the 'homogeneous catalog of open
cluster parameters'_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/other/AstBu/72.257/catalog) table contains 1052 clusters.

Many proper motion values in this DB are very wrong (see e.g: NGC 2516). We
thus do not use these values in the DB.

Contains 11 clusters with an extra name in parenthesis. These were fixed as
follows:

* "Alpha_Persei, Melotte 20"
* "Collinder258, Har5"
* "Coma Star, Melotte 111"
* "Herschel1, ASCC41"
* "Hyades, Melotte 25"
* "NGC2645, Pismis6"
* "NGC2682, Melotte 67"
* "NGC3247, Cr220"
* "Pleiades, Melotte 45"
* "Praesepe, NGC2632"
* "Stephenson1, Del_L"

Name changes:

* VDBergh_Hagen --> VDBH per CDS recommendation (added 'vdBergh-Hagen' to 43
clusters so that the naming isn't lost)
* VDBergh       --> VDB per CDS recommendation
* Sauer5 --> Saurer 5
* Teusch61 --> Teutsch61
* AlessiJ2327+55 --> Alessi J2327.0+55
* Sigma_Ori --> Sigma_Orionis

Removed entries pointing to a GC:

* berkeley42 (NGC 6749)
* lynga7 (BH 184)


### 3. CASTRO18

[Castro-Ginard et al. 2018](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C/abstract); _A new method for unveiling open
clusters in Gaia. New nearby open clusters confirmed by DR2_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/618/A59) table contains 23 entries. No changes required.


### 4. BICA19

[Bica et al. 2019](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract); _A Multi-band Catalog of 10978 Star Clusters, Associations,
and Candidates in the Milky Way_;

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/AJ/157/12/table3) table contains 10978 entries. We keep only those with `Class1 OC` (open
cluster) or `OCC` (open cluster candidate). This reduces the list to 3564 entries.

Added `RA_ICRS` and `DE_ICRS` columns to the DB.

Fixes to duplicated entries:

* MWSC 2776, name listed twice --> removed one of the repeated names
* FSR 523, FSR 847, FSR 436 --> removed the duplicates that showed as single entries
* ESO 393-3 --> removed name from both entries (cluster not found in CDS)
* MWSC 1025, 1482, 948, 3123, 1997, 1840, 442, 1808, 2204: removed name from
both entries (clusters not found in KHARCHENKO12)
* ESO 97-2 --> removed from Loden 848 as it matches the position of Loden 894 according to CDS
* FSR 972, OCL 344, Collinder 384, FSR 179 --> removed from both entries, it does not show in CDS or anywhere else
* MWSC 206 --> removed entry that also showed FSR 60 as the coordinates for FSR 60 are a better match in KHARCHENKO12 for the entry with the single FSR 60 name

Changes to names:

* BH --> VDBH per CDS recommendation
* vdBergh  --> VDB per CDS recommendation
* FSR 429.MWSC 3667 --> FSR 429,MWSC 3667
* Carraro 1.MWSC 1829 --> Carraro 1,MWSC 1829
* Cernik 39 --> Czernik 39
* FSR343 --> FSR 343
* ESO456-13 --> ESO 456-13
* de Wit 1 --> Wit 1 (to match KHARCHENKO12)
* JS 1 --> Juchert-Saloran 1 (to match KHARCHENKO12)
* ESO 589-26,MW --> ESO 589-26
* Messineo 1,Cl 1813-18,SAI 126, --> Remove comma at the end
* Alessi J2327.6+5535 --> Alessi J2327.0+55
* TRSG 1 --> RSG 1
* Added 'Dol-Dzim 9' to 'DoDz 9' to match KHARCHENKO12
* Added 'Dol-Dzim 11' to 'DoDz 11' to match KHARCHENKO12
* Removed 'Alessi J0715.6-0722' as it is an OCC and its position matches that of 'Alessi J0715.6-0727'

Removed entries pointing to a GC:

* ESO 456-29,MWSC 2761 (Gran 1)
* ESO 93-8,MWSC 1932
* FSR 1758,MWSC 2617
* VDBH 140,vdBergh-Hagen 140,FSR 1632,MWSC 2071

#### Ryu clusters

This is the only DB that lists the [Ryu & Lee (2018)](https://ui.adsabs.harvard.edu/abs/2018ApJ...856..152R/abstract) clusters. The original
article claims to have found 721 new OCs (923 minus 202 embedded). BICA19 (page
11) says that the Ryu & Lee article lists 719 OCs (921 minus 202 embedded).
BICA19 lists in its Vizier table only 711 Ryu OCs, 4 of which are listed with
alternative names (Teutsch J1814.6-2814|Ryu 563, Quartet|Ryu 858,
GLIMPSE 70|Mercer 70|Ryu 273, LS 468|La Serena 468|Ryu 094). Hence there are
707 Ryu clusters in the final BICA19 Vizier table.

These are **very** small objects, Ryu & Lee (2018): "_The average angular radius of
the clusters is 1.3'. More specifically, 902 (98%) clusters are smaller than 3′,
and 823 (89%) clusters are even smaller than 2′._"


### 5. SIM19

[Sim et al. 2019](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S/abstract); _207 New Open Star Clusters within 1 kpc from Gaia Data Release_

Data taken from Table 2 in the online article (contains 207 UPK clusters)
Added `(ra, dec)` columns and a `plx` column estimated as 1000/dist_pc.


### 6. CASTRO19

[Castro-Ginard et al. 2019](https://ui.adsabs.harvard.edu/abs/2019A%26A...627A..35C/abstract); _Hunting for open clusters in Gaia DR2: the Galactic
anticentre_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/627/A35) table contains 53 UBC clusters. No changes required.


### 7. LIUPANG19

[Liu & Pang 2019](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L/abstract); _A Catalog of Newly Identified Star Clusters in Gaia DR2_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/245/32) table contains 76 clusters with no acronym given. Added 'FoF_' to
match HUNT23.



### 8. FERREIRA19

[Ferreira et al. 2019](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F/abstract); _Three new Galactic star clusters discovered in the field
of the open cluster NGC 5999 with Gaia DR2_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/483/5508) table contains 3 UFMG clusters and NGC 5999. This last cluster was
removed in the initial version of the DB (don't remember why).

Added `(RA_ICRS,DE_ICRS)` columns (converted from `h:m:s` and `d:m:s`).


### 9. CASTRO20

[Castro-Ginard et al. 2020](https://ui.adsabs.harvard.edu/abs/2020A%26A...635A..45C/abstract); _Hunting for open clusters in Gaia DR2: 582 new open
clusters in the Galactic disc_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/635/A45) table contains 570 UBC clusters.

Fixed wrong ra coordinates for UBC595 and UBC181.


### 10. FERREIRA20

[Ferreira et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020MNRAS.496.2021F/abstract); _Discovery and astrophysical properties of Galactic open
clusters in dense stellar fields using Gaia DR2.__

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/496/2021) table contains 25 UFMG clusters. Added `(RA_ICRS,DE_ICRS)` columns.


### 11. CANTAT20

[Cantat-Gaudin et al. 2020](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C); _Painting a portrait of the Galactic disc with its
stellar clusters_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/640/A1/table1) table contains 2017 clusters. This DB lists the FSR clusters as
"FSR_XXXX" with leading zeros and the ESO clusters as "ESO_XXX_XX" with leading zeroes.

Changes to names:

* BH --> VDBH per CDS recommendation
* vdBergh_  --> VDB per CDS recommendation
* LP_ --> FoF_ to match the original work LIUPANG19
* Sigma_Ori --> Sigma_Orionis


### 12. HAO20

[Hao et al. 2020](https://ui.adsabs.harvard.edu/abs/2020PASP..132c4502H/abstract); _Sixteen Open Clusters Discovered with Sample-based Clustering
Search of Gaia DR2_

Data from Table 2 lists 16 clusters with no acronym. Used 'HXWHB_' to match HUNT23.


### 13. FERREIRA21

[Ferreira et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021MNRAS.502L..90F/abstract); _New star clusters discovered towards the Galactic bulge
direction using Gaia DR2_ 

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/502/L90) table contains 34 UFMG clusters.


### 14. HE21

[He et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21...93H/abstract); _A catalogue of 74 new open clusters found in Gaia
Data-Release 2_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/other/RAA/21.93) table contains 74 with no acronym, added 'HXHWL_' to match HUNT23.
Added `(RA_ICRS,DE_ICRS)` columns.


### 15. DIAS21

[Dias et al. 2021](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D); _Updated parameters of 1743 open clusters based on Gaia DR2_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/504/356) table contains 1743 clusters. This DB lists the FSR clusters as
"FSR_XXXX" with leading zeros and the ESO clusters as "ESO_XXX_XX" with leading zeroes.

The table lists 177 LIUPANG19 clusters because it includes clusters not listed as new
by the authors. Changed 'LP_' to 'FoF_' for consistency.
Removed the leading zero in 'FoF_XXXX'. Cluster 'LP_866' was duplicated (LP_0866),
removed the second entry. 

Changes to names:

* BH       --> VDBH per CDS recommendation
* vdBergh  --> VDB per CDS recommendation
* Sigma_Ori --> Sigma_Orionis

The `r50` column is listed with 'pc' units in Vizier, but it is degrees unit.
It also shows 4 clusters with very large `r50` values which could be listed
in pc units:

```
Cluster      DIAS21  CG20   BICA19
----------------------------------
Berkeley_58  32.969  0.06   0.058
Blanco_1     13.218  0.699  0.833
NGC_7789     9.324   0.211  0.133
Berkeley_59  3.097   0.137  nan
```

### 16. HUNT21

[Hunt & Reffert (2021)](https://ui.adsabs.harvard.edu/abs/2021A%26A...646A.104H/abstract); _Improving the open cluster census. I. Comparison of
clustering algorithms applied to Gaia DR2 data_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/646/A104) table lists 41 'PHOC_' clusters.


### 17. CASADO21

[Casado (2021)](https://ui.adsabs.harvard.edu/abs/2021RAA....21..117C/abstract); _New open clusters found by manual mining of data based on
Gaia DR2_

Data from Table 1 in the article lists 20 'Casado_' clusters.


### 18. JAEHNIG21

[Jaehnig et al. 2021](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J/abstract); _Membership Lists for 431 Open Clusters in Gaia DR2 Using
Extreme Deconvolution Gaussian Mixture Models_

Data from Table 1 in the article lists 11 'XDOCC-' clusters. Changed 'XDOCC-0Y' to
'XDOCC-Y' to match HUNT23.


### 19. SANTOS21

[Santos-Silva et al. 2021](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S/abstract); _Canis Major OB1 stellar group contents revealed by
Gaia_

Data from Table 1 in the article lists 5 'CMa-' clusters. This table lists two values
for each fundamental parameter.


### 20. TARRICQ22

[Tarricq et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract); _Structural parameters of 389 local open clusters_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/659/A59) table contains 467 clusters. This DB lists the FSR clusters as
"FSR_XXX" with leading zeros and the ESO clusters as "ESO_XXX_XX" with leading zeroes.

Changes to names:

* BH_99 --> VDBH_99
* LP_ --> FoF_


### 21. CASTRO22

[Castro-Ginard et al. 2022](https://ui.adsabs.harvard.edu/abs/2022A%26A...661A.118C/abstract); _Hunting for open clusters in Gaia EDR3: 628 new open
clusters found with OCfinder_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/661/A118) table contains 628 UBC clusters numbered starting at UBC 1001 to
differentiate them from the UBC clusters found using Gaia DR2 in the previous
articles.


### 22. HE22

[He et al. 2022](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H/abstract); _New Open-cluster Candidates Found in the Galactic Disk Using Gaia
DR2/EDR3 Data_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/260/8) table contains 541 with no acronym, added 'CWNU_'.
Replaced '---' with '' for RV values.


### 23. HE22_1

[He et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract); _A Blind All-sky Search for Star Clusters in Gaia EDR3: 886
Clusters within 1.2 kpc of the Sun_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/262/7) table contains 270 new 'CWNU_' clusters. Removed Theia entries.
Changed 'LP_' to 'FoF_' to match HUNT23, LIUPANG19, TARRICQ22

Changes to names:

* ESO_489-01 --> ESO_489_01
* vdBergh  --> VDB per CDS recommendation
* Sigma_Ori --> Sigma_Orionis


### 24. HAO22

[Hao et al. 2022](https://ui.adsabs.harvard.edu/abs/2022A%26A...660A...4H/abstract); _Newly detected open clusters in the Galactic disk using Gaia
EDR3_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/660/A4) table lists 704 'OC_' clusters.

Removed entries pointing to a GC:

* OC 0586 --> BH 140


### 25. LI22

[Li et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..259...19L/abstract); _LISC Catalog of Star Clusters. I. Galactic Disk Clusters in
Gaia EDR3_

The [Zenodo](https://zenodo.org/record/5705371#.YZPASbFdsrs) table lists 61 'LISC_' clusters. The table contains a column called
`t/t_range` in Gyr, not sure what it represents.


### 26. HE23

[He et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..264....8H/abstract); _Unveiling hidden stellar aggregates in the Milky Way: 1656
new star clusters found in Gaia EDR3_

The [Vizier](https://cdsarc.cds.unistra.fr/ftp/vizier.submit/he22c/) table contains 1656 with no acronym, added 'CWNU_'. Added 
`(RA_ICRS,DE_ICRS)` columns.


### 27. HUNT23

[Hunt & Reffert (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract); _Improving the open cluster census. II. An all-sky cluster
catalogue with Gaia DR3_

The [Vizier](https://vizier.cfa.harvard.edu/viz-bin/VizieR?-source=J/A%2BA/673/A114) table contains 7167 entries.

In the initial UCC version all the Theia entries were removed along with the moving
groups. In version **231105** the Theia entries labeled as OCs were re-incorporated.

Some ~160 HSC clusters have center values that do not align with the medians of
their members. Changed these centers to the members' medians.

Rounded float values in several columns.

Removed Teutsch 182 because it is listed along with UBC 6 and these are the same OC
according to BICA19. Also Teutsch 182 has wrong center coordinates.

Changes to names:

* BH --> VDBH per CDS recommendation
* vdBergh_ --> VDB_ per CDS recommendation

Removed entries pointing to a GC:

* Palomar 2, 7 (listed as IC_1276) 8, 10, 11, 12
* ESO_452-11 (listed as 1636-283)
* Pismis 26 (Ton 2)
* Lynga_7 (BH 184)
* HSC 2890, HSC 134 --> Gran 3 and 4

HSC 2605 has very similar coordinates and proper motions to globular NGC 5139 but its
parallax is different, so it was not removed.

Fixes:

* ESO_429-429 --> ESO_429-02 (according to CDS coords)
* CMa_2 --> CMa_02
* AH03_J0748+26.9 --> AH03_J0748-26.9
* Juchert_J0644.8+0925 --> Juchert_J0644.8-0925
* Teutsch_J0718.0+1642 --> Teutsch_J0718.0-1642
* Teutsch_J0924.3+5313 --> Teutsch_J0924.3-5313
* Teutsch_J1037.3+6034 --> Teutsch_J1037.3-6034
* Teutsch_J1209.3+6120 --> Teutsch_J1209.3-6120



### 28. QIN23

[Qin et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q/abstract); _Hunting for Neighboring Open Clusters with Gaia DR3: 101 New
Open Clusters within 500 pc_

Tables (provided by Qin & Chen) lists 101 'OSCN_' clusters.


### 29. LI23

[Li & Mao (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265....3L/abstract); _LISC Catalog of Star Clusters. II. High Galactic Latitude Open
Clusters in Gaia EDR3_

The [Zenodo](https://zenodo.org/record/7603419) table lists 56 'LISC' clusters but only 35 are kept as "real" objects.
The parallax distances are in very bad agreement with the the estimated
distance moduli. These appear to either be MC clusters or not real clusters
at all. HUNT23 recovers 0% of these clusters.


### 30. CHI23_2

[Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...20C/abstract); _Identifying 46 New Open Cluster Candidates in Gaia EDR3 Using
a Hybrid pyUPMASK and Random Forest Method_

The table in the article (IOP) lists 46 clusters with no acronym, 'CWWL_' was added to
match HUNT23.


### 31. CHI23

[Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230208926C/abstract); _LISC Catalog of Open Clusters.III. 83 Newly found Galactic
disk open clusters using Gaia EDR3_

The article mentions 83 clusters but only 82 are visible in the PDF. I sent an
email to zhongmuli@126.com but never got an answer. Added 'LISC-III' to the
names to match HUNT23. Added `(RA_ICRS,DE_ICRS)` columns.


### 32. CHI23_3

[Chi et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023arXiv230310380C/abstract); _Blind Search of The Solar Neighborhood Galactic Disk within
5kpc: 1179 new Star clusters found in Gaia DR3_

The table requested to the authors lists 1179 clusters. Added CWWDL following the
convention by HUNT23 for DBs with no acronyms.
Clusters CWWDL_3274 and CWWDL_3247 are very close.



## Added after publication


### KOPOSOV08

[Koposov et al. (2008)](https://ui.adsabs.harvard.edu/abs/2008A%26A...486..771K/abstract); _Automated search for Galactic star clusters in large
multiband surveys. I. Discovery of 15 new open clusters in the Galactic anticenter
region_

Abstract: "_From this analysis, 15 overdensities were confirmed to be new open
clusters and the physical and structural parameters were determined for 12 of them_"

Results: "_We found that 11 stellar overdensities turn out to be new,
optically-visible clusters_"

Table 1 in the article lists 11 Koposov clusters and these are used here.


### BOSSINI19

[Bossini et al. (2019)](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B/abstract); _Age determination for 269 Gaia DR2 open clusters_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/623/A108) table lists 269 clusters.

Duplicates that were combined using their average values:

* ASCC124, Alessi37
* ASCC22, Ferrero11
* ASCC112, AlessiTeutsch11
* Harvard5, Collinder258

Renamed: `ngc0188, ngc0752, ngc0381, ngc0225, ngc0581` to
`ngc188, ngc752, ngc381, ngc225, ngc581` (removed leading zeroes)


### DONOR20

[Donor et al. (2020)](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D/abstract); _The Open Cluster Chemical Abundances and Mapping Survey.
IV. Abundances for 128 Open Clusters Using SDSS/APOGEE DR16_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/AJ/159/199) table lists 128 clusters. Did not use the ages listed as they are
from the MWSC database.


### PERREN22

[Perren et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P/abstract); _An analysis of the most distant cataloged open clusters.
Re-assessing fundamental parameters with Gaia EDR3 and ASteCA_

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/663/A131) table lists 25 clusters.


### HE23_1

[He et al. 2023](https://ui.adsabs.harvard.edu/abs/2023ApJS..267...34H/abstract); _Survey for Distant Stellar Aggregates in the Galactic Disk:
Detecting 2000 Star Clusters and Candidates, along with the Dwarf Galaxy IC 10_
 

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/267/34) table lists 2085 clusters, 28 of which are flagged as 'GCC'
(GC candidate). These were removed leaving 2057 entries.

'Ruprecht 123' is listed twice as: 'Ruprecht_123_v0' & 'Ruprecht_123'. Removed
the 'Ruprecht_123_v0' entry as the RA value of the other entry was more similar
to the values listed in the UCC. The final number of entries is 2056.

There are 20 'LP_XXX' OCs that were renamed 'FoF_XXX', removing leading zeros.


### CAVALLO24

[Cavallo et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C/abstract); _Parameter Estimation for Open Clusters using an
Artificial Neural Network with a QuadTree-based Feature Extractor_

The [ViZier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/AJ/167/12) table lists 6413 entries. Removed all entries classified as 'g'
(globular clusters, 116 entries) or 'm' (moving group, 145 entries). Entries with
no `kind` info: Can-Battlo 1, UBC 92, UBC 93, UBC 94, UBC 95, UBC 96, UBC 97.

The DB contains now 6152 entries.

Removed entries pointing to a GC:

- Palomar 2, 8, 10, 11, 12
- Pismis 26 (Ton 2),
- IC 1276 (Palomar 7), 
- 1636-283 (ESO 452-11)
- Lynga 7 (BH 184)
- HSC 2890 and HSC 134 (located very close to Gran 3 and 4)

The DB contains now 6141 entries.

Changes to `Cluster` column:

- Replaced `_` with empty spaces
- Changed `vdbergh` for `VDB`

Fixed names:

- ESO 429-429 --> ESO 429-02 (according to CDS coords)
- CMa 2 --> CMa 02
- AH03 J0748+26.9 --> AH03 J0748-26.9
- Juchert J0644.8+0925 --> Juchert J0644.8-0925
- Teutsch J0718.0+1642 --> Teutsch J0718.0-1642
- Teutsch J0924.3+5313 --> Teutsch J0924.3-5313
- Teutsch J1037.3+6034 --> Teutsch J1037.3-6034
- Teutsch J1209.3+6120 --> Teutsch J1209.3-6120

This DB contains ~900 entries with large differences (>10 arcmin) in its `(ra, dec)`
center coordinates compared to the UCC's values (and/or large relative parallax
differences): 390 HSC, 208 Theia, 90 CWNU, 50 UPK, 26 OCSN, and others.

The author explains that their values com from the "_mean values of the member's
coordinates_".



#### The Teutsch 182 / UBC 6 cluster

This catalogue inherits the HUNT23 objects, thus it includes Teutsch 182 classified
as an open cluster. This object was removed from HUNT23 because it is the same cluster
as UBC 6 according to BICA19. The coordinates I could find for these clusters are:

- [BDCCT](http://www.astro.iag.usp.br/ocdb/file/BDCCT_Catalog_Alessi.txt) (_Bruno's Dirty Compilation of Clusterlike Things_, 2013)
  ```
  Teutsch 182
  (ra, dec)  = (22 56 20, +51 05 53) -> (344.083, 51.098)
  (lon, lat) = (105.167, -7.760)
  ```

- BICA19
  ```
  Teutsch 182 / UBC 6
  (ra, dec)  = (22 55 47  +59 11 05) -> (343.9458, 59.18472)
  (lon, lat) = (105.13, -7.63)
  ```
  Note that the (ra, dec) values do not match the (lon, lat) values.

- CASTRO18
  ```
  UBC 6
  (ra, dec)  = (343.9518, +51.199)
  (lon, lat) = (105.137, -7.633)
  ```

- CG2020
  ```
  UBC 6
  (ra, dec)  = (344.010, +51.187)
  (lon, lat) = (105.165, -7.660)
  ```

- HUNT23
  ```
  Teutsch 182
  (ra, dec)  = (343.7939, +59.225)
  UBC 6
  (ra, dec)  = (344.0718, +51.1448)
  ```
  Where the Teutsch 182 values appear to be inherited from BICA19

- CAVALLO24
  ```
  Teutsch_182
  (ra, dec) = (344.9286, +58.8156)
  UBC 6
  (ra, dec) = (343.9912, +51.1776)
  ```

**Summary:**

According to the 2013 BDCCT catalog, the UBC 6 coordinates in later catalogues
correspond to Teutsch 182.

BICA19 lists wrong (ra, dec) coordinates for Teutsch 182 and UBC 6, but correct
galactic coordinates, which it classifies as the same cluster.

HUNT23 apparently inherits the coordinates for Teutsch 182 from BICA19, and the
coordinates for UBC 6 from newer catalogues.

Hence, **we remove the Teutsch 182 entry from the catalog** because the UBC 6 entry
contains the correct coordinates and matches the fundamental parameter values listed
in other DBs.



