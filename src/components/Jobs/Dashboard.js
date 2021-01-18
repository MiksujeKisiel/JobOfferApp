import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Background from "./Background";

import JobList from "./JobList";
import Loader from "../Items/Loader/Loader";

const Wrapper = styled.div`
 
 
  flex-direction: column;
  display: flex;

`;

const BigText = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Open sans", sans-serif;
`;

const TextWrapper = styled.div`
text-align: left;
margin-bottom: 15px;
width: 90%;
margin: 0 auto;


`

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
      <Background />
      <Wrapper>
        <TextWrapper>
        <BigText>Oferty pracy (4212)</BigText>
        </TextWrapper>
        {content}
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
