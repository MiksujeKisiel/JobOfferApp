import React from "react";
import styled from "styled-components";
import main from "../../assets/images/Main.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${768}px) {
    display: flex;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;
const Image = styled.img`
  bottom: 0;
  max-width: 2500px;
  margin: 0 auto;
  max-height: 550px;
  width: 100%;
  @media (min-width: ${1024}px) {
  }
`;
const Text = styled.p`
  color: white;
  font-size: 13px;
  @media (min-width: ${1024}px) {
    font-size: 14px;
  }
  @media (min-width: ${1280}px) {
    font-size: 16px;
  }
  @media (min-width: ${1600}px) {
    font-size: 18px;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${1024}px) {
    margin-bottom: 100px;
  }
`;

const BigText = styled.p`
  color: white;
  font-size: 24px;
  @media (min-width: ${1024}px) {
    font-size: 35px;
    margin-bottom: 10px;
  }
  @media (min-width: ${1280}px) {
    font-size: 46px;
    margin: 0 0 10px 0;
  }
  @media (min-width: ${1600}px) {
    font-size: 55px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  margin: 20px 0 10px;
  outline: none;
  background: none;
  border: 1px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  transition: 0.3s ease;
  @media (min-width: ${1280}px) {
    font-size: 15px;
    padding: 15px 35px;
    margin: 25px 0 10px;
    border-radius: 50px;
  }
  &:hover {
    background: #80d8ff;
    border: 1px solid #80d8ff;
  }
`;

const Background = () => {
  return (
    <Wrapper>
      <Image src={main} />
      <TextWrapper>
        <BigText>xd</BigText>
        <Text>Możesz w prosty sposób znaleźć pracę</Text>
        <Link to="/job">
          <Button>Szukaj pracy</Button>
        </Link>
        <Text>Na kisiel.pl mamy 23 23 ofert pracy</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Background;
