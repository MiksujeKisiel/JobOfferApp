import styled from 'styled-components';
import {

    Form,
  } from "formik";

  export const FormWrapper = styled(Form)`
  background: white;
  padding: 10px 15px;
  @media (min-width: ${768}px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: flex-end;
  }
  @media (min-width: ${1280}px) {
    padding: 40px;
  }
  @media (min-width: ${1600}px) {
    padding: 40px 40px;
  }
`;