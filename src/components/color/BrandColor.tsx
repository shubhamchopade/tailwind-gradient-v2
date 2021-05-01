import React, { useEffect } from "react";
import { useColorState } from "../../store/ColorStateProvider";

export const BrandColor: React.FunctionComponent = () => {
  const {
    brandColor,
    brandColorPaletteArray,
    setBrandColorPaletteArray,
  } = useColorState();

  const data = {
    id: 2,
    name: "Magenta",
    hex: "#225599",
    hsl: "hsl(230deg, 80%, 20%)",
    shades: [
      {
        id: "25s",
        name: "",
        hex: "string",
        hsl: "string",
      },
    ],
  };

  useEffect(() => {
    setBrandColorPaletteArray(data);
  }, []);

  console.log(brandColorPaletteArray);
  console.log(brandColorPaletteArray);
  console.log(brandColorPaletteArray);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <p>{brandColor}</p>
      </div>
    </div>
  );
};
