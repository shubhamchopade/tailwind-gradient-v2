import React from "react";
import useHexToHSL from "../../hooks/useHexToHSL";
import { useColorState } from "../../store/ColorStateProvider";
import LikesCounter from "../supabase/LikesCounter";

const BrandColorPreview: React.FunctionComponent = () => {
  const { brandColor, showColorName, setShowColorName } = useColorState();
  const hsl = useHexToHSL(brandColor);

  return (
    <div className="mt-8 sm:mt-0">
      {/* Brand Color Circle */}
      <LikesCounter />
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
  );
};

export default BrandColorPreview;
