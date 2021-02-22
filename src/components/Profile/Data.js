import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Formik,
  Field,
  Form,
  // getIn
} from "formik";
import * as Yup from "yup";
import {
  Message,
  Button,
  Input,
  Select,
  // DeleteButton,
} from "../../components/Form";
// import { ArrayWrapper, FieldArrayWrapper, ActionButton } from '../../components/Form/FormStyles';
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  width: 90%;
  @media (min-width: ${768}px) {
  }
  @media (min-width: ${1440}px) {
  }
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;

const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
`;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 15px;
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
    <Wrapper>
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
          <FormWrapper>
            <BigText>Edytuj swój profil, żeby łatwiej znaleźć pracę!</BigText>
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
              >
                <option value="Pracodawca">Pracodawca</option>
                <option value="Poszukiwacz pracy">Poszukiwacz pracy</option>
              </Field>
            </TopWrapper>

            <Button disabled={!isValid || isSubmitting} type="submit">
              Edytuj
            </Button>
          </FormWrapper>
        )}
      </Formik>
  
    </Wrapper>
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
