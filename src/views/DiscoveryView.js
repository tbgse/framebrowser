import React from "react";
import { ListView, ProductCard, Header } from "../components";
import { connect } from "react-redux";
import { getAllFrames } from "../redux/selectors";
const Discovery = ({ frames }) => {
  const CardList = frames
    .filter(frame => {
      // filtering out products that have no variants / images set
      return frame.variants.length > 0;
    })
    .map(frame => (
      <ProductCard
        key={frame.variants[0].id}
        id={frame.variants[0].id}
        name={frame.name}
        backgroundUrl={frame.variants[0].front_image}
        colorName={frame.variants[0].color}
      />
    ));
  return (
    <div>
      <Header />
      <ListView>{CardList}</ListView>
    </div>
  );
};

const mapStateToProps = state => {
  const frames = getAllFrames(state);
  return { frames };
};

export default connect(mapStateToProps)(Discovery);
