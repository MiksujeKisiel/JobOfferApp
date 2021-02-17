import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: yellow;
  font-size: 20px;
  margin: ${(props) => (props.offer ? "15px 25px" : "20px 25px")};
  font-weight: 600;
  border: ${(props) => (props.signup ? "2px solid #C2C2C2" : "")};
  padding: ${(props) => (props.signup ? "10px 26px" : "")};
  border-radius: 25px;
  font-family: "open sans";
@media (min-width: ${768}px) {
  color: white;
  font-size: 14px;
  margin: ${(props) => (props.offer ? "0 25px" : "0 25px")};
  font-weight: 500;
  border: ${(props) => (props.signup ? "2px solid #C2C2C2" : "")};
  padding: ${(props) => (props.signup ? "10px 26px" : "")};
  border-radius: 25px;
  font-family: "open sans";
}
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
