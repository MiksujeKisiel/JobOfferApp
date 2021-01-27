import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Wrapper = styled.div`
  height: calc(100vh - 90px);
`;
const Text = styled.p``;

const UserDetails = ({user}) => {
  const {firstName, lastName, hobby, email, experience, education, certificates, age, links, location, payment, phone, skills, userType} = user
  if (!user) {
    return null;
  } else {
    return (
      <Wrapper>
        <Text>{firstName} {lastName}</Text>
        {hobby} 
        {email}  
        {experience} 
        {education} 
        {certificates} 
        {age} 
        {links} 
        {location} 
        {payment} 
        {phone} 
        {skills}  
        {userType} 
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
