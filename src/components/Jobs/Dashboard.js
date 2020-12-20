import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import JobMaper from './Job';
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

const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;
`;

const Dashboard = ({jobs}) => {


  return (
    <Wrapper>
      <Header>
        <Text>Oferty pracy</Text>
        <JobMaper jobs={jobs}/>
      </Header>
      <div></div>
    </Wrapper>
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
