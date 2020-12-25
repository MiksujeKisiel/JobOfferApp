import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";
import Logo from '../Items/Logo'
import MobileNavbar from './MobileNavbar';
const Nav = styled.nav`

  @media (min-width: ${768}px) {
    padding: 0 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
  }
`;

const Wrapper = styled.ul`
display: none;
  @media (min-width: ${768}px) {
    position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  }
`;

const Navbar = ({ loggedIn }) => {
  let links;

  if (loggedIn) {
    links = (
      <>
        <Wrapper>
       <Link to="/">
         <Logo/></Link>
          <NavLink text="Oferty pracy" to="/" />
        </Wrapper>
        <Wrapper>
        <NavLink text="" to="/profile-jobs" />
        <NavLink text="Dodaj oferte pracy" to="/addjob" />
          <NavLink text="Profil" to="/profile" />
          <NavLink text="Wyloguj się" to="/logout" />
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
          <NavLink to="/" text="Oferty pracy" />
        </Wrapper>
        <Wrapper>
          <NavLink exact to="/login" text="Zaloguj się" />
          <NavLink exact to="/signup" text="Załóż konto" />
          <NavLink exact to="" text="Dodaj ogłoszenie" />
        </Wrapper>
      </>
    );
  }

  return <Nav>{links}
  <MobileNavbar/>
  </Nav>;
};

export default Navbar;
