import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Select,
} from "../../../components/Form";
import * as actions from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FormWrapper } from "./ProfileStyles";

const TopWrapper = styled.div`
  @media (min-width: ${768}px) {
    display: grid;
    align-items: center;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 10px 30px;
  }
  @media (min-width: ${1024}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProfileSchema = Yup.object().shape({});
const Data = () => {

  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);


  return (
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
        userType: firebase.profile.userType
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(actions.editData(values));
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid}) => (
        <FormWrapper profile>
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
              word="E-mail"
              type="text"
              name="email"
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
              profile
            >
              <option value="Bezrobotny">Bezrobotny</option>
              <option value="Pracodawca">Pracodawca</option>
            </Field>
          </TopWrapper>

          <Button profile disabled={!isValid || isSubmitting} type="submit">
            Zapisz
          </Button>
        </FormWrapper>
      )}
    </Formik>
  );
};



export default Data;
