import React from "react";
import styled from "styled-components";



const TextWrapper = styled.div`
  padding: 40px 30px 30px;
  z-index: 10;

  @media (min-width: ${768}px) {
    padding: 00px 0 30px;
  }
`;

const TopText = ({ bigText, smallText }) => {
  return (
    <TextWrapper>
    </TextWrapper>
  );
};

export default TopText;
