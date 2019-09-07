import React from "react";
import { ListView, ProductCard, Header, Sidebar } from "../components";
import { connect } from "react-redux";
import { getAllFrames } from "../redux/selectors";
import { sizes } from "../styles";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
`;
const SpaceBlock = styled.div`
  height: 0;
  border: none;
  margin-left: ${sizes.gutter}px;
  min-width: 250px;
  flex: 1;
`;
const Discovery = ({ frames }) => {
  const CardList = frames
    .filter(frame => {
      // filtering out products that have no variants / images set
      return frame.variants.length > 0;
    })
    .sort(frame =>
      // sorting products with better assets to the front, just for demo purposes
      frame.variants[0].head_male_image && frame.variants[0].head_female_image
        ? -1
        : 1
    )
    .map(frame => (
      <ProductCard
        key={frame.variants[0].id}
        id={frame.variants[0].id}
        name={frame.name}
        backgroundUrl={frame.variants[0].front_image}
        maleHeadBackgroundUrl={frame.variants[0].head_male_image}
        femaleHeadBackgroundUrl={frame.variants[0].head_female_image}
        colorName={frame.variants[0].color}
      />
    ));
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Sidebar></Sidebar>
        <ListView>
          {CardList}
          <SpaceBlock />
          <SpaceBlock />
        </ListView>
      </ContentWrapper>
    </div>
  );
};

const mapStateToProps = state => {
  const frames = getAllFrames(state);
  return { frames };
};

export default connect(mapStateToProps)(Discovery);
