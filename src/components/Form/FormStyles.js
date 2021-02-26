import styled, { css } from "styled-components";
import { Form as FormFormik } from "formik";

export const Form = styled(FormFormik)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (min-width: ${768}px) {
    width: 250px;
  }
  @media (min-width: ${1024}px) {
    width: 400px;
  }
  @media (min-width: ${1440}px) {
    width: 500px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: ${768}px) {
    padding: 10px;
  }
  @media (min-width: ${1024}px) {
    box-shadow: ${(props) =>
      props.profile
        ? "6px 0 20px rgba(0, 0, 0, 0.75)"
        : " 6px 0 35px 0 rgba(0, 0, 0, 0.75)"};
    z-index: 2;
    padding: ${(props) => (props.profile ? "40px 0" : "10px 0")};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 0;
  height: 100vh;
  @media (min-width: ${768}px) {
    align-items: stretch;
    justify-content: flex-start;
    min-height: 800px;
    padding: 0;
  
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 300;
  font-family: "Open sans", sans-serif;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Error = styled.div`
  color: red;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.1s;
  position: absolute;
  bottom: ${({ job }) => (job ? "15px" : "0")};
  left: 0;
  font-weight: 500;
  font-size: 12px;
`;

export const Group = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
  @media (min-width: ${768}px) {
    margin: 15px 0;
    max-width: 300px;
  }
  ${(props) =>
    props.profile &&
    css`
      margin: 20px 0;
    `}
    ${(props) =>
    props.job &&
    css`
      width: 80%;
      margin: 15px auto;
      max-width: 300px;
      @media (min-width: ${768}px) {
    margin: 5px 0;
    max-width: 300px;
    width: 100%;
  }
  ${(props) =>
    props.long &&
    css`
      max-width: none;
    `}
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  color: #7481a1;
  ${(props) =>
    props.profile &&
    css`
      font-weight: 300;
      color: black;
    `}
`;

export const ActionButton = styled.button`
  border: none;
  background-color: #259dd2;
  padding: 15px 10px;
  margin: 5px 0 5px auto;
  color: white;
  display: block;
  outline: none;
  width: 200px;
`;

export const FieldArrayWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  align-items: center;
  align-content: center;
  gap: 10px;
  @media (min-width: ${768}px) {
    grid-template-columns: 200px 200px 80px;
    max-width: none;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 300px 250px 80px;
    max-width: none;
    
  }
`;

export const ArrayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${1280}px) {
    padding: 0;
    
  }
`;
