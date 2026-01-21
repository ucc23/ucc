import { stringDifference } from "./stringDifference.js";

export function generalSearch(d, coordsys, query) {

    let distance = Infinity;

    let x = null, y = null, normalizedQuery = null;
    if ((coordsys === 'equ') || (coordsys === "gal")){
        const xy = query.split(/[ \t,;]+/)
        // RA/DEC or GLON/GLAT search
        x = Number(xy[0]);
        y = Number(xy[1]);

        if (!Number.isFinite(x) || !Number.isFinite(y)) {
            return Infinity;  // invalid coordinates → ignore entry
        }

    } else {
        // Globally removes spaces, underscores, periods, and hyphens, globally replaces '+' with 'p'
        normalizedQuery = query
          .trim()
          .toLowerCase()
          .replace(/[\s_.\-]/g, "")
          .replace(/\+/g, "p");
    }


    // Wrap around 360
    function dlon(a, b) {
        let d = Math.abs(a - b);
        return Math.min(d, 360 - d);
    }


    if (coordsys === "equ") {
        const dx = dlon(x, d.RA_ICRS);
        const dy = y - d.DE_ICRS;
        distance = Math.hypot(dx, dy);

    } else if (coordsys === "gal") {
        const dx = dlon(x, d.GLON);
        const dy = y - d.GLAT;
        distance = Math.hypot(dx, dy);

    } else {
        // Only search if the first (up to 3) characters of the query are present
        if (d.fnames.includes(normalizedQuery.slice(0, 3))) {
            const fnames_s = d.fnames.split(";");
            // const N_fnames = fnames_s.length;
            distance = Math.min(
                    ...fnames_s.map(fname => stringDifference(normalizedQuery, fname))
                );
            // Add a small penalty for entries with main fname that do not begin with the same first 3 characters
            if (distance > 0 & !d.fname.includes(normalizedQuery.slice(0, 3))) {
                distance += 0.1;
            }
        }
    }
    return distance;
}
