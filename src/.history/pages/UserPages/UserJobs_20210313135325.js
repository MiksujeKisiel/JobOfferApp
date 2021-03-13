import React from "react";
import styled from "styled-components";
import { useFirestoreConnect } from "react-redux-firebase";

import UserJobList from "../../components/Users/UserJob/UserJobList";
import Loader from "../../components/Loader/Loader";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";

const Wrapper = styled.div`
  max-width: 1100px;
 
  @media (min-width: ${768}px) {
    margin-left: 20px;
  }
  @media (min-width: ${1440}px) {
    margin-left: 100px;
  }
`;

const Dashboard = () => {
  useFirestoreConnect([{ collection: "jobs" }])
  const jobs = useSelector((state) => state. firestore.ordered.jobs);
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

export default Dashboard;
