import React from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";
import { ReactComponent as Loupe } from "../../../assets/svg/loupe.svg";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { NavLink } from "react-router-dom";
const BigWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.3);
  z-index: 1000;

  .active {
    .svg {
      fill: blue;
    }
    .text {
      color: blue;
    }
    .wrapper {
      border-top: 2px solid blue;
    }
  }
  @media (min-width: ${768}px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33vw;
  @media (min-width: ${400}px) {
    width: 25vw;
  }
  .svg {
    width: 20px;
    height: 20px;
    fill: #8b8b8b;
    margin: 5px 0 0 0;
  }
`;
const Text = styled.p`
  margin: 5px 0 5px;
  font-size: 14px;
  color: #8b8b8b;
`;

const MobileNavbar = () => {
  return (
    <BigWrapper>
      <NavLink exact to="/" activeClassName="active">
        <Wrapper className="wrapper">
          <Home className="svg" />
          <Text className="text">Str. główna</Text>
        </Wrapper>
      </NavLink>
      <NavLink exact to="/" activeClassName="active">
        <Wrapper className="wrapper">
          <Loupe className="svg" />
          <Text className="text">Szukaj ofert</Text>
        </Wrapper>
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <Wrapper className="wrapper">
          <User className="svg" />
          <Text className="text">Konto</Text>
        </Wrapper>
      </NavLink>
    </BigWrapper>
  );
};

export default MobileNavbar;
