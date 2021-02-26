import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Logo from "../../components/Navbar/Logo";
import { Form, FormWrapper, Wrapper, Text } from "../../components/Form/FormStyles";
import { Message, Reference, Button, Input, BackgroundImage} from '../../components/Form';
import loginimage from "../../assets/images/loginimage.jpg";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Zły e-mail")
    .required("Adres e-mail jest wymagany"),
  password: Yup.string().required("Hasło jest wymagane"),
});

function Login({ login, loading, error, cleanUp }) {
  let history = useHistory()
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
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
            await login(values);
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
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.signIn,
  cleanUp: actions.clean,
};

const StyledLink = styled(Link)`
  color: #1b75bc;
  text-align: right;

  margin: 20px 0 0 50px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
