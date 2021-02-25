import React from "react";
import styled, {css} from "styled-components";
import { Error, Group, Label} from './FormStyles';

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: #d3d3d3 2px solid;
  padding: 10px 0;
  &:focus {
    border-bottom: #1b75bc 2px solid;
    outline: none;
  }
  ${(props) =>
        props.profile &&
        css`
      
        `}
`;

export const Input = ({ field, long, profile, form: { touched, errors }, ...props }) => {
  return (
    <Group profile={profile} long={long}>
      <Label profile={profile}>{props.word}</Label>
      <StyledInput  profile={profile}  {...field} {...props}></StyledInput>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

