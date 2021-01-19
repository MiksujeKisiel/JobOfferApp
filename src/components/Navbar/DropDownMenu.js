import React, { useState } from "react";
import styled from "styled-components";
import AccountMenu from "./AccountMenu";
import { ReactComponent as Document } from "../../assets/svg/documents.svg";
import { ReactComponent as User } from "../../assets/svg/newuser.svg";
import { ReactComponent as Logout } from "../../assets/svg/logout.svg";
import { ReactComponent as Settings } from "../../assets/svg/settings.svg";
import { ReactComponent as Arrow } from '../../assets/svg/next.svg'
import { connect } from "react-redux";
import Option from "./Option";
const Nav = styled.div`
  z-index: 200;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 310px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  top: 83px;
  right: 180px;
  background-color: white;
  max-height: 600px;
  transform: ${({ showNav }) =>
    showNav ? "translateX(0)" : "translateX(150vw)"};
`;

const DropDownMenu = ({ firebase }) => {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Nav showNav={menu}>
        <AccountMenu
          firstName={firebase.profile.firstName}
          lastName={firebase.profile.lastName}
          email={firebase.auth.email}
        />
        <Option to="/profile" text="Profil">
          <User className="svgs" />
        </Option>
        <Option to="/profile-jobs" text="Moje oferty pracy">
          <Document className="svgs" />
        </Option>
        <Option to="/profile-settings" text="Ustawienia konta">
          <Settings className="svgs" />
        </Option>
        <Option to="/logout" text="Wyloguj">
          <Logout className="svgs" />
        </Option>
      </Nav>
      <StyledBurger
        showNav={menu}
        hamburger={menu}
        onClick={() => showMenu(!menu)}
      >
        <User className="svg" />
        {firebase.profile.firstName}
        <Arrow 
        showNav={menu}
        className="arrow"/>
      </StyledBurger>
    </>
  );
};
const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 15px;
  background: none;
  border: none;
  z-index: 50;
  outline: none;
  margin-right: 30px;

 
  &:hover{
    color: #0060ee;
    .svg{
      fill: #0060ee;
    }
    .arrow{
      fill: #0060ee;
    }
  }
  .svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  .arrow{  
    width: 8px;
    height: 8px;
    /* transform: rotate(90deg); */
    margin-left: 5px;
    margin-top: 3px;
    transform: ${({ showNav }) =>
    showNav ? "rotate(180deg)" : ""};
    transition: all 0.3 ease;

    
  
    
    }
    
  
`;
