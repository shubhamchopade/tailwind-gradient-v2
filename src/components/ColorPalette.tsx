import React from "react";
import styled from "styled-components";
import useRandom from "../hooks/useRandom";
import { colors } from "../data/colors";

export const ColorPalette = () => {
  const hsla = useRandom();
  const { hue, saturation, lightness, alpha } = hsla;
  console.log(hue, saturation, lightness, alpha);

  return (
    <div className="flex">
      {colors.map((color) => (
        <ColorBall color={color[400]} />
      ))}
    </div>
  );
};

const ColorBall = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : "#aaa")};
`;
