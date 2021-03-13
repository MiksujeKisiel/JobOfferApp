import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import UserRouter from "../Navbar/User/UserRouter";
import AccountMenu from "../Navbar/User/AccountMenu";
import { NavLink as Link } from "react-router-dom";

const Router = ({ children, firebase }) => {
  return (
    <>
      <Navbar dashboard="dashboard" />
      <BigWrapper>
        <SmallWrapper>
          <AccountMenu left={true} />
          <UserRouter left={true} />
        </SmallWrapper>
        <ChildrenWrapper>
          <Nav>
            <StyledLink to="/">Strona główna</StyledLink>
          </Nav>

          {children}
        </ChildrenWrapper>
      </BigWrapper>
    </>
  );
};

const ChildrenWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #F2F1F3;
`;

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
