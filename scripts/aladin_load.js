function loadAladinLiteAndHideImage() {
    // Get FOV and target values from the image's data attributes
    const imageElement = document.getElementById('aladin_img');
    const fov = parseFloat(imageElement.getAttribute('data-fov'));
    const target = imageElement.getAttribute('data-target');

    // Dynamically load the Aladin Lite script
    let aladinScript = document.createElement('script');
    aladinScript.src = "https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js";
    aladinScript.charset = "utf-8";
    aladinScript.onload = function () {
        A.init.then(() => {
            let aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov: fov, target: target});
            // Remove the image
            imageElement.remove();
            // Show the Aladin Lite viewer
            document.getElementById('aladin-lite-div').style.display = 'block';
        });
    };
    document.head.appendChild(aladinScript);
}

// Event listener for image click
document.getElementById('aladin_img').addEventListener('click', loadAladinLiteAndHideImage);
