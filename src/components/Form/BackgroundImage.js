import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
const Wrapper = styled.div`
  display: none;
  @media (min-width: ${1024}px) {
    display: flex;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    flex-direction: column;
    position: relative;
    justify-content: center;
    width: calc(100% - 400px);
    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(22, 22, 22, 0.5);
      z-index: 1;
    }
  }
  @media (min-width: ${1440}px) {
    width: calc(100% - 500px);
  }
`;

const TextWrapper = styled.div`
  z-index: 2;
  margin-left: 150px;
`;
const BigText = styled.h2`
  color: white;
  z-index: -1;
  font-family: "Open Sans";
  font-size: 30px;
  @media (min-width: ${1280}px) {
    font-size: 45px;
    max-width: 60%;
  }
`;
const Text = styled.p`
  font-family: "Open Sans";
  font-weight: 300;
  margin-top: 10px;
  color: white;
  @media (min-width: ${1280}px) {
    font-size: 19px;
  }
`;

const StyledLink = styled(Link)`
  z-index: 2;
  color: white;
  bottom: 50px;
  margin-left: 150px;
  position: absolute;
`;
export const BackgroundImage = ({ src, bigText, text }) => {
  return (
    <Wrapper src={src}>
      <TextWrapper>
        <BigText>{bigText}</BigText>
        <Text>{text}</Text>
      </TextWrapper>
      <StyledLink to="/">Strona główna </StyledLink>
    </Wrapper>
  );
};


