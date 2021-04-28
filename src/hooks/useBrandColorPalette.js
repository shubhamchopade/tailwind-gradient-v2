import useHexToHSL from "./useHexToHSL";

function useBrandColorPalette(color) {
  const hsl = useHexToHSL(color);
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  let arr = [];

  for (let i = 0; i < 7; i++) {
    i === 0 && arr.push({ h, s, l });

    if (h > 329) {
      h -= 320;
    } else if (h < 10) {
      h += 60;
    } else {
      h += 30;
    }
    if (s > 97) {
      s -= 90 * Math.random();
    } else if (s < 30) {
      s += 50;
    } else {
      s += 2 * Math.random();
    }
    arr.push({ h, s, l });
  }
  // console.log(arr);
  return arr;
}

export default useBrandColorPalette;
