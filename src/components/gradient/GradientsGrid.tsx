import React from "react";
import { GradientBlock } from "./GradientBlock";

const GradientsGrid: React.FunctionComponent = () => {
  return (
    <>
      <p className="txt">Tailwind Gradients based on the above color palette</p>
      <input type="switch"></input>
      <div className="flex justify-evenly flex-wrap gap-8">
        <GradientBlock color="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" />
        <GradientBlock color="linear-gradient(to right, #eb5757, #000000)" />
        <GradientBlock color="linear-gradient(to right, #eb5757, #000000)" />
        <GradientBlock color="linear-gradient(to right, #eb5757, #000000)" />
        <GradientBlock color="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" />
        <GradientBlock color="linear-gradient(to right, #eb5757, #000000)" />
        <GradientBlock color="linear-gradient(to right, #eb5757, #000000)" />
        <GradientBlock color="linear-gradient(to right, #eb5757, #000000)" />
      </div>
    </>
  );
};

export default GradientsGrid;
