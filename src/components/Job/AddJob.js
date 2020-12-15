import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
import Button from "../Items/Form/Button";
import Message from "../Items/Form/Message";
import Input from "../Items/Form/Input";
import * as Yup from "yup";
import * as actions from "../../store/actions";

const JobSchema = Yup.object().shape({
  name: Yup.string()
    .required("name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  earnings: Yup.string()
    .required("earnings required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
    company: Yup.string()
    .required("company name is required")
    .min(3, "Too short.")
    .max(25, "Too long."),
    attribute: Yup.string()
    .required("attribute is required")
    .min(3, "Too short.")
    .max(25, "Too long."),

});
const AddJob = ({addJob, error, loading}) => {
  return (
    <Wrapper>
      <FormWrapper>
        <Text>add job</Text>
        <Formik
          initialValues={{
            name: '',
            company: '',
            earnings: '',
            attribute: '',
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
              <Field
                word="Name"
                type="text"
                name="name"
                component={Input}
              />
              <Field
                word="Company"
                type="text"
                name="company"
                component={Input}
              />
              
              <Field
                word="earnings"
                type="text"
                name="earnings"
                component={Input}
              />
              <Field
                word="attributes"
                type="text"
                name="attribute"
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

const mapStateToProps = ({job}) => ({
  loading: job.loading,
  error: job.error

});

const mapDispatchToProps = {
 addJob: actions.addJob

};

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);
