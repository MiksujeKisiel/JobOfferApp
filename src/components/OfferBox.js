import React, {useState} from 'react'
import styled from 'styled-components'
import { db } from '../firebase';


const Wrapper = styled.div``
const Input = styled.input``
const Button = styled.button`

`
const OfferBox = () => {
    const [ company, setCompany] = useState("");
    const [ companySize, setCompanySize] = useState("");
    const [ earnings, setEarnings] = useState("");
    const [ location, setLocation] = useState("");
    const [ name, setName] = useState("");

    const sendOffer = (e) =>{
        e.preventDefault();

        db.collection("offer").add({
            company: company,
            companysize: companySize,
            earnings: earnings,
            location: location,
            name: name

        });
        setCompany("");
        setCompanySize("");
        setEarnings("");
        setLocation("");
        setName("");

        

    }

    return (
        <Wrapper>
            <form>
            <Input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          
            />
              <Input
              onChange={(e) => setCompanySize(e.target.value)}
            value={companySize}
            type="text"
            />
              <Input
              onChange={(e) => setEarnings(e.target.value)}
            value={earnings}
            type="text"
            />
              <Input
              onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            />
              <Input
               onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            />
<Button
onClick={sendOffer}
type="submit"

>Post offer</Button>
</form>
        </Wrapper>
    )
}

export default OfferBox
