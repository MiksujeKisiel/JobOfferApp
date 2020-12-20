import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/kisieljobs.png";
import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  background: #0e1926;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 120px;
    height: 80px;
  }
`;

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 90px;
`;

const Navbar = ({ loggedIn }) => {
  let links;

  if (loggedIn) {
    links = (
      <>
        <Wrapper>
       <Link to="/">
         <img className="logo" src={Logo} alt="" /></Link>
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
            <img className="logo" src={Logo} alt="" />
          </Link>
          <NavLink to="/" text="home" />
        </Wrapper>
        <Wrapper>
          <NavLink exact to="/login" text="login" />
          <NavLink exact to="/recover-password" text="Recover password" />
          <NavLink exact to="/signup" text="signup" />
        </Wrapper>
      </>
    );
  }

  return <Nav>{links}</Nav>;
};

export default Navbar;
