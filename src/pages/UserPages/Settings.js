import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { Message, Button, Input } from "../../components/Form";
import * as Yup from "yup";
import * as actions from "../../store/actions";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;

  @media (min-width: ${768}px) {
    margin-left: 20px;
  }
  @media (min-width: ${1440}px) {
    margin-left: 100px;
  }
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;

`;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 15px;
`;
const Text = styled.p`
  max-width: 1100px;
  font-weight: 200;
  font-size: 15px;
  margin-bottom: 50px;
`;

const ProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
    password: Yup.string()
    .required("Hasło jest wymagane")
    .min(8, "Zbyt krótkie")
    .max(25, "Zbyt długie"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Hasła nie są takie same`)
    .required("Musisz potwierdzić hasło"),
});
const Profile = ({ firebase, loading, error, editProfile, cleanUp }) => {
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
          bigText="Ustawienia"
          smallText="Możesz zmieniać tu email oraz hasło"
        />
        <Formik
          initialValues={{
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
            <FormWrapper>
              <BigText>Zmień email oraz hasło</BigText>
              <Text>
                Po zmianie adresu email wyślemy na nowy adres wiadomość
                zawierającą link aktywacyjny. Nowy adres email stanie się Twoim
                loginem dopiero, kiedy klikniesz w link aktywacyjny.
              </Text>
              <Field
                word="Nowy e-mail"
                type="email"
                name="email"
                component={Input}
                long
              />

              <Field
                word="Hasło"
                type="password"
                name="password"
                component={Input}
                long
              />
              <Field
                word="Potwierdź hasło"
                type="password"
                name="confirmPassword"
                component={Input}
                long
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

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
