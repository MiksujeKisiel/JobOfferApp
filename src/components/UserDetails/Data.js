import React from "react";
import styled from "styled-components";
import UserBackground from "../../assets/images/userbackground.jpg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  padding: 0 0 30px;
  margin-bottom: 10px;
  @media (min-width: ${768}px) {
    border: 1px solid #deddda;
    border-radius: 15px 10px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 30px;
  @media (min-width: ${768}px) {
    height: 170px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  span{
    font-weight: 500;
  }

`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  @media (min-width: ${768}px) {
    font-size: 24px;
  }
`;
const SmallWrapper = styled.div`
  display: flex;
  padding: 0 20px;
`;

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
      <Background src={UserBackground} />
      <SmallWrapper>
        <Name>
          {firstName} {lastName}
        </Name>
      </SmallWrapper>
      <SmallWrapper>-</SmallWrapper>
      <SmallWrapper>

        <Text>Profesja: <span>{profession}</span></Text>
      </SmallWrapper>
      <SmallWrapper>
 
        <Text>Miejsce zamieszkania: <span>{location}</span></Text>
      </SmallWrapper>
      <SmallWrapper>

        <Text>Numer telefonu: <span>{phone}</span></Text>
      </SmallWrapper>
      <SmallWrapper>
     
        <Text>E-mail: <span>{email}</span></Text>
      </SmallWrapper>
    </Wrapper>
  );
};
