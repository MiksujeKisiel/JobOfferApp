import React, {useState} from 'react'
import styled from 'styled-components'
// import { db } from '../firebase';


const Wrapper = styled.div`
height: calc(100vh - 100px);
display: flex;
justify-content: center;
align-items: center;
@media (min-width: ${768}px) {
    background-image: linear-gradient(#933B78, #E03078)

  }
`
const Text = styled.p`
color: rgb(127,144,156);
font-size: 30px;
width: 100%;
margin: 0 auto 0 0;

`
const FormWrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 20px;
background: white;
align-items: center;
max-width: 300px;
padding: 0 20px;
@media (min-width: ${768}px) {
   width: 700px;
   max-width: 700px;
   flex-direction: row;
   flex-wrap: wrap;
   padding: 30px;
 
  }
div{
  margin-top: 15px;
;
}

`
const Input = styled.input`
display: block;
border: 1px solid rgba(0, 0, 0, 0.125);
padding: 8px;
box-shadow: 0 0 10px rgba(25, 25, 25, 0.1);
margin: 5px 0;
@media (min-width: ${768}px) {
  width: 300px;
  padding: 12px;
  }
`
const Label = styled.label`
color: #9AA1B3;
font-weight: bold;
font-size: 13px;
`
const Button = styled.button`
background: #4373D9;
border: none;
min-width: 150px;
max-width: 250px;
padding: 10px 0;
display: block;
color: white;
border-radius: 20px;
@media (min-width: ${768}px) {
 padding: 15px 0;
 margin-top: 20px;
  }
`

const Form = styled.form`
@media (min-width: ${768}px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  }
`
const OfferBox = () => {
    // const [ company, setCompany] = useState("");
    // const [ companySize, setCompanySize] = useState("");
    // const [ earnings, setEarnings] = useState("");
    // const [ location, setLocation] = useState("");
    // const [ name, setName] = useState("");

    // const sendOffer = (e) =>{
    //     e.preventDefault();

    //     db.collection("offer").add({
    //         company: company,
    //         companysize: companySize,
    //         earnings: earnings,
    //         location: location,
    //         name: name

    //     });
    //     setCompany("");
    //     setCompanySize("");
    //     setEarnings("");
    //     setLocation("");
    //     setName("");

        

    // }

    return (
      <Wrapper>

        <FormWrapper>
          <Text>Post offer</Text>
             <Form>
            {/* <div>
              <Label>Name</Label>
              <Input
               onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
            />
            </div>
              <div>
              <Label>Company</Label>
            <Input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            required
            />
            </div>
            <div>
              <Label>Company</Label>
            <Input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            required
            />
            </div>
            <div>
              <Label>Company size</Label>
              <Input
              onChange={(e) => setCompanySize(e.target.value)}
            value={companySize}
            type="text"
            required
            />
            </div>
            <div>
              <Label>Earnings</Label>
              <Input
              onChange={(e) => setEarnings(e.target.value)}
            value={earnings}
            type="text"
            required
            />
            </div>
            <div>
              <Label>Location</Label>
              <Input
              onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            required
            />
            </div>
         
<Button
onClick={sendOffer}
type="submit"
>Post offer</Button>  */}
</Form>
        </FormWrapper>
        </Wrapper>
    )
}

export default OfferBox
