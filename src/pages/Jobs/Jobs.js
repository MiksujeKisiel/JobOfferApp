import React from "react";
import styled from "styled-components";
import main from "../../assets/images/header-min.jpg";
import { Background } from "../../components/Background";
import { JobsList }  from '../../components/Jobs/Jobs/JobList';

const Dashboard = () => {
 
  return (
    <>
      <Background src={main}>
        <BigText>Znajdź wymarzoną pracę IT</BigText>
      </Background>
      <Wrapper>
        <SmallWrapper><JobsList/></SmallWrapper>
      </Wrapper>
    </>
  );
};

export default Dashboard;


const Wrapper = styled.section`
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #f5f5f5;
`;

const BigText = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 200px;
  width: 100%;
  text-align: center;
  color: white;
  padding: 0 10px;
  z-index: 2;
  @media (min-width: ${768}px) {
    font-size: 40px;
  }
  @media (min-width: ${1280}px) {
    font-size: 50px;
  }
`;

const SmallWrapper = styled.div`
  display: grid;
  width: 100%;
  z-index: 50;
  justify-content: center;
  align-items: stretch;

  justify-items: center;
  margin-top: -100px;
  padding-bottom: 100px;

  @media (min-width: ${768}px) {
    grid-template-columns: 48% 48%;
    grid-gap: 10px 10px;
    padding: none;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 45% 45%;
    margin-top: -100px;
  }
  @media (min-width: ${1280}px) {
    grid-template-columns: 410px 410px 410px;
    grid-gap: 10px 10px;
  }
  @media (min-width: ${1440}px) {
    grid-template-columns: 450px 450px 450px;
    grid-gap: 30px 30px;
  }
`;

