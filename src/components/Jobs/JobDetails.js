import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';
import Header from '../Items/JobDetails/Header';
import Responsibilities from '../Items/JobDetails/Responsibilities';
import Technologies from '../Items/JobDetails/Technologies';

const JobDetails = (props) => {
 

  const { job } = props;

  if (job){
      return(
        <Wrapper>
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
    <Technologies
    
    />
    <Responsibilities/>
      </Wrapper>
      )
  }
  else{
    return (
        <div>
            no job detail
        </div>
        );
  }

  
  
};


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const jobs = state.firestore.data.jobs
    const job = jobs ? jobs[id] : null

    console.log(jobs)
    return{
        job: job
    }
}

const mapDispatchToProps = {
    
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'jobs'}
    ])
)(JobDetails)


const Wrapper = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
