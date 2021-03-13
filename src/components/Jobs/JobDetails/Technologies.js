import React from "react";
import styled from "styled-components";
import { Wrapper, Header } from "./JobDetailStyles";

const Text = styled.p``;

const Technologies = ({ offer }) => {
  const listItems = offer
    .slice(0)
    .map((text) => <Technology key={text.offer}>{text.offer}</Technology>);
  if (offer.length > 0)
    return (
      <Wrapper>
        <Header>Technologie, których używamy</Header>
        <Text>Wymagane</Text>
        <SmallWrapper>{listItems}</SmallWrapper>
      </Wrapper>
    );
  else if (offer.length === 0) {
    return null;
  }
};
export default Technologies;

const SmallWrapper = styled.div`
  margin-top: 20px;
  width: auto;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
`;

const Technology = styled.p`
  background: #e7e9f6;
  border-radius: 15px;
  padding: 10px 15px;
  color: #1c1c1c;
  font-size: 14px;
  margin: 10px 0 0 5px;
  transition: all 0.3 ease-in;
`;
