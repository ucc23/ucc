import { loadCompressedCsv } from "./loadCSV.js";

// Clear file from cache (run in the browser console):
// sessionStorage.removeItem('clusterFnames');

async function loadRandomCluster() {
  // Ensure fnames is loaded (only once per session)
  let fnames = sessionStorage.getItem("clusterFnames");

  if (fnames) {
    fnames = JSON.parse(fnames);
  } else {
    // console.log("loading compressed file");
    fnames = await loadCompressedCsv("../assets/clusters.csv.gz", ["fnames"]);
    sessionStorage.setItem("clusterFnames", JSON.stringify(fnames));
  }

  // Choose random file
  const randomName = fnames[(Math.random() * fnames.length) | 0]["fnames"].split(";")[0];
  const randomURL = `../_clusters/${randomName}`;
  // console.log("Loading:", randomURL);

  // Display inside iframe
  const iframe = document.getElementById("clusterFrame");
  iframe.src = randomURL;
  iframe.style.display = "block";

  // Intercept clicks on links inside the iframe
  iframe.onload = () => {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (target && target.href) {
        e.preventDefault();
        window.top.location.href = target.href;
      }
    },
    true);
  };
}

// Run once on load
loadRandomCluster();
