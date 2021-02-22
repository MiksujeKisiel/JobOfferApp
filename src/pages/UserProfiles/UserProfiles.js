import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import UserList from "../../components/UserList/UserList";
import main from "../../assets/images/users.jpg";
import { useFirestoreConnect } from 'react-redux-firebase'


const Wrapper = styled.div`
  margin-top: -150px;
   display: grid;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  justify-items: center;
  position: absolute;
  padding-top: 50px;
  grid-gap: 20px 20px;
  grid-template-columns: 95%;
  padding-bottom: 100px;
  @media (min-width: ${768}px) {
    grid-template-columns: 320px 320px;
    grid-gap: 20px 20px;
    padding: none;
    
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 300px 300px 300px;
    margin-top: -150px;
  }
  @media (min-width: ${1280}px) {
    grid-template-columns: 300px 300px 300px 300px;
    grid-gap: 10px 20px;
  }
  @media (min-width: ${1440}px) {
    grid-template-columns: 330px 330px 330px 330px;
    grid-gap: 30px 30px;
  }
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

const Background = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  ::after {
    background: linear-gradient(180deg, #0f0b2e, rgba(34, 26, 90, 0) 80%);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
  }
  ::before{
    background: linear-gradient(360deg, #0f0b2e, rgba(34, 26, 90, 0) 80%);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
  }
  @media (min-width: ${1280}px) {
    height: 650px;
  }
`;

const UserProfiles = ({ users }) => {
  
  useFirestoreConnect([
    { collection: 'users' }
  ])


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
           {users && users.map((users) => <UserList user={users} userid={users.id} />)}
      </>
    );
  }
  return (
    <>
       <Background src={main}>
       <BigText>Znajdź wymarzoną pracę</BigText>
       </Background>
      <Wrapper>
     {content}
    </Wrapper>
    </>
  );
}


const mapStateToProps = ({ firestore }) => {
  return {
    users: firestore.ordered.users,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfiles);
