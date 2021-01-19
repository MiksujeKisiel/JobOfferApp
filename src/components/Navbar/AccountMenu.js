import React from "react";
import styled from "styled-components";
import { ReactComponent as Account } from "../../assets/svg/account.svg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0 20px;
  border-bottom: #ebeced 1px solid;
  margin-bottom: 5px;
  align-items: center;
  .svg {
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 20px;
  }
  .div {
    display: flex;
    flex-direction: column;
    
  }
`;

const Text = styled.p`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.56);
`;
const BigText = styled.p`
  font-size: 24px;
  max-width: 250px;
  font-weight: 300;
`;

const AccountMenu = ({firstName, lastName, email}) => {
  return (
    <Wrapper>
      <Account className="svg" />
      <div>
        <BigText>{firstName} {lastName}</BigText>
        <Text>{email}</Text>
      </div>
    </Wrapper>
  );
};

export default AccountMenu;
