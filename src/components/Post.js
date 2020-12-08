import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import Offer from './Offer'
import OfferBox from './OfferBox';

const Wrapper = styled.div``


function Post(){
const [offer, setOffer] = useState([]);

useEffect(() => {
    db.collection("offer").onSnapshot((snapshot) =>
      setOffer(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

    return (
        <Wrapper>
          <OfferBox/>
            {offer.map((offer) =>(
                <Offer
                company={offer.company}
                companysize={offer.companysize}
                earnings={offer.earnings}
                location={offer.location}
                name={offer.name}     
                />
             ) )}
            
        </Wrapper>
    )
}

export default Post
