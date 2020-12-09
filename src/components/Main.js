import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

import Offer from './Offer';
import { db } from '../firebase'

const Wrapper = styled.div`
align-items: center;
justify-content: center;
max-width: 1100px;
margin: 40px auto;
display: flex;
flex-wrap: wrap;

`
const Text = styled.p`

font-size: 25px;
font-weight: 600;

`
const OfferWrapper = styled.div`
  width: 100%;
  
`
const Header = styled.header`
    width: 100%;
    margin-bottom: 10px;

`
const Main = () => {
    const [offer, setOffer] = useState([]);

useEffect(() => {
    db.collection("offer").onSnapshot((snapshot) =>
      setOffer(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
    return (
        <Wrapper>
            <Header>
            <Text>Oferty pracy</Text>
            </Header>
            <OfferWrapper>
            {offer.map((offer) =>(
                <Offer
                company={offer.company}
                companysize={offer.companysize}
                earnings={offer.earnings}
                location={offer.location}
                name={offer.name}     
                />
             ) )}
             </OfferWrapper>
      

        </Wrapper>
    )
}

export default Main
