import { useState } from "react";
import useBrandColorName from "../hooks/useBrandColorName";
import styled from "styled-components";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const GetBrandColor = () => {
  const [brandColor, setBrandColor] = useState("#22ff00");
  const brandColorName = useBrandColorName(brandColor);

  const handleBrandColor = (color: any) => {
    setBrandColor(color);
  };

  return (
    <div className="flex flex-col justify-center font-noto-sans">
      <p className="text-gray-500 my-8 text-center">
        Choose a brand color to get started
      </p>
      <div className="flex">
        <div>
          <ColorCircle color={brandColor}>
            <p className="text-left">{brandColorName}</p>
          </ColorCircle>
        </div>
        <div>
          <HexColorPicker color={brandColor} onChange={handleBrandColor} />
          <HexColorInput
            className="border rounded p-2 my-2 outline-none focus:ring"
            color={brandColor}
            onChange={handleBrandColor}
          />
        </div>
      </div>
    </div>
  );
};

const ColorSquare = styled.div.attrs((props) => ({
  style: {
    background: props.color || "#2a2a2a",
  },
}))`
  transition: background 0.5s ease;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10%;
  margin-right: 1rem;
`;
const ColorCircle = styled(ColorSquare)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
