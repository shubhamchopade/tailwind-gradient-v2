import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useColorState } from "../../store/ColorStateProvider";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import useHexToHSL from "../../hooks/useHexToHSL";
import useGetColorArray from "../../hooks/useGetColorArray";

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
  const [localBrandColor, setLocalBrandColor] = useState("#095216");
  const [debouncedValue] = useDebounce(localBrandColor, 200);
  const brandArrWithShades = useGetColorArray(debouncedValue);
  const hsl = useHexToHSL(debouncedValue);

  useEffect(() => {
    setBrandColor(debouncedValue);
    setBrandColorPaletteArray(brandArrWithShades);
  }, [brandColor, localBrandColor, debouncedValue, showColorName]);

  const handleBrandColor = (color: string) => {
    setLocalBrandColor(color);
  };

  // console.log(brandColorPaletteArray);

  return (
    <div className="flex flex-col justify-center font-noto-sans">
      <p className="text-gray-500 my-8 text-2xl">
        Choose a brand color to get started
      </p>
      <div className="flex">
        <div>
          {/* Brand Color Circle */}
          <div
            style={{ background: brandColor }}
            className="group flex items-center justify-center roup w-40 h-40 rounded-full"
          >
            <button
              className={`outline-none focus:ring-1 border-none ${
                hsl.l > 80 || hsl.s > 80 ? "text-gray-800" : "text-gray-50"
              }`}
              onClick={() => setShowColorName(!showColorName)}
            >
              {showColorName ? "Hide Name" : "Show Name"}
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default GetBrandPicker;
