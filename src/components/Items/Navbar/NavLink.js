import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${(props) => (props.user ? "#0060ee" : "white")};
  font-size: 14px;
  margin: ${(props) => (props.offer ? "0 25px" : "0 25px")};
  font-weight: 500;
  border: ${(props) => (props.signup ? "2px solid #C2C2C2" : "")};
  padding: ${(props) => (props.signup ? "10px 26px" : "")};
  border-radius: 25px;
  font-family: "open sans";
`;

const Wrapper = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = ({ to, text, user, signup, offer }) => {
  return (
    <Wrapper>
      <StyledLink
        user={user}
        signup={signup}
        offer={offer}
        activeClassName="active"
        to={to}>
        {text}
      </StyledLink>
    </Wrapper>
  );
};

export default NavLink;
