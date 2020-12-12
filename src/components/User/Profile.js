import React, {useEffect} from "react";

import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { Form, FormWrapper, Wrapper, Text } from "../Form/FormStyles";
import Button from "../Form/Button";
import Message from "../Form/Message";
import Input from "../Form/Input";
import * as Yup from "yup";
import * as actions from "../../store/actions";

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  lastName: Yup.string()
    .required('Your last name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
    confirmPassword: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
const Profile = ({ firebase, loading, error, editProfile, cleanUp}) => {
  useEffect(() =>{
    return () =>{
    cleanUp();
    }
  },[cleanUp]);

  if (!firebase.profile.isLoaded) return null;

  return (
    <Wrapper>
      <FormWrapper>
        <Text>Edit profile</Text>
        <Formik
          initialValues={{
            firstName: firebase.profile.firstName,
            lastName: firebase.profile.lastName,
            email: firebase.auth.email,
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ProfileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
           await editProfile(values);
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
                type="submit"
              >
                Sign up
              </Button>
            </Form>
          )}
        </Formik>  
        <Message error show={error}>
        {error}   
        </Message>
        <Message error show={error === false}>
        Profile updated  
        </Message>
      </FormWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
