function useGetLightnessPalette(hsl) {
  let palette = new Array(10);
  let idx;
  let { h, s, l } = hsl;

  function getIndex(color) {
    return Math.round(color / 10);
  }
  let lightness = l;
  for (let i = getIndex(l); i < palette.length; i++) {
    palette[i] = { h, s, l: lightness };
    lightness += 10;
  }

  return palette;
}

export default useGetLightnessPalette;
