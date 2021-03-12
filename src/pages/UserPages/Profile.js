import React, { useEffect } from "react";
import styled from "styled-components";
// import { Formik, Field, Form, FieldArray, getIn } from "formik";
// import * as Yup from "yup";
import {} from "../../components/Form";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Experience from "../../components/Users/ProfileInput/Experience";
import Language from "../../components/Users/ProfileInput/Language";
import Data from "../../components/Users/ProfileInput/Data";
import Show from "../../components/Users/ProfileInput/Show";
import Skills from '../../components/Users/ProfileInput/Skills';

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

const Profile = ({ firebase, loading, error, editProfileTwo, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  if (!firebase.profile.isLoaded) return null;


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
        <BigText>Umiejętności</BigText>
        <Skills/>
        {loading ? <TopWrapper>Zapisywanie</TopWrapper> : ""}
      </Wrapper>
    </Router>
  );
};


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
