import useHSLToHex from "./useHSLToHex";

function useGetLightnessPalette(hsl, id) {
  let palette = new Array(10);
  let { h, s } = hsl;

  // console.log(s, l);

  // function getIndex(color) {
  //   return Math.round(color / 10);
  // }

  // let lightness = l;
  // let saturation = s;

  // for (let i = getIndex(l); i < palette.length; i++) {
  //   const hslObj = { h, s: saturation, l: lightness };
  //   if (lightness > 80) {
  //     lightness -= 80;
  //     saturation -= 8;
  //   } else if (lightness < 8) {
  //     lightness += 8;
  //   } else {
  //     lightness += 8;
  //   }
  //   palette[i] = {
  //     id: `${id}-${i}`,
  //     number: i * 100,
  //     hex: useHSLToHex(hslObj),
  //     hsl: { h, s: saturation, l: lightness },
  //   };
  // }

  // for (let i = 0; i < getIndex(l); i++) {
  //   if (lightness > 80) {
  //     lightness -= 80;
  //     saturation -= 8;
  //   } else if (lightness < 40) {
  //     lightness += 8;
  //   } else {
  //     lightness += 8;
  //   }
  //   const hslObj = { h, s: saturation, l: lightness };
  //   palette[i] = {
  //     id: `${id}-${i}`,
  //     number: i * 100,
  //     hex: useHSLToHex(hslObj),
  //     hsl: { h, s: saturation, l: lightness },
  //   };
  // }

  let i = 0;

  // function randomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  // console.log(randomNumber(s, 100), s);
  // console.log(s);

  palette[i] = {
    id: `${id}-${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 98 }),
    hsl: { h, s: 100, l: 95 },
  };

  palette[i + 1] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 93 }),
    hsl: { h, s: 90, l: 88 },
  };
  palette[i + 2] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 83 }),
    hsl: { h, s: 85, l: 80 },
  };
  palette[i + 3] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 72 }),
    hsl: { h, s: 80, l: 72 },
  };
  palette[i + 4] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 64 }),
    hsl: { h, s: 80, l: 64 },
  };
  palette[i + 5] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 56 }),
    hsl: { h, s: 90, l: 56 },
  };
  palette[i + 6] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 48 }),
    hsl: { h, s: 90, l: 48 },
  };
  palette[i + 7] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 40 }),
    hsl: { h, s: 90, l: 40 },
  };
  palette[i + 8] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 32 }),
    hsl: { h, s: 90, l: 32 },
  };
  palette[i + 9] = {
    id: `${id}+${i}`,
    number: i * 100,
    hex: useHSLToHex({ h, s, l: 24 }),
    hsl: { h, s: 90, l: 24 },
  };

  // console.log(palette);
  return palette;
}

export default useGetLightnessPalette;
