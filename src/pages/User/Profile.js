import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { Message, Button, Input, Select } from "../../components/Form";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  max-width: 1100px;
  @media (min-width: ${768}px) {
    margin-left: 50px;
  }
  @media (min-width: ${1440}px) {
    margin-left: 150px;
  }
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
`;

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
});
const Profile = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  if (!firebase.profile.isLoaded) return null;

  return (
    <Router>
      <Wrapper>
        <TopText
          bigText="Profil"
          smallText="Dzięki dodawaniu informacji na swój temat możesz łatwiej znaleźć pracę!"
        />
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
            experience: firebase.profile.experience, //array
            // education: firebase.profile.education, //array
            // languages: firebase.profile.languages, //array
            // skills: firebase.profile.skills, //array
            // certificates: firebase.profile.certificates, //array
            // links: firebase.profile.links, //array
            userType: firebase.profile.userType, //option
            // show: firebase.profile.show, //boolean
          }}
          validationSchema={ProfileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await editProfileTwo(values);
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
                  word="oczekiwana płaca"
                  type="text"
                  name="payment"
                  component={Input}
                />
                <Field
                  profile
                  word="profesja"
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
              <FieldArray
                name="experience"
                render={(arrayHelpers) => (
                  <ArrayWrapper>
                    {values.experience && values.experience.length > 0 ? (
                      values.experience.map((experience, index) => (
                        <FieldArrayWrapper key={index}>
                          <Field
                            long
                            name={`experience.name.${index}`}
                            word="zadania"
                            component={Input}
                          />
                             <Field
                            long
                            name={`experience.bla.${index}`}
                            word="xdxd"
                            component={Input}
                          />
                          <ButtonWrapper>
                            <ActionButton
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </ActionButton>
                          </ButtonWrapper>
                        </FieldArrayWrapper>
                      ))
                    ) : (
                      <></>
                    )}
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Dodaj oferowanie
                    </ActionButton>
                  </ArrayWrapper>
                )}
              />

              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Edytowanie" : null}
                type="submit"
              >
                Edytuj
              </Button>
            </FormWrapper>
          )}
        </Formik>
        <Message error show={error}>
          {error}
        </Message>
        <Message error show={error === false}>
          Profile updated
        </Message>
      </Wrapper>
    </Router>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (min-width: ${768}px) {
    margin-left: 40px;
  }
`;
const ActionButton = styled.button`
  border: none;
  background-color: #3c3c3c;
  padding: 5px 10px;
  margin: 5px 0;
  color: white;
  display: block;
  outline: none;
`;

const FieldArrayWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ArrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media (min-width: ${768}px) {
    padding: 0;
  }
`;

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfileTwo: actions.editProfileTwo,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
