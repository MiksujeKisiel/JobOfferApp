import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding-left: 1px;
`;
const BigText = styled.p`
  margin: 35px 0 10px;
  font-weight: 300;
  font-size: 38px;
  color: white;
`;

const TextWrapper = styled.div`
  margin-bottom: 100px;
  z-index: 10;
`;

const TopText = ({ bigText, smallText }) => {
  return (
    <TextWrapper>
      <BigText>{bigText}</BigText>
      <Text>{smallText}</Text>
    </TextWrapper>
  );
};

export default TopText;
