import React from "react";
import styled from "styled-components";
import { FormWrapper, Form,Wrapper } from "../Items/Form/FormStyles";
import { Formik, Field } from "formik";
import Input from "../Items/Form/InputUser";
import * as Yup from "yup";
import Button from '../Items/Form/Button';
import Message from '../Items/Form/Message';
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import BackgroundImage from '../Items/Form/BackgroundImage'
import forgetpasswords from '../../assets/images/forgetpasswords.jpg'

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
`
const Text = styled.p`
color: #9a9a9a;
`
const RecoverSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("the email is required."),
});

const RecoverPassword = ({error, sendEmail}) => {
  return (
      <Wrapper>
            <FormWrapper>
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values)
        await sendEmail(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, loading }) => (
        <Form>
<TextWrapper>
            <BigText>Przypomnij hasło</BigText>
            <Text>Podaj nam swój e-mail
</Text>
<Text>Wyślemy Ci link do zmiany hasła.</Text>
</TextWrapper>
            <Field word="Email" type="email" name="email" component={Input} />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Sending" : null}
              type="submit">
                  Wyślij
              </Button>
              <Message error show={error}>
        {error}
      </Message>
      <Message success show={error === false}>
          message sent succesfuly
      </Message>
    
        </Form>
      )}
    </Formik>
    </FormWrapper>
    <BackgroundImage
     src={forgetpasswords}
     bigText={"Jesteś o krok od lepszej pracy."}
     text={"Załóż konto i sprawdź, czy nie szukasz."}
     />
    </Wrapper>
  );
};

const mapStateToProps = ({auth}) => ({
    loading: auth.recoverPassword.loading,
    error: auth.recoverPassword.error
})

const mapDispatchToProps = {
    sendEmail: actions.recoverPassword

}


export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
