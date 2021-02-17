import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {
  Data,
  Experience,
  Languages,
  Skills,
} from "../../components/UserDetails";

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

const UserDetails = ({users, id} ) => {
  console.log(id)
  console.log(users)
  if (users) {
    return (
      <Wrapper>
        <SmallWrapper>
          <Data
            age={users.age}
            location={users.location}
            payment={users.payment}
            phone={users.phone}
            email={users.email}
            firstName={users.firstName}
            lastName={users.lastName}
            profession={users.profession}
          />
          <Languages language={users.language} />
          <Skills skills={users.skills} />
          <Experience experience={users.experience} />
        </SmallWrapper>
      </Wrapper>
    );
  } else if (!users) {
    return <p>nie ma</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const user = state.firestore.data.users;
  const userdetails = user ? user[id] : null;
  return {
    users: userdetails,
    userid: id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(UserDetails);
