---
layout: page
title: 
permalink: /dbs_edits/
style: style
---

Every database employed to generate the UCC is listed here, with a full description
of the modifications and corrections made before merging it in to our final catalogue.
The individual `csv` files con be found [here](https://github.com/ucc23/updt_UCC/tree/main/databases).

The original [UCC article](https://doi.org/10.1093/mnras/stad2826) employed 32 articles, the rest where added after its
publication.

---

## Dambis 1999

[Space-age distribution of young open clusters and observational
selection](https://ui.adsabs.harvard.edu/abs/1999AstL...25....7D)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/PAZh/25/10) table lists 202 clusters.

Removed entries pointing to a GC: Lynga 7.

Changed names:

- NGC 1976 -> Trapezium
- van den Bergh 1 -> VDB 1
- vdB-Hagen 99 -> VDBH 99
- Pismis 6 --> NGC 2645, Pismis 6

Coordinates given by Vizier to Markarian 38 & 50 are wrong, fixed both.


## Dias et al. 2002

[New catalogue of optically visible open clusters and candidates](https://ui.adsabs.harvard.edu/abs/2002A%26A...389..871D/abstract)

The data was obtained from the [HEASARC archive](https://heasarc.gsfc.nasa.gov/w3browse/all/openclust.html). Removed all entries with these
classes:

```
a = possible asterism/dust hole/star cloud (no cluster)
cr =  Cluster Remnant (Pavani and Bica 2007A&A...468..139P)
d = dubious, objects considered doubtful by the DSS images inspection
g = possible globular cluster
m = possible moving group
n = "non-existent NGC" (RNGC, Sulentic, 1979, Cat. VII/1). Some of Bica's POCRs (Possible Open Cluster Remnant, 2001A&A...366..827B) are also "non-existent NGC" objects.
nf =  objects not found in the DSS images inspection (wrong coordinates?)
o = possible OB association (or detached part of)
```

Converted `RA, DEC` columns to degrees.

FSR 1496 duplicated in lines 1015, 1016; removed 1016

These entries corresponded to a single entry in the UCC. Only one was kept, selected
according to the primary name in the UCC:

- 330 teutsch1, 331 koposov27       --> koposov27
- 1049 ngc3909, 1050 eso21708       --> ngc3909
- 1653 collinder416, 1655 ngc6882   --> ngc6882
- 357 koposov43, 359 fsr0828        --> koposov43
- 1676 dolidze41, 1677 berkeley85   --> berkeley85
- 387 fsr0856, 388 koposov53        --> koposov53
- 701 eso36814, 702 fsr1343         --> eso36814
- 706 ah03j0748269, 707 fsr1315     --> fsr1315
- 321 fsr0814, 322 koposov36        --> koposov36
- 1079 collinder257, 1085 harvard5  --> harvard5
- 791 eso31203, 793 fsr1394         --> eso31203
- 1908 fsr0436, 1910 skiffj2330p602 --> fsr0436
- 395 koposov63, 396 fsr0869        --> koposov63
- 838 ngc2669, 839 vdbh52           --> ngc2669

Removed GCS:

- 1022   ESO 093 08      --> 19     ESO 93-8       d=0.11
- 1282   BH 208          --> 68     NGC 6256       d=2.36
- 1320   FSR 1758        --> 89     FSR 1758       d=3.18
- 1091   BH 140          --> 28     BH 140         d=4.65

Renamed OCS:
- BH      --> VDBH
- vdBergh --> VDB

Renamed:
- Alessi J2327+55 --> Alessi J2327.0+55



## Alessi et al 2003

[Searching for unknown open clusters in the Tycho-2 catalog (2003)](https://ui.adsabs.harvard.edu/abs/2003A%26A...410..565A/abstract)

No Vizier data, extracted and merged Tables 1 & 2. Added 'RA_ICRS, DE_ICRS' columns.



## Chen et al. 2003

[On the Galactic Disk Metallicity Distribution from Open Clusters. I. New Catalogs
and Abundance Gradient](https://ui.adsabs.harvard.edu/abs/2003AJ....125.1397C)

There are two tables listed in [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/AJ/125/1397), Table 1 (119 rows) and 2 (144 rows),
with different columns and number of rows. I combined these tables into a single one
using the median for repeated `(GLON, GLAT)`  values and appending `[Fe/H]` values
when repeated (some are very different).

vdB 1 --> VDB 1

Added columns `(RA, DEC)`. Merged two entries that were present in both tables under
different names: 'Melotte 111, Coma Ber' and 'Melotte 22, Pleiades'. The final table
contains 216 entries.

Fixed the following `(GLON, GLAT)` coordinates manually because I suspect they are
incorrectly uploaded to Vizier:

Collinder 197: 261.7 +08.9 --> 261.7 +0.89
IC 1848      : 137.2 +00.1 --> 137.2 +1.00


# Mercer et al 2005

[New Star Clusters Discovered in the GLIMPSE Survey](https://ui.adsabs.harvard.edu/abs/2005ApJ...635..560M/abstract)

[Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJ/635/560) table contains 92 entries with coordinates only.

Added 'MCM' to the names of the entries.

Removed GC MCM_5 (Mercer 5)



## Kronberger et al 2006

[New galactic open cluster candidates from DSS and 2MASS imagery](https://ui.adsabs.harvard.edu/abs/2006A%26A...447..921K/abstract)

[Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/447/921/table2) Table 2 contains 240 entries. Added 'RA_ICRS, DE_ICRS' columns
converted from 'h m s, d m s' values in "RAJ2000, DEJ2000" columns.

Kronberger 79 had two entries, marked 'a' and 'b' in the 'Note' column. I merged
both entries.

Changed 'ADS 13292 Cluster' to 'ADS 13292'.


## Froebrich et al. 2007

[A systematic survey for infrared star clusters with |b|<20º using 2MASS](https://ui.adsabs.harvard.edu/abs/2007MNRAS.374..399F)

Renamed column `FRS -> ID`. Added `FSR_` prefix to the IDs.

Added columns for (RA, DEC) in degrees (from hms).

Removed `[, ]` characters from names.

Removed:

- `FSR_1716` identified as a GC
- `FSR_808, FSR_837, FSR_765`, identified in the UCC as the same entries as
  `FSR_805, FSR_835, FSR_764`

Combined columns `ID` with `Ident` which contains secondary names. The `Ident`
column is defined in the article as: *Name of possible known cluster with erroneous
coordinates in SIMBAD.* There are eight entries in this DB that appear listed
as separate objects in the UCC after this merge. Below I detail how these were
handled.

### Entries only mentioned in BICA2019

These FSR objects are only mentioned in `BICA2019` as individual entries, but in
this article they are listed with the following associated names in the `Ident`
column:

- fsr0297 --> teutsch144
- fsr0380 --> ngc7438
- fsr0911 --> bochum1
- fsr1071 --> ngc2301
- fsr1557 --> teutsch31
- fsr1681 --> ngc5606


Fixes:

- fsr0297 --> BICA2019: removed 'FSR 297' entry and added 'FSR 297' as alternative name to 'Teutsch 144'
- fsr0380 --> BICA2019: removed 'FSR 380' entry and added 'FSR 380' as alternative name to 'NGC 7438' 
- fsr0911 --> BICA2019: added 'bochum 1' to 'FSR 911'
- fsr1071 --> BICA2019: removed 'FSR 1071' entry and added 'FSR 1071' as alternative name to 'NGC 2301'
- fsr1557 --> BICA2019: removed 'FSR 1557' entry and added 'FSR 1557' as alternative name to 'Teutsch 31'
- fsr1681 --> BICA2019: removed entry; DIAS2002: added 'fsr 1681' as alternative name to 'NGC 5606'



### fsr 1436

Froebrich (2007) lists `fsr1436` associated to `ngc2645`.
Glushkova (2010) lists `fsr1436` associated to `sai92`

The `pismis6,ngc2645` entry is much more accepted so I add `pismis6` as a secondary
name of `SAI 92` in `GLUSHKOVA2010`.


### kronberger 6 & kronberger 60

Froebrich (2007) lists `fsr0827` associated to `kronberger60`.

`fsr0827` is associated to `kronberger6` in Bica et al (2019).

The `kronberger60` entry is only mentioned in Dias et al (2002), which
does not list `kronberger6`. The OC `kronberger60` also appears in
[Kronberger et al (2006)](https://ui.adsabs.harvard.edu/abs/2006A%26A...447..921K/abstract), which has no mention of `kronberger6`. The DIAS2002
catalogue was done with collaboration in [private communication with Kronberger](https://heasarc.gsfc.nasa.gov/W3Browse/star-catalog/openclust.html#type_flag).

Both `kronberger6` and `kronberger60` have almost the same (ra, dec) coordinates:

- `kronberger6` : 91.091  31.607
- `kronberger60`: 91.042  31.496

This all points to an error somewhere where the names `kronberger6` and `kronberger60`
were swapped. The entry `kronberger6` has the most associated articles. I
thus add this as the primary identification to DIAS2002.


## Piskunov et el. 2007

[Towards absolute scales for the radii and masses of open clusters](https://ui.adsabs.harvard.edu/abs/2007A%26A...468..151P/abstract)

[Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/468/151) table shows 236 entries.

Added 'VDBH' and 'VDB' naming.



## Piskunov et el. 2008


[Tidal radii and masses of open clusters](https://ui.adsabs.harvard.edu/abs/2008A%26A...477..165P/abstract)

[Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/477/165) table shows 650 entries.

Added 'VDBH' and 'VDB' naming.



## Koposov et al. 2008

[Automated search for Galactic star clusters in large multiband surveys. I. Discovery
of 15 new open clusters in the Galactic anticenter region](https://ui.adsabs.harvard.edu/abs/2008A%26A...486..771K/abstract)

Abstract: "_From this analysis, 15 overdensities were confirmed to be new open
clusters and the physical and structural parameters were determined for 12 of them_"

Results: "_We found that 11 stellar overdensities turn out to be new,
optically-visible clusters_"

Table 1 in the article lists 11 Koposov clusters and these are used here.

The remaining 4 clusters are listed in Table 2 as "new infrared embedded clusters"
with central coordinates only.


## Glushkova et al. 2010

[Automated search for star clusters in large multiband
surveys: II. Discovery and investigation of open clusters in the galactic plane](https://ui.adsabs.harvard.edu/abs/2010AstL...36...75G/)

"_We have found and verified 153 new clusters (...). Color excesses E(B-V ),
distance moduli and ages were determined for 130 new and 14 yet-unstudied known
clusters_"

"_All clusters from Table 1 having the other name according to Kronberger et
al. (2006) or Froebrich et al. (2007), are listed neither in the database of open
clusters (WEBDA) by Paunzen, Mermilliod (2009), nor in the catalog by Dias et
al. (2002). That is why we consider them as a new clusters._"

Table 1: 130 entries (new clusters)
Table 2: 23 entries (new embedded clusters)
Table 3: 14 entries (yet-unstudied clusters)

Total of 167 entries in the three tables.

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=V/132) page lists 194 objects. Tables 1, 2 and 3 entries are present in Vizier
in its entirety. There are 27 extra entries in the Vizier table

The cluster `koposov41;fsr0839` presents RA coordinates that are substantially different
from those listed in the UCC for 'FSR 0839'.

- Koposov 41, FSR 839 (KOPOSOV2008): `(90.9917, 30.26139)`; converted from Table 2 in article
- FSR 0839 (UCC)                   : `(90.958 , 30.236)`
- koposov41;fsr0839 (this DB)      : `(97.7417, 30.2614)`

Since KOPOSOV2008 is previous to this article, I assume the RA coordinate is incorrect
here.

Merged the `Name` and `OtherName` columns into a single `Name` column.

The following entries have the following secondary names:

- koposov43 --> fsr0848
- koposov52 --> teutsch5

These names correspond to other entries in the UCC. Those two koposov entries are
related to similar alternative names in the UCC:

- koposov43 --> fsr0828
- koposov52 --> teutsch51

I correct this database to those alternative names.

Added VDBH to the BH entries.


## Borissova et al. 2011

[New Galactic star clusters discovered in the VVV survey](https://ui.adsabs.harvard.edu/abs/2011A%26A...532A.131B)

- Converted `RAJ2000, DEJ2000` in hms columns into degree values
- Added 'VVV-CL' naming with leading zeroes


## Kharchenko et al. 2012

[Global survey of star clusters in the Milky Way. I. The
pipeline and fundamental parameters in the second quadrant](https://ui.adsabs.harvard.edu/abs/2012A%26A...543A.156K)

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

We do not use the values listed here to generate the (RA, DEC) positions for the
clusters, unless its the only place where they are listed.

The entries IC_1311 and Dolidze_2 are listed as separate objects and they are the
same object in the UCC. Removed Dolidze_2.

The entries FSR_1184 and Saurer_1 are listed as separate objects and they are the
same object in the UCC. Removed FSR_1184.



## Roser et al 2016

[Nine new open clusters within 500 pc from the Sun](https://ui.adsabs.harvard.edu/abs/2016A%26A...595A..22R)

[Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/595/A22) table shows 10 entries, two of them are the same cluster 'RSG 9y' and
'RSG 9o' for which I combine two columns with different values.

For RSG entries 2, 3, 4, 6 and 9 I add as secondary name 'TRSG X' to match what's
already in the catalogue.



## Loktin & Popova 2017

[Updated version of the 'homogeneous catalog of open
cluster parameters'](https://ui.adsabs.harvard.edu/abs/2017AstBu..72..257L/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/other/AstBu/72.257/catalog) table contains 1052 clusters.

Many proper motion values in this DB are very wrong (see e.g: NGC 2516). We
thus do not use these values in the DB.

Contains 11 clusters with an extra name in parenthesis. These were fixed as
follows:

- "Alpha_Persei, Melotte 20"
- "Collinder258, Har5"
- "Coma Star, Melotte 111"
- "Herschel1, ASCC41"
- "Hyades, Melotte 25"
- "NGC2645, Pismis6"
- "NGC2682, Melotte 67"
- "NGC3247, Cr220"
- "Pleiades, Melotte 45"
- "Praesepe, NGC2632"
- "Stephenson1, Del_L"

Name changes:

- VDBergh_Hagen --> VDBH per CDS recommendation (added 'vdBergh-Hagen' to 43
clusters so that the naming isn't lost)
- VDBergh       --> VDB per CDS recommendation
- Sauer5 --> Saurer 5
- Teusch61 --> Teutsch61
- AlessiJ2327+55 --> Alessi J2327.0+55
- Sigma_Ori --> Sigma_Orionis

Removed entries pointing to a GC:

- berkeley42 (NGC 6749)
- lynga7 (BH 184)

Removed entries that are marked as duplicates in the UCC:

- Collinder 416 (duplicate of NGC 6882)
- Basel 9 (duplicate of Ruprecht 148)

The article says that: "_also includes our 48 newly discovered and
hitherto unknown poor open clusters_" but the CDS table lists 54 named 'LP_XX'
were XX goes from 01 to 55 (LP 03 is not present in the Vizier table). The last six
entries are named '50A, 51A, 52A, 53A, 54A, 55A' so these are probably from a previous
article.

These entries share naming convention (LP) with 
Liu & Pang (2019) presented their new OCs with no formal ID assigned (only numbers)


## Borissova et al. 2018

[New Galactic star clusters discovered in the disc area of the VVVX survey](https://ui.adsabs.harvard.edu/abs/2018MNRAS.481.3902B)

- Combined the tables `tablea1` and `tableb1`

The `Dist` column in Vizier is labeled as `kpc` but it contains clearly `pc` values.
The inverted parallaxes differ substantially from the distance values.


## Castro-Ginard et al. 2018

[A new method for unveiling open clusters in Gaia. New nearby open clusters confirmed
by DR2](https://ui.adsabs.harvard.edu/abs/2018A%26A...618A..59C/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/618/A59) table contains 23 entries. No changes required.


## Angelo et al. 2019

[Investigating dynamical properties of evolved Galactic open clusters](https://ui.adsabs.harvard.edu/abs/2019A%26A...624A...8A/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/624/A8/table1) table contains 23 entries. No changes required.

Converted `RAJ2000, DEJ2000` in hms columns into degree values.

- ESO XXX-SCYY --> ESO XXX-YY


## Bastian 2019

[Gaia 8: Discovery of a star cluster containing β Lyrae](https://scixplorer.org/abs/2019A&A...630L...8B/abstract)

The article gives no (RA, DEC) values bu states that: "The cluster is perfectly
centred on \Beta Lyrae on the sky" so we take the [system's coordinates](https://en.wikipedia.org/wiki/Beta_Lyrae)
as the cluster's coordinates.



## Bica et al. 2019

[A Multi-band Catalog of 10978 Star Clusters, Associations,
and Candidates in the Milky Way](https://ui.adsabs.harvard.edu/abs/2019AJ....157...12B/abstract)

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


## Bossini et al. 2019

[Age determination for 269 Gaia DR2 open clusters](https://ui.adsabs.harvard.edu/abs/2019A%26A...623A.108B/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/623/A108) table lists 269 clusters.

Added VDBH to the BH entries.

Duplicates that were combined using their average values:

- ASCC124, Alessi37
- ASCC22, Ferrero11
- ASCC112, AlessiTeutsch11
- Harvard5, Collinder258

Renamed:
- `ngc0188, ngc0752, ngc0381, ngc0225, ngc0581`, to
- `ngc188, ngc752, ngc381, ngc225, ngc581` (removed leading zeroes)


## Castro-Ginard et al. 2019

[Hunting for open clusters in Gaia DR2: the Galactic anticentre](https://ui.adsabs.harvard.edu/abs/2019A%26A...627A..35C/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/627/A35) table contains 53 UBC clusters. No changes required.


## Dias et al. 2019

Combined tables 2 & 3

Renamed:
- BH --> VDBH
- vdBergh --> VDB


## Ferreira et al. 2019

[Three new Galactic star clusters discovered in the field of the open cluster
NGC 5999 with Gaia DR2](https://ui.adsabs.harvard.edu/abs/2019MNRAS.483.5508F/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/483/5508) table contains 3 UFMG clusters and NGC 5999. This last cluster was
removed in the initial version of the DB (don't remember why).

Added `(RA_ICRS,DE_ICRS)` columns (converted from `h:m:s` and `d:m:s`).


## Liu & Pang 2019

[A Catalog of Newly Identified Star Clusters in Gaia DR2](https://ui.adsabs.harvard.edu/abs/2019ApJS..245...32L/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/245/32) Table 3 contains 76 clusters with no acronym given. Neither Table 1 nor
3 in Vizier assign and ID to the entries, only numbers. They do describe the ID columns
"Friend of Friend identifier". Also, in the article Table 1 lists the ID column as
'FoF ID'. Added 'FoF_' to the entries' IDs. This also matches the HUNT23 denomination.

Table 1 contains 2443 entries with classes:

1 = likely star cluster candidate: nG<17>=50, tage>5Myr, rn<0.1, d2<0.05 (569 occurrences)
2 = nearby star cluster candidate that need further confirmation:
    nG<17>=50, tage>5Myr, rn<0.1 (127 occurrences)
3 = star cluster candidate that need further confirmation (1747 occurrences)

Table 1 also has a 'n_ID' column that indicates if the entry is new, which identifies
the 76 clusters also present in Table 1.

I discard all Class 2 and 3 entries. I also discard from Class 1 FoF entries that
have no assigned CG18 id.

Added VDBH_ to the BH_ entries.


## Sim et al. 2019

[207 New Open Star Clusters within 1 kpc from Gaia Data Release](https://ui.adsabs.harvard.edu/abs/2019JKAS...52..145S/abstract)

Data taken from Table 2 in the online article (contains 207 UPK clusters)
Added `(ra, dec)` columns and a `plx` column estimated as 1000/dist_pc.



## Castro-Ginard et al. 2020

[Hunting for open clusters in Gaia DR2: 582 new open clusters in the Galactic disc](https://ui.adsabs.harvard.edu/abs/2020A%26A...635A..45C/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/635/A45) table contains 570 UBC clusters.

Fixed wrong ra coordinates for UBC595 and UBC181.

### Duplicated entries in other works

"we find that one of these objects, UPK 19, corresponds to UBC 32, already
reported by CG18" --> Added UBC 32 as primary denomination of UPK 19 in SIM2019

"Liu & Pang (2019) ... we find 4 coincidences with CG18 and CG19. These are the cases
for their clusters with IDs 1973, 2143, 2230, and 2385 which are identified with
UBC 74, UBC 72, UBC 56, and UBC 7" --> These were already identified as UBC entries

### Vizier duplicates

"eight of our OC candidates are identified with one UPK object (Sim et al 2019)" -->
Does not specify the names

"we find 45 cases that are compatible with one of the 76 from Liu & Pang (2019)" -->
Does not specify the names

The Vizier table shows 51 UBC objects with the 'a' note which indicates duplication
with either of those articles (SIM2019, LIUPANG2019), but does not indicate which ones.
There is also a 'b' note which indicates 'tentative identification with Kharchenko',
also with no names given.


## Cantat-Gaudin et al. 2020

[Painting a portrait of the Galactic disc with its stellar clusters](https://ui.adsabs.harvard.edu/abs/2020A%26A...640A...1C)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/640/A1/table1) table contains 2017 clusters. This DB lists the FSR clusters as
"FSR_XXXX" with leading zeros and the ESO clusters as "ESO_XXX_XX" with leading zeroes.

Changes to names:

* BH --> VDBH per CDS recommendation
* vdBergh_  --> VDB per CDS recommendation
* LP_ --> FoF_ to match the original work LIUPANG19
* Sigma_Ori --> Sigma_Orionis


## Donor et al. 2020

[The Open Cluster Chemical Abundances and Mapping Survey.
IV. Abundances for 128 Open Clusters Using SDSS/APOGEE DR16](https://ui.adsabs.harvard.edu/abs/2020AJ....159..199D/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/AJ/159/199) table lists 128 clusters. Did not use the ages listed as they are
from the MWSC database.

Added VDBH to the BH entry.


## Ferreira et al. 2020

[Discovery and astrophysical properties of Galactic open
clusters in dense stellar fields using Gaia DR2.](https://ui.adsabs.harvard.edu/abs/2020MNRAS.496.2021F/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/496/2021) table contains 25 UFMG clusters. Added `(RA_ICRS,DE_ICRS)` columns.


## Hao et al. 2020

[Sixteen Open Clusters Discovered with Sample-based Clustering Search of Gaia DR2](https://ui.adsabs.harvard.edu/abs/2020PASP..132c4502H/abstract)

Data from Table 2 lists 16 clusters with no acronym. Used 'HXWHB_' to match HUNT23.


## Casado 2021

[New open clusters found by manual mining of data based on Gaia DR2](https://ui.adsabs.harvard.edu/abs/2021RAA....21..117C/abstract)

Data from Table 1 in the article lists 20 'Casado_' clusters.


## Dias et al. 2021

[Updated parameters of 1743 open clusters based on Gaia DR2](https://ui.adsabs.harvard.edu/abs/2021MNRAS.504..356D)

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

Removed entries that are stored as a single entry in the UCC.

- Harvard_5 (duplicate of Collinder_258)


## Ferreira et al. 2021

[New star clusters discovered towards the Galactic bulge direction using Gaia DR2](https://ui.adsabs.harvard.edu/abs/2021MNRAS.502L..90F/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/MNRAS/502/L90) table contains 34 UFMG clusters.


## He et al. 2021

[A catalogue of 74 new open clusters found in Gaia Data-Release 2](https://ui.adsabs.harvard.edu/abs/2021RAA....21...93H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/other/RAA/21.93) table contains 74 with no acronym, added 'HXHWL_' to match HUNT23.
Added `(RA_ICRS,DE_ICRS)` columns.


## Hunt & Reffert 2021

[Improving the open cluster census. I. Comparison of clustering algorithms applied to
Gaia DR2 data](https://ui.adsabs.harvard.edu/abs/2021A%26A...646A.104H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/646/A104) table lists 41 'PHOC_' clusters.


## Jaehnig et al. 2021

[Membership Lists for 431 Open Clusters in Gaia DR2 Using
Extreme Deconvolution Gaussian Mixture Models](https://ui.adsabs.harvard.edu/abs/2021ApJ...923..129J/abstract)

Changes to names:

- NGC 2451 --> NGC 2451B (better plx match than with NGC 2451)
- Added 'Collinder 205' to 'Markarian 18' (alternative name)
- Added VDBH

Removed entries pointing to a GC:

- Berkeley 42 --> NGC 6749



## Santos-Silva et al. 2021

[Canis Major OB1 stellar group contents revealed by Gaia](https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.1033S/abstract)

Data from Table 2 in the article lists 15 'CMa-' clusters (Vizier has no entries for
the tables). This table lists two values for each fundamental parameter.

Contains two 'FOF' clusters.


## Castro-Ginard et al. 2022

[Hunting for open clusters in Gaia EDR3: 628 new open
clusters found with OCfinder](https://ui.adsabs.harvard.edu/abs/2022A%26A...661A.118C/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/661/A118) table contains 628 UBC clusters numbered starting at UBC 1001 to
differentiate them from the UBC clusters found using Gaia DR2 in the previous
articles.



## Hao et al. 2022

[Newly detected open clusters in the Galactic disk using Gaia EDR3](https://ui.adsabs.harvard.edu/abs/2022A%26A...660A...4H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/660/A4) table lists 704 'OC_' clusters.

Removed entries pointing to a GC:

* OC 0586 --> BH 140


## He et al. 2022

[New Open-cluster Candidates Found in the Galactic Disk Using Gaia
DR2/EDR3 Data](https://ui.adsabs.harvard.edu/abs/2022ApJS..260....8H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/260/8) table contains 541 with no acronym, added 'CWNU_'.
Replaced '---' with '' for RV values.


## He et al. 2022

[A Blind All-sky Search for Star Clusters in Gaia EDR3: 886
Clusters within 1.2 kpc of the Sun](https://ui.adsabs.harvard.edu/abs/2022ApJS..262....7H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/262/7) table contains 270 new 'CWNU_' clusters. Removed 50 Theia entries.

Changes to names:

- ESO_489-01 --> ESO_489_01
- vdBergh  --> VDB per CDS recommendation
- BH --> VDBH
- Sigma_Ori --> Sigma_Orionis
- Changed 'LP_' to 'FoF_'

14 entries named 'H21OC_*' are 'hxhwl*' entries from He et al 2021. Renamed them as
follows:
- H21OC_10 --> HXHWL 10, H21OC_10
- H21OC_12 --> HXHWL 12, H21OC_12
- H21OC_17 --> HXHWL 17, H21OC_17
- H21OC_18 --> HXHWL 18, H21OC_18
- H21OC_22 --> HXHWL 22, H21OC_22
- H21OC_26 --> HXHWL 26, H21OC_26
- H21OC_32 --> HXHWL 32, H21OC_32
- H21OC_33 --> HXHWL 33, H21OC_33
- H21OC_39 --> HXHWL 39, H21OC_39
- H21OC_42 --> HXHWL 42, H21OC_42
- H21OC_45 --> HXHWL 45, H21OC_45
- H21OC_5  --> HXHWL 5, H21OC_5
- H21OC_54 --> HXHWL 54, H21OC_54
- H21OC_69 --> HXHWL 69, H21OC_69


## Li et al. 2022

[LISC Catalog of Star Clusters. I. Galactic Disk Clusters in Gaia EDR3](https://ui.adsabs.harvard.edu/abs/2022ApJS..259...19L/abstract)

The [Zenodo](https://zenodo.org/record/5705371#.YZPASbFdsrs) table lists 61 'LISC_' clusters. The table contains a column called
`t/t_range` in Gyr, not sure what it represents.


## Perren et al. 2022

[An analysis of the most distant cataloged open clusters.
Re-assessing fundamental parameters with Gaia EDR3 and ASteCA](https://ui.adsabs.harvard.edu/abs/2022A%26A...663A.131P/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/663/A131) table lists 25 clusters.


## Tarricq et al. 2022

[Structural parameters of 389 local open clusters](https://ui.adsabs.harvard.edu/abs/2022A%26A...659A..59T/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/A+A/659/A59) table contains 467 clusters. This DB lists the FSR clusters as
"FSR_XXX" with leading zeros and the ESO clusters as "ESO_XXX_XX" with leading zeroes.

Changes to names:

- BH_99 --> VDBH_99
- LP_ --> FoF_


## Chi et al. 2023

[Identifying 46 New Open Cluster Candidates in Gaia EDR3 Using
a Hybrid pyUPMASK and Random Forest Method](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...20C/abstract)

The table in the article (IOP) lists 46 clusters with no acronym, 'CWWL_' was added to
match HUNT23.


## Chi et al. 2023

[LISC Catalog of Open Clusters.III. 83 Newly found Galactic
disk open clusters using Gaia EDR3](https://ui.adsabs.harvard.edu/abs/2023arXiv230208926C/abstract)

The article mentions 83 clusters but only 82 are visible in the PDF. I sent an
email to the authors but never got an answer. Added 'LISC-III' to the
names to match HUNT23. Added `(RA_ICRS,DE_ICRS)` columns.


## Chi et al. 2023

[Blind Search of The Solar Neighborhood Galactic Disk within
5kpc: 1179 new Star clusters found in Gaia DR3](https://ui.adsabs.harvard.edu/abs/2023arXiv230310380C/abstract)

The table requested to the authors lists 1179 clusters. Added CWWDL following the
convention by HUNT23 for DBs with no acronyms.

The (GLON, GLAT) column in their [Vizier table](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/ApJS/266/36/table3) does not appear to match the converted
(RAICRS, DEICRS) values.


## Cordoni et al 2023

[Photometric binaries, mass functions, and structural parameters of 78 Galactic open clusters
](https://ui.adsabs.harvard.edu/abs/2023A%26A...672A..29C/abstract)

Two Vizier tables available ([tablec1](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/672/A29/tablec1) & [tablec2](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/672/A29/tablec2)) that were combined into
a single one.



## He et al. 2023

[Unveiling hidden stellar aggregates in the Milky Way: 1656
new star clusters found in Gaia EDR3](https://ui.adsabs.harvard.edu/abs/2023ApJS..264....8H/abstract)

The [Vizier](https://cdsarc.cds.unistra.fr/ftp/vizier.submit/he22c/) table contains 1656 with no acronym, added 'CWNU_'. Added 
`(RA_ICRS,DE_ICRS)` columns.


## He et al. 2023

[Survey for Distant Stellar Aggregates in the Galactic Disk:
Detecting 2000 Star Clusters and Candidates, along with the Dwarf Galaxy IC 10](https://ui.adsabs.harvard.edu/abs/2023ApJS..267...34H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/ApJS/267/34) table lists 2085 clusters, 28 of which are flagged as 'GCC'
(GC candidate). These were removed leaving 2057 entries.

'Ruprecht 123' is listed twice as: 'Ruprecht_123_v0' & 'Ruprecht_123'. Removed
the 'Ruprecht_123_v0' entry as the RA value of the other entry was more similar
to the values listed in the UCC. The final number of entries is 2056.

There are 20 'LP_XXX' OCs that were renamed 'FoF_XXX', removing leading zeros.


## Hunt & Reffert 2023

[Improving the open cluster census. II. An all-sky cluster catalogue with Gaia DR3](https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/673/A114/clusters) table contains 7167 entries.

In the initial UCC version all the Theia entries were removed along with the moving
groups. In version **231105** the Theia entries labeled as OCs were re-incorporated.

A total of 157 HSC clusters have center values that do not align with the medians of
their members. Changed these centers to the members' medians. In **25/02/06**
the original (RA; DEC; GLON; GLAT) values were re-included in HUNT2023.csv (no changes
required to the main UCC catalogue so new version was generated).

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


## Li & Mao 2023

[LISC Catalog of Star Clusters. II. High Galactic Latitude Open
Clusters in Gaia EDR3](https://ui.adsabs.harvard.edu/abs/2023ApJS..265....3L/abstract)

The [Zenodo](https://zenodo.org/record/7603419) table lists 56 'LISC' clusters but only 35 are kept as "real" objects.
The parallax distances are in very bad agreement with the the estimated
distance moduli. These appear to either be MC clusters or not real clusters
at all. HUNT23 recovers 0% of these clusters.


## Piatti et al 2023

Extracted data from PDF.

- XDOCC-0Y --> XDOCC-Y


## Qin et al. 2023

[Hunting for Neighboring Open Clusters with Gaia DR3: 101 New
Open Clusters within 500 pc](https://ui.adsabs.harvard.edu/abs/2023ApJS..265...12Q/abstract)

Tables (provided by Qin & Chen) lists 101 'OSCN_' clusters.

Added VDBH to the BH entries.


## Alfonso et al. 2024

[Exploring Galactic open clusters with Gaia: I. An examination in the first kiloparsec](https://ui.adsabs.harvard.edu/abs/2024A%26A...689A..18A/abstract)

- BH --> VDBH
- vdBergh --> VDB

The coordinates for ASCC 123 are incorrect and appear to be those that correspond to
the cluster Stock 12.


## Cavallo et al. 2024

[Parameter Estimation for Open Clusters using an
Artificial Neural Network with a QuadTree-based Feature Extractor](https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C/abstract)

The [Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR?-source=J/AJ/167/12) table lists 6413 entries. Removed all entries classified as 'g'
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


## Hunt et al. 2024

[Improving the open cluster census. III. Using cluster masses, radii, and dynamics to
create a cleaned open cluster catalogue](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H/abstract)

[Vizier](https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/A%2bA/686/A42/clusters) table lists 7167 entries, same as HUNT2023. The entries are classified as:

```
o = open cluster
m = moving group
g = globular cluster
d = too distant to classify
r = rejected - see Note column
```

Removed all entries except those of type `o`; 5647 remain. Only use `MassTot` column
for the parameters, the coordinates and remaining parameters are all equivalent to
HUNT2023.

Rounded almost all columns to 5 digits.

Renamed:

- LP --> FoF
- vdBergh --> VDB
- BH --> VDBH
- CMa_2 --> CMa_02
- ESO_429-429 --> ESO_429-02 (according to CDS coords)
- RSG_4 --> RSG_4,TRSG_4

Finally, 46 new entries are added by this database.


## Hu & Soubiran 2025

[Metallicities of old open clusters: A new Galactic map](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.246H)

Renamed:

- Teutsch_J1037.3+6034 --> Teutsch_J1037.3-6034
- Teutsch_J1209.3+6120 --> Teutsch_J1209.3-6120