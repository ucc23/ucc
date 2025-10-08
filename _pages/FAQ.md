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
- [What is the C3 parameter?](#what-is-the-c3-parameter)
- [How can I cite the UCC?](#how-can-i-cite-the-ucc)


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


## What is the C3 parameter?

The C3 parameter is the combined class, described in Sect. 4.3 of
[Perren et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4107P/abstract) where the UCC was initially introduced.

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
