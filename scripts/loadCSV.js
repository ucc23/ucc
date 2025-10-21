import * as pako from "https://cdn.jsdelivr.net/npm/pako@2.1.0/+esm";

let loadingPromise = null;
let cachedData = null; // In-memory cache
let currentCsvName = null; // Track currently loaded CSV (ignore path)

export const loadCompressedCsv = async (basePath = "../assets/") => {
    try {
        // 1. Fetch the manifest (path-flexible)
        const manifest = await fetch(`${basePath}clusters_manifest.json`).then(r => {
            if (!r.ok) throw new Error(`Failed to fetch manifest: ${r.status}`);
            return r.json();
        });
        const csvName = manifest.latest;
        const url = `${basePath}${csvName}`;
        // Use only the *filename* as cache key — ignore basePath
        const cacheKey = csvName;

        // 2. Return in-memory cache if same file already loaded (fastest)
        if (cachedData && currentCsvName === csvName) {
            console.log("Loading CSV from memory cache");
            return cachedData;
        }

        // 3. Session cache (shared across paths)
        const sessionCached = sessionStorage.getItem(cacheKey);
        if (sessionCached) {
            console.log("Loading CSV from sessionStorage");
            cachedData = JSON.parse(sessionCached);
            currentCsvName = csvName;
            return cachedData;
        }

        // 4. Local cache (shared across paths)
        const localCached = localStorage.getItem(cacheKey);
        if (localCached) {
            console.log("Loading CSV from localStorage");
            cachedData = JSON.parse(localCached);
            currentCsvName = csvName;
            try {
                // Refresh session cache for faster access in current tab
                sessionStorage.setItem(cacheKey, localCached);
            } catch (e) {
                console.warn("SessionStorage refresh skipped:", e.message);
            }
            return cachedData;
        }

        // 5. Prevent concurrent loads
        if (loadingPromise) {
            console.log("Waiting for ongoing CSV load");
            return await loadingPromise;
        }

        console.log("Loading CSV from network:", url);

        // 6. Load CSV from network
        loadingPromise = fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.arrayBuffer();
            })
            .then(buffer => pako.ungzip(new Uint8Array(buffer), { to: "string" }))
            .then(csvString => {
                const rows = csvString.trim().split("\n").map(row => row.split(","));
                if (rows.length < 2) throw new Error("CSV file is empty or invalid");

                const [headers, ...data] = rows;
                const result = data
                    .filter(row => row.length === headers.length && row.some(cell => cell.trim()))
                    .map(row => Object.fromEntries(headers.map((h, i) => [h.trim(), row[i]])));

                // Store caches (keyed only by filename)
                cachedData = result;
                currentCsvName = csvName;
                const serialized = JSON.stringify(result);
                try {
                    sessionStorage.setItem(cacheKey, serialized);
                    localStorage.setItem(cacheKey, serialized);
                } catch (e) {
                    console.warn("Storage cache skipped:", e.message);
                }

                return result;
            });

        return await loadingPromise.finally(() => (loadingPromise = null));

    } catch (error) {
        console.error("Error loading or processing CSV:", error);
        if (error instanceof SyntaxError) {
            sessionStorage.removeItem(currentCsvName);
            localStorage.removeItem(currentCsvName);
            cachedData = null;
            currentCsvName = null;
        }
        throw error;
    }
};
