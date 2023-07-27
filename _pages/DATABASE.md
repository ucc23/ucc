---
layout: page
title: Database split into 8 regions
permalink: /database/
---

<center>
| Region  | lon range  | lat range  |
|---------|------------|------------|
| [Q1P: 1st quadrant, positive latitude](https://ucc.ar/Q1P_table/) | [0, 90)    | [0, 90]    |
| [Q1N: 1st quadrant, negative latitude](https://ucc.ar/Q1N_table/) | [0, 90)    | (0, -90]   |
| [Q2P: 2nd quadrant, positive latitude](https://ucc.ar/Q2P_table/) | [90, 180)  | [0, 90]    |
| [Q2N: 2nd quadrant, negative latitude](https://ucc.ar/Q2N_table/) | [90, 180)  | (0, -90]   |
| [Q3P: 3rd quadrant, positive latitude](https://ucc.ar/Q3P_table/) | [180, 270) | [0, 90]    |
| [Q3N: 3rd quadrant, negative latitude](https://ucc.ar/Q3N_table/) | [180, 270) | (0, -90]   |
| [Q4P: 4th quadrant, positive latitude](https://ucc.ar/Q4P_table/) | [270, 360) | [0, 90]    |
| [Q4N: 4th quadrant, negative latitude](https://ucc.ar/Q4N_table/) | [270, 360) | (0, -90]   |
</center>

### Where is the full database?

The latest version of the UCC can be found [here](link_to_databse) in `csv` format.

### Is there a single file with the complete list of estimated members?

Yes, the `parquet` file with the latest version of the estimated members for the
complete UCC can be downloaded [here](link_to_members_file).