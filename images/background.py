
import pandas as pd
from astropy import units as u
from astropy.coordinates import SkyCoord
# import astropy.coordinates as coord
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import numpy as np


def main():
    """
    Gridspec idea: http://www.sc.eso.org/~bdias/pycoffee/codes/20160407/
                   gridspec_demo.html
    """

    # gc_frame = coord.Galactocentric()

    df = pd.read_csv("../../add_New_DB/UCC_cat_230702.csv")

    sizes = 1 * (1 / np.clip(df['plx'].values, .1, 20))

    # Galactic coordinates.
    eq = SkyCoord(ra=df['RA_ICRS']*u.degree, dec=df['DE_ICRS']*u.degree, frame='icrs')
    lb = eq.transform_to('galactic')
    lon = lb.l.wrap_at(180 * u.deg).radian * u.radian
    lat = lb.b.radian * u.radian

    # invert lon
    i_lon = -lon

    fig = plt.figure(figsize=(4, 4))
    ax = plt.subplot(111, projection="aitoff")
    # ax = axes[-1]

    ax.grid(True, lw=.1)
    ax.scatter(i_lon, lat, s=sizes, lw=.2, facecolor='none', ec='grey', zorder=5)
    ax.set_xticklabels([])
    ax.set_yticklabels([])

    # # fig.tight_layout()
    fig.savefig('background.webp', dpi=300)#, bbox_inches='tight')


if __name__ == '__main__':
    # import scienceplots
    # plt.style.use('science')
    main()
