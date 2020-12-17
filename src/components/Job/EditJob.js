import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { Form, FormWrapper, Wrapper, Text } from "../Items/Form/FormStyles";
import Button from "../Items/Form/Button";
import Message from "../Items/Form/Message";
import Input from "../Items/Form/Input";
import * as Yup from "yup";
import * as actions from "../../store/actions";
import Modal from "../Items/Modal/Modal";

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
const EditJob = ({ error, loading, close, editJob, show}) => {
  async function jobEditing() {
    await editJob(editJob.id);
    close();
  }

  return (
    <Modal opened={show} close={close}>
      <Wrapper>
        <FormWrapper>
          <Text>add job</Text>
          <Formik
            initialValues={{
              name: "",
              company: "",
              earnings: "",
              attribute: "",
            }}
            validationSchema={JobSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values);
              await jobEditing[editJob.id](values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <Field word="Name" type="text" name="name" component={Input} />
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
                  onClick={jobEditing}
                  disabled={loading}
                  loading={loading ? "Deleting..." : null}
                >
                  Delete job
                </Button>
              </Form>
            )}
          </Formik>
          <Button onClick={close}>Cancel</Button>
          <Message error show={error}>
            {error}
          </Message>
          <Message error show={error === false}>
            Job deleted
          </Message>
        </FormWrapper>
      </Wrapper>
    </Modal>
  );
};

const mapStateToProps = ({ job }) => ({
  loading: job.loading,
  error: job.error
});

const mapDispatchToProps = {
  editJob: actions.editJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
