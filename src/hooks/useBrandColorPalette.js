import useHexToHSL from "./useHexToHSL";

function useBrandColorPalette(color) {
  const hsl = useHexToHSL(color);
  let { h, s, l } = hsl;
  let arr = [];

  for (let i = 0; i < 7; i++) {
    i === 0 && arr.push({ h, s, l });

    if (h >= 300 && h <= 330) {
      h -= 270;
    } else if (h >= 331 && h <= 360) {
      h -= 300;
    } else if (h < 60) {
      h += 80;
    } else h += 40;
    if (s > 97) {
      s -= 90 * Math.random();
    } else if (s < 30) {
      s += 50 * Math.random();
    } else {
      s += 2 * Math.random();
    }
    if (l < 30) {
      l += 10;
    } else if (l > 90) {
      l -= 80;
    }
    arr.push({ h, s, l });
  }
  // console.log(arr);
  return arr;
}

export default useBrandColorPalette;
