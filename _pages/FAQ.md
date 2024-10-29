---
layout: page
title: 
permalink: /faq/
---

- [How can I cite the UCC?](#how-can-i-cite-the-ucc)
- [What objects are included in the UCC?](#what-objects-are-included-in-the-ucc)
- [How are member stars selected?](#how-are-member-stars-selected)
- [How do I use the search bar?](#how-do-i-use-the-search-bar)
- [What are the C1, C2, and C3 parameters?](#what-are-the-c1-c2-and-c3-parameters)
- [How are probable duplicates identified?](#how-are-probable-duplicates-identified)


## How can I cite the UCC?

If you used the UCC please reference its original
<a data-umami-event="orig_article" href="https://doi.org/10.1093/mnras/stad2826">article</a>:

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


## What objects are included in the UCC?

The UCC lists any object that was catalogued as an open cluster in the literature. This
object might be classified differently in other articles (e.g.: moving group,
association, etc.) but it will remain listed in the UCC because at least one article
at some point indicated that it was an open cluster.

The UCC is regularly updated to include new research. If your article is not listed
in the [database]({% link _pages/DATABASE.md %}), you can
[contact me](mailto:gabrielperren@gmail.com) with the details and I will add it as soon as possible.



## How are member stars selected?

Membership is obtained through the `fastMP` method described in Section 3 of
[Perren et al. (2023) ](https://ui.adsabs.harvard.edu/abs/2023arXiv230804546P/abstract). The `fastMP` membership estimation method has been
incorporated into the [`ASteCA` package](https://github.com/asteca/ASteCA). See details [here](https://asteca.readthedocs.io/en/latest/basic/membership.html).


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


## What are the C1, C2, and C3 parameters?

The C1, C2, and C3 parameters are the `C_phot`, `C_dens`, and the combined
class respectively, described in Sect. 4.3 of the [Perren et al. (2023) ](https://ui.adsabs.harvard.edu/abs/2023arXiv230804546P/abstract)
article where the UCC was initially introduced.


## How are probable duplicates identified?

The probable duplicates are identified using the parallax based rules described
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
