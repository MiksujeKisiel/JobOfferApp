import React from "react";
import styled from "styled-components";
import { ReactComponent as Done } from "../../../assets/svg/accept.svg";
import { Wrapper, Header } from "./JobDetailStyles";
import Attribute from "./Attribute";

const Responsibilities = ({ responsibility }) => {
  const listItems = responsibility.slice(0).map((text) => (
    <Attribute text={text.responsibility} key={text.responsibility}>
      <Done className="svg" />
    </Attribute>
  ));
  if (responsibility.length > 0)
    return (
      <Wrapper>
        <Header>Twój zakres obowiązków</Header>
        <BigDoneWrapper>{listItems}</BigDoneWrapper>
      </Wrapper>
    );
  else if (responsibility.length === 0) {
    return null;
  }
};

const BigDoneWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export default Responsibilities;
