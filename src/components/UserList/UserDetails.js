import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Data, Education, Experience, Languages, Skills } from "../UserDetails";



const Wrapper = styled.div`
  min-height: calc(100vh - 90px);
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #f3f2ef;
  @media (min-width: ${768}px) {
    padding: 40px 0;
  }
`;

const SmallWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  @media (min-width: ${768}px) {
    width: 100%;
    max-width: 800px;
  }
  @media (min-width: ${1280}px) {
    margin-right: 300px;
  }
`;

const UserDetails = ({ user }) => {
  console.log(user);
  if (!user) {
    return null;
  } else {
    return (
      <Wrapper>
        <SmallWrapper>
          <Data
            age={user.age}
            location={user.location}
            payment={user.payment}
            phone={user.phone}
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            profession={user.profession}
          />
          <Languages languages={user.languages} />
          <Skills skills={user.skills} />
          <Education education={user.education} />
          <Experience experience={user.experience} />
        </SmallWrapper>
      </Wrapper>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const user = state.firestore.data.users;
  const userdetails = user ? user[id] : null;

  return {
    user: userdetails,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(UserDetails);
