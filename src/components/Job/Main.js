import React from "react";
import styled from "styled-components";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Offer from "./Offer";


const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
`;
const Text = styled.p`
  font-size: 25px;
  font-weight: 600;
`;
const OfferWrapper = styled.div`
  width: 100%;
`;
const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;
`;
const Main = () => {
  return (
    <Wrapper>
      <Header>
        <Text>Oferty pracy</Text>
      </Header>
      <OfferWrapper>
  
        <Offer />
      </OfferWrapper>
    </Wrapper>
  );
};

export default Main;