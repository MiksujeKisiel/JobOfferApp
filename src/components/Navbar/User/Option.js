import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled.p`
  font-size: 14px;
  font-weight: 500;
  border-radius: 25px;
  font-family: "open sans";

  ${(props) =>
    props.left &&
    css`
      color: white;
    `}
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 55px;

  &:hover {
    ${(props) =>
      props.left &&
      css`
        background: #257dc1;
      `}
    .svgs {
      margin: 0 30px 0 20px;
      width: 20px;
      height: 20px;
      fill: #0060ee;
      ${(props) =>
        props.left &&
        css`
          fill: white;
        `}
    }
    ${StyledLink} {
      color: #0060ee;
      ${(props) =>
        props.left &&
        css`
          color: white;
        `}
    }
  }
  .svgs {
    margin: 0 30px 0 20px;
    width: 20px;
    height: 20px;
    ${(props) =>
      props.left &&
      css`
        fill: white;
      `}
  }
`;
const Option = ({ children, to, text, left }) => {
  return (
    <LinkWrapper to={to} left={left}>
      {children}
      <StyledLink left={left}>{text}</StyledLink>
    </LinkWrapper>
  );
};

export default Option;
