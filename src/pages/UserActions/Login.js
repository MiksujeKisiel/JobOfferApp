import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Logo from "../../components/Navbar/Logo";
import {
  Form,
  FormWrapper,
  Wrapper,
  Text,
} from "../../components/Form/FormStyles";
import {
  Message,
  Reference,
  Button,
  Input,
  BackgroundImage,
} from "../../components/Form";
import loginimage from "../../assets/images/loginimage-min.jpg";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

export const Login = () => {
  const dispatch = useDispatch();
  const [loading, error] = useSelector((state) => [
    state.auth.loading,
    state.auth.error,
  ]);

  let history = useHistory();
  const [t] = useTranslation();
  return (
    <Wrapper>
      <FormWrapper>
        <Logo />
        <Text>{t("login")}</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(actions.signIn(values));
            setSubmitting(false);
            history.push("/");
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field
                word={t("email")}
                type="email"
                name="email"
                component={Input}
              />
              <Field
                word={t("password")}
                type="password"
                name="password"
                component={Input}
              />
              <StyledLink to="/recover-password">zapomniałeś hasła?</StyledLink>
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "..." : null}
                type="submit"
              >
                Zaloguj się
              </Button>
              <Message error show={error}>
                {error}
              </Message>
              <Reference
                text="Nie masz konta?"
                link=" Zarejestruj się"
                to="/signup"
              />
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <BackgroundImage
        src={loginimage}
        bigText={"Nowa praca? Jesteś w dobrym miejscu"}
        text={"Mamy setki ofert pracy od najlepszych pracodawców"}
      />
    </Wrapper>
  );
};

const StyledLink = styled(Link)`
  color: #1b75bc;
  text-align: right;
  margin: 20px 0 0 50px;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Zły e-mail")
    .required("Adres e-mail jest wymagany"),
  password: Yup.string().required("Hasło jest wymagane"),
});


