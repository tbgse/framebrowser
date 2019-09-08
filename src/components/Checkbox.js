import React from "react";
import styled from "styled-components";
import { typography, sizes } from "../styles";

// a lot of this is pretty much copied from the official page, so not really integrated into the shared stylesheets
const Checkbox = styled.input`
  position: relative;
  background-color: initial;
  cursor: default;
  -webkit-appearance: checkbox;
  box-sizing: border-box;
  margin-left: 2px;
  margin-top: 0;
  padding: 0;
  border: initial;
  :hover:before {
    color: rgb(15, 45, 140);
    background: rgb(255, 255, 255);
    border-color: rgb(223, 225, 240);
  }
  :active:before {
    color: rgb(15, 45, 140);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px inset,
      rgba(0, 0, 0, 0.2) 0px 1px 4px inset;
    border-color: rgb(223, 225, 240);
  }
  :checked:before {
    border-width: 2px;
    border-style: solid;
    border-color: rgb(15, 45, 140);
    border-image: initial;
  }
  :checked:after {
    border-color: rgb(15, 45, 140);
  }
  :focus:before {
    color: rgb(38, 38, 38);
    box-shadow: rgba(1, 28, 115, 0.15) 0px 1px 1px,
      rgb(159, 169, 207) 0px 0px 0px 2px;
    background: rgb(255, 255, 255);
  }
  :before {
    content: "";
    display: block;
    position: absolute;
    left: -2px;
    top: -2px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    color: rgb(38, 38, 38);
    box-shadow: rgba(1, 28, 115, 0.15) 0px 1px 1px;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(189, 195, 222);
    border-image: initial;
  }
  :after {
    content: "";
    display: block;
    position: absolute;
    left: 3px;
    top: 3px;
    width: 8px;
    height: 5px;
    transform: rotate(-50deg);
    border-radius: 0px;
    border-left: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  font-size: ${typography.fontSizes.large}px;
  margin-left: ${sizes.gutter * 1.5}px;
  line-height: 32px;
`;
export default ({ label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
      ></Checkbox>
      <Label>{label}</Label>
    </CheckboxContainer>
  );
};
