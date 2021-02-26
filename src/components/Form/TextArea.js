import React from "react";
import styled from "styled-components";
import { Error} from './FormStyles';

const Group = styled.div`
 margin: 15px 0;
  position: relative;
  width: 100%;
  height: 200px;
  @media (min-width: ${768}px) {
    margin: 15px 0;
   
  }
`

const StyledArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border: #d3d3d3 2px solid;
  resize: none;
  padding: 5px 0;
  font-size: 15px;
  border-radius: 5px;
  &:focus {
    border: #1b75bc 2px solid;
    outline: none;
  }
  @media (min-width: ${768}px) {

  
  }
`;
const Label = styled.label`
  font-size: 14px;
  color: #7481a1;
`;

export const TextArea = ({ field, long, form: { touched, errors }, ...props }) => {
  return (
    <Group>
      <Label>{props.word}</Label>
      <StyledArea  {...field} {...props}></StyledArea>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

