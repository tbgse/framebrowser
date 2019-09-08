import React from "react";
import styled from "styled-components";
import { colors, typography, sizes } from "../styles";
import { Link } from "react-router-dom";

const Container = styled.section`
  height: 188px;
  display: flex;
  align-items: center;
  margin-bottom: ${sizes.gutter * 2}px;
  @media (max-width: 400px) {
    height: 100px;
    margin-bottom: 0;
    margin-top: ${sizes.gutter * 2}px;
  }
`;

const Title = styled.h2`
  color: ${colors.text.darkTone1};
  font-size: ${typography.fontSizes.xl}px;
  line-height: 1.15em;
  position: relative;
  top: 10px;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: ${typography.fontSizes.large}px;
  }
  @media (max-width: 400px) {
    top: -3px;
    font-size: ${typography.fontSizes.medium}px;
  }
`;

const Logo = styled.svg`
  margin-right: 20px;
  margin-left: -10px;
  :hover {
    fill: rgba(0, 0, 0, 0.75);
  }
  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    margin-left: 0;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo
          width="110"
          height="110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.694 12.594l4.58 4.29c-.578 1.032-1.692 2.187-3.673 2.187-.453 0-.866-.082-1.279-.206-1.072-.495-1.774-1.568-1.774-2.723 0-1.361.62-2.393 1.98-3.424l.166-.124zM8.6 8.922a7.376 7.376 0 0 0-.536-.578c-.536-.701-.784-1.32-.784-1.898-.041-.66.206-1.196.66-1.568a2.062 2.062 0 0 1 1.444-.577c1.61 0 2.228 1.237 2.435 2.269l.04.124 2.724-2.228h.041l-.041-.041C13.718 2.238 11.861 1 9.385 1h-.082c-2.6.041-5.281 1.733-5.488 4.951V6.404c0 1.569.99 3.095 1.61 3.88C3.279 11.891 2 13.46 2 16.141c0 1.527.66 3.012 1.733 4.085 1.238 1.237 3.012 1.898 5.075 1.898 2.517 0 4.662-.99 6.065-2.806l2.27 2.145h4.826L8.601 8.922z"
            fillRule="nonzero"
          ></path>
        </Logo>
      </Link>
      <Title>
        Eyewear for every side of you,<br></br> thoughtfully designed in
        Amsterdam.
      </Title>
    </Container>
  );
};
