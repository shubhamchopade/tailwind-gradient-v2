import "./App.css";
import { BrandColor } from "./components/BrandColor";
import GradientsGrid from "./components/gradient/GradientsGrid";
import { ColorStateProvider } from "./store/ColorStateProvider";

function App() {
  return (
    <div className="App">
      <ColorStateProvider>
        <BrandColor />
        <GradientsGrid />
      </ColorStateProvider>
    </div>
  );
}

export default App;
