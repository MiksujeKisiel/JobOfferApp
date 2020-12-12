import React, { useEffect } from "react";
import { Form, FormWrapper, Wrapper, Text } from "../Form/FormStyles";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Input from "../Form/Input";
import Button from "../Form/Button";
import Reference from '../Form/Reference';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import Message from '../Form/Message';

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
        <Text>Sign In</Text>
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
              <Button 
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing up" : null}
              type="submit">Log in</Button>
            </Form>
          )}
        </Formik>
        <Message error show={error}>
        {error}   
        </Message>
        <Reference
               text="forgot your"
               link=" password"
               to="/forgot-password"
        />
      
      </FormWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
