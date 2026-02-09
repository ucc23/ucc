
// ============================================================================
// CONSTANTS
// ============================================================================

export const UTI_PALETTE = [
  [223, 165, 179], [243, 187, 181], [252, 214, 194],
  [254, 239, 210], [254, 254, 232], [237, 247, 211],
  [212, 236, 201], [181, 222, 195], [165, 202, 185]
];

export const CONFIG = {
  // Scaling ranges
  memberCount: { min: 5, max: 1000 },
  radius: { min: 5, max: 50 },
  
  // Galactic coordinates (Sun position)
  sun: { x: -8, y: 0 }, // kpc
  
  // Grid settings
  grid: {
    range: 15,      // kpc
    step: {
      min: 0.1,     // kpc at close zoom
      max: 2.5      // kpc at far zoom
    },
    visibility: {
      spanMin: 1,   // start increasing grid spacing
      spanMax: 10   // fully coarse grid
    }
  },
  
  // Initial view
  initialRange: 2,  // kpc
  
  // Zoom limits
  zoom: {
    min: 0.1,       // Most zoomed out (10x initial view)
    max: 10         // Most zoomed in (10x initial view)
  },
  
  // Interaction delays (ms)
  hoverDelay: {
    small: 100,     // < 500 points
    medium: 200,    // 500-2000 points
    large: 500      // > 2000 points
  },
  
  // Performance thresholds
  tooltipThreshold: 5000,  // Disable tooltips above this
  hoverThreshold: 5000     // Disable row hover above this
};

export function utiColor(value) {
  const normalized = Math.min(1, Math.max(0, value));
  const scaled = normalized * (UTI_PALETTE.length - 1);
  const i = Math.floor(scaled);
  const j = Math.min(i + 1, UTI_PALETTE.length - 1);
  const t = scaled - i;

  const lerp = (start, end, factor) => Math.round(start + factor * (end - start));
  const r = lerp(UTI_PALETTE[i][0], UTI_PALETTE[j][0], t);
  const g = lerp(UTI_PALETTE[i][1], UTI_PALETTE[j][1], t);
  const b = lerp(UTI_PALETTE[i][2], UTI_PALETTE[j][2], t);

  return `rgb(${r}, ${g}, ${b})`;
}


/**
 * Convert Galactic coordinates (lon, lat, distance) to Cartesian (x, y)
 * Sun is at X_GC = sun.x kpc, Y_GC = sun.y kpc
 * l = 0 points toward Galactic Center from Sun
 */
export function galacticToCartesian(lon, lat, distPc) {
  const lonRad = lon * Math.PI / 180;
  const latRad = lat * Math.PI / 180;
  
  // Position relative to Sun (convert pc to kpc)
  const distKpc = distPc / 1000;
  const xSun = distKpc * Math.cos(latRad) * Math.cos(lonRad);
  const ySun = distKpc * Math.cos(latRad) * Math.sin(lonRad);
  
  // Convert to Galactic Center coordinates
  return {
    x: xSun + CONFIG.sun.x,
    y: ySun + CONFIG.sun.y
  };
}