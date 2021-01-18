import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ReactComponent as JobType } from "../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../assets/svg/joblvl.svg";
import { ReactComponent as Marker } from "../../assets/svg/marker.svg";
import { ReactComponent as Suitcase } from "../../assets/svg/suitcase.svg";
import { ReactComponent as Office } from "../../assets/svg/office.svg";

import { Link } from "react-router-dom";

const UserJobList = ({ jobs, loggedIn }) => {
  const {
    location,
    employmentType,
    contract,
    companyName,
    name,
    userid,
  } = jobs;
  if (userid === loggedIn) {
    return (
      <StyledLink to={"job/" + jobs.id}>
        <Wrapper>
          <OfficeWrapper>
            <Office className="office" />
          </OfficeWrapper>
          <NameCompanyWrapper>
            <JobName>{name}</JobName>
            <CompanyWrapper>
              <Suitcase className="suitcase" />
              <CompanyName>{companyName}</CompanyName>
            </CompanyWrapper>
          </NameCompanyWrapper>
          <AttributeLocationWrapper>
            <SmallWrapper>
              <Marker className="svg" />{" "}
              <AttributeText>{location}</AttributeText>
            </SmallWrapper>
            <SmallWrapper>
              <JobType className="svg" />
              <AttributeText>{contract}</AttributeText>
            </SmallWrapper>
            <SmallWrapper>
              <JobLevel className="svg" />
              <AttributeText>{employmentType}</AttributeText>
            </SmallWrapper>
          </AttributeLocationWrapper>
          <DateWrapper>
            <Date>Opublikowana: 26 grudnia 2020</Date>
          </DateWrapper>
        </Wrapper>
      </StyledLink>
    );
  } else {
    return null;
  }
};
const StyledLink = styled(Link)`
  z-index: 20;
  max-width: 1100px;
`;

const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 0;
  .suitcase {
    fill: #0060ee;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    @media (min-width: ${768}px) {
      display: none;
    }
  }
`;
const OfficeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  @media (min-width: ${768}px) {
    height: 100%;
  }
`;
const CompanyName = styled.p`
  font-size: 15px;
`;

const JobName = styled.p`
  color: #006cf1;

  font-size: 15px;
  @media (min-width: ${768}px) {
    font-size: 21px;
  }
`;

const NameCompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  @media (min-width: ${768}px) {
    width: 70%;
    margin-left: 30px;
  }
`;

const AttributeLocationWrapper = styled.div`
  margin: 10px 0 0;
  width: 100%;
  .svg {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    fill: #707070;
  }
  @media (min-width: ${768}px) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 90px;
    .svg {
      margin-right: 6px;
    }
  }
`;

const AttributeText = styled.p`
  font-size: 15px;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  @media (min-width: ${768}px) {
    margin: 5px 20px 5px 0;
  }
`;
const DateWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  @media (min-width: ${768}px) {
    padding-left: 90px;
    border-top: 1px solid #f1f1f1;
  }
`;
const Date = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 15px;
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  border-left: 5px solid #0091ea;
  z-index: 10;
  background-color: white;
  @media (min-width: ${768}px) {
    margin: 10px 0;
    max-width: 500px;
  }
  @media (min-width: ${1024}px) {
    max-width: 800px;
    overflow: hidden;
  }
  @media (min-width: ${1440}px) {
    max-width: 1200px;
    overflow: hidden;
  }
  .office {
    width: 60px;
    height: 50px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loggedIn: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(UserJobList);
