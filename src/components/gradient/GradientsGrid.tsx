import React from "react";
import { useColorState } from "../../store/ColorStateProvider";
import { GradientBlock } from "./GradientBlock";

const GradientsGrid: React.FunctionComponent = () => {
  const { brandColorPaletteArray } = useColorState();
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <p className="txt">Tailwind Gradients based on the above color palette</p>
      <input type="switch"></input>
      <div className="flex justify-evenly flex-wrap gap-8">
        {brandColorPaletteArray &&
          arr.map((a) => {
            return (
              <GradientBlock
                color={`linear-gradient(to left, ${
                  brandColorPaletteArray[a] &&
                  brandColorPaletteArray[a].lightnessPalette[3].hex
                }, ${
                  brandColorPaletteArray[a + 1] &&
                  brandColorPaletteArray[a + 1].lightnessPalette[5].hex
                })`}
              />
            );
          })}
      </div>
    </>
  );
};

export default GradientsGrid;
