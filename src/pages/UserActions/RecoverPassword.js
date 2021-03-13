import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Message, Button, Input, BackgroundImage} from '../../components/Form';
import { FormWrapper, Form, Wrapper } from "../../components/Form/FormStyles";
import forgetpasswords from "../../assets/images/forgetpasswords-min.jpg";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const BigText = styled.p`
  font-weight: 300;
  font-family: "Open sans", sans-serif;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  margin: 0 0 10px;
`;
const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 50px;
`;
const Text = styled.p`
  color: #9a9a9a;
`;
const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email("Błędny e-mail")
    .required("Musisz podać adres e-mail"),
});

const RecoverPassword = () => {
  const dispatch = useDispatch();

  const [error] = useSelector((state) => [
    // state.auth.recoverPassword.loading,
    state.auth.recoverPassword.error,
  ]);

  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={RecoverSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await dispatch(actions.recoverPassword(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, loading }) => (
            <Form>
              <TextWrapper>
                <BigText>Przypomnij hasło</BigText>
                <Text>Podaj nam swój e-mail</Text>
                <Text>Wyślemy Ci link do zmiany hasła.</Text>
              </TextWrapper>
              <Field word="Email" type="email" name="email" component={Input} />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Sending" : null}
                type="submit"
              >
                Wyślij
              </Button>
              <Message error show={error}>
                {error}
              </Message>
              <Message success show={error === false}>
                Wysłane
              </Message>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <BackgroundImage
        src={forgetpasswords}
        bigText={"Nie pamiętasz hasła? Nie martw się, zdarza się najlepszym."}
      />
    </Wrapper>
  );
};


export default RecoverPassword;
