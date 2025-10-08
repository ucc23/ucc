// search.js

import { stringDifference } from "./stringDifference.js"; // optional, if defined elsewhere

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
            distance = Math.min(
                ...d.fnames.split(";").map(fname =>
                    stringDifference(normalizedQuery, fname)
                )
            );
        }
    }

    return distance;
}
