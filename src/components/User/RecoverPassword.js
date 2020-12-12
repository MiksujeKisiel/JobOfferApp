import React from "react";
import styled from "styled-components";
import { FormWrapper, Form,Wrapper  } from "../Form/FormStyles";
import { Formik, Field } from "formik";
import Input from "../Form/Input";
import * as Yup from "yup";
import Button from '../Form/Button';
import Message from '../Form/Message';
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

const Text = styled.p``;

const RecoverSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("the email is required."),
});

const RecoverPassword = ({error, sendEmail}) => {
  return (
      <Wrapper>
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
          <FormWrapper>
            <Text>Recover your password</Text>
            <Field word="Email" type="email" name="email" component={Input} />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Sending" : null}
              type="submit">
                  Recover Password
              </Button>
              <Message error show={error}>
        {error}
      </Message>
      <Message success show={error === false}>
          message sent succesfuly
      </Message>
          </FormWrapper>

        </Form>
      )}
    </Formik>
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
