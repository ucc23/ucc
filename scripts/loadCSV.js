
export const loadCompressedCsv = async (url, requiredColumns) => {
    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();

        // Decompress the gzipped file
        const csvString = pako.ungzip(new Uint8Array(buffer), { to: "string" });

        // Parse the CSV string into rows
        const rows = csvString.split("\n").map(row => row.split(","));

        // Extract headers and rows
        const [headers, ...data] = rows;

        // Find the indices of required columns
        const indices = requiredColumns.map(col => headers.indexOf(col));

        // Map the rows to the required structure
        return data
            .filter(row => row.length === headers.length) // Ensure complete rows
            .map(row =>
                Object.fromEntries(indices.map((index, i) => [requiredColumns[i], row[index]]))
            );
    } catch (error) {
        console.error("Error loading or processing CSV:", error);
        return [];
    }
};


// // Load compressed CSV
// async function loadCompressedCsv(url, columns) {
//     const response = await fetch(url);
//     const buffer = await response.arrayBuffer();
//     const text = new TextDecoder("utf-8").decode(pako.inflate(new Uint8Array(buffer)));
//     const rows = d3.csvParse(text, d => {
//         const entry = {};
//         columns.forEach(col => entry[col] = d[col]);
//         return entry;
//     });
//     return rows;
// }