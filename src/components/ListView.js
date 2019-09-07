import React from "react";
import styled from "styled-components";
import { sizes } from "../styles";

export default ({ children }) => {
  const List = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: -${sizes.gutter / 2}px;
  `;
  return <List>{children}</List>;
};
