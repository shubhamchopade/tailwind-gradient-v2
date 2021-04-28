import useBrandColorName from "../hooks/useBrandColorName";
import useBrandColorPalette from "../hooks/useBrandColorPalette";
import useGetLightnessPalette from "../hooks/useGetLightnessPalette";
import useHSLToHex from "../hooks/useHSLToHex";
import useHexToHSL from "../hooks/useHexToHSL";
import { useColorState } from "../store/ColorStateProvider";
import ColorName, { ColorNameHSL } from "./ColorName";

const BrandColorPalette = () => {
  const { brandColor, showColorName } = useColorState();
  const val = useBrandColorPalette(brandColor);

  console.log(val);

  return (
    <section className="flex items-start justify-start pr-4">
      <div>
        {val.map((brandColor, index) => (
          <div className="relative">
            {showColorName && <ColorNameHSL color={brandColor} />}
            <LightPalette color={brandColor} key={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandColorPalette;

const BrandTile = (props: any) => {
  let hex = useHSLToHex(props.color.h, props.color.s, props.color.l);
  return (
    <main className="flex items-center justify-between m-1">
      <div className="w-8 h-8 rounded transition" style={{ background: hex }} />
    </main>
  );
};

const LightPalette = (props: any) => {
  const { color } = props;
  const cols = useGetLightnessPalette(color);
  return (
    <div className="flex w-60">
      {cols.map((bt, index) => (
        <BrandTile color={bt} key={index} />
      ))}
    </div>
  );
};
