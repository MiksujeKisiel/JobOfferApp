import React from "react";
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px 20px 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  @media (min-width: ${768}px) {
    border: 1px solid #DEDDDA;
    border-radius: 15px 10px;
    font-size: 20px;
  }
`;


const Text = styled.li`
  font-weight: 400;
  margin-right: 25px;
  font-size: 14px;
  margin: 5px 25px 5px 0;
  @media (min-width: ${768}px) {
    font-size: 15px;
  }
  
`;
const SmallWrapper = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

 
`;


export const Education = ({ education }) => {
  const listItems = education.slice(0).map((text) => <Text>{text} profil, lata</Text>);
  return <Wrapper>Edukacja
    <SmallWrapper>{listItems}  </SmallWrapper></Wrapper>;
};