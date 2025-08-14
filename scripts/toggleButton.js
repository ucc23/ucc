export function setupCoordToggle({
  buttonId = 'coordToggle',
  inputId = 'search'
} = {}) {
  const btn = document.getElementById(buttonId);
  const termsInput = document.getElementById(inputId);

  const modes = ['name', 'equ', 'gal'];
  const placeholders = {
    name: "Search by name...",
    equ: "Search by RA, DEC (degrees)...",
    gal: "Search by LON, LAT (degrees)..."
  };

  let index = 0; // start with 'name'
  window.coordsys = modes[index]; // initial mode

  btn.addEventListener('click', () => {
    // Flash effect
    btn.classList.add('flash');
    setTimeout(() => btn.classList.remove('flash'), 100);

    // Advance mode index
    index = (index + 1) % modes.length;
    window.coordsys = modes[index];

    // Update button text
    btn.textContent =
      window.coordsys === 'gal' ? 'Galactic' :
      window.coordsys === 'equ' ? 'Equatorial' : 'Name';

    // Update placeholder
    termsInput.placeholder = placeholders[window.coordsys];
  });
}
