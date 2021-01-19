import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: #1b75bc;
`;
const Text = styled.p`
  color: #9a9a9a;
  font-size: 14px;
`;

export const Reference = ({ text, link, to }) => {
  return (
    <Wrapper>
      <Text>
        {text}
        <StyledLink to={to}>{link}</StyledLink>
      </Text>
    </Wrapper>
  );
};

