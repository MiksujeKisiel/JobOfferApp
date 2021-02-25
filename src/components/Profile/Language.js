import React, { useEffect } from "react";
import { Formik, Field, FieldArray} from "formik";
import * as Yup from "yup";
import { Button, Select, DeleteButton } from "../../components/Form";
import {
  ArrayWrapper,
  FieldArrayWrapper,
} from "../../components/Form/FormStyles";

import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { FormWrapper } from "./ProfileStyles";

const ProfileSchema = Yup.object().shape({
  language: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(4, "too short").required("Required"), // these constraints take precedence
      type: Yup.string().min(1, "cmon").required("Required"), // these constraints take precedence
    })
  ),
});
const Language = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  if (!firebase.profile.isLoaded) return null;

  return (
    <Formik
      initialValues={{
        language: firebase.profile.language,
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await editProfileTwo(values);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, values, errors, touched }) => (
        <FormWrapper>
          <FieldArray
            name="language"
            render={(arrayHelpers) => (
              <ArrayWrapper>
                {values.language && values.language.length > 0 ? (
                  values.language.map((language, index) => (
                    <FieldArrayWrapper key={index}>
                      <Field
                        profile
                        type="text"
                        name={`language.${index}.name`}
                        component={Select}
                        defaultValue="A1"
                      >
                        <option defaultValue value="" disabled hidden>
                          Język
                        </option>
                        <option value="Angielski">angielski</option>
                        <option value="niemiecki">niemiecki</option>
                        <option value="francuski">francuski</option>
                        <option value="portugalski">portugalski</option>
                        <option value="polski">polski</option>
                        <option value="norweski">norweski</option>
                        <option value="rosyjski">rosyjski</option>
                        <option value="ukraiński">ukraiński</option>
                        <option value="duński">duński</option>
                        <option value="szwedzki">szwedzki</option>
                        <option value="hiszpański">hiszpański</option>
                        <option value="czeski">czeski</option>
                      </Field>
                      <Field
                        profile
                        type="text"
                        name={`language.${index}.type`}
                        component={Select}
                      >
                        <option value="" defaultValue disabled hidden>
                          Poziom
                        </option>
                        <option value="podstawowy">podstawowy</option>
                        <option value="średni">średni</option>
                        <option value="średnio zaawansowany">
                          średnio zaawansowany
                        </option>
                        <option value="zaawansowany">zaawansowany</option>
                        <option value="ojczysty">ojczysty</option>
                      </Field>

                      <DeleteButton
                        onClick={() => arrayHelpers.remove(index)}
                      />
                    </FieldArrayWrapper>
                  ))
                ) : (
                  <></>
                )}
                <Button profile onClick={() => arrayHelpers.push("")}>
                  Dodaj język
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
  editProfileTwo: actions.editLanguage,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
