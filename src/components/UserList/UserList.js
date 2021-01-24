import React from "react";
import styled from "styled-components";
import { ReactComponent as Suitcase } from "../../assets/svg/suitcase.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
const Wrapper = styled.div`
  box-shadow: rgba(25, 25, 25, 0.1) 3px 5px;
  width: 300px;
  height: 200px;
  margin: 20px;
  .svg {
    width: 15px;
    height: 15px;
    fill: #172b4d;
  }
`;
const Text = styled.p``;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserList = ({ users }) => {
    if (users.show === false){
        return null
      }
  else {
    return (
      <Wrapper>
        <Text>{users.firstName}</Text>
        <Text>{users.lastName}</Text>
        <Text>Customer</Text>
        <SmallWrapper>
          <Suitcase className="svg" /> <Text>Programista</Text>
        </SmallWrapper>
        <SmallWrapper>
          <Mail className="svg" /> <Text>Programista</Text>
        </SmallWrapper>
        <SmallWrapper>
          <Mail className="svg" /> <Text>Programista</Text>
        </SmallWrapper>
      </Wrapper>
    );
  }
};

export default UserList;
