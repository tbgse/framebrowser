import React from "react";
import styled from "styled-components";
import { sizes } from "../../../styles";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-flow: Column;
  flex-grow: 1;
  margin-right: ${sizes.gutter * 2}px;
  max-width: ${props => (props.width ? props.width + "px" : "auto")};
  img {
    margin-bottom: ${sizes.gutter * 2}px;
  }
`;

export const ProductGallery = ({ images, height, width }) => {
  return (
    <Wrapper width={width}>
      {images.map((img, index) => (
        <img
          src={img}
          alt=""
          key={index}
          style={{
            height: height ? height : "auto",
            objectFit: "cover",
            objectPosition: "bottom",
            width: "100%"
          }}
        />
      ))}
    </Wrapper>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number
};
