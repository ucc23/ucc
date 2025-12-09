// Fetch, filter, and download members CSV
async function getMembersCSV(fname, members_file) {
    const url = `../../assets/members/membs_${members_file}.csv.gz`;

    const resp = await fetch(url);
    if (!resp.ok) {
        console.error("Could not load file:", url);
        return;
    }

    const ds = resp.body.pipeThrough(new DecompressionStream("gzip"));
    const text = await new Response(ds).text();

    const lines = text.trim().split("\n");
    const header = lines[0];
    const rows = lines.slice(1);

    const cols = header.split(",");
    const nameIdx = cols.indexOf("name");
    if (nameIdx === -1) {
        console.error("Column 'name' not found.");
        return;
    }

    const filtered = rows.filter(r => {
        const fields = r.split(",");
        return fields[nameIdx] === fname;
    });

    const newHeader = cols.filter((_, i) => i !== nameIdx).join(",");
    const newRows = filtered.map(r => {
        const fields = r.split(",");
        return fields.filter((_, i) => i !== nameIdx).join(",");
    });

    const output = [newHeader, ...newRows].join("\n");

    const blob = new Blob([output], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${fname}_ucc_members.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
}

// Galactocentric position lazy load
document.getElementById("gcpos").addEventListener("toggle", function () {
    if (this.open) {
        const img = this.querySelector("img");
        if (!img.src) {
            img.src = img.dataset.src;
            img.onerror = () => img.alt = "Image failed to load";
        }
    }
});

// Members CSV download
const downloadButton = document.getElementById('downloadMembersCSV');
downloadButton.addEventListener('click', () => getMembersCSV(window.fname, window.members_file));

// RADEC positions lazy load
const details = document.getElementById('cluster-region');
let loaded = false;
details.addEventListener('toggle', () => {
    if (details.open && !loaded) {
        const s = document.createElement('script');
        s.type = 'module';
        s.src = `${window.baseurl}/scripts/radec_scatter.js`;
        document.body.appendChild(s);
        loaded = true;
    }
});

//
//
// Umami tracking

// For UTI click
const button = document.getElementById('UTI-button');
button.onclick = () => umami.track('UTI');

// For members CSV download
downloadButton.onclick = () => umami.track('clust_downl_csv');

// For row visibility toggle
const toggleInput = document.getElementById('toggle-pos-rows');
if (toggleInput) {
    toggleInput.addEventListener('change', () => {
        if (toggleInput.checked) {
            umami.track('posit_show');
        }
    });
}

// For summary elements
const trackableDetails = ['summary', 'gcpos', 'cluster-region'];
trackableDetails.forEach(elementId => {
    const det = document.getElementById(elementId)?.closest('details');
    det?.addEventListener('toggle', () => {
        if (det.open) umami.track(elementId);
    });
});
