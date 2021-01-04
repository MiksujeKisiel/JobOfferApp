import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";
import Logo from "../Items/Logo";
import MobileNavbar from "./MobileNavbar";
const Nav = styled.nav`
  @media (min-width: ${768}px) {
    padding: 0;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
font-family: 'Open sans', sans-serif;
margin-left: 50px;
font-size: 14px;
`

const Wrapper = styled.ul`
  display: none;
  @media (min-width: ${768}px) {
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
  }
`;

const SmallWrapper = styled.div`
  height: 100%;
  background-color: #1825aa;
`;

const Navbar = ({ loggedIn }) => {
  let links;

  if (loggedIn) {
    links = (
      <>
        <Wrapper>
          <Link to="/">
            <Logo navbar />
          </Link>
          <NavLink text="Oferty pracy" to="/" />
        </Wrapper>
        <Wrapper>
          <NavLink text="" to="/profile-jobs" />
          <NavLink user text="Profil" to="/profile" />
          <NavLink user text="Wyloguj się" to="/logout" />
          <SmallWrapper>
            <NavLink offer text="Dodaj oferte pracy" to="/addjob" />
          </SmallWrapper>
        </Wrapper>
      </>
    );
  } else {
    links = (
      <>
        <Wrapper>
          <Link to="/">
            <Logo navbar />
          </Link>
          <StyledLink to="/">Oferty pracy</StyledLink>
        </Wrapper>
        <Wrapper>
          <NavLink user exact to="/login" text="Zaloguj się" />
          <NavLink user signup exact to="/signup" text="Załóż konto" />
          <SmallWrapper>
            <NavLink offer exact to="/login" text="Dodaj ogłoszenie" />
          </SmallWrapper>
        </Wrapper>
      </>
    );
  }

  return (
    <Nav>
      {links}
      <MobileNavbar />
    </Nav>
  );
};

export default Navbar;
