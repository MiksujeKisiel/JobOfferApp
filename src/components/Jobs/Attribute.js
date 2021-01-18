import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 5px 0 0;
  
  @media (min-width: ${768}px) {
    margin: 5px 20px 5px 0;
  }
`;
const Text = styled.p`
  font-size: 13px;
`;

const Attribute = ({ children, text }) => {
  if (text.length === 0) return null;
  else{
    return(
      <Wrapper>
      {children}
      <Text>{text}</Text>
    </Wrapper>
    )
  }
};

export default Attribute;
