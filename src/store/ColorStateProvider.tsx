import React, { useContext, useState } from "react";

// @flow

interface ProviderProps {
  brandColor: string | undefined;
  setBrandColor: React.Dispatch<React.SetStateAction<string>>;
  showColorName: boolean;
  setShowColorName: React.Dispatch<React.SetStateAction<boolean>>;
  brandColorPaletteArray: {}[];
  setBrandColorPaletteArray: Function;
  getConfigFile: boolean;
  setGetConfigFile: React.Dispatch<React.SetStateAction<boolean>>;
  currentCopiedHex: string;
  setCurrentCopiedHex: React.Dispatch<React.SetStateAction<string>>;
}

// interface ColorArrProps {
//   id: number | string;
//   name: string;
//   hex: string;
//   hsl: string;
//   shades: Shades;
// }

// interface Shades {
//   id: number | string;
//   number: number;
//   hex: string;
//   hsl: string;
// }

const ColorStateContext = React.createContext({} as ProviderProps);

export const useColorState: Function = () => {
  const state = useContext(ColorStateContext);

  if (!state) {
    throw new Error("useAppState must be used within ColorStateProvider");
  }

  return state;
};

export const ColorStateProvider: React.FC = ({ children }) => {
  const [brandColor, setBrandColor] = useState("#095216");
  const [showColorName, setShowColorName] = useState(false);
  const [getConfigFile, setGetConfigFile] = useState(false);
  const [brandColorPaletteArray, setBrandColorPaletteArray] = useState([]);
  const [currentCopiedHex, setCurrentCopiedHex] = useState("");

  const providerValue: ProviderProps = {
    brandColor,
    setBrandColor,
    showColorName,
    setShowColorName,
    brandColorPaletteArray,
    setBrandColorPaletteArray,
    getConfigFile,
    setGetConfigFile,
    currentCopiedHex,
    setCurrentCopiedHex,
  };

  return (
    <ColorStateContext.Provider value={providerValue}>
      {children}
    </ColorStateContext.Provider>
  );
};
