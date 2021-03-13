import React from "react";
import styled from "styled-components";

const About = ({ about, companyName }) => {
  if (about || companyName)
    return (
      <Wrapper>
        <div className="companyName">
          <Company>{companyName}</Company>
        </div>
        <Text>{about}</Text>
      </Wrapper>
    );
  else if (!about || !companyName) {
    return null;
  }
};
export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 10px 0;
  padding: 30px 30px;
  @media (min-width: ${600}px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .companyName {
    width: auto;
    margin: 0 40px 30px 0;
  }
`;

const Company = styled.h2``;
const Text = styled.p`
  width: 100%;
  @media (min-width: ${600}px) {
    width: 60%;
  }
  `;
