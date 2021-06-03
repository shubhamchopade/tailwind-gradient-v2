import React from "react";
import { useColorState } from "../../store/ColorStateProvider";
import { GradientBlock } from "./GradientBlock";

const GradientsGrid: React.FunctionComponent = () => {
  const { brandColorPaletteArray } = useColorState();
  // const [gradientColors, setGradientColors] = useState();
  // const arr = [0, 1, 2, 6, 7, 3, 4, 5];
  const arr1 = [
    { c1: 0, s1: 4, c2: 2, s2: 3 },
    { c1: 4, s1: 4, c2: 1, s2: 7 },
    { c1: 4, s1: 3, c2: 7, s2: 4 },
    { c1: 0, s1: 5, c2: 6, s2: 7 },
    { c1: 2, s1: 3, c2: 3, s2: 7 },
    { c1: 5, s1: 2, c2: 4, s2: 7 },
    { c1: 7, s1: 3, c2: 3, s2: 7 },
    { c1: 4, s1: 4, c2: 0, s2: 1 },
    { c1: 5, s1: 3, c2: 3, s2: 7 },
    { c1: 0, s1: 3, c2: 1, s2: 7 },
    { c1: 6, s1: 2, c2: 6, s2: 7 },
    { c1: 2, s1: 3, c2: 4, s2: 4 },
    { c1: 3, s1: 7, c2: 2, s2: 7 },
    { c1: 0, s1: 1, c2: 4, s2: 6 },
    { c1: 3, s1: 2, c2: 7, s2: 4 },
    { c1: 4, s1: 3, c2: 3, s2: 7 },
    { c1: 1, s1: 4, c2: 5, s2: 7 },
    { c1: 0, s1: 5, c2: 7, s2: 7 },
    { c1: 7, s1: 6, c2: 2, s2: 7 },
    { c1: 5, s1: 3, c2: 2, s2: 7 },
    { c1: 1, s1: 2, c2: 1, s2: 8 },
    { c1: 0, s1: 3, c2: 3, s2: 5 },
    { c1: 3, s1: 1, c2: 6, s2: 7 },
  ];
  return (
    <>
      <p className="txt">Tailwind Gradients based on the above color palette</p>
      <input type="switch"></input>
      <div className="flex justify-evenly flex-wrap gap-8">
        {brandColorPaletteArray &&
          arr1.map((a, i) => {
            return (
              <main className="relative group">
                <section className="flex justify-around">
                  <div
                    className="h-6 w-6 absolute -top-5 left-3 rounded-md transition-transform transform scale-0 group-hover:scale-100"
                    style={{
                      background:
                        brandColorPaletteArray[a.c1] &&
                        brandColorPaletteArray[a.c1].lightnessPalette[a.s1].hex,
                    }}
                  />
                  <div
                    className="h-6 w-6 absolute -top-5 left-11 rounded-md transition-transform transform scale-0 group-hover:scale-100"
                    style={{
                      background:
                        brandColorPaletteArray[a.c2] &&
                        brandColorPaletteArray[a.c2].lightnessPalette[a.s2].hex,
                    }}
                  />
                </section>

                <GradientBlock
                  key={i}
                  color={`linear-gradient(to right, ${
                    brandColorPaletteArray[a.c1] &&
                    brandColorPaletteArray[a.c1].lightnessPalette[a.s1].hex
                  }, ${
                    brandColorPaletteArray[a.c2] &&
                    brandColorPaletteArray[a.c2].lightnessPalette[a.s2].hex
                  })`}
                />
              </main>
            );
          })}
      </div>
    </>
  );
};

export default GradientsGrid;
