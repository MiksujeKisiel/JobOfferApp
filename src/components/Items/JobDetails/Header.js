import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Marker } from "../../../assets/svg/marker.svg";
import { ReactComponent as JobTime } from "../../../assets/svg/jobtime.svg";
import { ReactComponent as JobType } from "../../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../../assets/svg/joblvl.svg";
import { ReactComponent as Money } from "../../../assets/svg/money.svg";
import { ReactComponent as Talk } from "../../../assets/svg/talk.svg";



const Text = styled.p``
const OfferHeader = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 10px 0;
  padding: 30px 0;
 
  @media (min-width: ${600}px) {

    max-width: 1280px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .svg {
    width: 40px;
    height: 44px;
    fill: #1825aa;
    background: #e4e6f3;
    padding: 11px;
    border-radius: 100px;
    margin-right: 10px;
  }
  .money {
    width: 60px;
    height: 60px;
    fill: #1825aa;
    padding: 11px 2px;
    margin-right: 5px;
  }
`;

const BigText = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #1825aa;
  margin-bottom: 3px;
`;

const MoneyWrapper = styled.div`
  display: flex;
  border-left: 3px solid #1825aa;
  align-items: center;
  background: #e7e9f6;
  margin: 20px 0;
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  @media (min-width: ${600}px) {
    width: 50%;
  }
`;

const MoneyTextWrapper = styled.div``;
const SvgWrapper = styled.div``;

const Header = ({name, companyName, earnings, location, interview, contract, timelapse, employmentType}) => {
   console.log(name)
  return (
        <OfferHeader>
        <InfoWrapper>
          <Text company>{name}</Text>
          <Text company>{companyName}</Text>
        </InfoWrapper>
        <MoneyWrapper>
          <SvgWrapper>
            <Money className="money" />
          </SvgWrapper>
          <MoneyTextWrapper>
            <BigText>{earnings}</BigText>
            <Text money>brutto / mies.</Text>
          </MoneyTextWrapper>
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
    )
}



export default Header
