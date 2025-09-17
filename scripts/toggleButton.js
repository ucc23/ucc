export function setupCoordToggle({
  buttonId = 'coordToggle',
  inputId = 'search',
  includeName = true   // if true, start with 'name' mode
} = {}) {
  const btn = document.getElementById(buttonId);
  const termsInput = document.getElementById(inputId);

  const modes = includeName ? ['name','allnames','equ','gal'] : ['allnames','equ','gal'];
  const placeholders = {
    name: "Search by primary name...",
    allnames: "Search across all names...",
    equ: "Search by RA, DEC (degrees)...",
    gal: "Search by LON, LAT (degrees)..."
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
      window.coordsys === 'equ' ? 'Equatorial' :
      window.coordsys === 'allnames' ? 'All names' : 'Name';

    // Update placeholder
    termsInput.placeholder = placeholders[window.coordsys];
  });
}
