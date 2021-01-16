import React from "react";
import styled from "styled-components";
import { ReactComponent as Done } from "../../../assets/svg/accept.svg";

const Requirements = ({ requirement }) => {
  const listItems = requirement.slice(0).map((number) => (
    <DoneWrapper>
      <Done className="svg" />
      <Text>{number}</Text>
    </DoneWrapper>
  ));
  if (requirement.length > 0)
    return (
      <TechnologiesWrapper>
        <Header>Wymagania</Header>
        <BigDoneWrapper>{listItems}</BigDoneWrapper>
      </TechnologiesWrapper>
    );
  else if (requirement.length === 0) {
    return null;
  }
};

const TechnologiesWrapper = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 5px 0;
  padding: 30px 30px;
  .svg {
    width: 17px;
    height: 17px;
    fill: #1825aa;
    margin-right: 20px;
  }
  @media (min-width: ${600}px) {
    width: 100%;
  }
`;

const Header = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 20px;
`;

const BigDoneWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const DoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding-bottom: 1px solid #c1c1c1;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export default Requirements;
