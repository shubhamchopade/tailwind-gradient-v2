import React from "react";
import "./App.css";
import { BrandColor } from "./components/color/BrandColor";
import TailwindConfig from "./components/common/TailwindConfig";
import GradientsGrid from "./components/gradient/GradientsGrid";
import { ColorStateProvider } from "./store/ColorStateProvider";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <ColorStateProvider>
        <BrandColor />
        <TailwindConfig />
        <GradientsGrid />
      </ColorStateProvider>
    </div>
  );
};

export default App;
