---
layout: page
title: FAQ
permalink: /faq/
style: style
---

Please [contact me](mailto:gabrielperren@gmail.com) for any comments/suggestions or any other questions not
listed here.


- [What is the UCC?](#what-is-the-ucc)
- [What objects are included in the UCC?](#what-objects-are-included-in-the-ucc)
- [How are member stars selected?](#how-are-member-stars-selected)
- [What is the UTI parameter?](#what-is-the-uti-parameter)
- [What is the C3 parameter?](#what-is-the-c3-parameter)
- [How can I cite the UCC?](#how-can-i-cite-the-ucc)
- [Random cluster navigation](#random-cluster-navigation)



## What is the UCC?

The acronym **UCC** stands for `Unified Cluster Catalogue`. It is the largest catalogue
of [open clusters](https://en.wikipedia.org/wiki/Open_cluster) in existence. It consists of comprehensive and homogeneous data
for an ever expanding number of entries, taken from the latest published articles
combined with data from the [Gaia survey](https://www.esa.int/Science_Exploration/Space_Science/Gaia/Gaia_overview).

![Catalogued OCs in the literature](/images/catalogued_ocs.webp "Catalogued OCs in the literature")



## What objects are included in the UCC?

The UCC lists any object that was catalogued as an open cluster in the literature. This
object might be classified differently in other articles (e.g.: moving group,
association, etc.) but it will remain listed in the UCC because at least one article
at some point indicated that it was an open cluster.

The UCC is regularly updated to include new research. If your article is not listed
in the [database]({% link _pages/ARTICLES.md %}), you can
[contact me](mailto:gabrielperren@gmail.com) with the details and I will add it as soon as possible.



## How are member stars selected?

Membership is obtained through the `fastMP` method described in Sect. 3 of
[Perren et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4107P/abstract). The `fastMP` membership estimation method has been
incorporated into the [`ASteCA` package](https://asteca.github.io/) (see details [here](https://asteca.readthedocs.io/en/latest/contents/membership_mod.html)).



## What is the UTI parameter?

The **UTI** (UCC Trust Index) is a measure of the reliability of the cluster detection,
ranging from 0 (worst) to 1 (best). It is calculated based on factors such as the number
of members, stellar density, the `C3` parameter, the presence of the object
in the literature, and the probability of the object being a duplicate of a previous
entry. It is estimated via the relation:

    UTI = 0.2 * (C_N + C_dens + C_C3 + 2*C_lit) * C_dup

where the `C` factors have values in the [0, 1] range (1 is best) representing
normalized estimates of:

- `C_N`: number of members (1 = many members)
- `C_dens`: stellar density in pc^2 (1 = dense object)
- `C_C3`: C3 parameter (1 = AA class)
- `C_lit`: presence in literature (1 = frequently mentioned in literature)
- `C_dup`: probability of duplication (1 = not a duplicate)

![UTI values for OCs in the literature](/images/UTI_values.webp "UTI values for OCs in the literature")



## What is the C3 parameter?

The `C3` parameter is the combined `C1` and `C2` classes, described in Sect. 4.3 of
[Perren et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4107P/abstract) where the UCC was initially introduced.

The `C1` and `C2` classes can be described as:

`C1`: A density-based metric that quantifies the contrast between the spatial
distribution of cluster member stars and that of the surrounding field stars within
the five-dimensional parameter space defined by celestial coordinates,
proper motions, and parallax.

`C2`: A photometric metric that estimates the likelihood that the observed stellar
sequence of the candidate members is statistically indistinguishable from a
sequence randomly drawn from the field star population.

Each one takes values `[A, B, C, D]` where `A` is best and `D` is worst.


![Classification of OCs in the literature](/images/classif_bar.webp "Classification of OCs in the literature")



## How can I cite the UCC?

If you found the UCC useful for your research, please reference its original article
<a data-umami-event="orig_article" href="https://doi.org/10.1093/mnras/stad2826">Perren
et al. (2023)</a>. You can use a phrase such as the following:

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



## Random cluster navigation

You can navigate to a random cluster page by searching the keyword _"random"_ on the
[main search page]({{ site.baseurl }}/), or directly accessing
<a data-umami-event="random_faq" href="{{ site.baseurl }}/random/">the random url</a>.