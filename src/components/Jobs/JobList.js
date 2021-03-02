import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ReactComponent as Marker } from "../../assets/svg/marker.svg";
import { ReactComponent as Wallet } from "../../assets/svg/wallet.svg";
import { Link } from "react-router-dom";
import Icon from '../../assets/images/Icon.png'
// import Attribute from "./Attribute";
// import Attribute from "./Attribute";

const JobList = ({ jobs, id }) => {
  const { location, companyName, name, level, earnings } = jobs;

  return (
    <Wrapper to={"job/" + id} key={id}>
      <Image src={Icon} />
      <TopWrapper>
        <Name>{name}</Name>
        <Company>{companyName}</Company>
      </TopWrapper>
      <MidWrapper>
        <Level>{level}</Level>
        <Wallet className="svg" /> {earnings}
        <Marker className="svg" /> {location}
      </MidWrapper>
      <BottomWrapper>
        <Attribute>{location}</Attribute>
        <Attribute>{location}</Attribute>
        <Attribute>{location}</Attribute>
      </BottomWrapper>
    </Wrapper>
  );
};


const Wrapper = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  border: 1px solid #ededed;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  background: white;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  @media (min-width: ${768}px) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: ${1280}px) {
  padding: 30px;
  }
  @media (min-width: ${1440}px) {
  padding: 35px 35px 45px;
  }
  
`;
const Image = styled.img`
  width: 50px;
  height: 40px;
 
  @media (min-width: ${1440}px) {
  width: 60px;
  height: 60px;
  }
`;
const Name = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: #555454;
  @media (min-width: ${768}px) {
    font-size: 20px;
  }
  @media (min-width: ${1280}px) {
  font-size: 21px;
  }
  @media (min-width: ${1440}px) {
  font-size: 22px;
  }
`;
const Company = styled.p`
  color: #ababab;
  font-size: 13px;
  line-height: 90%;
  font-weight: 500;
  @media (min-width: ${768}px) {
    font-size: 14px;
  }
  @media (min-width: ${1280}px) {
  font-size: 15px;
  }
`;

const Level = styled.p`
  background: #D1EFFC;
  padding: 3px 10px;
  border-radius: 10px;
  color: #29B6F6;
  font-weight: 500;
  font-size: 12px;
  @media (min-width: ${768}px) {
    font-size: 13px;
  }
  @media (min-width: ${1440}px) {
    font-size: 15px;
    padding: 5px 15px;
  }

`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MidWrapper = styled.div`
  width: 100%;
  padding: 25px 0 30px 0;
  display: flex;
  align-items: center;
  font-size: 13px;
  .svg {
    width: 15px;
    height: 15px;
    margin: 0 8px 0 20px;
  }
  @media (min-width: ${768}px) {
    .svg {
    width: 17px;
    height: 17px;
  }
  font-size: 14px;
  padding: 35px 0 30px 0;
  }
  @media (min-width: ${1440}px) {
    .svg {
    width: 19px;
    height: 19px;
    margin: 0 8px 0 40px;
  }
  font-size: 15px;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
`;

const Attribute = styled.p`
font-size: 12px;
background: #F5F5F5;
color: #6B6B98;
padding: 2px 8px;
margin: 5px 0;
font-weight: 500;
border-radius: 10px;
margin-right: 10px;
@media (min-width: ${768}px) {
  font-size: 13px;
  }
  @media (min-width: ${1280}px) {
  font-size: 14px;
  }
  @media (min-width: ${1440}px) {
  padding: 3px 10px;
}
`

export default compose(firestoreConnect([{ collection: "jobs" }]))(JobList);
