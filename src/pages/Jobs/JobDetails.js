import React, {useEffect} from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Header from "../../components/Jobs/JobDetails/Header";
import Responsibilities from "../../components/Jobs/JobDetails/Responsibilities";
import Technologies from "../../components/Jobs/JobDetails/Technologies";
import About from "../../components/Jobs/JobDetails/About";
import Requirements from "../../components/Jobs/JobDetails/Requirements";
import UserJob from "../../components/Jobs/JobDetails/UserJob";
import details from "../../assets/images/details-min.jpg";
import { Background } from "../../components/Background";
import { useHistory } from "react-router";

const JobDetails = ({ job, jobId }) => {
  const Route = () => {
    let history = useHistory();
    useEffect(() => {
      history.push("/");
    }, [history]);
    return null;
  };

  useFirestoreConnect([{ collection: "jobs" }]);
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
            <Responsibilities responsibility={job.responsibility} />
            <Requirements requirement={job.requirement} />
            <Technologies offer={job.offer} />
            <About about={job.about} companyName={job.companyName} />
          </ContentWrapper>
          <UserJob userId={job.userid} jobId={jobId} />
        </Wrapper>
      </>
    );
  } else if (!job) {
    return <Route/>;
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

export default compose(connect(mapStateToProps))(JobDetails);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: relative;
  margin-top: -300px;
  padding-bottom: 100px;
  @media (min-width: ${768}px) {
    flex-direction: row;
    align-items: flex-start;
  }
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
`;
