import React from "react";
import styled from "styled-components";
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
`;

export const Input = ({ field, long, form: { touched, errors }, ...props }) => {
  return (
    <Group long={long}>
      <Label>{props.word}</Label>
      <StyledInput {...field} {...props}></StyledInput>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

