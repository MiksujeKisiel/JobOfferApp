import React, {useEffect} from "react";
import { Formik, Field } from "formik";
import Input from "../Items/Form/Input";
import Button from "../Items/Form/Button";
import Reference from '../Items/Form/Reference';
import Message from '../Items/Form/Message';
import * as Yup from "yup";
import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Your last name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
  email: Yup.string().email("invalid email").required("the email is required."),
  password: Yup.string()
    .required("the password is required")
    .min(8, "Too short")
    .max(25, "Too long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password"),
});

const Signup = ({ signUp, loading, error, cleanUp }) => {
  useEffect(() =>{
    return () =>{
    cleanUp();
    }
  },[cleanUp])
  return (
    <Wrapper>
      <FormWrapper>
        <Text>Sign Up</Text>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await signUp(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field
                word="First Name"
                type="text"
                name="firstName"
                component={Input}
              />
              <Field
                word="Last Name"
                type="text"
                name="lastName"
                component={Input}
              />
              <Field word="Email" type="email" name="email" component={Input} />
              <Field
                word="Password"
                type="password"
                name="password"
                component={Input}
              />
              <Field
                word="Confirm Password"
                type="password"
                name="confirmPassword"
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing up" : null}
                type="submit">
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
        <Reference
        text="Have you got an account? "
        link="log in"
        to="/login"/>
        <Message error show={error}>
        {error}   
        </Message>
      </FormWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
