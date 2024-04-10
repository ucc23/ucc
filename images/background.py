
import pandas as pd
from astropy import units as u
from astropy.coordinates import SkyCoord
import matplotlib.pyplot as plt
import numpy as np

"""
After generating this image, move the plot from the center of the frame to
the bottom left and trim the blank space to the right. This generates an
image with the proper dimensions for the ucc.ar site.
"""

df = pd.read_csv("../../updt_UCC/zenodo/UCC_cat_240304.csv")

sizes = 1 * (1 / np.clip(df['plx'].values, .1, 20))

# Galactic coordinates.
eq = SkyCoord(ra=df['RA_ICRS'].values*u.degree, dec=df['DE_ICRS'].values*u.degree, frame='icrs')
lb = eq.transform_to('galactic')
lon = lb.l.wrap_at(180 * u.deg).radian * u.radian
lat = lb.b.radian * u.radian

# invert lon
i_lon = -lon

fig = plt.figure(figsize=(4, 4))
ax = plt.subplot(111, projection="aitoff")

ax.grid(True, lw=.1)
ax.scatter(i_lon, lat, s=sizes, lw=.2, facecolor='none', ec='grey', zorder=5)
ax.set_xticklabels([])
ax.set_yticklabels([])

fig.savefig('background.webp', dpi=150, bbox_inches="tight")
