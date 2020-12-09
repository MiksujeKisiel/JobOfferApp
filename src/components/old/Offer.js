import React, {forwardRef} from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
border-bottom: 1px solid rgb(240, 240, 240);
border-left: 3px solid #151515;
padding: 0 15px;
cursor: pointer;
transition: 0.4s ease;
:hover{
    background: #f6f2fc;
}

`

const NameCompanyWrapper = styled.div`
display: flex;
align-items: flex-end;
width: 50%;
.name{
    font-size: 18px;
}
.company{
    color: #9F9C99;
    margin-left: 5px;
}
`

const AttributeLocationWrapper = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: flex-end;

.location{
    color: #9F9C99;
}
.attribute{
    border: 1px solid #9F9C99;
    padding: 5px 10px;
    color: #9F9C99;
    font-size: 14px;
    margin: 0 5px;
    transition: all 0.3 ease-in;
    :hover{
        color: black;
        border: 1px solid black;
        
    }
}
.attributes{
  
display: flex;

}

`




const Offer = forwardRef (
({company, companysize, earnings, location, name}, ref) =>{
    return(
        <Wrapper ref={ref}>
            <NameCompanyWrapper>
        <p className="name">{name}</p>
        <p className="company">in {company}</p>
        </NameCompanyWrapper>
        <AttributeLocationWrapper>
            <div className="attributes">
        <p  className="attribute">{earnings}</p>
        <p  className="attribute">React</p>
        </div>
        <p  className="location">{location}</p>
        </AttributeLocationWrapper>
       
    </Wrapper>
    )})


export default Offer
