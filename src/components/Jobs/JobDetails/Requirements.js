import React from "react";
import styled from "styled-components";
import { ReactComponent as Done } from "../../../assets/svg/accept.svg";
import { Wrapper, Header } from "./JobDetailStyles";
import Attribute from "./Attribute";

const Requirements = ({ requirement }) => {
  const listItems = requirement.slice(0).map((text) => (
    <Attribute text={text.requirement} key={text.requirement}>
      <Done className="svg" />
    </Attribute>
  ));

  if (requirement.length > 0)
    return (
      <Wrapper>
        <Header>Wymagania</Header>
        <SmallWrapper>{listItems}</SmallWrapper>
      </Wrapper>
    );
  else if (requirement.length === 0) {
    return null;
  }
};

const SmallWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default Requirements;
