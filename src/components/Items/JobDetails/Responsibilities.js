import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Done } from "../../../assets/svg/accept.svg";


const Text = styled.p``

const Responsibilities = () => {
    
    return (
        <TechnologiesWrapper>
        <Header>Twój zakres obowiązków</Header>
        <BigDoneWrapper>
          <DoneWrapper>
        <Done className="svg" />
        <DoneText>Bardzo dobra znajomość reacta</DoneText>
        </DoneWrapper>
        <DoneWrapper>
        <Done className="svg" />
        <Text>Optymalizowanie projektów pod względem szybkości</Text>
        </DoneWrapper>
        <DoneWrapper>
        <Done className="svg" />
        <Text>Bardzo dobra znajomość reacta</Text>
        </DoneWrapper>
        <DoneWrapper>
        <Done className="svg" />
        <Text>Bardzo dobra znajomość reacta</Text>
        </DoneWrapper>
        </BigDoneWrapper>
        </TechnologiesWrapper>
    )
}

const TechnologiesWrapper = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 5px 0;
  padding: 30px 15px;
  border-radius: 10px;
  .svg {
    width: 22px;
    height: 22px;
    padding-top: 3px;
    fill: #1825aa;
    margin-right: 20px;
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
`

const DoneWrapper = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
margin: 10px;
`

const DoneText = styled.p`
  font-size: 14px;
  font-weight: 400;
`


export default Responsibilities
