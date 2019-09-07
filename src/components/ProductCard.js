import React from "react";
import styled from "styled-components";
import { sizes, typography, colors } from "../styles";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

const generateImageUrl = src => {
  return `https://images.aceandtate.com/image/upload/c_lfill,h_1855,w_2000/c_crop,h_1200,w_960,x_520,y_520/v1/${src}`;
};
const generateHeadImageUrl = (src, width) => {
  return `https://images.aceandtate.com/image/upload/c_lfill,h_550,w_400/c_crop,h_500,w_400/v1/${src}`;
};

const Container = styled.div`
  position: relative;
  min-width: 250px;
  flex: 1 2;
  flex-grow: 1;
  margin: ${sizes.gutter / 2}px;
  cursor: pointer;
  background: linear-gradient(to right, #f0eae8, #f4eeec);
`;

const ContainerInner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${sizes.borderRadius.small}px;
`;
const ImageContent = styled.img`
  width: 100%;
  border-radius: ${sizes.borderRadius.small}px;
`;
const faceAnimation = {
  enter: {
    opacity: 1,
    transition: { duration: 300 }
  },
  exit: { opacity: 0, transition: { duration: 300 } }
};
const FaceOverlay = styled(posed.div(faceAnimation))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity:0;
  background-size: cover;
  border-radius:${sizes.borderRadius.small};
  z-index:0;
  pointer-events:none;
  background-image: url('${props => props.backgroundImage}');
`;
const TextContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  color: ${colors.text.darkTone1};
`;

const ProductName = styled.h4`
  margin: 0;
  font-size: ${typography.fontSizes.large}px;
  font-weight: 500;
  line-height: 1.25em;
`;

const ProductColor = styled.span`
  margin: 0;
  font-weight: 400;
  font-size: ${typography.fontSizes.medium}px;
`;

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHead: 0,
      femaleHeadParsedUrl: props.femaleHeadBackgroundUrl
        ? generateHeadImageUrl(props.femaleHeadBackgroundUrl)
        : "",
      maleHeadParsedUrl: props.femaleHeadBackgroundUrl
        ? generateHeadImageUrl(props.maleHeadBackgroundUrl)
        : ""
    };
    this.showRandomHead = this.showRandomHead.bind(this);
    this.resetHead = this.resetHead.bind(this);
  }
  showRandomHead() {
    // picking a random head to show if both are set, otherwise fall back to one head or not do anything
    if (
      this.props.maleHeadBackgroundUrl &&
      this.props.femaleHeadBackgroundUrl
    ) {
      this.setState({
        activeHead: Math.floor(Math.random() * 2) + 1
      });
    } else if (this.props.maleHeadBackgroundUrl) {
      this.setState({
        activeHead: 1
      });
    } else if (this.props.femaleHeadBackgroundUrl) {
      this.setState({
        activeHead: 2
      });
    }
  }
  resetHead() {
    this.setState({
      activeHead: 0
    });
  }
  render() {
    return (
      <Container
        onMouseEnter={this.showRandomHead}
        onMouseLeave={this.resetHead}
      >
        <ContainerInner>
          <Link to={`/product/${this.props.id}`}>
            <ImageContent src={generateImageUrl(this.props.backgroundUrl)} />
            <PoseGroup>
              {this.state.activeHead === 1 && (
                <FaceOverlay
                  key={`${this.props.id}-face-1`}
                  backgroundImage={this.state.maleHeadParsedUrl}
                ></FaceOverlay>
              )}
              {this.state.activeHead === 2 && (
                <FaceOverlay
                  key={`${this.props.id}-face-2`}
                  backgroundImage={this.state.femaleHeadParsedUrl}
                ></FaceOverlay>
              )}
            </PoseGroup>
            <TextContent>
              <ProductName>{this.props.name}</ProductName>
              <ProductColor>{this.props.colorName}</ProductColor>
            </TextContent>
          </Link>
        </ContainerInner>
      </Container>
    );
  }
}
