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
