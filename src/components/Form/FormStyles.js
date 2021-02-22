import styled from "styled-components";
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
  align-items: center;
  @media (min-width: ${768}px) {
    padding: 10px;
  }
  @media (min-width: ${1024}px) {
    box-shadow: ${(props) =>
      props.profile ? "none" : " 6px 0 35px 0 rgba(0, 0, 0, 0.75)"};
    z-index: 2;
    height: ${(props) => (props.profile ? "" : "100%")};
    padding: ${(props) => (props.profile ? "20px 0" : "10px 0")};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 0;
  min-height: 700px;
  @media (min-width: ${768}px) {
    min-height: 900px;
    padding: 0;
    @media (min-width: ${1024}px) {
      height: 100vh;
    }
  }
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
  bottom: 0;
  left: 0;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const Group = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
  @media (min-width: ${768}px) {
    width: ${(props) => (props.long ? "100%" : "250px")};
    margin: ${(props) => (props.profile ? "15px 50px 15px 0" : "15px 0")};
    max-width: 500px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #7481a1;
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
  display: flex;
  margin: 10px 0;
`;

export const ArrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  max-width: 700px;
  @media (min-width: ${768}px) {
    padding: 0;
  }
`;