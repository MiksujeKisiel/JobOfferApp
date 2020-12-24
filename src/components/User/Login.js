import React, { useEffect } from "react";
import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Input from "../Items/Form/InputUser";
import Button from "../Items/Form/Button";
import Reference from '../Items/Form/Reference';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import Message from '../Items/Form/Message';
import BackgroundImage from '../Items/Form/BackgroundImage';
import loginimage from '../../assets/images/loginimage.jpg'
import { Link } from "react-router-dom";
import styled from 'styled-components';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("the email is required."),
  password: Yup.string().required("the password is required"),
});

function Login({login, loading, error, cleanUp}) {
  useEffect(() =>{
    return () =>{
    cleanUp();
    }
  },[cleanUp]);

  return (
    <Wrapper>
      <FormWrapper>
        <Text>Zaloguj się</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await login(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field 
               word="Email"
               type="email" 
               name="email" 
               component={Input} />
              <Field
                word="Password"
                type="password"
                name="password"
                component={Input}
              />
               <StyledLink to="/recover-password"> zapomniałeś hasła?</StyledLink>
              <Button 
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing up" : null}
              type="submit">Zaloguj się</Button>
           
            </Form>
          )}
        </Formik>
        <Message error show={error}>
        {error}   
        </Message>
        <Reference
               text="Nie masz konta?"
               link=" Zarejestruj się"
               to="/signup"
        />
      
      </FormWrapper>
      <BackgroundImage
           src={loginimage}
           bigText={"Jesteś o krok od lepszej pracy."}
           text={"Załóż konto i sprawdź, czy nie szukasz."}
      />
    </Wrapper>
  );
}


const mapStateToProps = ({auth}) => ({
  loading: auth.loading,
  error: auth.error,
})

const mapDispatchToProps = {
  login: actions.signIn,
  cleanUp: actions.clean
  
}

const StyledLink = styled(Link)`
  color: #1B75BC;
  text-align: right;

  margin: 20px 0 0 50px;
`;
export default connect(mapStateToProps, mapDispatchToProps)(Login)
