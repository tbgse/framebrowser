import React from "react";
import styled from "styled-components";
import { colors, sizes, typography } from "../styles";
import PropTypes from "prop-types";

const ButtonElm = styled.button`
  height: 50px;
  white-space: nowrap;
  border-radius: ${sizes.borderRadius.small}px;
  border: ${props => (props.variant === "outline" ? "2px solid #000" : "none")}
  font-weight: 500;
  font-size: ${typography.fontSizes.medium}px;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: ${sizes.gutter * 2}px;
  padding-right: ${sizes.gutter * 2}px;
  background: ${props =>
    props.variant === "primary"
      ? colors.background.primaryTone1
      : props.variant === "cta"
      ? colors.background.ctaTone1
      : props.variant === "outline"
      ? "transparent"
      : "#ccc"};
`;

export const Button = ({ children, variant }) => {
  return <ButtonElm variant={variant}>{children}</ButtonElm>;
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["cta", "primary", "outline"])
};
