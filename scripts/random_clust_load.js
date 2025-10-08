
// Clear file from cache (run in the browser console):
// sessionStorage.removeItem('clusterFnames');

async function loadRandomCluster() {
  try {
    let fnames;
    
    // Check if we already have the data cached
    const cachedData = sessionStorage.getItem('clusterFnames');
    
    if (cachedData) {
      // Use cached data
      fnames = JSON.parse(cachedData);
    } else {
      console.log("loading file again");
      // Fetch and decompress CSV file
      const response = await fetch("../assets/clusters.csv.gz");
      const blob = await response.blob();
      
      // Decompress gzip
      const reader = new FileReader();
      await new Promise((resolve, reject) => {
        reader.onload = () => {
          try {
            const csvText = pako.inflate(new Uint8Array(reader.result), { to: 'string' });
            const lines = csvText.trim().split(/\r?\n/);
            
            // Extract header and find index of 'fnames' column
            const headers = lines[0].split(",");
            const fnameIndex = headers.indexOf("fnames");
            
            // Extract all fnames
            fnames = lines.slice(1)
              .map(line => line.split(",")[fnameIndex].trim())
              .filter(Boolean);
            
            // Cache the data for future reloads
            sessionStorage.setItem('clusterFnames', JSON.stringify(fnames));
            resolve();
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      });
    }
    
    // Choose random file
    const randomName = fnames[Math.floor(Math.random() * fnames.length)].split(";")[0];
    const randomURL = `../_clusters/${randomName}`;
    
    // Display inside iframe
    const iframe = document.getElementById("clusterFrame");
    iframe.src = randomURL;
    iframe.style.display = "block";
    
    // Intercept clicks on links inside the iframe
    iframe.onload = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.addEventListener('click', (e) => {
          const target = e.target.closest('a');
          if (target && target.href) {
            e.preventDefault();
            window.top.location.href = target.href;
          }
        }, true);
      } catch (err) {
        console.warn('Cannot access iframe content (CORS restriction):', err);
      }
    };
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

loadRandomCluster();
