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
        props.job &&
        css`
      width: 100%;
    padding: 9px 10px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #C3C3C3;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-bottom: 14px;
    &:focus {
    border-bottom: #1b75bc 1px solid;
    outline: none;
  }
        `}
`;

export const Input = ({ job, field, long, profile, form: { touched, errors }, ...props }) => {
  return (
    <Group job={job} profile={profile} long={long}>
      <Label profile={profile}>{props.word}</Label>
      <StyledInput job={job}  profile={profile}  {...field} {...props}></StyledInput>
      <Error job={job} show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

