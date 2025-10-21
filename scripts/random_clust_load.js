import { loadCompressedCsv } from "./loadCSV.js";

const data = await loadCompressedCsv();

async function loadRandomCluster() {
  // Choose random file
  const randomName = data[(Math.random() * data.length) | 0]["fnames"].split(";")[0];
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
