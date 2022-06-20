export function randomColor() {
  const randomize = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return '#' + randomize;
};

export function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return "rgb(" + r + ", " + g + ", " + b + ")";
};

export function RGBToHex(rgb) {
  const colors = rgb.slice(4, -1);
  const RGBvalues = colors.split(',')

  let r = (+RGBvalues[0]).toString(16);
  let g = (+RGBvalues[1]).toString(16);
  let b = (+RGBvalues[2]).toString(16);

 if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;

  return "#" + r + g + b;
}
