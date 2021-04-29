import styled from "styled-components";
import React, { forwardRef } from "react";

type ContainerType = {
  color?: any; ///Passing Optional Props
};

const GradientBlock = (color: any) => {
  return <StyledGradientBlock color={color} />;
};

const StyledGradientBlock = styled.div<ContainerType>`
  width: 15rem;
  height: 8rem;
  border-radius: 1rem;
  margin: 0.7rem;
  background: ${(props): any =>
    props.color.color ? props.color.color : "#000"};
`;

export { GradientBlock };
