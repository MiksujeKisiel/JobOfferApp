import React, { useEffect } from "react";
import styled from "styled-components";
// import { Formik, Field, Form, FieldArray, getIn } from "formik";
// import * as Yup from "yup";
import {} from "../../components/Form";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Experience from "../../components/Profile/Experience";
import Language from "../../components/Profile/Language";
import Data from "../../components/Profile/Data";
import Show from "../../components/Profile/Show";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (min-width: ${768}px) {
    padding-left: 10px;
    max-width: 600px;
  }
  @media (min-width: ${1024}px) {
    max-width: 800px;
    padding-left: 50px;
  }
  @media (min-width: ${1280}px) {
    max-width: 1000px;
    padding-left: 60px;
  }
  @media (min-width: ${1600}px) {
    padding-left: 100px;
    max-width: 1100px;
  }
`;

// const FormWrapper = styled(Form)`
//   background: white;
//   padding: 30px 40px;
//   box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
// `;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 200;
  margin: 30px 0 10px;
  text-align: center;
`;

const TopWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 40px;
  background-color: rgba(100, 149, 15, 0.7);
  border-radius: 20px;
  z-index: 200;
`;

// const Name = styled.p`
//   font-size: 20px;
//   margin: 50px 0 0;
//   font-weight: 200;
// `;
// const ProfileSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .required("Your first name is required.")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   lastName: Yup.string()
//     .required("Your last name is required.")
//     .min(3, "Too short.")
//     .max(25, "Too long."),
//   language: Yup.array().of(
//     Yup.object().shape({
//       name: Yup.string().min(4, "too short").required("Required"), // these constraints take precedence
//       type: Yup.string().min(1, "cmon").required("Required"), // these constraints take precedence
//     })
//   ),
// });
const Profile = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
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
    <Router>
      <Wrapper>
        <TopText
          bigText="Profil"
          smallText="Dzięki dodawaniu informacji na swój temat możesz łatwiej znaleźć pracę!"
        />
        <BigText>Podstawowe dane</BigText>
        <Show />
        <Data />
        <BigText>Doświadczenie</BigText>
        <Experience />
        <BigText>Język</BigText>
        <Language />
        {loading ? <TopWrapper>Zapisywanie</TopWrapper> : ""}
      </Wrapper>
    </Router>
  );
};

// const ActionButton = styled.button`
//   border: none;
//   background-color: #259dd2;
//   padding: 15px 10px;
//   margin: 5px 0 5px auto;
//   color: white;
//   display: block;
//   outline: none;
//   width: 200px;
// `;

// const FieldArrayWrapper = styled.div`
//   display: flex;
//   margin: 10px 0;
// `;

// const ArrayWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 20px 0;
//   max-width: 700px;
//   @media (min-width: ${768}px) {
//     padding: 0;
//   }
// `;

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfileTwo: actions.editProfileTwo,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
