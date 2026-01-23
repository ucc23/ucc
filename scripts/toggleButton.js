export function setupCoordToggle({
  buttonId = 'coordToggle',
  inputId = 'search',
  includeName = true   // if true, start with 'name' mode
} = {}) {
  const btn = document.getElementById(buttonId);
  const termsInput = document.getElementById(inputId);

  const modes = includeName ? ['names','equ','gal'] : ['names','equ','gal'];

  const placeholders = {
    names: "Search by name(s)...",
    equ: "Search by RA, DEC...",
    gal: "Search by LON, LAT..."
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

    // Update placeholders
    termsInput.placeholder = placeholders[window.coordsys];
  });

}
