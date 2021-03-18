import React from "react";
import styled from "styled-components";

export const Data = ({
  profession,
  firstName,
  lastName,
  age,
  location,
  phone,
  email,
}) => {
  return (
    <Wrapper>
      <SmallWrapper>
        <Name>
          {firstName} {lastName}
        </Name>
      </SmallWrapper>
      <SmallWrapper>-</SmallWrapper>
      <SmallWrapper>
        <Text>
          Profesja: <span>{!profession ? "Brak informacji" : profession}</span>
        </Text>
      </SmallWrapper>
      <SmallWrapper>
        <Text>
          Miejsce zamieszkania:
          <span>{!location ? "Brak informacji" : location}</span>
        </Text>
      </SmallWrapper>
      <SmallWrapper>
        <Text>
          E-mail: <span>{!email ? "Brak informacji" : email}</span>
        </Text>
      </SmallWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  padding: 30px;
  margin-bottom: 10px;
  @media (min-width: ${768}px) {
    border: 1px solid #deddda;
    border-radius: 15px 10px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  span {
    font-weight: 500;
  }
  @media (min-width: ${768}px) {
    font-size: 16px;
    line-height: 200%;
  }
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  @media (min-width: ${768}px) {
    font-size: 24px;
  }
  @media (min-width: ${768}px) {
    font-size: 28px;
  }
`;
const SmallWrapper = styled.div`
  display: flex;
  padding: 0 20px;
`;
