import { stringDifference } from "./stringDifference.js";

export function generalSearch(d, coordsys, query) {

    let x = null, y = null, normalizedQuery = null;
    if ((coordsys == 'equ') || (coordsys === "gal")){
        const xy = query.split(/[ \t,;]+/)
        // RA/DEC or GLON/GLAT search
        x = parseFloat(xy[0]);
        y = parseFloat(xy[1]);
    } else {
        // Globally removes spaces, underscores, periods, and hyphens, globally replaces '+' with 'p'
        normalizedQuery = query.replace(/[\s_.\-]/g, "").replace(/\+/g, "p");
    }

    let distance = Infinity;

    if (coordsys === "equ") {
        distance = Math.hypot(x - d.RA_ICRS, y - d.DE_ICRS);

    } else if (coordsys === "gal") {
        distance = Math.hypot(x - d.GLON, y - d.GLAT);

    } else {
        // Only search if the first (up to 3) characters of the query are present
        if (d.fnames.includes(normalizedQuery.slice(0, 3))) {
            const fnames = d.fnames.split(";");
            const N_fnames = fnames.length;
            distance = Math.min(
                    ...fnames.map(fname => stringDifference(normalizedQuery, fname))
                );
            // Add a small penalty if there are multiple fnames
            if (distance > 0 && N_fnames > 1) {
                distance += 0.05 * N_fnames;
            }
        }
    }
    return distance;
}
