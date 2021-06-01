import React from "react";
import styled from "styled-components";

type ContainerType = {
  color: string; ///Passing Optional Props
  children?: React.ReactNode;
};

const GradientBlock: React.FC<ContainerType> = ({ color, children }) => {
  return (
    <div>
      {children}
      <StyledGradientBlock color={color} />
    </div>
  );
};

const StyledGradientBlock = styled.div<ContainerType>`
  width: 15rem;
  height: 8rem;
  border-radius: 1rem;
  margin: 0.7rem;
  background: ${(props): any => (props.color ? props.color : "#000")};
`;

export { GradientBlock };
