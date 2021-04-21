import './App.css';
import { ColorPalette } from './components/ColorPalette';
import { GetTailwindConfigFile } from './components/GetTailwindConfigFile';

function App() {
  return (
    <div className="App">
      <GetTailwindConfigFile />
        <ColorPalette />
    </div>
  );
}

export default App;
