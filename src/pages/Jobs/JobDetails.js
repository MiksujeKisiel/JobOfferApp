import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Header from "../../components/JobDetails/Header";
import Responsibilities from "../../components/JobDetails/Responsibilities";
import Technologies from "../../components/JobDetails/Technologies";
import About from "../../components/JobDetails/About";
import Requirements from "../../components/JobDetails/Requirements";
import UserJob from "../../components/JobDetails/UserJob";
import details from '../../assets/images/details.jpg'

const Background = styled.div`
  width: 100%;
  height: 300px;
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
    height: 450px;
  }
`

const JobDetails = (props) => {
  const { job } = props;
  const { jobId } = props;
  console.log(jobId)
  if (job) {
    return (
      <>
      <Background src={details} />
      <Wrapper>
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
          <Requirements requirement={job.requirement} />
          <About about={job.about} companyName={job.companyName} />
        </ContentWrapper>
        <UserJob userId={job.userid} jobId={jobId} />
      </Wrapper>
      </>
    );
  } else if (!job) {
    return <div>no job detail</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;
  return {
    job: job,
    jobId: id,
    loggedIn: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(JobDetails);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-top: 30px;
  position: relative;
  margin-top: -200px;
  .background {
    background-color: #40b4e5;
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
`;
