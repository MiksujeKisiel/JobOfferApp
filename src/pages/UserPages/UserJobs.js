import React from "react";
import styled from "styled-components";
import Router from "../../components/UserSettings/Router";
import { JobsList } from "../../components/Jobs/Jobs/JobList";

const Dashboard = () => (
  <Router>
    <Wrapper>
      <SmallWrapper>
        <JobsList userProfile />
      </SmallWrapper>
    </Wrapper>
  </Router>
);

export default Dashboard;

const Wrapper = styled.div`
  padding-top: 200px;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #f5f5f5;
  @media (min-width: ${1280}px) {
    padding-left: 100px;
  }
`;

const SmallWrapper = styled.div`
  display: grid;
  width: 100%;
  z-index: 50;
  justify-content: start;
  align-items: stretch;
 
  margin-top: -100px;
  padding-bottom: 100px;
  @media (min-width: ${768}px) {
    grid-template-columns: 80%;
    grid-gap: 10px 10px;
    padding: none;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 45% 45%;
    margin-top: -100px;
  }
  @media (min-width: ${1280}px) {
    grid-template-columns: 410px 410px;
    grid-gap: 10px 10px;
  }
  @media (min-width: ${1440}px) {
    grid-template-columns: 450px 450px;
    grid-gap: 30px 30px;
  }
  @media (min-width: ${1920}px) {
    grid-template-columns: 450px 450px 450px;
    grid-gap: 30px 30px;
  }
`;
