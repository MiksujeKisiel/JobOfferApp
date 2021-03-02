import React, { useEffect } from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, Input, Select, DeleteButton } from "../../Form";
import {
  ArrayWrapper,
  FieldArrayWrapper,
} from "../../Form/FormStyles";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { FormWrapper } from "./ProfileStyles";

const ProfileSchema = Yup.object().shape({});
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
    <Formik
      initialValues={{
        experience: firebase.profile.experience,
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
                        profile
                        name={`experience.${index}.name`}
                        word="Stanowisko"
                        component={Input}
                      />
                      <Field
                        profile
                        word="Zatrudnienie"
                        type="text"
                        name={`experience.${index}.type`}
                        component={Select}
                      >
                        <option value="" defaultValue disabled hidden>
                          rodzaj zatrudnienia
                        </option>
                        <option value="Freelancing">Freelancing</option>
                        <option value="Samozatrudnienie">Samozatrudnienie</option>
                        <option value="Pełny etat">
                          Pełny etat
                        </option>
                        <option value="Niepełny etat">Niepełny etat</option>
                   
                      </Field>
                      <DeleteButton
                        onClick={() => arrayHelpers.remove(index)}
                      />
                    </FieldArrayWrapper>
                  ))
                ) : (
                  <></>
                )}
                <Button
                  type="button"
                  profile
                  onClick={() => arrayHelpers.push("")}
                >
                  Dodaj oferowanie
                </Button>
              </ArrayWrapper>
            )}
          />
          <Button disabled={!isValid || isSubmitting} profile type="submit">
            Edytuj
          </Button>
        </FormWrapper>
      )}
    </Formik>
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
