import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { NavLink as Link } from "react-router-dom";
import Logo from "./Logo";
import DropDownMenu from "./DropDownMenu";
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux'

const NavLinks = styled.div`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  transition: .3s ease-in;
  height: 100vh;
  position: fixed;
  background-color: rgba(76,76,255, 0.99);
  padding: 40px 0;
  
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
  padding: 5px;
  font-size: 20px;
  color: ${(props) => (props.profileuser) ? 'black' : 'white' };
  margin: 10px auto;
  
  &::first{
    margin-top: 25px;
  }
  @media (min-width: ${768}px) {
    font-family: "Open sans", sans-serif;
  margin-left: 50px;
  font-size: 14px;
  color: white;
  margin: 10px auto;
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

const AccountWrapper = styled.div`
display: flex;
flex-direction: column;
   @media (min-width: ${768}px) {
display: none;
width: 100%;
margin-top: 20px;
   }
`

const SmallWrapper = styled.div`

`;

const Text = styled.p`
font-size: 25px;
margin: 30px 0 10px;
text-align: center;
color: black;
font-weight: 600;

`
const Menu = ({ loggedIn, open}) => {
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
        <AccountWrapper>
      <Text> User settings</Text>
        <StyledLink profileuser to="/profile-jobs">Moje oferty pracy</StyledLink>
        <StyledLink profileuser to="/profile-settings">Ustawienia konta</StyledLink>
        <StyledLink profileuser to="/profile">Ustawienia profilu</StyledLink>

        </AccountWrapper>
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

const mapStateToProps = ({firebase}) => ({
  loggedIn: firebase.auth.uid
})


export default connect(mapStateToProps)(Menu);
