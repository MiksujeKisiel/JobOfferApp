import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
import Button from "../Items/Form/Button";
import Message from "../Items/Form/Message";
import Input from "../Items/Form/Input";
import Select from "../Items/Form/Select";

import * as Yup from "yup";
import * as actions from "../../store/actions";

const JobSchema = Yup.object().shape({
    name: Yup.string()
    .required("name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
    company: Yup.string()
    .required("company name is required")
    .min(3, "Too short.")
    .max(25, "Too long."),
  earnings: Yup.string()
    .required("earnings required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
    location: Yup.string()
    .required("location is required")
    .min(3, "Too short.")
    .max(25, "Too long."),
    // contract: Yup.string()
    // .required("jobtime is required")
    // .min(3, "Too short.")
    // .max(25, "Too long."),
    employmentType: Yup.string()
    .required("joblevel is required")
    .min(3, "Too short.")
    .max(25, "Too long."),
    // interview: Yup.string()
    // .required("joblevel is required")
    // .min(3, "Too short.")
    // .max(25, "Too long."),
    // timelapse: Yup.string()
    // .required("timelapse is required")
    // .min(3, "Too short.")
    // .max(25, "Too long."),
 
 
 
});
const AddJob = ({ addJob, error, loading }) => {
  return (
    <Wrapper>
      <FormWrapper>
        <Text>add job</Text>
        <Formik
          initialValues={{
            name: "",
            company: "",
            earnings: "",
            location: "",
            contract: "",
            employmentType: "",
            interview: "",
            timelapse: "",
          }}
          validationSchema={JobSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await addJob(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field word="Name" type="text" name="name" component={Input} />
              <Field
                word="Nazwa firmy"
                type="text"
                name="company"
                component={Input}
              />
              <Field
                word="Zarobki"
                type="text"
                name="earnings"
                component={Input}
              />
              <Field
                word="Sposób zatrudnienia"
                type="text"
                name="interview"
                component={Select}
                option="Zdalnie"
                optionTwo="W miejscu pracy"
                optionThree="W zakładzie pracy"
           
              />
              <Field
                word="Lokalizacja"
                type="text"
                name="location"
                component={Input}
              />

              <Field
                word="Czas pracy"
                type="text"
                component={Select}
                name="timelapse"
                option="Pełny etat"
                optionTwo="Pół etatu"
                optionThree="Ćwierć etatu"
              />
              <Field
                word="Rodzaj kontraktu"
                type="text"
                name="contract"
                component={Select}
                option="Umowa o pracę"
                optionTwo="Umowa o dzieło"
                optionThree="B2B"
              />

              <Field
                word="Posada"
                type="text"
                name="employmentType"
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Adding job" : null}
                type="submit"
              >
                Add job
              </Button>
            </Form>
          )}
        </Formik>
        <Message error show={error}>
          {error}
        </Message>
        <Message error show={error === false}>
          Job added
        </Message>
      </FormWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ job }) => ({
  loading: job.loading,
  error: job.error,
});

const mapDispatchToProps = {
  addJob: actions.addJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);
