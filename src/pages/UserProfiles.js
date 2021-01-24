import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Loader from "../components/Loader/Loader";
import UserList from "../components/UserList/UserList";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;


const UserProfiles = ({ users }) => {
  if (!users) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <>{users && users.map((users) => <UserList users={users} />)}</>
      </Wrapper>
    );
  }
};

const mapStateToProps = ({ firestore }) => {
  return {
    users: firestore.ordered.users,
  };
};



const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "users" }])
)(UserProfiles);
