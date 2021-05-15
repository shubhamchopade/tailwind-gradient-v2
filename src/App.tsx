import React from "react";
import "./App.css";
import { BrandColor } from "./components/color/BrandColor";
// import GradientsGrid from "./components/gradient/GradientsGrid";
import Supabase from "./components/supabase/Supabase";
import { ColorStateProvider } from "./store/ColorStateProvider";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <ColorStateProvider>
        <BrandColor />
        {/* <GradientsGrid /> */}
        <Supabase />
      </ColorStateProvider>
    </div>
  );
};

export default App;
