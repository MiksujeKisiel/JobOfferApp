import React from "react";
import styled from "styled-components";
import { ReactComponent as Marker } from "../../../assets/svg/marker.svg";
import { ReactComponent as JobTime } from "../../../assets/svg/jobtime.svg";
import { ReactComponent as JobType } from "../../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../../assets/svg/joblvl.svg";
import { ReactComponent as Money } from "../../../assets/svg/money.svg";
import { ReactComponent as Talk } from "../../../assets/svg/talk.svg";
import { ReactComponent as Office } from "../../../assets/svg/office.svg";

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
      <GridWrapper>
        <Office className="office" />
        <TopWrapper>
          <Title company>
            {name}
            <span>{companyName}</span>
          </Title>
        </TopWrapper>
        {!earnings ? null : (
          <MoneyWrapper>
            <SvgWrapper>
              <Money className="money" />
            </SvgWrapper>
            <div>
              <BigText>{earnings}</BigText>
              <MoneyText>brutto / mies.</MoneyText>
            </div>
          </MoneyWrapper>
        )}
      </GridWrapper>
      {!location ? null : (
        <InfoWrapper>
          <SvgWrapper>
            <Marker className="svg" />
          </SvgWrapper>
          <Text>{location}</Text>
        </InfoWrapper>
      )}
      {!interview ? null : (
        <InfoWrapper>
          <SvgWrapper>
            <Talk className="svg" />
          </SvgWrapper>
          <Text>{interview}</Text>
        </InfoWrapper>
      )}
      {!contract ? null : (
        <InfoWrapper>
          <SvgWrapper>
            <JobType className="svg" />
          </SvgWrapper>
          <Text>{contract}</Text>
        </InfoWrapper>
      )}
      {!timelapse ? null : (
        <InfoWrapper>
          <SvgWrapper>
            <JobTime className="svg" />
          </SvgWrapper>
          <Text>{timelapse}</Text>
        </InfoWrapper>
      )}
      {!employmentType ? null : (
        <InfoWrapper>
          <SvgWrapper>
            <JobLevel className="svg" />
          </SvgWrapper>
          <Text>{employmentType}</Text>
        </InfoWrapper>
      )}
    </OfferHeader>
  );
};
export default Header;

const OfferHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 10px 0;
  padding: 0px 0 30px;
  font-family: "open sans";
  .office {
    fill: #1c1c1c;
    height: 60px;
    width: 60px;
    margin: 20px auto 20px;
    display: block;
    grid-area: one;
  }
  @media (min-width: ${600}px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const TopWrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  grid-area: two;
  @media (min-width: ${350}px) {
    padding: 0 20px 20px;
  }
  @media (min-width: ${768}px) {
    padding: 10px 20px;
    border-left: 1px solid #e5e5e5;
    height: 100%;
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
  @media (min-width: ${600}px) {
    font-size: 24px;

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
  grid-area: three;
  display: flex;
  border-left: 2px solid #1825aa;
  align-items: center;
  background: #e7e9f6;
  margin: 0 0 10px;
  padding: 15px 15px;
  width: 100%;
  .money {
    width: 100px;
    fill: #1825aa;
  }
  @media (min-width: ${768}px) {
    padding: 10px 0 10px 15px;
    border-left: none;
    margin: 0;
    height: 100%;
  }
  @media (min-width: ${1024}px) {
  }
`;

const BigText = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #1825aa;
  line-height: 100%;
  @media (min-width: ${600}px) {
    display: inline;
  }
`;
const MoneyText = styled.p`
  font-size: 14px;
  color: #1825aa;
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
    margin: 10px 0 10px 30px;
    width: 40%;
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
    fill: #1825aa;
  }
  @media (min-width: ${1024}px) {
    .svg {
      width: 20px;
      height: 22px;
      fill: #1825aa;
    }
    height: 42px;
    width: 42px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-template-areas:
    "one"
    "two"
    "three";
  @media (min-width: ${600}px) {
    grid-template-columns: 100px calc(100% - 100px);
    grid-template-areas:
      "one two"
      "three three";
  }
  @media (min-width: ${768}px) {
    height: 110px;
    align-items: center;
    grid-template-columns: 15% 50% 35%;
    grid-template-areas: "one two three";
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
  }
`;