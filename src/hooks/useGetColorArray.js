import { useColorState } from "../store/ColorStateProvider";
import useBrandColorName from "./useBrandColorName";
import useBrandColorPalette from "./useBrandColorPalette";
import useGetLightnessPalette from "./useGetLightnessPalette";
import useHSLToHex from "./useHSLToHex";

function useGetColorArray(hex) {
  const brandArr = useBrandColorPalette(hex);
  const { showColorName } = useColorState();

  // console.log(brandArr);

  const latestArr = brandArr.map((hsl) => {
    const paletteHex = useHSLToHex(hsl);
    const id = paletteHex.split("#")[1];
    const lightnessPalette = useGetLightnessPalette(hsl, id);
    return {
      id,
      name: showColorName ? useBrandColorName(paletteHex, 8) : "",
      hex: paletteHex,
      hsl,
      lightnessPalette,
    };
  });

  return latestArr;
}

export default useGetColorArray;
