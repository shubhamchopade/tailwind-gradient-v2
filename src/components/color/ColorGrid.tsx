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
  console.log(brandColorPaletteArray);
  return (
    <div>
      {brandColorPaletteArray.map((props: ColorArrProps, idx: number) => {
        const { name, lightnessPalette } = props;
        return (
          <div className="flex justify-start relative" key={idx}>
            <p className="absolute -left-20">{name}</p>
            {lightnessPalette?.map((shade, index) => (
              <section className="flex justify-start" key={index}>
                <div className="h-8 w-8" style={{ background: shade.hex }} />
              </section>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ColorGrid;
