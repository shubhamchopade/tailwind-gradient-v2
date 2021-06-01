import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useColorState } from "../../store/ColorStateProvider";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import useGetColorArray from "../../hooks/useGetColorArray";
import TopLikedColors from "../supabase/TopLikedColors";

// interface ColorArrProps {
//   id: number | string;
//   name?: string;
//   hex: string;
//   hsl: string;
//   shades?: Shades[];
// }

// interface Shades {
//   id: number | string;
//   number: number;
//   hex: string;
//   hsl: string;
// }

const GetBrandPicker: React.FunctionComponent = () => {
  const {
    brandColor,
    setBrandColor,
    showColorName,
    setShowColorName,
    setBrandColorPaletteArray,
  } = useColorState();
  const [localBrandColor, setLocalBrandColor] = useState("#2d2fab");
  const [debouncedValue] = useDebounce(localBrandColor, 300);
  const brandArrWithShades = useGetColorArray(debouncedValue);
  console.log(brandArrWithShades);

  useEffect(() => {
    setBrandColor(debouncedValue);
    setBrandColorPaletteArray(brandArrWithShades);
  }, [localBrandColor, debouncedValue, showColorName]);

  useEffect(() => {
    setShowColorName(false);
  }, [localBrandColor]);

  const handleBrandColor = (color: string) => {
    setLocalBrandColor(color);
  };

  // console.log(brandArrWithShades);

  return (
    <div className="flex flex-col justify-center font-noto-sans">
      <p className="text-gray-500 my-8 text-2xl">
        Choose a brand color to get started
      </p>
      <div className="flex justify-around">
        <div className="ml-6">
          <HexColorPicker
            className="grab"
            color={brandColor}
            onChange={handleBrandColor}
          />

          <HexColorInput
            className="border border-indigo-600 rounded p-2 my-2 outline-none focus:ring"
            color={brandColor}
            onChange={handleBrandColor}
          />
        </div>
        <TopLikedColors setLocalBrandColor={setLocalBrandColor} />
      </div>
    </div>
  );
};

export default GetBrandPicker;
