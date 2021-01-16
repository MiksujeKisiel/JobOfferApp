import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import UserJobList from "./UserJobList";
import Loader from "../Items/Loader";

const Wrapper = styled.div`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 0 100px 0px;
  @media (min-width: ${768}px) {
    padding: 50px 0 100px 100px;
  }
`;

const TextWrapper = styled.div`
  max-width: 1000px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 15px;
`;

const SmallWrapper = styled.div`
  cursor: pointer;
  position: relative;
  &::after {
    width: 100%;
    content: "";
    background-color: #0060ee;
    height: 3px;
    position: absolute;
  }
  &:nth-of-type(2) {
    &::after {
      height: 0;
    }
  }
  .mapa {
    color: #5d5d5d;
  }
`;

const Text = styled.p`
  font-size: 20px;
  color: #0060ee;
  letter-spacing: 1.5px;
  padding: 10px 30px;
`;


const Dashboard = ({ jobs }) => {
  let content;
  if (!jobs) {
    content = <Loader />;
  } else if (!jobs || !jobs) {
    content = (
      <div>
        <p>nie masz dodanych ofert prac</p>
      </div>
    );
  } else if (jobs.length === 0) {
    content = (
      <div>
        <p>nie masz dodanych ofert prac</p>
      </div>
    );
  } else {
    content = <>{jobs && jobs.map((jobs) => <UserJobList jobs={jobs} />)}</>;
  }

  return (
    <>
      <Wrapper>
        <TextWrapper>
          <SmallWrapper>
            <Text>Lista</Text>
          </SmallWrapper>
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
