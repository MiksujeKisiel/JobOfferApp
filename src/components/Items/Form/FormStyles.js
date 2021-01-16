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
    padding: ${(props) => (props.profile ? "20px 0" : "100px 0")};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 0;
  @media (min-width: ${768}px) {
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
