import React from "react";
import styled from "styled-components";
import { sizes } from "../styles";

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -${sizes.gutter / 2}px;
`;

export default ({ children }) => {
  return <List>{children}</List>;
};
