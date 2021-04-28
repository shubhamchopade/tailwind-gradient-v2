function useGetLightnessPalette(hsl) {
  let palette = new Array(10);
  let { h, s, l } = hsl;

  function getIndex(color) {
    return Math.round(color / 10);
  }

  console.log(
    "palette",
    palette.sort((a, b) => (a.l > b.l ? 1 : b.l > a.l ? -1 : 0)),
    getIndex(l)
  );
  let lightness = l;
  for (let i = getIndex(l); i < palette.length; i++) {
    palette[i] = { h, s, l: lightness };
    if (lightness > 90) {
      lightness -= 90;
    } else {
      lightness += 10;
    }
  }
  console.log(lightness);
  for (let i = 0; i < getIndex(l); i++) {
    if (lightness > 90) {
      lightness -= 90;
    } else {
      lightness += 10;
    }
    palette[i] = { h, s, l: lightness };
  }
  return palette;
}

export default useGetLightnessPalette;
