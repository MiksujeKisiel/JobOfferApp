import React from "react";
import styled from "styled-components";
import { Error, Group } from './FormStyles';


const StyledArea = styled.textarea`
  width: 100%;
  border: none;
  border: #d3d3d3 2px solid;
  resize: none;
  padding: 5px 0;
  font-size: 15px;
  &:focus {
    border: #1b75bc 2px solid;
    outline: none;
  }
`;
const Label = styled.label`
  font-size: 14px;
  color: #7481a1;
`;

export const TextArea = ({ field, long, form: { touched, errors }, ...props }) => {
  return (
    <Group long={long}>
      <Label>{props.word}</Label>
      <StyledArea rows="10" cols="50" {...field} {...props}></StyledArea>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

