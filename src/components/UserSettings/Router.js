import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import UserRouter from "../Navbar/User/UserRouter";
import AccountMenu from "../Navbar/User/AccountMenu";

const BigWrapper = styled.div`
  min-height: 100vh;
  background: #40b4e5;
  padding-top: 80px;
  position: relative;
  overflow-y: hidden;
  &::before{
    
    content: "";
    width: 100%;
    height: 80px;
    top: 0;
    position: absolute;
  }
  @media (min-width: ${768}px) {
    display: flex;
  }
`;



const SmallWrapper = styled.div`
  display: none;

  @media (min-width: ${768}px) {
    min-width: 250px;
    padding: 100px 0;
    display: flex;
    background: #1b75bc;
    flex-direction: column;
  }
`;

const Router = ({ children, firebase }) => {
  return (
    <BigWrapper>
      <SmallWrapper>
        <AccountMenu left={true} />
        <UserRouter left={true} />
      </SmallWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </BigWrapper>
  );
};

const ChildrenWrapper = styled.div`
font-family: "Poppins", sans-serif;
`;

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
