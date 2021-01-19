import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: -30px;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 13px;
  color: ${({ error, success }) => {
    if (error) return "red";
    if (success) return "green";
    else return "grey";
  }};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "0px")});
  text-align: center;
  transition: all 0.3s;
`;

export const Message = ({ children, error, success, show }) => {
  return (
    <Wrapper>
      <Text error={error} success={success} show={show}>
        {children}
      </Text>
    </Wrapper>
  );
};
