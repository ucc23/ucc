
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.axes_grid1 import make_axes_locatable
from astropy.visualization import ZScaleInterval
import pandas as pd

# matplotlib.rc('font', family='sans-serif') 
# matplotlib.rc('font', serif='Helvetica Neue') 
# matplotlib.rc('text', usetex='false') 
# matplotlib.rcParams.update({'font.size': 22})


def main():
    """
    """
    cl = "Dutra-Bica 83"
    # path = "../1_code/members_fastMP/out_1/"
    path = "/home/gabriel/Descargas/"

    df = pd.read_csv(path + cl + ".csv")

    pr = df['probs']
    vmin = min(pr)

    fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(5.5, 5))

    ax1.scatter(
        df['GLON'], df['GLAT'], c=pr, alpha=.7, ec='k', lw=.35,
        s=mag_size(df['Gmag'].values))
    ax1.set_xlabel("GLON")
    ax1.set_ylabel("GLAT")

    im2 = ax2.scatter(
        df['pmRA'], df['pmDE'], c=pr, alpha=.7, ec='k', lw=.35,
        s=mag_size(df['Gmag'].values), vmin=vmin)
    # fig.colorbar(im2, ax=ax2)

    # divider = make_axes_locatable(ax2)
    # cax = divider.append_axes('right', size='5%', pad=0.05)
    # cbar = plt.colorbar(im2, cax=cax)
    # cbar.set_label('$col bar$', fontsize=21, labelpad=-2)
    # colorbar(im2)

    # x_pos, y_pos, w, h = .98, 0.59, .02, .38
    x_pos, y_pos, w, h = .985, 0.103, 0.02, 0.866
    cb_ax = fig.add_axes([x_pos, y_pos, w, h])
    cbar = fig.colorbar(im2, orientation='vertical', cax=cb_ax)
    cbar.set_label('Probs')

    ax2.set_xlabel("pmRA [mas/yr]")
    ax2.set_ylabel("pmDE [mas/yr]")

    ax3.scatter(df['Plx'], df['Gmag'], c=pr, alpha=.7, s=50, ec='k', lw=.35)
    ax3.axvline(np.median(df['Plx']), ls=':', c='k', lw=2)
    ax3.invert_yaxis()
    ax3.set_xlabel("Plx [mas]")
    ax3.set_ylabel("Gmag")

    ax4.scatter(
        df['BP-RP'], df['Gmag'], c=pr, alpha=.7, ec='k', lw=.35,
        s=plx_size(df['Plx'].values))
    ax4.invert_yaxis()
    ax4.set_xlabel("BP-RP")
    ax4.set_ylabel("Gmag")

    fig.tight_layout()
    plt.savefig("cluster.png", dpi=150)
    print("finshed")


def colorbar(mappable):
    ax = mappable.axes
    fig = ax.figure
    divider = make_axes_locatable(ax)
    cax = divider.append_axes("right", size="5%", pad=0.05)
    return fig.colorbar(mappable, cax=cax)


def mag_size(mag):
    """
    Convert magnitudes into intensities and define sizes of stars in
    finding chart.
    """
    N = len(mag)
    interval = ZScaleInterval()
    zmin, zmax = interval.get_limits(mag)

    mag = mag.clip(zmin, zmax)
    factor = 500. * (1 - 1 / (1 + 150 / N ** 0.85))
    flux = (10 ** ((mag - zmin) / -2.5))
    sizes = 10 + factor * flux
    return sizes


def plx_size(plx, max_s=100):
    plx = np.clip(plx, a_min=0.01, a_max=20)
    delta_p = plx.max() - plx.min()
    m = max_s / delta_p
    h = -m * plx.min()
    s = 10 + (h + m * plx)
    return s


if __name__ == '__main__':
    import scienceplots
    plt.style.use('science')
    main()
