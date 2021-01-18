import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import UserJobList from "./UserJobList";
import Loader from "../Items/Loader/Loader";
import Router from "../UserSettings/Router";
import TopText from "../UserSettings/Text";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: ${768}px) {
    margin-left: 50px;
  }
  @media (min-width: ${1440}px) {
    margin-left: 150px;
  }
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
    <Router>
      <Wrapper>
        <TopText
          bigText="Twoje oferty pracy"
          smallText="Znajdziesz tutaj dodane przez ciebie oferty pracy"
        />
        {content}
      </Wrapper>
    </Router>
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
