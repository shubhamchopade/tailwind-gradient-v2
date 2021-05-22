import useHexToHSL from "./useHexToHSL";

function useBrandColorPalette(color) {
  const hsl = useHexToHSL(color);
  let { h, s, l } = hsl;
  let arr = [];

  for (let i = 0; i < 7; i++) {
    i === 0 && arr.push({ h, s, l });

    if (h >= 300 && h <= 330) {
      h -= 36 * 8;
    } else if (h >= 331 && h <= 360) {
      h -= 36 * 5;
    } else if (h < 60) {
      h += 36 * 2;
    } else h += 36;

    if (s > 97) {
      s -= 90;
    } else if (s < 30) {
      s += 50;
    } else {
      s += 2;
    }
    // if (l < 30) {
    //   l += 20;
    // } else if (l > 90) {
    //   l -= 80;
    // }
    arr.push({ h, s, l });
  }
  // console.log(arr);
  return arr;
}

export default useBrandColorPalette;
