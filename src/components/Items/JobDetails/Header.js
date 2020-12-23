import React from "react";
import styled from "styled-components";
import { ReactComponent as Marker } from "../../../assets/svg/marker.svg";
import { ReactComponent as JobTime } from "../../../assets/svg/jobtime.svg";
import { ReactComponent as JobType } from "../../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../../assets/svg/joblvl.svg";
import { ReactComponent as Money } from "../../../assets/svg/money.svg";
import { ReactComponent as Talk } from "../../../assets/svg/talk.svg";
import { ReactComponent as Office } from "../../../assets/svg/office.svg";

const OfferHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 10px 0;
  padding: 0px 0 30px;
  @media (min-width: ${600}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TopWrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  .office {
    fill: #f1f1f1;
    height: 60px;
    width: 60px;
    margin: 20px auto 20px;
    display: block;
  }
  @media (min-width: ${350}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .office {
      fill: #f1f1f1;
      width: 50px;
      margin: 0;
    }
  }
  @media (min-width: ${600}px) {
    .office {
      height: 60px;
      width: 60px;
    }
   
    padding: 0 20px 20px;
  }
  @media (min-width: ${1024}px) {
width: 60%;
padding-top: 10px;
padding: 10px 20px;
  }
`;

const Title = styled.h2`
  font-size: 19px;
  line-height: 125%;

  span {
    font-size: 14px;
    font-weight: 400;
    display: block;
  }
  @media (min-width: ${350}px) {
    width: calc(100% - 100px);
    margin-left: 20px;
    height: auto;
  }
  @media (min-width: ${600}px) {
    font-size: 24px;
    width: 80%;
    span {
      font-size: 15px;
    }
  }

`;

const Text = styled.p`
  font-size: 14px;
  margin-left: 5px;
  @media (min-width: ${1024}px) {
    font-size: 15px;
  }

`;

const MoneyWrapper = styled.div`
  display: flex;
  padding: 0 15px;
  border-left: 2px solid #1825AA;
  align-items: center;
  background: #e7e9f6;
  margin: 0 0 10px;
  padding: 15px 15px;
  width: 100%;
  .money {
    width: 100px;
    fill: #1825AA;
  }
  @media (min-width: ${1024}px) {
    width: 40%;
    padding: 10px 0 10px 15px;
    border-left: none;
  }
 
`;

const BigText = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #1825AA;
  line-height: 100%;
  @media (min-width: ${600}px) {
    display: inline;
  }
`;
const MoneyText = styled.p`
  font-size: 14px;
  color: #1825AA;
  @media (min-width: ${600}px) {
    display: inline;
    margin-left: 8px;
   }
   @media (min-width: ${1024}px) {
    display: block;
    margin-left: 0;
}
`;



const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 15px;
  @media (min-width: ${600}px) {
    width: 45%;
    max-width: 300px;
  }
`;

const SvgWrapper = styled.div`
  background: #e4e6f3;
  width: 39px;
  height: 39px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  .svg {
    width: 16px;
    height: 20px;
    fill: #1825AA;
  }
  @media (min-width: ${1024}px) {
    .svg {
    width: 20px;
    height: 22px;
    fill: #1825AA;
  }
  height: 42px;
  width: 42px;
  }
`;

const Header = ({
  name,
  companyName,
  earnings,
  location,
  interview,
  contract,
  timelapse,
  employmentType,
}) => {
 
  return (
    <OfferHeader>
      <TopWrapper>
        <Office className="office" />
        <Title company>
          {name}
          <span>{companyName}</span>
        </Title>
      </TopWrapper>
      <MoneyWrapper>
        <SvgWrapper>
          <Money className="money" />
        </SvgWrapper>
        <div>
          <BigText>{earnings}</BigText>
          <MoneyText>brutto / mies.</MoneyText>
        </div>
      </MoneyWrapper>
      <InfoWrapper>
        <SvgWrapper>
          <Marker className="svg" />
        </SvgWrapper>
        <Text>{location}</Text>
      </InfoWrapper>
      <InfoWrapper>
        <SvgWrapper>
          <Talk className="svg" />
        </SvgWrapper>
        <Text>{interview}</Text>
      </InfoWrapper>
      <InfoWrapper>
        <SvgWrapper>
          <JobType className="svg" />
        </SvgWrapper>
        <Text>{contract}</Text>
      </InfoWrapper>
      <InfoWrapper>
        <SvgWrapper>
          <JobTime className="svg" />
        </SvgWrapper>
        <Text>{timelapse}</Text>
      </InfoWrapper>
      <InfoWrapper>
        <SvgWrapper>
          <JobLevel className="svg" />
        </SvgWrapper>
        <Text>{employmentType}</Text>
      </InfoWrapper>
    </OfferHeader>
  );
};

export default Header;
