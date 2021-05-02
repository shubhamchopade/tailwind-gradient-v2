import React from "react";
import { useColorState } from "../../store/ColorStateProvider";

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
  const { brandColorPaletteArray } = useColorState();
  // console.log(brandColorPaletteArray);
  return (
    <div className="mt-12 sm:ml-0 ml-16">
      {brandColorPaletteArray.map((props: ColorArrProps, idx: number) => {
        const { name, lightnessPalette } = props;
        return (
          <div className="flex justify-end items-center relative" key={idx}>
            <p className="absolute -left-20 uppercase font-medium text-xs">
              {name}
            </p>
            {lightnessPalette?.map((shade, index) => (
              <div
                key={index}
                className="h-6 w-6 sm:h-8 sm:w-8 m-0.5 rounded transition transform hover:scale-105"
                style={{ background: shade.hex }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ColorGrid;
