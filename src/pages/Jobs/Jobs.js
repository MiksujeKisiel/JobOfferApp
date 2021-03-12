import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import JobList from "../../components/Jobs/JobList";
import Loader from "../../components/Loader/Loader";
import main from "../../assets/images/header-min.jpg";

const Background = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  ::after {
    background: linear-gradient(180deg, #0f0b2e, rgba(34, 26, 90, 0) 80%);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
  }
  ::before{
    background: linear-gradient(360deg, #0f0b2e, rgba(34, 26, 90, 0) 80%);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
  }
  @media (min-width: ${1280}px) {
    height: 650px;
  }
`;

const Wrapper = styled.div`
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
    grid-template-columns: 43% 43%;
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

const Dashboard = ({ jobs }) => {
  let content;
  if (!jobs) {
    content = <Loader />;
  } else if (jobs.length === 0) {
    content = (
      <div>
        <p>nie masz dodanych ofert prac</p>
      </div>
    );
  } else {
    content = (
      <>
        {jobs &&
          jobs.map((jobs) => (
            <JobList jobs={jobs} id={jobs.id} key={jobs.id} />
          ))}
      </>
    );
  }

  return (
    <>
      <Background src={main}>
        <BigText>Znajdź wymarzoną pracę IT</BigText>
      </Background>
      <Wrapper>
        <SmallWrapper>{content}</SmallWrapper>
      </Wrapper>
    </>
  );
};

const mapStateToProps = ({ firestore }) => {
  return {
    jobs: firestore.ordered.jobs,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(Dashboard);
