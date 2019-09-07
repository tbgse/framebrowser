import React from "react";
import { connect } from "react-redux";
import { getAllFrames } from "../redux/selectors";

const Discovery = ({ frames }) => {
  return <div>Hello i am a product</div>;
};

const mapStateToProps = state => {
  const frames = getAllFrames(state);
  return { frames };
};

export default connect(mapStateToProps)(Discovery);
