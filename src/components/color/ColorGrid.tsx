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
    showColorName,
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

  const getColorShadeNumbers = (count: number) => {
    const by = count;
    const initial = count === 100 ? 50 : 0.5;
    const arr = [];
    arr[0] = initial;
    for (let i = 1; i <= 9; i++) {
      arr.push(count);
      count += by;
    }
    return arr;
  };

  const shadeNumbers = getColorShadeNumbers(100);

  return (
    <div className="mt-12 sm:mr-32 mr-0 sm:ml-0 ml-16 relative">
      {currentCopiedHex.length > 0 && (
        <OverlayCopiedToClipboard hex={currentCopiedHex} />
      )}
      {showColorName &&
        shadeNumbers.map((shade, index) => (
          <p key={index} className="pl-4 text-xs inline-block">
            {shade}
          </p>
        ))}
      {brandColorPaletteArray.map((props: ColorArrProps, idx: number) => {
        const { name, lightnessPalette } = props;
        return (
          <div className="flex justify-end items-center relative" key={idx}>
            <p className="absolute -left-20 uppercase font-medium text-xs">
              {name}
            </p>
            {lightnessPalette?.map((shade, index) => (
              <CopyToClipboard text={shade.hex} key={index}>
                <button
                  className="h-6 w-6 sm:h-8 sm:w-8 m-0.5 rounded transition outline-none focus:ring-1 btn-color"
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
