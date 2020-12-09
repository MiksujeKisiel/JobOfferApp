import React from "react";
import {
  Form,
  StyledLink,
  FormWrapper,
  Wrapper,
  Text,
  Label,
  Input,
  Button,
  Group,
} from "./FormStyles";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("the email is required."),
  password: Yup.string().required("the password is required"),
});

export default function Login() {
  return (
    <Wrapper>
      <FormWrapper>
        <Text>Sign In</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Group>
                <Label>Email</Label>
                <Input type="email" name="email" />
                <ErrorMessage name="email"></ErrorMessage>
              </Group>

              <Group>
                <Label>Password</Label>
                <Input type="password" name="password" />
                <ErrorMessage name="password"></ErrorMessage>
              </Group>
              <Button type="submit">Log in</Button>
            </Form>
          )}
        </Formik>

        <div className="links">
          <StyledLink to="/forgot-password"> forgot password?</StyledLink>
          <p>
            Don't have an account?{" "}
            <StyledLink to="/signup">create account</StyledLink>
          </p>
        </div>
      </FormWrapper>
    </Wrapper>
  );
}

