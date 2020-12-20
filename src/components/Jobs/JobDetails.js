import React from "react";
import styled from "styled-components";
import { ReactComponent as Marker } from "../../assets/svg/marker.svg";
import { ReactComponent as JobTime } from "../../assets/svg/jobtime.svg";
import { ReactComponent as JobType } from "../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../assets/svg/joblvl.svg";
import { ReactComponent as Money } from "../../assets/svg/money.svg";
import { ReactComponent as Talk } from "../../assets/svg/talk.svg";
import { ReactComponent as Done } from "../../assets/svg/accept.svg";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';


const JobDetails = (props) => {
  const id = props.match.params.id

  const { job } = props;

  if (job){
      return(
        <Wrapper>
        <OfferHeader>
          <InfoWrapper>
            <Text company>{id}</Text>
          </InfoWrapper>
          <MoneyWrapper>
            <SvgWrapper>
              <Money className="money" />
            </SvgWrapper>
            <MoneyTextWrapper>
              <BigText>{job.companyName}</BigText>
              <Text money>brutto / mies.</Text>
            </MoneyTextWrapper>
          </MoneyWrapper>
          <InfoWrapper>
            <SvgWrapper>
              <Marker className="svg" />
            </SvgWrapper>
            <Text>{job.location}</Text>
          </InfoWrapper>
          <InfoWrapper>
            <SvgWrapper>
              <Talk className="svg" />
            </SvgWrapper>
            <Text>{job.type}</Text>
          </InfoWrapper>
          <InfoWrapper>
            <SvgWrapper>
              <JobType className="svg" />
            </SvgWrapper>
            <Text>Umowa o prace</Text>
          </InfoWrapper>
          <InfoWrapper>
            <SvgWrapper>
              <JobTime className="svg" />
            </SvgWrapper>
            <Text>Pełny etat</Text>
          </InfoWrapper>
          <InfoWrapper>
            <SvgWrapper>
              <JobLevel className="svg" />
            </SvgWrapper>
            <Text>Wyższy specjalista (Senior)</Text>
          </InfoWrapper>
        </OfferHeader>
        <TechnologiesWrapper>
          <Header>Technologie, których używamy</Header>
          <Text technologies>Wymagane</Text>
          <TechnologyWrapper>
            <TechnologyText>HTML</TechnologyText>
            <TechnologyText>CSS</TechnologyText>
            <TechnologyText>REACT</TechnologyText>
            <TechnologyText>JAVASCRIPT</TechnologyText>
            <TechnologyText>Git</TechnologyText>
            <TechnologyText>SASS</TechnologyText>
          </TechnologyWrapper>
        </TechnologiesWrapper>
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
      </Wrapper>
      )
  }
  else{
    return (
        <div>
            no job detail
        </div>
        );
  }

  
  
};


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const jobs = state.firestore.data.jobs
    const job = jobs ? jobs[id] : null

    console.log(jobs)
    return{
        job: job
    }
}

const mapDispatchToProps = {
    
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'jobs'}
    ])
)(JobDetails)


const Wrapper = styled.div`
  background: #f1f1f1;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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

const Text = styled.p`
  font-size: ${(props) => (props.company ? "17px" : "15px")};
  font-weight: ${(props) => (props.company || props.technologies ? "600" : "")};
  color: ${(props) => (props.money ? "#1825aa" : "#1c1c1c")};
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

const TechnologyWrapper = styled.div`
  margin-top: 20px;
  width: auto;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
`;
const TechnologyText = styled.p`
  background: #e7e9f6;
  border-radius: 15px;
  padding: 10px 15px;
  color: #1c1c1c;
  font-size: 14px;
  margin: 10px 0 0 5px;
  transition: all 0.3 ease-in;
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

