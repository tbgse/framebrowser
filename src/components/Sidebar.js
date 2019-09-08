import React from "react";
import styled from "styled-components";
import { typography, sizes } from "../styles";
import { Checkbox } from "../components";
import { connect } from "react-redux";
import { getAllFilters } from "../redux/selectors";
import { setFilter } from "../redux/actions";
import PropTypes from "prop-types";
import { Button } from "./Button";
const Container = styled.aside`
  min-width: 20%;
  margin-right: 20px;
  white-space: nowrap;
  @media (max-width: 800px) {
    display: none;
  }
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
  const showFilterWarning = () => {
    alert("Only the material filters are implemented");
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
        <Checkbox label="round" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="square" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="rectangle" onChange={showFilterWarning}></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>width</FilterCategory>
        <Checkbox label="narrow" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="medium" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="wide" onChange={showFilterWarning}></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>colour</FilterCategory>
        <Checkbox label="coloured" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="light" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="dark" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="transparent" onChange={showFilterWarning}></Checkbox>
      </FilterSection>
      <FilterSection>
        <FilterCategory>price from</FilterCategory>
        <Checkbox label="€98" onChange={showFilterWarning}></Checkbox>
        <Checkbox label="€148" onChange={showFilterWarning}></Checkbox>
      </FilterSection>
    </Container>
  );
};

Sidebar.propTypes = {
  filters: PropTypes.object,
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
