import React from "react";
import styled from "styled-components";
import { typography, sizes } from "../../../styles";
import { Button } from "../../../components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-left: ${sizes.gutter * 4}px;
  min-width: 260px;
  display: flex;
  flex-flow: column;
  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
    margin-top: ${sizes.gutter * 2}px;
  }
`;
const ModelName = styled.h2`
  margin: 0;
  font-size: ${typography.fontSizes.xxl}px;
  font-weight: 500;
  white-space: nowrap;
  @media (max-width: 600px) {
    white-space: pre-line;
    line-height: 1;
    font-size: ${typography.fontSizes.xl}px;
    margin-bottom: ${sizes.gutter}px;
  }
`;
const ModelStyle = styled.span`
  font-size: ${typography.fontSizes.xl}px;
  line-height: 1;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: ${typography.fontSizes.large}px;
  }
`;
const OrderInfo = styled.span`
  font-size: ${typography.fontSizes.small}px;
  line-height: 1.2;
  margin-top: ${sizes.gutter}px;
  font-weight: 500;
`;
const ModelDescription = styled.span`
  font-size: ${typography.fontSizes.large}px;
  max-width: 360px;
  line-height: 1.5;
  margin-top: ${sizes.gutter * 2}px;
  margin-bottom: ${sizes.gutter * 4}px;
  font-weight: 300;
`;

export const ProductDetails = ({ name, variant, description }) => {
  return (
    <Wrapper>
      <ModelName>{name}</ModelName>
      <ModelStyle>{variant}</ModelStyle>
      <ModelDescription>{description}</ModelDescription>
      <Button variant="cta">Add to cart</Button>
      <OrderInfo>
        Free shipping to Netherlands<br></br> 30 days return policy
      </OrderInfo>
    </Wrapper>
  );
};

ProductDetails.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
  description: PropTypes.string
};
