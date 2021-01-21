import React from "react";
import { connect } from "react-redux";
import { Form as FormFormik, Formik, Field, FieldArray } from "formik";
import {
  Message,
  Button,
  Input,
  TextArea,
  Select,
} from "../../components/Form";

import styled from "styled-components";
import * as Yup from "yup";
import * as actions from "../../store/actions";

const JobSchema = Yup.object().shape({
  name: Yup.string()
    .required("name is required.")
    .min(3, "Too short.")
    .max(50, "Too long."),
  company: Yup.string()
    .required("company name is required")
    .min(3, "Too short.")
    .max(50, "Too long."),
  earnings: Yup.string()
    .required("earnings required.")
    .min(3, "Too short.")
    .max(50, "Too long."),
  location: Yup.string()
    .required("location is required")
    .min(3, "Too short.")
    .max(50, "Too long."),
  // contract: Yup.string()
  // .required("jobtime is required")
  // .min(3, "Too short.")
  // .max(25, "Too long."),
  employmentType: Yup.string()
    .required("joblevel is required")
    .min(3, "Too short.")
    .max(50, "Too long."),
  // interview: Yup.string()
  // .required("joblevel is required")
  // .min(3, "Too short.")
  // .max(25, "Too long."),
  // timelapse: Yup.string()
  // .required("timelapse is required")
  // .min(3, "Too short.")
  // .max(25, "Too long."),
});
const AddJob = ({ addJob, error, loading, jobs, jobEditing, editJob, id}) => {
 return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: jobEditing ? jobs.name : "",
          company: jobEditing ? jobs.companyName : "",
          employees: jobEditing ? jobs.employees : "",
          earnings: jobEditing ? jobs.earnings : "",
          earningsType: jobEditing ? jobs.earningsType : "",
          location: jobEditing ? jobs.location : "",
          contract: jobEditing ? jobs.contract : "Umowa o pracę",
          employmentType: jobEditing ? jobs.employmentType : "",
          interview: jobEditing ? jobs.interview : "Rozmowa o pracę",
          timelapse: jobEditing ? jobs.timelapse : "Pełny etat",
          responsibility: jobEditing ? jobs.responsibility : [],
          requirement: jobEditing ? jobs.requirement : [],
          offer: jobEditing ? jobs.offer : [],
          about: jobEditing ? jobs.about : "",
          // date: new Date(),
        }}
        validationSchema={JobSchema}
        onSubmit={async (values, { setSubmitting }) => {
          jobEditing ? await editJob(id, values) : await addJob(values);
          // console.log(values);
          // await addJob(values);
          setSubmitting(false);
        }}
      >

      
        {({ isSubmitting, isValid, values }) => (
          <Form>
            <TextWrapper>
              <Text>informacje o zatrudniającym</Text>{" "}
            </TextWrapper>
            <InputWrapper>
              <Field word="Nazwa firmy" name="company" component={Input} />
              <Field
                word="Ilość pracowników"
                name="employees"
                component={Input}
              />
              <Field word="Lokalizacja" name="location" component={Input} />
            </InputWrapper>
            <TextWrapper>
              <Text>informacje o pracy</Text>
            </TextWrapper>
            <InputWrapper>
              <Field word="Stanowisko" name="name" component={Input} />
              <Field word="Zarobki" name="earnings" component={Input} />
              <Field
                word="Rodzaj wypłaty"
                type="select"
                component={Select}
                name="earningsType"
                option="Brutto / mies"
                optionTwo="Netto / mies"
                optionThree="Zł / h"
              />
              <Field
                word="Rozmowa o pracę"
                name="interview"
                component={Select}
                option="Zdalnie"
                optionTwo="W miejscu pracy"
                optionThree="W zakładzie pracy"
              />

              <Field
                word="Czas pracy"
                component={Select}
                name="timelapse"
                option="Pełny etat"
                optionTwo="Pół etatu"
                optionThree="Ćwierć etatu"
              />
              <Field
                word="Rodzaj kontraktu"
                name="contract"
                component={Select}
                option="Umowa o pracę"
                optionTwo="Umowa o dzieło"
                optionThree="B2B"
              />
              <Field word="Posada" name="employmentType" component={Input} />
            </InputWrapper>
            <TextWrapper>
              <Text>wymagania</Text>
            </TextWrapper>

            <FieldArray
              name="requirement"
              render={(arrayHelpers) => (
                <ArrayWrapper>
                  {values.requirement && values.requirement.length > 0 ? (
                    values.requirement.map((requirement, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          long
                          name={`requirement.${index}`}
                          word="wymagania"
                          component={Input}
                        />
                        <ButtonWrapper>
                          <ActionButton
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </ActionButton>
                          <ActionButton
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </ActionButton>
                        </ButtonWrapper>
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Dodaj wymagania
                    </ActionButton>
                  )}
                </ArrayWrapper>
              )}
            />

            <TextWrapper>
              <Text>obowiązki</Text>
            </TextWrapper>

            <FieldArray
              name="responsibility"
              render={(arrayHelpers) => (
                <ArrayWrapper>
                  {values.responsibility && values.responsibility.length > 0 ? (
                    values.responsibility.map((responsibility, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          long
                          name={`responsibility.${index}`}
                          word="zadania"
                          component={Input}
                        />
                        <ButtonWrapper>
                          <ActionButton
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </ActionButton>
                          <ActionButton
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </ActionButton>
                        </ButtonWrapper>
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      {/* show this when user has removed all friends from the list */}
                      Dodaj odpowiedzialność
                    </ActionButton>
                  )}
                </ArrayWrapper>
              )}
            />
            <TextWrapper>
              <Text>Oferujemy</Text>
            </TextWrapper>
            <FieldArray
              name="offer"
              render={(arrayHelpers) => (
                <ArrayWrapper>
                  {values.offer && values.offer.length > 0 ? (
                    values.offer.map((offer, index) => (
                      <FieldArrayWrapper key={index}>
                        <Field
                          long
                          name={`offer.${index}`}
                          word="zadania"
                          component={Input}
                        />
                        <ButtonWrapper>
                          <ActionButton
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </ActionButton>
                          <ActionButton
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </ActionButton>
                        </ButtonWrapper>
                      </FieldArrayWrapper>
                    ))
                  ) : (
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      {/* show this when user has removed all friends from the list */}
                      Dodaj oferowanie
                    </ActionButton>
                  )}
                </ArrayWrapper>
              )}
            />
            <TextWrapper>
              <Text>O firmie/pracodawcy</Text>
            </TextWrapper>
            <InputWrapper>
              <Field
                about
                word="O firmie"
                type="text"
                name="about"
                component={TextArea}
              />
            </InputWrapper>
            <SubmitButtonWrapper>
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Adding job" : null}
                type="submit"
              >
                 {jobEditing ? 'Edytuj' : 'Dodaj oferte'}
              </Button>
            </SubmitButtonWrapper>
            <Message error show={error}>
              {error}
            </Message>
            <Message error show={error === false}>
              Job added
            </Message>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );

};

const Form = styled(FormFormik)`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 20px;
  width: 90%;
  box-shadow: 0 3px 4.7px 0.3px rgba(0, 0, 0, 0.08),
    0 1px 5.9px 0.1px rgba(0, 0, 0, 0.16);
  @media (min-width: ${768}px) {
    width: 600px;
  }
  @media (min-width: ${1024}px) {
    width: 950px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  margin: 0 0 10px;
  padding: 20px 0;
  background: #d31f62;
  text-align: center;
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 20px;
  color: white;
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (min-width: ${768}px) {
    margin-left: 40px;
  }
`;
const ActionButton = styled.button`
  border: none;
  background-color: #3c3c3c;
  padding: 5px 10px;
  margin: 5px 0;
  color: white;
  display: block;
  outline: none;
`;
const mapStateToProps = ({ job }) => ({
  loading: job.loading,
  error: job.error,
});

const mapDispatchToProps = {
  addJob: actions.addJob,
  editJob: actions.editJob,
};

const FieldArrayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px 0;
`;

const ArrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  @media (min-width: ${768}px) {
    padding: 0;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);
