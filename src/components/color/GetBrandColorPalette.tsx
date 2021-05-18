import { useEffect } from "react";
import { useDebounce } from "use-debounce/lib";
import useBrandColorPalette from "../../hooks/useBrandColorPalette";
import { useColorState } from "../../store/ColorStateProvider";

const BrandColorPalette = () => {
  const { brandColor, setBrandColorPaletteArray } = useColorState();
  const [debouncedValue] = useDebounce(brandColor, 300);
  const val = useBrandColorPalette(debouncedValue);

  useEffect(() => {
    setBrandColorPaletteArray(val);
  }, [brandColor]);

  return <section className="flex items-start justify-start pr-4"></section>;
};

export default BrandColorPalette;

// const LightPalette = (props: any) => {
//   const { color } = props;
//   const cols = useGetLightnessPalette(color);
//   return (
//     <div className="flex w-60">
//       {cols.map((bt, index) => (
//         <BrandTile color={bt} key={index} />
//       ))}
//     </div>
//   );
// };
