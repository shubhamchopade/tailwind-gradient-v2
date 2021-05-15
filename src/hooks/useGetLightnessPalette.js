import useHSLToHex from "./useHSLToHex";

function useGetLightnessPalette(hsl, id) {
  let palette = new Array(10);
  let { h, s, l } = hsl;

  function getIndex(color) {
    return Math.round(color / 10);
  }

  let lightness = l;
  let saturation = s;

  for (let i = getIndex(l); i < palette.length; i++) {
    const hslObj = { h, s: saturation, l: lightness };
    palette[i] = {
      id: `${id}-${i}`,
      number: i * 100,
      hex: useHSLToHex(hslObj),
      hsl: { h, s: saturation, l: lightness },
    };
    if (lightness > 80) {
      lightness -= 80;
      saturation -= 8;
    } else if (lightness < 8) {
      lightness += 8;
    } else {
      lightness += 8;
    }
  }

  for (let i = 0; i < getIndex(l); i++) {
    if (lightness > 80) {
      lightness -= 80;
      saturation -= 8;
    } else if (lightness < 8) {
      lightness += 8;
    } else {
      lightness += 8;
    }
    const hslObj = { h, s: saturation, l: lightness };
    palette[i] = {
      id: `${id}-${i}`,
      number: i * 100,
      hex: useHSLToHex(hslObj),
      hsl: { h, s: saturation, l: lightness },
    };
  }

  // console.log(palette, getIndex(l));
  return palette;
}

export default useGetLightnessPalette;
