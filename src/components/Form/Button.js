import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 150px;
  background-color: #1825aa;
  width: 100%;
  border: none;
  color: white;
  margin: 40px 0;
  padding: 15px 5px;
  border-radius: 50px;
  font-size: 16px;
  max-width: 250px;
  ${(props) =>
    props.profile &&
    css`
      width: 100%;
      max-width: none;
      font-size: 16px;
      height: 50px;
      color: white;
      border: none;
      text-align: center;
      border-radius: 3px;
      background: #1ab394;
      margin: 10px auto 0 auto;
      max-width: 200px;
      @media (min-width: ${768}px) {
        max-width: 200px;
        margin: 30px 0 0 0;
      }
    `}
`;

export const Button = ({
  profile,
  children,
  disabled,
  loading,
  contain,
  color,
  ...rest
}) => {
  return (
    <StyledButton
      profile={profile}
      color={color}
      contain={contain}
      disabled={disabled}
      {...rest}
    >
      {loading ? loading : children}
    </StyledButton>
  );
};
