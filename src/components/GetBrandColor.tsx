import styled from "styled-components";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useColorState } from "../store/ColorStateProvider";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import ColorName from "./ColorName";

const GetBrandColor = () => {
  const {
    brandColor,
    setBrandColor,
    showColorName,
    setShowColorName,
    brandColorPaletteArray,
  } = useColorState();
  const [localBrandColor, setLocalBrandColor] = useState("#212121");
  const [value] = useDebounce(localBrandColor, 200);

  useEffect(() => {
    setBrandColor(value);
  }, [brandColor, localBrandColor, value]);

  const handleBrandColor = (color: any) => {
    setLocalBrandColor(color);
  };

  console.log(brandColorPaletteArray);

  useEffect(() => {
    setShowColorName(false);
  }, [localBrandColor]);

  return (
    <div className="flex flex-col justify-center font-noto-sans">
      <p className="text-gray-500 my-8 text-2xl">
        Choose a brand color to get started
      </p>
      <div className="flex">
        <div>
          <ColorCircle className="group" color={brandColor}>
            <p className="text-xs uppercase text-left bg-gray-600 text-white p-1 rounded-md shadow group-hover:bg-gray-700">
              {showColorName ? (
                <ColorName value={value} />
              ) : (
                <button
                  className="outline-none shadow focus:shadow-md"
                  onClick={() => setShowColorName(!showColorName)}
                >
                  Get Name
                </button>
              )}
            </p>
          </ColorCircle>
        </div>

        <div className="ml-6">
          <HexColorPicker
            className="grab"
            color={brandColor}
            onChange={handleBrandColor}
          />

          <HexColorInput
            className="border border-indigo-600 rounded p-2 my-2 outline-none focus:ring"
            color={brandColor}
            onChange={handleBrandColor}
          />
        </div>
      </div>
    </div>
  );
};

export default GetBrandColor;

const ColorCircle = styled.div.attrs((props) => ({
  style: {
    background: props.color || "#2a2a2a",
  },
}))`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease;
`;
