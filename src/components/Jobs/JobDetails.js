import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Header from "../Items/JobDetails/Header";
import Responsibilities from "../Items/JobDetails/Responsibilities";
import Technologies from "../Items/JobDetails/Technologies";
import About from '../Items/JobDetails/About';
import Requirements from '../Items/JobDetails/Requirements';
const JobDetails = (props) => {
  const { job } = props;

  if (job) {
    return (
      <Wrapper>
        <span className="background"/>
        <ContentWrapper>
        <Header
          name={job.name}
          companyName={job.companyName}
          earnings={job.earnings}
          location={job.location}
          interview={job.interview}
          contract={job.contract}
          timelapse={job.timelapse}
          employmentType={job.employmentType}
        />
        <Technologies requirement={job.requirement} />
        <Responsibilities responsibility={job.responsibility} />
        <Requirements requirement={job.requirement}/>
        <About about={job.about}
        companyName={job.companyName}/>
        </ContentWrapper>
      </Wrapper>
    );
  } else {
    return <div>no job detail</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;
  console.log(jobs);
  return {
    job: job,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(JobDetails);

const Wrapper = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: relative;
  .background{
    background-color: #40B4E5;
    width: 100%;
    height: 110px;
    position: absolute;
    top: 0;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  z-index: 2;
  @media (min-width: ${768}px) {
    max-width: 850px;
    
  }
  @media (min-width: ${1280}px) {
    margin-right: 320px;
  }
`
