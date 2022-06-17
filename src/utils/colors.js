export function randomColor() {
  const randomize = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return '#' + randomize;
};

//ie. #8C2603
function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + 1 + ")";
}

export const convertToRgb = (color) => {
  if(color.charAt(0) === '#'){
    const rgb = hexToRGB(color);
    return rgb;
  } else {
    return color;
  }
};

//ie. rgba(140, 38, 3, 1.0)
/* export function RGBAToHexA(rgba) {
  const color = rgba.replace(/^rgba?\(|\s+|\)$/g, '').split(',');

  let r = (parseInt(color[0], 10)).toString(16);
  let g = (parseInt(color[1], 10)).toString(16);
  let b = (parseInt(color[2], 10)).toString(16);

  if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;

  return ("#" + r + g + b).toUpperCase();
} */
