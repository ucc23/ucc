---
layout: page
title: FAQ
permalink: /faq/
style: style
---

The **UCC** is maintained by [Gabriel I Perren](https://gabriel-p.github.io/).
Please [contact me](mailto:gabrielperren@gmail.com) for any comments/suggestions or any other questions not
listed here.

<br>
<hr>
<br>

* TOC
{:toc}


## What is the UCC?

The acronym **UCC** stands for _Unified Cluster Catalogue_. It is the largest catalogue
of [open clusters](https://en.wikipedia.org/wiki/Open_cluster) in existence. It consists of comprehensive and homogeneous data
for an ever expanding number of entries, taken from the latest published articles
combined with data from the [Gaia survey](https://www.esa.int/Science_Exploration/Space_Science/Gaia/Gaia_overview).



## What objects are included in the UCC?

The **UCC** lists any object that was catalogued as an open cluster in the literature. This
object might be classified differently in other articles (e.g.: moving group,
association, etc.) but it will remain listed in the **UCC** because at least one article
at some point indicated that it was an open cluster.

The **UCC** is regularly updated to include new research. If your article is not listed
in the [database]({% link _pages/ARTICLES.md %}), you can
[contact me](mailto:gabrielperren@gmail.com) with the details and I will add it as soon as possible.




## How are member stars selected?

Membership is obtained through the `fastMP` method described in Sect. 3 of
[Perren et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4107P/abstract). The `fastMP` membership estimation method has been
incorporated into the [`ASteCA` package](https://asteca.github.io/) (see details [here](https://asteca.readthedocs.io/en/latest/contents/membership_mod.html)).




## What is the C3 parameter?

The `C3` parameter is the combined `C1` and `C2` classes, described in Sect. 4.3 of
[Perren et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4107P/abstract) where the **UCC** was initially introduced. The `C1` and `C2`
classes can be described as:

`C1`: A density-based metric that quantifies the contrast between the spatial
distribution of cluster member stars and that of the surrounding field stars within
the five-dimensional parameter space defined by celestial coordinates,
proper motions, and parallax.

`C2`: A photometric metric that estimates the likelihood that the observed stellar
sequence of the candidate members is statistically indistinguishable from a
sequence randomly drawn from the field star population.

Each one takes values `[A, B, C, D]` where `A` is best and `D` is worst.




## What is the UTI parameter?

The **UTI** (**UCC** Trust Index) is a measure of the reliability of the cluster detection,
ranging from 0 (worst) to 1 (best). It is calculated based on factors such as the number
of members, stellar density, the `C3` parameter, the presence of the object
in the literature, and the probability of the object being a duplicate of a previous
entry. It is estimated via the relation:

    UTI = 0.2 * (C_N + C_dens + C_C3 + 2*C_lit) * C_dup

where the `C` factors have values in the [0, 1] range (1 is best) representing
normalized estimates of:

- `C_N`: number of members (0=very few members, 1=many members)
- `C_dens`: stellar density in pc^2 (0=very sparse object, 1=dense object)
- `C_C3`: C3 parameter (0=DD class, 1=AA class)
- `C_lit`: presence in literature (0=rarely mentioned in the literature, 1=frequently mentioned in the literature)
- `C_dup`: likelihood of uniqueness (0=very likely a duplicate entry, 1=not a duplicate entry)




## How is the duplicate probability estimated?

To estimate the probability of an object being a duplicate of a previous entry,
we simply find the overlap between members. If two objects share a significant number of
members, it is likely that they are the same object catalogued twice under different
names.

The probability of being a duplicate is calculated as:

    P_dup = max(shared_members_percent) / 100

where `shared_members_percent` is the percentage of common members between objects
(since a given object can be compared to many others, we take the maximum value found).
The object presented earlier in the literature is considered the original, while the
later one is considered the duplicate.

The `P_dup` value is equivalent to `1 - C_dup`, where `C_dup` is the factor used
in the UTI calculation (see [What is the UTI parameter?](#what-is-the-uti-parameter)).




## How are objects flagged as likely not real?

Objects are flagged as likely not real (or non-clusters) when they meet the following
conditions:

```
- C_dup > 0.75 (not a duplicate)
- C_lit < 0.3 (rarely mentioned in the literature)
- UTI < 0.25 (low UTI parameter)
```

These dubious candidates are identified in tables by their names appearing in red. The
[Search](/search) page allows you to hide these objects by
selecting the _Hide likely non-clusters_ option.





## About the Search page

The [Search](/search) page allows the user to filter the **UCC** database by the stored
parameter values, as well as the estimated number of members (**N<sub>50</sub>**),
the probability of the object being a duplicate (**[P<sub>dup</sub>](#how-is-the-duplicate-probability-estimated)**),
and the [UTI](#what-is-the-uti-parameter).

The values for each parameter are estimated as the median of all the values included
in the [**UCC** literature](/articles). The user can select a range for each parameter, and also
to exclude results with `NaN` values. In the resulting table, those objects that are
considered likely [non-clusters](#how-are-objects-flagged-as-likely-not-real) (ie: asterisms, moving groups, artifacts, etc.)
have their names colored in red.

This page also displays an interactive (LON, LAT) map with the results found, where
LON and LAT are the Galactic longitude and latitude, respectively.

If you want to download the entire **UCC** catalogue, it can be accessed through the
<a data-umami-event="zenodo_repo" href="https://zenodo.org/doi/10.5281/zenodo.8250523" target="_blank">Zenodo repository</a>.




## About the Overview section

The **Overview** section consists of two tabs: **Summary** and **Comments**. These are
automatically generated for each object, based on the available data in the **UCC**.

### Summary

Provides a brief natural language overview of the object's
characteristics and fundamental parameters. Warnings and useful badges are also
included here.

### Comments

Highlights any notable features found in the literature.





## About the Data section

This section features two tabs displaying astrometric data and fundamental parameters
for the included objects.


### Astrometry

The **UCC** values are estimated from its identified members, the remaining
values are extracted from the [included literature](/articles).


### Parameters

The **UCC** provides for each entry a table of fundamental parameters, when available.
These parameters are extracted from the [included literature](/articles) and their median
is estimated to provide a single value for each parameter. The columns
<b>DAv, Bfr, BSS</b> correspond to differential extinction, binary fraction, and
blue stragglers, respectively. <b>BSS</b> values can be listed as fractions or integers.

In cases where multiple articles provide values for the same parameter, these sometimes
need to be transformed to maintain homogeneity. The transformations are as follows:


#### Metallicity

Metallicity is shown as `[Fe/H]`. We use the [Bressan et al. (2012)](https://academic.oup.com/mnras/article/427/1/127/1027734)
`z_sun=0.0152` coefficient to transform from `z` values as:

    [Fe/H]=log10(z/z_sun)

#### Age

Ages are given in [Myr]. When ages are provided in [log(age/yr)], we apply:

    Age [Myr] = 10^(log(age/yr)/1e6)


#### Absorption / Extinction

The **UCC** lists `Av` absorption. To transform `E(B-V)` we use the standard value:

    Av = 3.1 * E(B-V)

In cases where `Ag` is present, it is always assumed to be Gaia's G band. The
transformation coefficient to `Av`  is:

    Av = 1.2 * Ag

Conversion from `E(V-I)` assumes Cousin's I band and is expressed as:

    Av = 2.5 * E(V-I)

All approximate coefficients can be estimated for example using the
[dust_extinction](https://github.com/karllark/dust_extinction) package.




## About the Visualization section

There are three tabs with different plots in this section.


#### Members

The plots show the selected members in the **UCC** and also in the articles
[Hunt & Reffert (2023)](https://scixplorer.org/abs/2023A%26A...673A.114H)
and [Cantat-Gaudin et el. (2020)](https://scixplorer.org/abs/2020A%26A...633A..99C/abstract),
when available.


#### Cluster region

The cluster region is shown in this tab in an interactive plot that allows exploring
the spatial distribution of other clusters around the cluster. This plot uses
the inverse of the median parallax of the **UCC** estimated members as the distance estimator.


#### Galactocentric position

The Sun and the Galactic center are represented by the yellow star and the black X,
respectively. The spiral arms are taken from [Momany et al (2006)](https://scixplorer.org/abs/2006A&A...451..515M/abstract). The
(X_GC, Y_GC, Z_GC) values are estimated applying a -0.02 parallax zero-point offset
position of -0.02 [mas] (taken as a reasonable average, see e.g.
[Ding et al. 2025](https://iopscience.iop.org/article/10.3847/1538-3881/adba44)). The minimum accepted parallax value is 0.035 (~29 Kpc).
Similar to the cluster region plot, the distance is estimated as the inverse of the median
parallax of the **UCC** estimated members.

Radial velocities are used when available and set to 0.0 Km/s when they are not.




## How can I cite the UCC?

If you found the **UCC** useful for your research, please reference its original article
<a data-umami-event="orig_article" href="https://doi.org/10.1093/mnras/stad2826">Perren
et al. (2023)</a>. You can use the following text:

_"This research has made use of the Unified Cluster Catalogue (UCC)~\cite{Perren_2023}"_

BibTeX entry for the original article: 

{% raw %}
```
@ARTICLE{Perren_2023,
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

