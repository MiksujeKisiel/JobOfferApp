import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import JobList from "../components/Jobs/JobList";
import Loader from "../components/Loader/Loader";
import main from "../assets/images/header.png";

const Background = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Filter = styled.div`
  display: none;
  @media (min-width: ${1024}px) {
    width: 380px;
    display: flex;
    height: 700px;
    box-shadow: rgba(11, 11, 11, 0.2) 0px 0px 10px;
    margin: 0 30px 0 30px;
  }
`;

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 100px;
  @media (min-width: ${1440}px) {
    padding-right: 200px;
  }
`;

const BigText = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Open sans", sans-serif;
`;
const SmallWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const TextWrapper = styled.div`
  text-align: left;
  margin-bottom: 15px;
  width: 90%;
  @media (min-width: ${1024}px) {
    width: 100%;
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
      <Background src={main} />
      <Wrapper>
        <Filter />
        <SmallWrapper>
          <TextWrapper>
            <BigText>Oferty pracy (4212)</BigText>
          </TextWrapper>
          {content}
        </SmallWrapper>
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
