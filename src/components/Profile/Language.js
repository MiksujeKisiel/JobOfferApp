import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Field, Form, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import {
  Message,
  Button,
  Input,
  Select,
  DeleteButton,
} from "../../components/Form";
import { ArrayWrapper, FieldArrayWrapper, ActionButton } from '../../components/Form/FormStyles';
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  width: 90%;
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
`;


const ProfileSchema = Yup.object().shape({
});
const Language = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  if (!firebase.profile.isLoaded) return null;

  const ErrorMessage = ({ name }) => (
    <Field
      name={name}
      render={({ form }) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return touch && error ? error : null;
      }}
    />
  );
  return (
      <Wrapper>
        <Formik
          initialValues={{
            language: firebase.profile.language
          }}
          validationSchema={ProfileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await editProfileTwo(values);
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, values }) => (
            <FormWrapper>
            <FieldArray
                name="language"
                render={(arrayHelpers) => (
                  <ArrayWrapper>
                    {values.language && values.language.length > 0 ? (
                      values.language.map((language, index) => (
                        <FieldArrayWrapper key={index}>
                          <Field
                            name={`language.${index}.name`}
                            word="Języki"
                            component={Input}
                          />
                          <Field
                            word="Pracownik"
                            type="text"
                            name={`language.${index}.type`}
                            component={Select}
                            defaultValue="A1"
                          >
                            <option value="" selected disabled hidden>
                              Choose here
                            </option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                          </Field>
                          <ErrorMessage name={`language.${index}.type`} />
                          <DeleteButton
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </FieldArrayWrapper>
                      ))
                    ) : (
                      <></>
                    )}
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Dodaj język
                    </ActionButton>
                  </ArrayWrapper>
                )}
              />
                      <Button
                disabled={!isValid || isSubmitting}
        
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
  
  );
};



const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfileTwo: actions.editLanguage,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);