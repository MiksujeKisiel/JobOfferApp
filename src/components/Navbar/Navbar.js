import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";
import Logo from "../Items/Logo";
import MobileNavbar from "./MobileNavbar";

import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  let links;

  if (loggedIn) {
    links = (
      <>
        <Wrapper>

          <Link to="/">
            <Logo navbar />
          </Link>
          <StyledLink to="/">{t('NavLinks.home')}</StyledLink>
        </Wrapper>
        <Wrapper>
          <NavLink text="" to="/profile-jobs" />
          <NavLink user text={t('NavLinks.profile')} to="/profile" />
          <NavLink user text={t('NavLinks.logout')} to="/logout" />
          <SmallWrapper>
            <NavLink offer text={t('NavLinks.add')} to="/addjob" />
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
          <StyledLink to="/" >{t('NavLinks.home')}</StyledLink>
        </Wrapper>
        <Wrapper>
          <NavLink user exact to="/login" text={t('NavLinks.login')} />
          <NavLink user signup exact to="/signup" text={t('NavLinks.signup')} />
          <SmallWrapper>
            <NavLink offer exact to="/login" text={t('NavLinks.add')} />
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
