import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ReactComponent as JobType } from "../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../assets/svg/joblvl.svg";
import { ReactComponent as Marker } from "../../assets/svg/marker.svg";
import { ReactComponent as Office } from "../../assets/svg/office.svg";
import { ReactComponent as JobTime } from "../../assets/svg/jobtime.svg";
import { Link } from "react-router-dom";

import Attribute from "./Attribute";

const JobList = ({ jobs, id }) => {
  const { date, location, employmentType, contract, companyName, name, timelapse } = jobs;
  return (
    <Wrapper to={"job/" + id} key={id}>
      <OfficeWrapper>
        <Office className="office" />
      </OfficeWrapper>
      <NameCompanyWrapper>
        <JobName>{name}</JobName>
        <CompanyWrapper>
          <CompanyName>{companyName}</CompanyName>
        </CompanyWrapper>
      </NameCompanyWrapper>

      <AttributeLocationWrapper>
      <Attribute text={employmentType}>
      <Attribute text={contract}>
          <JobType className="svg" />
        </Attribute>
          <JobLevel className="svg" />
        </Attribute>
        <Attribute text={timelapse}>
          <JobTime className="svg" />
        </Attribute>
        <Attribute text={location}>
          <Marker className="svg" />
        </Attribute>
     
   
      </AttributeLocationWrapper>
      <DateWrapper>
        <Date>Opublikowana: {date}</Date>
      </DateWrapper>
    </Wrapper>
  );
};
const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 0;

`;
const OfficeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  .office {
    width: 60px;
    height: 50px;
    display: none;
    @media (min-width: ${768}px) {
    display: block;

  }
    
  }
    @media (min-width: ${768}px) {
    height: 100%;
  }
`;
const CompanyName = styled.p`
  font-size: 14px;
`;

const JobName = styled.p`
  color: #006cf1;
  font-weight: 600;
  font-size: 15px;
  @media (min-width: ${768}px) {
    font-size: 23px;
    line-height: 110%;
  }
`;

const NameCompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${768}px) {
    width: 70%;
    margin-left: 20px;
  }
`;

const AttributeLocationWrapper = styled.ul`
  margin: 10px 0 0;
  width: 100%;
  
  .svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    fill: #707070;
  }
  @media (min-width: ${768}px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    padding-left: 80px;
    margin: 5px 0 0;

  }
`;

const DateWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  @media (min-width: ${768}px) {
    padding-left: 80px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
`;
const Date = styled.p`
  font-size: 13px;
  margin-top: 10px;
`;

const Wrapper = styled(Link)`
font-family: 'Open sans', sans-serif;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 20px;
  border-left: 4px solid #0091ea;
  @media (min-width: ${768}px) {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 15px;
  }
  @media (min-width: ${1024}px) {
    width: 100%;  
    max-width: 1100px;
  }
 
`;

export default compose(firestoreConnect([{ collection: "jobs" }]))(JobList);
