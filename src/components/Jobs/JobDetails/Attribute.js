import React from "react";
import styled from "styled-components";

const Attribute = ({ children, text }) => {
  return (
    <Wrapper>
      {children}
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding-bottom: 1px solid #c1c1c1;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

export default Attribute;
