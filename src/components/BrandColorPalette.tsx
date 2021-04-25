import useBrandColorName from "../hooks/useBrandColorName";
import useBrandColorPalette from "../hooks/useBrandColorPalette";
import useHSLToHex from "../hooks/useHSLToHex";
import { useColorState } from "../store/ColorStateProvider";

const BrandColorPalette = () => {
  const { brandColor } = useColorState();
  const val = useBrandColorPalette(brandColor);

  console.log(val);

  return (
    <div className="h-64 overflow-auto">
      {val.map((brandColor, index) => (
        <BrandTile color={brandColor} key={index} />
      ))}
    </div>
  );
};

export default BrandColorPalette;

const BrandTile = (props: any) => {
  let hex = useHSLToHex(props.color.h, props.color.s, props.color.l);
  const brandColorName = useBrandColorName(hex, 10);
  return (
    <main className="flex items-center justify-between w-32 m-1">
      <p className="text-xs">{brandColorName}</p>
      <div className="w-8 h-8 rounded" style={{ background: hex }} />
    </main>
  );
};
