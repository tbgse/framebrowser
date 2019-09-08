import React from "react";
import styled from "styled-components";
import { sizes } from "../../../styles";

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
export default ({ images, height, width }) => {
  return (
    <Wrapper width={width}>
      {images.map(img => (
        <img
          src={img}
          alt=""
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
