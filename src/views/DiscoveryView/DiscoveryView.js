import React from "react";
import { ListView, ProductCard, Sidebar } from "../../components";
import { connect } from "react-redux";
import { getAllFrames, getScrollPosition } from "../../redux/selectors";
import { sizes } from "../../styles";
import styled from "styled-components";
import posed from "react-pose";

const ContentWrapper = styled.div`
  display: flex;
`;
const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    delay: ({ stagger }) => stagger * 100
  }
};

const AnimatedCard = styled(posed.div(cardAnimation))`
  position: relative;
  min-width: 250px;
  min-height: 250px;
  flex: 1 2;
  flex-grow: 1;
  margin: ${sizes.gutter / 2}px;
  cursor: pointer;
  background: linear-gradient(to right, #f0eae8, #f4eeec);
`;
const SpaceBlock = styled.div`
  height: 0;
  border: none;
  margin-left: ${sizes.gutter}px;
  min-width: 250px;
  flex: 1;
`;
const DiscoveryView = ({ frames, scrollPosition }) => {
  console.log(scrollPosition);
  const CardList = frames
    .filter(frame => {
      // filtering out products that have no variants / images set
      return frame.variants.length > 0;
    })
    .sort(frame =>
      // sorting products with better assets to the front, just for demo purposes
      frame.variants[0].head_male_image &&
      frame.variants[0].head_female_image &&
      frame.description
        ? -1
        : 1
    )
    .map((frame, i) => (
      <AnimatedCard
        style={{ width: "250px" }}
        key={frame.variants[0].id}
        pose="visible"
        initialPose={scrollPosition > 300 ? "visible" : "hidden"}
        stagger={i}
      >
        <ProductCard
          id={frame.id}
          name={frame.name}
          backgroundUrl={frame.variants[0].front_image}
          maleHeadBackgroundUrl={frame.variants[0].head_male_image}
          femaleHeadBackgroundUrl={frame.variants[0].head_female_image}
          colorName={frame.variants[0].color}
          assetsToCache={[
            frame.variants[0].profile_image,
            frame.variants[0].side_image
          ]}
        />
      </AnimatedCard>
    ));
  return (
    <div>
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
  const scrollPosition = getScrollPosition(state);
  return { frames, scrollPosition };
};

export default connect(mapStateToProps)(DiscoveryView);
