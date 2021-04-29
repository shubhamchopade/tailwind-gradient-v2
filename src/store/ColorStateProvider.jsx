import React, { useContext, useState } from "react";

// @flow

const ColorStateContext = React.createContext(null);

export const useColorState = () => {
  const state = useContext(ColorStateContext);

  if (!state) {
    throw new Error("useAppState must be used within ColorStateProvider");
  }

  return state;
};

export const ColorStateProvider = ({ children }) => {
  const [brandColor, setBrandColor] = useState("#095216");
  const [showColorName, setShowColorName] = useState(false);
  const [brandColorPaletteArray, setBrandColorPaletteArray] = useState([]);

  const providerValue = {
    brandColor,
    setBrandColor,
    showColorName,
    setShowColorName,
    brandColorPaletteArray,
    setBrandColorPaletteArray,
  };

  return (
    <ColorStateContext.Provider value={providerValue}>
      {children}
    </ColorStateContext.Provider>
  );
};
