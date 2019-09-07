import React from "react";
import styled from "styled-components";
import { sizes, typography } from "../styles";
import { Link } from "react-router-dom";

const generateImageUrl = (src, width) => {
  return `https://images.aceandtate.com/image/upload/c_lfill,h_1855,w_2000/c_crop,h_1200,w_960,x_520,y_520/v1/${src}`;
};

export default ({ name, backgroundUrl, colorName, id }) => {
  const Container = styled.div`
    position: relative;
    width: 250px;
    flex-grow: 1;
    margin: ${sizes.gutter / 2}px;
    cursor: pointer;
  `;

  const ImageContent = styled.img`
    width: 100%;
    border-radius: ${sizes.borderRadius.small}px;
  `;
  const TextContent = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    padding: 20px;
    box-sizing: border-box;
  `;

  const ProductName = styled.h4`
    margin: 0;
    font-size: ${typography.fontSizes.large}px;
    font-weight: 500;
    line-height: 1.25em;
    color: #000;
  `;

  const ProductColor = styled.span`
    margin: 0;
    color: #000;
    font-weight: 400;
    font-size: ${typography.fontSizes.medium}px;
  `;
  return (
    <Container>
      <Link to={`/product/${id}`}>
        <ImageContent src={generateImageUrl(backgroundUrl, 400)} />
        <TextContent>
          <ProductName>{name}</ProductName>
          <ProductColor>{colorName}</ProductColor>
        </TextContent>
      </Link>
    </Container>
  );
};
