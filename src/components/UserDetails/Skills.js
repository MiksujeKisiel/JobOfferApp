import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  color: #0f69c3;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  @media (min-width: ${768}px) {
    border: 1px solid #deddda;
    border-radius: 15px 10px;
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 10px 0;
`;

const SmallWrapper = styled.ul`
  margin-top: 20px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 20px 30px 10px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Header = styled.p`
  font-size: 20px;
  color: #0f69c3;
  margin-left: 40px;
`;



// const Skills = styled.p`
//   background: #e7e9f6;
//   border-radius: 15px;
//   padding: 10px 15px;
//   color: #1c1c1c;
//   font-size: 14px;
//   margin: 10px 0 0 5px;
//   transition: all 0.3 ease-in;
// `;
export const Skills = ({ skills }) => {
  return (
    <Wrapper>
     <Header>Umiejętności i technologie</Header>
      <SmallWrapper>
      {/* {skills.map((item, i) => {
              return (
                <ExperienceWrapper key={i} value={item}>
                  <Text>{item.name}</Text> <SmallText>{item.type}</SmallText>
                </ExperienceWrapper>
              );
            })} */}
        <Text>React</Text> <Text>React</Text><Text>React</Text><Text>React</Text><Text>React</Text><Text>React</Text><Text>React</Text><Text>React</Text>
      </SmallWrapper>
    </Wrapper>
  );
};
