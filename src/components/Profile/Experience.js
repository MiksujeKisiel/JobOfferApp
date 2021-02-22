import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Field, Form, FieldArray
  // getIn
} from "formik";
import * as Yup from "yup";
import {
  Message,
  Button,
  Input,
  // Select,
  DeleteButton,
} from "../../components/Form";
import { ArrayWrapper, FieldArrayWrapper, ActionButton } from '../../components/Form/FormStyles';
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  max-width: 1100px;
  padding-bottom: 40px;

`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;


const ProfileSchema = Yup.object().shape({
});
const Experience = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  if (!firebase.profile.isLoaded) return null;

  // const ErrorMessage = ({ name }) => (
  //   <Field
  //     name={name}
  //     render={({ form }) => {
  //       const error = getIn(form.errors, name);
  //       const touch = getIn(form.touched, name);
  //       return touch && error ? error : null;
  //     }}
  //   />
  // );
  return (
      <Wrapper>
        <Formik
          initialValues={{
            experience: firebase.profile.experience
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
                name="experience"
                render={(arrayHelpers) => (
                  <ArrayWrapper>
                    {values.experience && values.experience.length > 0 ? (
                      values.experience.map((experience, index) => (
                        <FieldArrayWrapper key={index}>
                          <Field
                            long
                            name={`experience.${index}.name`}
                            word="zadania"
                            component={Input}
                          />
                          <Field
                            long
                            name={`experience.${index}.type`}
                            word="xdxd"
                            component={Input}
                          />

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
                      Dodaj oferowanie
                    </ActionButton>
                 
                    <Button
                disabled={!isValid || isSubmitting}
               
                type="submit"
              >
                Edytuj
              </Button>
                  </ArrayWrapper>
                )}
              />
              
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
  editProfileTwo: actions.editExperience,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);