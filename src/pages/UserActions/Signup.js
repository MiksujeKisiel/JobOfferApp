import React from "react";
import { Formik, Field } from "formik";
import register from "../../assets/images/register-min.jpg";
import {
  Message,
  Reference,
  Button,
  Input,
  BackgroundImage,
} from "../../components/Form";
import * as Yup from "yup";
import {
  Form,
  FormWrapper,
  Wrapper,
  Text,
} from "../../components/Form/FormStyles";
import * as actions from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../components/Navbar/Logo";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Błędny adres e-mail")
    .required("Adres e-mail jest wymagany"),
  password: Yup.string()
    .required("Hasło jest wymagane")
    .min(8, "Zbyt krótkie")
    .max(25, "Zbyt długie"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Hasła nie są takie same`)
    .required("Musisz potwierdzić hasło"),
});

export const Signup = () => {
  const dispatch = useDispatch();

  const [loading, error] = useSelector((state) => [
    state.auth.loading,
    state.auth.error,
  ]);

  return (
    <Wrapper>
      <FormWrapper>
        <Logo />
        <Text>Zarejestruj się</Text>
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
            await dispatch(actions.signUp(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field
                word="Imię"
                type="text"
                name="firstName"
                component={Input}
              />
              <Field
                word="Nazwisko"
                type="text"
                name="lastName"
                component={Input}
              />
              <Field
                word="Adres e-mail"
                type="email"
                name="email"
                component={Input}
              />
              <Field
                word="Hasło"
                type="password"
                name="password"
                component={Input}
              />
              <Field
                word="Potwierdź hasło"
                type="password"
                name="confirmPassword"
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Rejestrowanie" : null}
                type="submit"
              >
                Zarejestruj się
              </Button>
              <Message error show={error}>
          {error}
        </Message>
            </Form>
          )}
        </Formik>
        <Reference text="Masz konto?" link=" Zaloguj się" to="/login" />
      
      </FormWrapper>
      <BackgroundImage
        src={register}
        bigText={"Jesteś o krok od lepszej pracy."}
        text={"Załóż konto i sprawdź, czy nie szukasz."}
      />
    </Wrapper>
  );
};

