import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;

const StyledLink = styled(Link)`
  color: #7481a1;
  font-size: 13px;
`;
const Text = styled.p``;

const Reference = ({ text, link, to }) => {
  return (
    <Wrapper>
      <Text>
        {text}
        <StyledLink to={to}>{link}</StyledLink>
      </Text>
    </Wrapper>
  );
}
export default Reference;
