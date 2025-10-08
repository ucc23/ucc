export function setupCoordToggle({
  buttonId = 'coordToggle',
  inputId = 'search',
  includeName = true   // if true, start with 'name' mode
} = {}) {
  const btn = document.getElementById(buttonId);
  const termsInput = document.getElementById(inputId);
  const radiusInput = document.getElementById('radius');

  const modes = includeName ? ['names','equ','gal'] : ['names','equ','gal'];

  const placeholders = {
    names: "Search by name(s)...",
    equ: "Search by RA, DEC...",
    gal: "Search by LON, LAT..."
  };

  const radius_placeholders = {
    names: "Radius [string]",
    equ: "Radius [arcmin]",
    gal: "Radius [arcmin]"
  };

  let index = 0;
  window.coordsys = modes[index];

  btn.addEventListener('click', () => {
    // Flash effect
    btn.classList.add('flash');
    setTimeout(() => btn.classList.remove('flash'), 100);

    // Advance mode
    index = (index + 1) % modes.length;
    window.coordsys = modes[index];

    // Update button text
    btn.textContent =
      window.coordsys === 'gal' ? 'Galactic' :
      window.coordsys === 'equ' ? 'Equatorial' : 'Names';
      // window.coordsys === 'names' ? 'All names' : 'Name';

    // Update placeholders
    termsInput.placeholder = placeholders[window.coordsys];
    if (radiusInput) {
      radiusInput.placeholder = radius_placeholders[window.coordsys];
    }
  });

}
