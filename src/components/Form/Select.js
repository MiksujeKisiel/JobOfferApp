import React from "react";
import styled from "styled-components";
import { Error, Group, Label } from './FormStyles';

const StyledSelect = styled.select`
  width: 100%;
  border: none;
  border-bottom: #d3d3d3 2px solid;
  padding: 10px 0px;
  &:focus {
    border-bottom: #1b75bc 2px solid;
    outline: none;
  }
`;

export const Select = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <Group>
      <Label>{props.word}</Label>
      <StyledSelect {...field} {...props}>
        <option value={props.option}> {props.option}</option>
        <option value={props.optionTwo}> {props.optionTwo}</option>
        <option value={props.optionThree}> {props.optionThree}</option>
      </StyledSelect>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

