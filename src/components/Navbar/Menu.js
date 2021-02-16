import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";
import Logo from "./Logo";
import DropDownMenu from "./DropDownMenu";
import { useTranslation } from "react-i18next";
const NavLinks = styled.div`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  transition: .3s ease-in;
  height: 100vh;
  position: fixed;
  background-color: rgba(130,111,182, 0.80);
  @media (min-width: ${768}px) {
    background: none;
    height: auto;
    width: auto;
    position: absolute;
    z-index: 10;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transform: none;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Open sans", sans-serif;
  margin-left: 50px;
  font-size: 14px;
  color: white;
  margin: 10px auto;
  @media (min-width: ${768}px) {
    margin-left: 50px;
  }

`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (min-width: ${768}px) {
      background: none;
      flex-direction: row;
    position: sticky;
    display: flex;
    align-items: center;
    height: 80px;
  }
`;

const SmallWrapper = styled.div`
  height: 100%;
  background-color: #1825aa;
`;

const Menu = ({ loggedIn, open }) => {
  const { t } = useTranslation();

  let links;

  if (loggedIn) {
    links = (
      <NavLinks open={open}>
        <Wrapper>
          <Link to="/">
            <Logo navbar />
          </Link>
          <StyledLink to="/">{t("NavLinks.home")}</StyledLink>
          <StyledLink to="/user-profiles">Użytkownicy</StyledLink>
        </Wrapper>
        <Wrapper>
          <DropDownMenu />
          <SmallWrapper>
            <NavLink offer text={t("NavLinks.add")} to="/addjob" />
          </SmallWrapper>
        </Wrapper>
      </NavLinks>
    );
  } else {
    links = (
      <NavLinks open={open}>
        <Wrapper>
          <Link to="/">
            <Logo navbar />
          </Link>
          <StyledLink to="/">{t("NavLinks.home")}</StyledLink>
          <StyledLink to="/user-profiles">Użytkownicy</StyledLink>
        </Wrapper>
        <Wrapper>
          <NavLink user exact to="/login" text={t("NavLinks.login")} />
          <NavLink user signup exact to="/signup" text={t("NavLinks.signup")} />
          <SmallWrapper>
            <NavLink offer exact to="/login" text={t("NavLinks.add")} />
          </SmallWrapper>
        </Wrapper>
      </NavLinks>
    );
  }

  return <>{links}</>;
};

export default Menu;
