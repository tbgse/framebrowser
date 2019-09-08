import React from "react";
import styled from "styled-components";
import { typography, sizes } from "../styles";
import { Checkbox } from "../components";
import { connect } from "react-redux";
import { getAllFilters } from "../redux/selectors";
import { setFilter } from "../redux/actions";
import PropTypes from "prop-types";

const Container = styled.aside`
  min-width: 20%;
  margin-right: 20px;
  white-space: nowrap;
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
const Sidebar = ({ filters, setFilter }) => {
  const toggleFilter = key => {
    setFilter({
      key,
      value: !filters[key]
    });
  };
  return (
    <Container>
      <FilterSection>
        <FilterCategory>material</FilterCategory>
        <Checkbox
          label="acetate"
          checked={filters.acetate}
          onChange={() => toggleFilter("acetate")}
        ></Checkbox>
        <Checkbox
          label="bio acetate"
          checked={filters.bio_acetate}
          onChange={() => toggleFilter("bio_acetate")}
        ></Checkbox>
        <Checkbox
          label="metal"
          checked={filters.metal}
          onChange={() => toggleFilter("metal")}
        ></Checkbox>
        <Checkbox
          label="combi"
          checked={filters.combi}
          onChange={() => toggleFilter("combi")}
        ></Checkbox>
        <Checkbox
          label="titanium"
          checked={filters.titanium}
          onChange={() => toggleFilter("titanium")}
        ></Checkbox>
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

Sidebar.propTypes = {
  filters: PropTypes.array,
  setFilter: PropTypes.func
};
const mapStateToProps = state => {
  const filters = getAllFilters(state);
  return { filters };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(Sidebar);
