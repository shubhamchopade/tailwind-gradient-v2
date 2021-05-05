import React, { useEffect } from "react";
import { useColorState } from "../../store/ColorStateProvider";
import OverlayCopiedToClipboard from "../common/OverlayCopiedToClipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ColorArrProps {
  id: number | string;
  name?: string;
  hex: string;
  hsl: string;
  lightnessPalette?: Shades[];
}

interface Shades {
  id: number | string;
  number: number;
  hex: string;
  hsl: string;
}

const ColorGrid: React.FunctionComponent = () => {
  const {
    brandColorPaletteArray,
    currentCopiedHex,
    setCurrentCopiedHex,
  } = useColorState();

  const handleCopy = (hex: string) => {
    setCurrentCopiedHex(hex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCopiedHex("");
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentCopiedHex]);

  return (
    <div className="mt-12 sm:mr-32 mr-0 sm:ml-0 ml-16 relative">
      {currentCopiedHex.length > 0 && (
        <OverlayCopiedToClipboard hex={currentCopiedHex} />
      )}
      {brandColorPaletteArray.map((props: ColorArrProps, idx: number) => {
        const { name, lightnessPalette } = props;
        return (
          <div className="flex justify-end items-center relative" key={idx}>
            <p className="absolute -left-20 uppercase font-medium text-xs">
              {name}
            </p>
            {lightnessPalette?.map((shade, index) => (
              <CopyToClipboard text={shade.hex}>
                <button
                  key={index}
                  className="h-6 w-6 sm:h-8 sm:w-8 m-0.5 rounded transition transform hover:scale-105"
                  style={{ background: shade.hex }}
                  onClick={() => handleCopy(shade.hex)}
                />
              </CopyToClipboard>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ColorGrid;
