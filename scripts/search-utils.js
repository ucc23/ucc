
export const UTI_PALETTE = [
  [223, 165, 179], [243, 187, 181], [252, 214, 194],
  [254, 239, 210], [254, 254, 232], [237, 247, 211],
  [212, 236, 201], [181, 222, 195], [165, 202, 185]
];

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


