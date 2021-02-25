import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Formik,
  Field,
} from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Select,
  // DeleteButton,
} from "../../components/Form";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { FormWrapper } from './ProfileStyles'


const TopWrapper = styled.div`
  @media (min-width: ${768}px) {
    display: grid;
    align-items: center;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 10px 30px;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 1fr 1fr 1fr;

  }
`;

const ProfileSchema = Yup.object().shape({});
const Data = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  if (!firebase.profile.isLoaded) return null;

  // const ErrorMessage = ({ name }) => (
  //   <Field
  //     name={name}
  //     render={({ form }) => {
  //       const error = getIn(form.errors, name);
  //       const touch = getIn(form.touched, name);
  //       return touch && error ? error : null;
  //     }}
  //   />
  // );
  return (
    <Formik
      initialValues={{
        firstName: firebase.profile.firstName,
        lastName: firebase.profile.lastName,
        location: firebase.profile.location,
        age: firebase.profile.age,
        email: firebase.profile.email,
        phone: firebase.profile.phone,
        payment: firebase.profile.payment,
        profession: firebase.profile.profession,
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await editProfileTwo(values);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, values }) => (
        <FormWrapper profile>
          <TopWrapper>
            <Field
              profile
              word="Imię"
              type="text"
              name="firstName"
              component={Input}
            />
            <Field
              profile
              word="Nazwisko"
              type="text"
              name="lastName"
              component={Input}
            />

            <Field
              profile
              word="Miejsce zamieszkania"
              type="text"
              name="location"
              component={Input}
            />
            <Field
              profile
              word="Data urodzenia"
              type="text"
              name="age"
              component={Input}
            />

            <Field
              profile
              word="E-mail"
              type="text"
              name="email"
              component={Input}
            />
            <Field
              profile
              word="Numer telefonu"
              type="text"
              name="phone"
              component={Input}
            />
            <Field
              profile
              word="Oczekiwana płaca"
              type="text"
              name="payment"
              component={Input}
            />
            <Field
              profile
              word="Profesja"
              type="text"
              name="profession"
              component={Input}
            />
            <Field
              word="Pracownik"
              type="text"
              name="userType"
              component={Select}
              profile
            >
              <option value="Pracodawca">Pracodawca</option>
              <option value="Poszukiwacz pracy">Poszukiwacz pracy</option>
            </Field>
          </TopWrapper>

          <Button profile disabled={!isValid || isSubmitting} type="submit">
            Zapisz
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfileTwo: actions.editData,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
