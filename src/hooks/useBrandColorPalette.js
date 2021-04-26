import useHexToHSL from "./useHexToHSL";

function useBrandColorPalette(color) {
  const hsl = useHexToHSL(color);
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  let arr = [];

  for (let i = 0; i < 7; i++) {
    i === 0 && arr.push({ h, s, l });
    if (h > 359) {
      h -= 350;
    } else {
      h += 30;
    }
    if (s > 97) {
      s -= 90;
    } else {
      s += 2;
    }
    arr.push({ h, s, l });
  }

  return arr;
}

export default useBrandColorPalette;
