---
layout: page
title: FAQ
permalink: /faq/
style: style
---

The **UCC** is maintained by
<a href="https://gabriel-p.github.io/" target="_blank">Gabriel I Perren</a>. The
latest version of the full database (including all the identified members)
can be found in its
<a data-umami-event="zenodo_repo" href="https://zenodo.org/doi/10.5281/zenodo.8250523" target="_blank">Zenodo repository</a>.

Please [contact me](mailto:gabrielperren@gmail.com) for any comments/suggestions, or open a
<a href="https://github.com/ucc23/ucc/issues" target="_blank">Github issue</a>. If
you found the **UCC** useful for your research, please reference its original article
<a data-umami-event="orig_article" href="https://doi.org/10.1093/mnras/stad2826">Perren
et al. (2023)</a>. You can use the following text:

_"This research has made use of the Unified Cluster Catalogue (UCC)~\cite{Perren_2023}"_

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



<br>
<hr>

<h2>Table of Contents</h2>


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

If the number of stars identified with P>50% (P: membership probability) is
less than 25, then the 25 stars with the highest membership probabilities are selected
as members.



## How are the core values estimated?

The **core radius** is estimated as the radius where the stellar density drops to half of
the central density. Starting from the King surface-density profile,

$$
\Sigma(R)=k\left[\frac{1}{\sqrt{1+(R/r_c)^2}}-\frac{1}{\sqrt{1+(r_t/r_c)^2}}\right]^2
$$

take the limit $$r_t \to \infty$$

$$
\Sigma(R)=\frac{k}{1+(R/r_c)^2}
$$

With $$\Sigma_0=\Sigma(0)=k$$, we obtain

$$
\frac{\Sigma(R)}{\Sigma_0}=\frac{1}{1+(R/r_c)^2}
$$

evaluating at $$R=r_c$$

$$
\Sigma(r_c)=\frac{1}{2}\Sigma_0
$$

The **core stellar density** is obtained as the number of members
within the core radius divided by the area of the core.

Notice that both values are approximations since the actual core radius should
be estimated by fitting a King or Plummer profile to the observed stellar density
distribution.

The conversion to parsec is done using the parallax of the cluster, estimated as the
median parallax of the identified members. There is a hard limit imposed to both
values: the core radius is capped at 10 pc, and the density at 250 stars/pc^2. This
is done to avoid outliers that can arise from very sparse clusters.




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

$$
UTI = \frac{C_N + C_{dens} + C_{C3} + 2 \, C_{lit}}{5} \times C_{dup}
$$

where the $$C$$ factors have values in the [0, 1] range (1 is best) representing
normalized estimates of:

- $$C_N$$: number of members (0=very few members, 1=many members)
- $$C_{dens}$$: stellar density in pc^2 (0=very sparse object, 1=dense object)
- $$C_{C3}$$: C3 parameter (0=DD class, 1=AA class)
- $$C_{lit}$$: presence in literature (0=rarely mentioned in the literature, 1=frequently mentioned in the literature)
- $$C_{dup}$$: likelihood of uniqueness (0=very likely a duplicate entry, 1=not a duplicate entry)




## How is the duplicate probability estimated?

To estimate the probability of an object being a duplicate of a previous entry,
we simply find the overlap between members. If two objects share a significant number of
members, it is likely that they are the same object catalogued twice under different
names.

The probability of being a duplicate is calculated as:

$$
P_{dup} = max(\mathrm{shared\_members\_percent}) / 100
$$

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
[fundamental parameter values](#parameters):

- **Dist**: distance [pc]
- **Av**: visual absorption [mag]
- **DAv**: differential visual absorption [mag]
- **Age**: age [Myr]
- **FeH**: metallicity [dex]
- **Mass**: total cluster mass in [M⊙]
- **B<sub>frac</sub>**: total binary fraction
- **BSS**: blue stragglers (total)

Note: The value for each parameter is estimated as the median of all values compiled 
from the [**UCC** literature](/articles).

Users can also filter the search results by:

- **N<sub>m</sub>**: estimated number of members (stars with membership probability >50%)
- **P<sub>dup</sub>**: [probability](#how-is-the-duplicate-probability-estimated) of the object being a duplicate of another object
- **UTI**: [UCC Trust Index](#what-is-the-uti-parameter)

The *Hide likely non-clusters* toggle filters out objects flagged as non-clusters
(e.g., asterisms, moving groups, or data artifacts). If not filtered, these objects are
highlighted with their names in red within the results table.


### Search Modes

Select between three modes using the button in the lower-left:

- **Names**: Search by specific object identifiers
- **Equatorial**: Search by central ``[RA, Dec]`` coordinates
- **Galactic**: Search by central ``[Lon, Lat]`` coordinates
 
The resulting table displays all objects matching the query or located within the
specified spatial proximity, up to a maximum of **N<sub>max</sub>** rows.


### Interactive Map

The page includes a **Map** displaying the spatial distribution of results in a
``[X, Y]`` Galactic projection. The interface supports interactive zooming and allows
users to click on individual objects to navigate to their dedicated pages.


### Data Export

To download the complete **UCC** catalogue, visit the.
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
is estimated to provide a single representative value for each parameter (shown in the
**UCC** row).

The columns <b>DAv, Bfr, BSS</b> correspond to differential extinction, binary fraction,
and blue stragglers, respectively. <b>BSS</b> values can be listed as fractions or integers.

In cases where multiple articles provide values for the same parameter, these sometimes
need to be transformed to maintain homogeneity. The transformations are as follows:


#### Metallicity

Metallicity is shown as `[Fe/H]`. We use the [Bressan et al. (2012)](https://academic.oup.com/mnras/article/427/1/127/1027734)
`z_sun=0.0152` coefficient to transform from `z` values as:

$$
[Fe/H]=\log_{10}(z/z_{\odot})
$$

#### Age

Ages are given in [Myr]. When ages are provided in `log10(age/yr)`, we apply:

$$
Age = \frac{10^{log_{10}(age/yr)}}{1e6} \;[Myr]
$$

#### Absorption / Extinction

The **UCC** lists `Av` absorption. Transform coefficients are taken from 
[Wang & Chen (2019)](https://iopscience.iop.org/article/10.3847/1538-4357/ab1c61), Table 3.

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



<script src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js" defer></script>

