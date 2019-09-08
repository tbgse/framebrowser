import React from "react";
import { connect } from "react-redux";
import { getFrameById } from "../../redux/selectors";
import styled from "styled-components";
import { ProductGallery, ProductDetails } from "./components";
import posed from "react-pose";
import { setScrollPosition } from "../../redux/actions";

const galleryFade = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const contentFade = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    delay: 100,
    opacity: 1,
    x: 0
  }
};
const Container = styled.div`
  display: flex;
`;
const SlideUpWrapper = styled(posed.div(galleryFade))`
  display: flex;
`;
const SlideLeftWrapper = styled(posed.div(contentFade))`
  display: flex;
`;
const generateHeadImageUrl = (src, width) => {
  return `https://images.aceandtate.com/image/upload/c_lfill,h_550,w_400/c_crop,h_500,w_400/v1/${src}`;
};
const generateFrameImageUrl = (src, width) => {
  return `https://images.aceandtate.com/image/upload/c_lfill,h_800,w_450/c_crop,h_500,w_460,y_260/v1/${src}`;
};
class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: 0
    };
  }
  render() {
    const { frame } = this.props;
    if (frame) {
      const activeVariant = frame.variants[this.state.selectedVariant];
      return (
        <Container>
          <SlideUpWrapper pose="visible" initialPose="hidden">
            <ProductGallery
              images={[
                generateHeadImageUrl(activeVariant.head_female_image),
                generateHeadImageUrl(activeVariant.head_male_image)
              ]}
            />
            <ProductGallery
              height={400}
              width={450}
              images={[
                generateFrameImageUrl(activeVariant.front_image),
                generateFrameImageUrl(activeVariant.profile_image),
                generateFrameImageUrl(activeVariant.side_image)
              ]}
            />
          </SlideUpWrapper>
          <SlideLeftWrapper pose="visible" initialPose="hidden">
            <ProductDetails
              name={frame.name}
              variant={activeVariant.color}
              description={frame.description || frame.master.description}
            />
          </SlideLeftWrapper>
        </Container>
      );
    } else {
      return <div>No Product found</div>;
    }
  }
  componentDidMount() {
    this.props.setScrollPosition(window.scrollY);
    window.scroll(0, 0);
  }
}

const mapStateToProps = (state, ownProps) => {
  const frameId = parseInt(ownProps.match.params.productId);
  const frame = getFrameById(state, frameId);
  return { frame };
};

export default connect(
  mapStateToProps,
  { setScrollPosition }
)(ProductView);
