import React from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, Input, Select, DeleteButton } from "../../Form";
import {
  ArrayWrapper,
  FieldArrayWrapper,
} from "../../Form/FormStyles";
import * as actions from "../../../store/actions";
import { useDispatch, useSelector} from "react-redux";
import { FormWrapper } from "./ProfileStyles";

const ProfileSchema = Yup.object().shape({});
const Experience = () => {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);

  return (
    <Formik
      initialValues={{
        experience: firebase.profile.experience,
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(actions.editExperience(values));
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


export default Experience;
