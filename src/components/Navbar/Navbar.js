import React from "react";
import styled from "styled-components";


import Burger from "./Burger";
const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const Navbar = ({loggedIn}) => {
  return (
    <Nav>
      <Burger loggedIn={loggedIn} />
    </Nav>
  );
};

export default Navbar;
