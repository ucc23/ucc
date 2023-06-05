
import numpy as np
import matplotlib.pyplot as plt


while True:

    seed = 4086
    # seed = np.random.randint(10000)
    print(seed)
    np.random.seed(seed)

    # Set up the circular background
    fig, ax = plt.subplots(figsize=(3, 3))
    ax.set_aspect('equal')
    ax.set_xlim([-.32, .32])
    ax.set_ylim([-.32, .32])
    circle = plt.Circle((0, 0), .3, color='k', lw=5, fill=False)
    ax.add_artist(circle)

    N = 150

    # Generate random coordinates for the points in a 2D Gaussian distribution
    mean = [0, 0]
    cov = [[0.01, 0], [0, 0.01]]
    x, y = np.random.multivariate_normal(mean, cov, N).T
    print(np.round(x, 2))
    print(np.round(y, 2))

    # Plot the black points
    s_r = np.random.uniform(10, 150, N)
    ax.scatter(x, y, color='black', s=s_r, ec='w')

    ax.axis('off')
    # Show the plot
    plt.savefig('icon.png', dpi=150, transparent=True, bbox_inches='tight')
    plt.show()
