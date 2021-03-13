import React from "react";
import styled from "styled-components";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import JobList from "../../components/Jobs/JobList";
import Loader from "../../components/Loader/Loader";
import main from "../../assets/images/header-min.jpg";
import { Background } from "../../components/Background";

const Wrapper = styled.div`
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #f5f5f5;
`;

const BigText = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 200px;
  width: 100%;
  text-align: center;
  color: white;
  padding: 0 10px;
  z-index: 2;
  @media (min-width: ${768}px) {
    font-size: 40px;
  }
  @media (min-width: ${1280}px) {
    font-size: 50px;
  }
`;

const SmallWrapper = styled.div`
  display: grid;
  width: 100%;
  z-index: 50;
  justify-content: center;
  align-items: stretch;

  justify-items: center;
  margin-top: -100px;
  padding-bottom: 100px;

  @media (min-width: ${768}px) {
    grid-template-columns: 43% 43%;
    grid-gap: 10px 10px;
    padding: none;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 45% 45%;
    margin-top: -100px;
  }
  @media (min-width: ${1280}px) {
    grid-template-columns: 410px 410px 410px;
    grid-gap: 10px 10px;
  }
  @media (min-width: ${1440}px) {
    grid-template-columns: 450px 450px 450px;
    grid-gap: 30px 30px;
  }
`;

const Dashboard = () => {
  useFirestoreConnect([{ collection: "jobs" }]);
  const jobs = useSelector((state) => state.firestore.ordered.jobs);

  let content;
  if (!jobs) {
    content = <Loader />;
  } else if (jobs.length === 0) {
    content = (
      <div>
        <p>nie masz dodanych ofert prac</p>
      </div>
    );
  } else {
    content = (
      <>
        {jobs &&
          jobs.map((jobs) => (
            <JobList jobs={jobs} id={jobs.id} key={jobs.id} />
          ))}
      </>
    );
  }
  return (
    <>
      <Background src={main}>
        <BigText>Znajdź wymarzoną pracę IT</BigText>
      </Background>
      <Wrapper>
        <SmallWrapper>{content}</SmallWrapper>
      </Wrapper>
    </>
  );
};

export default Dashboard;
