import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import UserJobList from "./UserJobList";
import Loader from "../Items/Loader";
import Router from "../UserSettings/Router";

const Wrapper = styled.div`
padding-top: 200px;
 

  

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
