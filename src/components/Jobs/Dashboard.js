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
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 0 100px 150px;
`;

const TextWrapper = styled.div`
max-width: 1000px;
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0 0 15px;

`

const SmallWrapper = styled.div`
  cursor: pointer;
  position: relative;
  &::after{
    width: 100%;
    content: "";
    background-color:#0060EE;
    height: 3px;
    position: absolute;
  }
  &:nth-of-type(2){
    &::after{
   height: 0;
  }  }
  .mapa{
    color: #5D5D5D;
  }
`

const Text = styled.p`
font-size: 20px;
color: #0060EE;
letter-spacing: 1.5px;
padding: 10px 30px;

`
const BigText = styled.p`
font-size: 25px;
font-weight: 300;
`

const BigTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`




const Dashboard = ({jobs}) => {
  return (
    <>
   
    <Background/>
    <Wrapper>
      <BigTextWrapper>
      <BigText>Oferty pracy (42)</BigText>
      </BigTextWrapper>
      <TextWrapper>
        <SmallWrapper>
        <Text>Lista</Text>
        </SmallWrapper>
        <SmallWrapper>
        <Text className="mapa">Mapa</Text>
        </SmallWrapper>
      </TextWrapper>
            {jobs && jobs.map((jobs) => (
       <Link to={'job/' + jobs.id}>
            <JobList jobs={jobs} />
            </Link>
          ))}
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
