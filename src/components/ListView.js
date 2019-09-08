import React from "react";
import styled from "styled-components";
import { sizes } from "../styles";
import PropTypes from "prop-types";

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  margin-left: -${sizes.gutter / 2}px;
`;

export const ListView = ({ children }) => {
  return <List>{children}</List>;
};

ListView.propTypes = {
  children: PropTypes.node
};
