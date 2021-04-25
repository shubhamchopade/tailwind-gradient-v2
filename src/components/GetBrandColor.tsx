import useBrandColorName from "../hooks/useBrandColorName";
import styled from "styled-components";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useColorState } from "../store/ColorStateProvider";

const GetBrandColor = () => {
  const { brandColor, setBrandColor } = useColorState();
  const brandColorName = useBrandColorName(brandColor, 10);

  const handleBrandColor = (color: any) => {
    setBrandColor(color);
  };

  return (
    <div className="flex flex-col justify-center font-noto-sans">
      <p className="text-gray-500 my-8 text-2xl">
        Choose a brand color to get started
      </p>
      <div className="flex">
        <div>
          <ColorCircle className="group" color={brandColor}>
            <p className="text-xs uppercase text-left bg-gray-600 text-white p-1 rounded-md shadow group-hover:bg-gray-700">
              {brandColorName}
            </p>
          </ColorCircle>
        </div>
        <div className="ml-6">
          <HexColorPicker color={brandColor} onChange={handleBrandColor} />
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
`;
