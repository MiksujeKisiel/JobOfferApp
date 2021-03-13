import React, { useState } from "react";
import styled from "styled-components";
import AccountMenu from "./User/AccountMenu";
import { ReactComponent as User } from "../../assets/svg/newuser.svg";
import { ReactComponent as Arrow } from "../../assets/svg/next.svg";
import { useSelector } from "react-redux";
import UserRouter from "./User/UserRouter";

const DropDownMenu = () => {
  const firebase = useSelector((state) => state.firebase);
  const [menu, showMenu] = useState(false);
  return (
    <Wrapper>
      <Nav showNav={menu}>
        <AccountMenu
          firstName={firebase.profile.firstName}
          lastName={firebase.profile.lastName}
          email={firebase.auth.email}
        />
        <UserRouter />
      </Nav>
      <StyledBurger
        showNav={menu}
        hamburger={menu}
        onClick={() => showMenu(!menu)}
      >
        <User className="svg" />
        {firebase.profile.firstName}
        <Arrow showNav={menu} className="arrow" />
      </StyledBurger>
    </Wrapper>
  );
};
export default DropDownMenu;

const Nav = styled.div`
  z-index: 200;
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  width: 310px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  top: 83px;
  right: 180px;
  background-color: white;
  max-height: 600px;
`;

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${768}px) {
    display: block;
  }
`;

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
  color: white;
  &:hover {
    color: white;
    .svg {
      fill: white;
    }
    .arrow {
      fill: white;
    }
  }
  .svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: white;
  }
  .arrow {
    width: 8px;
    height: 8px;
    fill: white;
    margin-left: 5px;
    margin-top: 3px;
    transform: ${({ showNav }) => (showNav ? "rotate(180deg)" : "")};
    transition: all 0.3 ease;
  }
`;
