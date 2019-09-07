import React from "react";
import styled from "styled-components";
import { sizes } from "../styles";

export default ({ children }) => {
  const Wrapper = styled.main`
    max-width: ${sizes.contentWidth}px;
    margin-left: auto;
    margin-right: auto;
  `;
  return <Wrapper>{children}</Wrapper>;
};
