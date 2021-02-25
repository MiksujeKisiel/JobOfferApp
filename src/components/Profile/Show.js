import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Formik,
  Field,
  Form,
  // getIn
} from "formik";
import * as Yup from "yup";
import // DeleteButton,
"../../components/Form";
// import { ArrayWrapper, FieldArrayWrapper, ActionButton } from '../../components/Form/FormStyles';
import * as actions from "../../store/actions";
import { connect } from "react-redux";



const FormWrapper = styled(Form)`
   background: white;
  padding: 10px 15px 0;
  @media (min-width: ${768}px) {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0;
  }
  @media (min-width: ${1280}px) {
    padding: 40px 40px 0;
  }
`;

const Toggle = styled(Field)`
  width: 30px;
  height: 30px;
  background: yellow;
  margin-right: 15px;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;
const ProfileSchema = Yup.object().shape({});
const Show = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
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
        show: firebase.profile.show,
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await editProfileTwo(values);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, values, handleSubmit }) => (
        <FormWrapper onChange={handleSubmit}>
          <SmallWrapper>
            <Toggle className="blue" type="checkbox" name="show" />
            {`${values.show}` === "true"
              ? "Udostępniam profil"
              : "Nie udostępniam profilu"}
          </SmallWrapper>
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
  editProfileTwo: actions.showProfile,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
