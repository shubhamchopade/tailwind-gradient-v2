import React from "react";
import ColorGrid from "./ColorGrid";
import GetBrandPicker from "./GetBrandPicker";

export const BrandColor: React.FunctionComponent = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <GetBrandPicker />
        <ColorGrid />
      </div>
    </div>
  );
};
