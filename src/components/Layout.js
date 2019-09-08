import React from "react";
import styled from "styled-components";
import { sizes } from "../styles";

const Wrapper = styled.main`
  max-width: ${sizes.contentWidth}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
`;

export default ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
