import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Offer from "./Offer";

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
`;
const Text = styled.p`
  font-size: 25px;
  font-weight: 600;
`;
const OfferWrapper = styled.div`
  width: 100%;
`;
const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;
`;

const ProfileJobs = ({ jobs, requested, userId }) => {
  let content;
  if (!jobs) {
    content = (
      <div>
        <p>ładowanie</p>
      </div>
    );
  } else if (!jobs[userId] || !jobs[userId].jobs) {
    content = (
      <div>
        <p>nie masz dodanych ofert prac</p>
      </div>
    );
  } else if (jobs[userId].jobs.length === 0) {
    content = (
      <div>
        <p>nie masz dodanych ofert prac</p>
      </div>
    );
  } else {
    content = (
      <OfferWrapper>
        {jobs[userId].jobs
          .slice(0)
          .reverse()
          .map((jobs) => (
            <Offer jobs={jobs} />
          ))}
      </OfferWrapper>
    );
  }

  return (
    <Wrapper>
      <Header>
        <Text>Oferty pracy</Text>
      </Header>
      <OfferWrapper>{content}</OfferWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  jobs: firestore.data.jobs,
  requested: firestore.status.requested,
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`jobs/${props.userId}`])
)(ProfileJobs);
