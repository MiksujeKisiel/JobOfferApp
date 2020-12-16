import React, { Component } from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import JobsWrapper from "./JobsWrapper";
import Job from './Job';

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

const MainJobs = ({jobs}) => {





    console.log(jobs)

  // let content;
  // if (!jobs) {
  //   content = (
  //     <div>
  //       <p>ładowanie</p>
  //     </div>
  //   );
  // } else if (!jobs || !jobs.jobs) {
  //   content = (
  //     <div>
  //       <p>nie masz dodanych ofert prac</p>
  //     </div>
  //   );
  // } else if (jobs.jobs.length === 0) {
  //   content = (
  //     <div>
  //       <p>nie masz dodanych ofert prac</p>
  //     </div>
  //   );
  // } else {
  //   content = (
  //     <OfferWrapper>
  //       {jobs.jobs
  //         .slice(0)
  //         .reverse()
  //         .map((jobs) => (
  //           <Offer jobs={jobs} />
  //         ))}
  //     </OfferWrapper>
  //   );
  // }
  return (
    <Wrapper>
      <Header>
        <Text>Oferty pracy</Text>
      </Header>
      <OfferWrapper>
      <Job job={jobs}/>

      </OfferWrapper>
    </Wrapper>
  );
}
const mapStateToProps = ({firestore}) => ({
  jobs: firestore.ordered.jobs,

});

const mapDispatchToProps = {
  
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{collection: 'jobs'}] )
)(MainJobs);
