import React from "react";
import styled from "styled-components";

import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";
import Logo from '../Items/Logo'
const Nav = styled.nav`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);

`;

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
`;

const Navbar = ({ loggedIn }) => {
  let links;

  if (loggedIn) {
    links = (
      <>
        <Wrapper>
       <Link to="/">
         <Logo/></Link>
          <NavLink text="Home" to="/" />
        </Wrapper>
        <Wrapper>
        <NavLink text="my job offers" to="/profile-jobs" />
        <NavLink text="add offer" to="/addjob" />
          <NavLink text="profile" to="/profile" />
          <NavLink text="Logout" to="/logout" />
        </Wrapper>
      </>
    );
  } else {
    links = (
      <>
        <Wrapper>
          <Link to="/">
            <Logo/>
          </Link>
          <NavLink to="/" text="home" />
        </Wrapper>
        <Wrapper>
          <NavLink exact to="/login" text="Zaloguj się" />
      
          <NavLink exact to="/signup" text="Załóż konto" />
        </Wrapper>
      </>
    );
  }

  return <Nav>{links}</Nav>;
};

export default Navbar;
