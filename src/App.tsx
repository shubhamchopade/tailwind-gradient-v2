import "./App.css";
import BrandColorPalette from "./components/BrandColorPalette";
import { GetBrandColor } from "./components/GetBrandColor";

function App() {
  return (
    <div className="App">
      <div className="flex justify-around items-center">
        <GetBrandColor />
        <BrandColorPalette />
      </div>
    </div>
  );
}

export default App;
