import React from "react";
import styled from "styled-components";
import { ReactComponent as Suitcase } from "../../assets/svg/suitcase.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #dfe1e6;
  width: 300px;
  height: 200px;
  margin: 20px;
  padding: 20px 0 20px 20px;
  cursor: pointer;
  .svg {
    width: 16px;
    height: 16px;
    fill: #172b4d;
    margin-right: 8px;
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

const UserList = ({ users, userid }) => {
  if (users.show === false) {
    return null;
  } else {
    return (
      <Wrapper to={"user-profile-details/" + userid}>
        <SmallWrapper name>
          <TopText>
            {users.firstName} {users.lastName}
          </TopText>
        </SmallWrapper>
        <UserType>{users.userType}</UserType>
        <SmallWrapper>
          <Suitcase className="svg" /> <Text>{users.profession}</Text>
        </SmallWrapper>
        <SmallWrapper>
          <Mail className="svg" /> <Text>{users.email}</Text>
        </SmallWrapper>
        <SmallWrapper>
          <Mail className="svg" /> <Text>{users.phone}</Text>
        </SmallWrapper>
      </Wrapper>
    );
  }
};

export default UserList;
