import React from "react";
import styled from "styled-components";
import { colors, sizes, typography } from "../styles";

const Button = styled.button`
  height: 50px;
  white-space: nowrap;
  border-radius: ${sizes.borderRadius.small}px;
  border: none;
  font-weight: 500;
  font-size: ${typography.fontSizes.medium}px;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: ${sizes.gutter * 2}px;
  padding-right: ${sizes.gutter * 2}px;
  background: ${props =>
    props.variant === "cta" ? colors.background.ctaTone1 : "yellow"};
`;

export default ({ children, variant }) => {
  return <Button variant={variant}>{children}</Button>;
};
