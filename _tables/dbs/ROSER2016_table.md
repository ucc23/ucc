---
layout: page
title:  
permalink: /tables/dbs/ROSER2016_table/
style: style
---

&nbsp;
# [Roser et al. (2016)](https://scixplorer.org/abs/2016A%26A...595A..22R)

This database consists of 9 entries, of which 11% are probable duplicates ([P<sub>dup</sub>>50%](/faq/#how-is-the-duplicate-probability-estimated)) and 11% are classified as [likely non-clusters](/faq/#how-are-objects-flagged-as-likely-not-real).

| Name | RA | DEC | Plx | N50 | r50 | C3 | P<sub>dup</sub> | UTI |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| <a href="{{ site.baseurl }}/_clusters/rsg1/" target="_blank" style="color: $blue;">RSG1</a> | 75.55 | 37.48 | 3.03 | 297 | 43.5 | <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | 0.0 | 0.96  |
| <a href="{{ site.baseurl }}/_clusters/rsg2/" target="_blank" style="color: $blue;">RSG2</a> | 110.72 | 55.28 | 5.04 | 65 | 59.0 | <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | 0.0 | 0.64  |
| <a href="{{ site.baseurl }}/_clusters/rsg3/" target="_blank" style="color: $blue;">RSG3</a> | 126.03 | -8.41 | 2.22 | 29 | 26.6 | <span style="color: green; font-weight: bold;">A</span><span style="color: #FFC300; font-weight: bold;">B</span> | 0.0 | 0.56  |
| <a href="{{ site.baseurl }}/_clusters/rsg4/" target="_blank" style="color: $blue;">RSG4</a> | 287.75 | 56.79 | 3.08 | 40 | 24.8 | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | 0.0 | 0.74  |
| <a href="{{ site.baseurl }}/_clusters/rsg5/" target="_blank" style="color: $blue;">RSG5</a> | 303.5 | 45.6 | 2.96 | 272 | 46.6 | <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | 0.0 | 0.89  |
| <a href="{{ site.baseurl }}/_clusters/rsg6/" target="_blank" style="color: red;">RSG6</a> | 307.44 | 40.05 | 0.38 | 17 | 4.8 | <span style="color: red; font-weight: bold;">C</span><span style="color: red; font-weight: bold;">C</span> | 0.0 | 0.1  |
| <a href="{{ site.baseurl }}/_clusters/rsg7/" target="_blank" style="color: $blue;">RSG7</a> | 343.99 | 59.45 | 2.35 | 158 | 30.1 | <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | 0.55 | 0.37  |
| <a href="{{ site.baseurl }}/_clusters/rsg8/" target="_blank" style="color: $blue;">RSG8</a> | 345.42 | 59.37 | 2.07 | 345 | 61.2 | <span style="color: green; font-weight: bold;">A</span><span style="color: green; font-weight: bold;">A</span> | 0.03 | 0.87  |
| <a href="{{ site.baseurl }}/_clusters/rsg9y/" target="_blank" style="color: $blue;">RSG9y</a> | 72.61 | 52.29 | 3.31 | 47 | 23.3 | <span style="color: #FFC300; font-weight: bold;">B</span><span style="color: green; font-weight: bold;">A</span> | 0.0 | 0.59  |



<script type="module">
import { enableTableSorting } from '{{ site.baseurl }}/scripts/table-sorting.js';
document.querySelectorAll("table").forEach(table => {
  enableTableSorting(table);
});
</script>