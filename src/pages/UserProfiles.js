import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Loader from "../components/Loader/Loader";
import UserList from "../components/UserList/UserList";
const Wrapper = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserProfiles = ({ users }) => {
  if (!users) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        {users && users.map((users) => <UserList users={users} userid={users.id} />)}
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
