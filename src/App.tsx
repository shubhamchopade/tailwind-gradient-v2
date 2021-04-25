import "./App.css";
import { BrandColor } from "./components/BrandColor";
import { ColorStateProvider } from "./store/ColorStateProvider";

function App() {
  return (
    <div className="App">
      <ColorStateProvider>
        <BrandColor />
      </ColorStateProvider>
    </div>
  );
}

export default App;
