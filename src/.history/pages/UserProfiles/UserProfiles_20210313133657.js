import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import UserList from "../../components/Users/UserList/UserList";
import main from "../../assets/images/users-min.jpg";
import { useFirestoreConnect } from "react-redux-firebase";
import { Background } from "../../components/Background";

const UserProfiles = () => {
  useFirestoreConnect([{ collection: "users" }]);
  const users = useSelector((state) => state.firestore.ordered.users);

  let content;
  if (!users) {
    content = <Loader />;
  } else if (users.length === 0) {
    content = (
      <div>
        <p>Nie ma użytkowników</p>
      </div>
    );
  } else {
    content = (
      <>
        {users &&
          users.map((users) => (
            <UserList key={users.id} user={users} userid={users.id} />
          ))}
      </>
    );
  }
  return (
    <>
      <Background src={main}>
        <BigText>Znajdź pracownika IT</BigText>
      </Background>
      <Wrapper>{content}</Wrapper>
    </>
  );
};

export default UserProfiles;
