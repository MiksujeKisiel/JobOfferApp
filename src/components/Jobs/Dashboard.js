import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Background from './Background';
import {Link } from 'react-router-dom';
import JobList from './JobList';




const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
 

`;


const Dashboard = ({jobs}) => {
  return (
    <>
   
    <Background/>
    <Wrapper>
      {/* <Header>
        <Text>Oferty pracy</Text>
      </Header> */}
      {jobs && jobs.map((jobs) => (
       <Link to={'job/' + jobs.id}>
            <JobList jobs={jobs} />
            </Link>
          ))}
      {/* <JobMaper jobs={jobs}/> */}
    </Wrapper>
    </>
  );
};
const mapStateToProps = ({firestore}) => {
 console.log(firestore)
  return {
    jobs: firestore.ordered.jobs
    

  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(Dashboard);

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
