---
layout: page
title: FAQ
permalink: /faq/
---

# Table of contents

- [How can I cite the UCC?](#how-can-i-cite-the-ucc)
- [How do I use the search bar?](#how-do-i-use-the-search-bar)
- [Where is the full database?](#where-is-the-full-database)
- [What are the C1, C2, and C3 parameters?](#what-are-the-c1-c2-and-c3-parameters)
- [Probable duplicates](#probable-duplicates)
- [How are member stars selected?](#how-are-member-stars-selected)


## How can I cite the UCC?

If you used the UCC and/or the `fastMP` tool in your work, please reference the
[article](https://doi.org/10.1093/mnras/stad2826):

{% raw %}
```
@ARTICLE{2023MNRAS.526.4107P,
       author = {{Perren}, Gabriel I. and {Pera}, Mar{\'\i}a S. and {Navone}, Hugo D. and {V{\'a}zquez}, Rub{\'e}n A.},
        title = "{The Unified Cluster Catalogue: towards a comprehensive and homogeneous data base of stellar clusters}",
      journal = {\mnras},
     keywords = {methods: data analysis, catalogues, open clusters and associations: general, Astrophysics - Astrophysics of Galaxies},
         year = 2023,
        month = dec,
       volume = {526},
       number = {3},
        pages = {4107-4119},
          doi = {10.1093/mnras/stad2826},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4107P}
}
```
{% endraw %}

## How do I use the search bar?

The search bar works in three different modes: text, equatorial coordinates,
and galactic coordinates.

To use the text based search simply type in the name of the cluster and the
objects with the closest matches will be listed:

![Text based search](/images/search_t.png "Text based search")

The equatorial coordinates based search can be used simply typing the
`(ra, dec)` values:

![Equatorial coordinates based search](/images/search_e.png "Equatorial coordinates based search")

The galactic coordinates based search is similar to the equatorial, but you
need to add a `g` before the `(lon, lat)` values:

![Galactic coordinates based search](/images/search_g.png "Galactic coordinates based search")


## Where is the full database?

The latest version of the UCC can be found in its [Zenodo repository](https://zenodo.org/doi/10.5281/zenodo.8250523) in
compressed `csv` format.

The compressed `parquet` file with the latest version of the estimated
members for the complete UCC can also be downloaded from the same Zenodo
repository. To extract the data simply use the [pandas](https://pandas.pydata.org/) Python package:

{% raw %}
```
df = pd.read_parquet('UCC_members.parquet.gz')
```
{% endraw %}


## What are the C1, C2, and C3 parameters?

The C1, C2, and C3 parameters are the `C_phot`, `C_dens`, and the combined
class respectively, described in Sect. 4.3 of the [Perren et al. (2023) ](https://ui.adsabs.harvard.edu/abs/2023arXiv230804546P/abstract)
article where the UCC was initially introduced.


## Probable duplicates

The probable duplicates are obtained using the parallax based rules described
in Sect. 4.1 of [Perren et al. (2023) ](https://ui.adsabs.harvard.edu/abs/2023arXiv230804546P/abstract). These are:

{% raw %}
```
if parallax >= 4
    xy_r, plx_r, pm_r = 20, 0.5, 1
else 3 <= parallax < 4
    xy_r, plx_r, pm_r = 15, 0.25, 0.75
else 2 <= parallax < 3
    xy_r, plx_r, pm_r = 10, 0.2, 0.5
else 1.5 <= parallax < 2
    xy_r, plx_r, pm_r = 7.5, 0.15, 0.35
else 1 <= parallax < 1.5
    xy_r, plx_r, pm_r = 5, 0.1, 0.25
else .5 <= parallax < 1
    xy_r, plx_r, pm_r = 2.5, 0.075, 0.2
else parallax < .5
    xy_r, plx_r, pm_r = 2, 0.05, 0.15
else parallax < .25
    xy_r, plx_r, pm_r = 1.5, 0.025, 0.1
else parallax is nan
    xy_r, pm_r = 2.5, 0.2
```
{% endraw %}

where `parallax` is the associated parallax of the OC, and `xy_r, plx_r, pm_r`
are the parallax-based thresholds for each component (in arcmin, mas, and
mas/yr; respectively).


## How are member stars selected?

Membership is obtained through the `fastMP` method described in Section 3 of
[Perren et al. (2023) ](https://ui.adsabs.harvard.edu/abs/2023arXiv230804546P/abstract). The `fastMP` membership estimation method has been
incorporated into the [`ASteCA` package](https://github.com/asteca/ASteCA). See details [here](https://asteca.readthedocs.io/en/latest/basic/membership.html).