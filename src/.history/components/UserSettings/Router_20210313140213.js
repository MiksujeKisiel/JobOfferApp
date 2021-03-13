import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import UserRouter from "../Navbar/User/UserRouter";
import AccountMenu from "../Navbar/User/AccountMenu";
import { NavLink as Link } from "react-router-dom";

const Router = ({ children }) => {
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

const BigWrapper = styled.div`
  min-height: 100vh;
  @media (min-width: ${768}px) {
    display: grid;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
  }
  @media (min-width: ${1280}px) {
    grid-template-columns: 270px 1fr;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px;
  border-radius: 5px;
  background-color: #3f87f5;
  color: white;
  margin: 0 100px;
`;
const Nav = styled.div`
  display: none;
  @media (min-width: ${768}px) {
    width: 100%;
    height: 70px;
    align-items: center;
    display: flex;
    background-color: white;
    justify-content: flex-start;
    border-bottom: 1px solid #ededee;
  }
`;

const SmallWrapper = styled.div`
  display: none;
  @media (min-width: ${768}px) {
    padding: 100px 0;
    display: flex;
    background: #3f87f5;
    flex-direction: column;
  }

  @media (min-width: ${1280}px) {
    min-width: 270px;
  }
`;

const ChildrenWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f2f1f3;
`;

export default Router;
