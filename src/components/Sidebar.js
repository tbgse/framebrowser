import React from "react";
import styled from "styled-components";
import { typography, sizes } from "../styles";
import { Checkbox } from "../components";

const Container = styled.aside`
  min-width: 20%;
`;

const FilterCategory = styled.h4`
  margin-top: 0;
  font-size: ${typography.fontSizes.large}px;
  font-weight: 500;
  margin-bottom: ${sizes.gutter}px;
`;
const FilterSection = styled.div`
  margin-bottom: ${sizes.gutter * 2}px;
`;
export default () => {
  return (
    <Container>
      <FilterSection>
        <FilterCategory>material</FilterCategory>
        <Checkbox label="acetate"></Checkbox>
        <Checkbox label="bio acetate"></Checkbox>
        <Checkbox label="metal"></Checkbox>
        <Checkbox label="combi"></Checkbox>
        <Checkbox label="titanium"></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>shape</FilterCategory>
        <Checkbox label="round"></Checkbox>
        <Checkbox label="square"></Checkbox>
        <Checkbox label="rectangle"></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>width</FilterCategory>
        <Checkbox label="narrow"></Checkbox>
        <Checkbox label="medium"></Checkbox>
        <Checkbox label="wide"></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>colour</FilterCategory>
        <Checkbox label="coloured"></Checkbox>
        <Checkbox label="light"></Checkbox>
        <Checkbox label="dark"></Checkbox>
        <Checkbox label="transparent"></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>price from</FilterCategory>
        <Checkbox label="€98"></Checkbox>
        <Checkbox label="€148"></Checkbox>
      </FilterSection>
    </Container>
  );
};
