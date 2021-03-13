import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as account } from "../../../assets/svg/account.svg";
import { useSelector } from "react-redux";

const AccountMenu = ({ left }) => {
  const firebase = useSelector((state) => state.firebase);
  return (
    <Wrapper left={left}>
      <Account left={left} />
      <div>
        <BigText left={left}>
          {firebase.profile.firstName} {firebase.profile.lastName}
        </BigText>
        <Text left={left}>{firebase.auth.email}</Text>
      </div>
    </Wrapper>
  );
};
export default AccountMenu;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0 20px;
  border-bottom: #ebeced 1px solid;
  margin-bottom: 5px;
  align-items: center;
  ${(props) =>
    props.left &&
    css`
      flex-direction: column;
      border: none;
    `}
  .div {
    display: flex;
    flex-direction: column;
  }
`;

const Account = styled(account)`
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 20px;
  ${(props) =>
    props.left &&
    css`
      fill: white;
      width: 100px;
      height: 100px;
    `}
`;

const Text = styled.p`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.56);
  ${(props) =>
    props.left &&
    css`
      display: none;
    `}
`;
const BigText = styled.p`
  font-size: 24px;
  max-width: 250px;
  font-weight: 300;
  ${(props) =>
    props.left &&
    css`
      color: white;
      font-size: 20px;
      margin: 10px 0 0;
    `}
`;

