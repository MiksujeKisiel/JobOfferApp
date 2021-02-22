import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Formik,
  Field,
  Form,
  // getIn
} from "formik";
import * as Yup from "yup";
import {


  // DeleteButton,
} from "../../components/Form";
// import { ArrayWrapper, FieldArrayWrapper, ActionButton } from '../../components/Form/FormStyles';
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Wrapper = styled.div`
  width: 90%;
  @media (min-width: ${768}px) {
  }
  @media (min-width: ${1440}px) {
  }
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;





const Toggle = styled(Field)`
width: 30px;
height: 30px;
background: yellow;

`
const StyledButton = styled.button`
    width: 150px;
    height: 50px;
    color: yellow;
  border:  none;
  border-radius: 30px;
    background: blue;
    margin: 10px 0 0 0 ;
`

const SmallWrapper = styled.div`
display: flex;

align-items: center;

`
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
    <Wrapper>
      <Formik
        initialValues={{
            show: firebase.profile.show
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
              <SmallWrapper>
              {`${values.show}` === "true"
            ? "Udostępniam profil"
            : "Nie udostępniam profilu"}
              <Toggle    className="blue"
          type="checkbox" name="show" />
        
      </SmallWrapper>
  
       

            <StyledButton disabled={!isValid || isSubmitting} type="submit">
             Zapisz
            </StyledButton>
          </FormWrapper>
        )}
      </Formik>
  
    </Wrapper>
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
