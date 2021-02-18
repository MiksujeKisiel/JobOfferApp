import React from "react";
import styled from "styled-components";
import { ReactComponent as Suitcase } from "../../assets/svg/suitcase.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { Link } from "react-router-dom";


const Wrapper = styled(Link)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  
  padding: 20px 0 20px 20px;
  border-radius: 20px;
  border: 1px solid #ededed;
  cursor: pointer;
  .svg {
    width: 16px;
    height: 16px;
    fill: #172b4d;
    margin-right: 8px;
  }
  @media (min-width: ${768}px) {
    padding: 40px;
  }
`;
const TopText = styled.p`
  color: #42526e;
  font-weight: 600;
  font-size: 20px;
`;

const Text = styled.p`
  color: #42526e;
  font-size: 14px;
`;

const SmallWrapper = styled.div`
  display: flex;
  margin: ${(props) => (props.name ? "5px 0" : "10px 0")};
  align-items: center;
`;

const UserType = styled.p`
  background: #dee8ff;
  padding: 3px 5px;
  font-size: 14px;
  color: #4577c0;
  font-weight: 500;
`;

const UserList = ({ user, userid }) => {

  const { firstName, lastName, userType, profession, email, phone, show } = user

  if (show === false) {
    return null;
  } else {
    return (
      <Wrapper to={"user-profile-details/" + userid}>
        <SmallWrapper name>
          <TopText>
            {firstName} {lastName}
          </TopText>
        </SmallWrapper>
          {!userType ? <UserType>Brak informacji</UserType> : <UserType>{userType}</UserType>}
          {!profession ? null : <SmallWrapper><Suitcase className="svg" /> <Text>{profession}</Text></SmallWrapper>}
          {!email ? null : <SmallWrapper><Mail className="svg" /> <Text>{email}</Text></SmallWrapper> }
          {!phone ? null : <SmallWrapper><Mail className="svg" /> <Text>{phone}  </Text></SmallWrapper>}
      </Wrapper>
    );
  }
};

export default UserList;
