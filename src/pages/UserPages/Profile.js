import React, { useEffect } from "react";
import styled from "styled-components";
// import { Formik, Field, Form, FieldArray, getIn } from "formik";
// import * as Yup from "yup";
import {
  Message,
} from "../../components/Form";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Experience from '../../components/Profile/Experience';
import Language from '../../components/Profile/Language';
import Data from '../../components/Profile/Data';
import Show from '../../components/Profile/Show';
const Wrapper = styled.div`

  justify-content: center;
  align-items: center;
;
  @media (min-width: ${768}px) {
    
  }
  @media (min-width: ${1440}px) {
    margin-left: 100px;
  }
`;

// const FormWrapper = styled(Form)`
//   background: white;
//   padding: 30px 40px;
//   box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
// `;

// const BigText = styled.p`
//   font-size: 24px;
//   font-weight: 200;
//   margin-bottom: 15px;
// `;

const TopWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  max-width: 900px; */
  position: fixed;
  right: 20px;
  bottom: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 40px;
  background-color: rgba(100,149,15, 0.7);
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
        <Show/>
        <Data/>
        <Experience/>
        <Language/>
        {loading ? <TopWrapper>Zapisywanie</TopWrapper> : ""}
   
      
             
        {/* <Formik
          initialValues={{
            firstName: firebase.profile.firstName,
            lastName: firebase.profile.lastName,
            location: firebase.profile.location,
            age: firebase.profile.age,
            email: firebase.profile.email,
            phone: firebase.profile.phone,
            payment: firebase.profile.payment,
            profession: firebase.profile.profession,
            experience: firebase.profile.experience, //array
            // education: firebase.profile.education, //array
            language: firebase.profile.language, //array
            // skills: firebase.profile.skills, //array
            // certificates: firebase.profile.certificates, //array
            // links: firebase.profile.links, //array
            userType: firebase.profile.userType, //option
            // show: firebase.profile.show, //boolean
            toggle: firebase.profile.show,
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
              <label>
                <Field type="checkbox" name="toggle" />
                {`${values.toggle}` === "true"
                  ? "Udostępniam profil"
                  : "Nie udostępniam profilu"}
              </label>
              <BigText>Edytuj swój profil, żeby łatwiej znaleźć pracę!</BigText>
              <TopWrapper>
                <Field
                  profile
                  word="Imię"
                  type="text"
                  name="firstName"
                  component={Input}
                />
                <Field
                  profile
                  word="Nazwisko"
                  type="text"
                  name="lastName"
                  component={Input}
                />

                <Field
                  profile
                  word="Miejsce zamieszkania"
                  type="text"
                  name="location"
                  component={Input}
                />
                <Field
                  profile
                  word="Data urodzenia"
                  type="text"
                  name="age"
                  component={Input}
                />

                <Field
                  profile
                  word="E-mail"
                  type="text"
                  name="email"
                  component={Input}
                />
                <Field
                  profile
                  word="Numer telefonu"
                  type="text"
                  name="phone"
                  component={Input}
                />
                <Field
                  profile
                  word="Oczekiwana płaca"
                  type="text"
                  name="payment"
                  component={Input}
                />
                <Field
                  profile
                  word="Profesja"
                  type="text"
                  name="profession"
                  component={Input}
                />
                <Field
                  word="Pracownik"
                  type="text"
                  name="userType"
                  component={Select}
                >
                  <option value="Pracodawca">Pracodawca</option>
                  <option value="Poszukiwacz pracy">Poszukiwacz pracy</option>
                </Field>
              </TopWrapper>
              <Name>Doświadczenie</Name>
              <FieldArray
                name="experience"
                render={(arrayHelpers) => (
                  <ArrayWrapper>
                    {values.experience && values.experience.length > 0 ? (
                      values.experience.map((experience, index) => (
                        <FieldArrayWrapper key={index}>
                          <Field
                            long
                            name={`experience.${index}.name`}
                            word="zadania"
                            component={Input}
                          />
                          <Field
                            long
                            name={`experience.${index}.type`}
                            word="xdxd"
                            component={Input}
                          />

                          <DeleteButton
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </FieldArrayWrapper>
                      ))
                    ) : (
                      <></>
                    )}
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Dodaj oferowanie
                    </ActionButton>
                  </ArrayWrapper>
                )}
              />

              <FieldArray
                name="language"
                render={(arrayHelpers) => (
                  <ArrayWrapper>
                    {values.language && values.language.length > 0 ? (
                      values.language.map((language, index) => (
                        <FieldArrayWrapper key={index}>
                          <Field
                            name={`language.${index}.name`}
                            word="Języki"
                            component={Input}
                          />
                          <Field
                            word="Pracownik"
                            type="text"
                            name={`language.${index}.type`}
                            component={Select}
                            defaultValue="A1"
                          >
                            <option value="" selected disabled hidden>
                              Choose here
                            </option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                          </Field>
                          <ErrorMessage name={`language.${index}.type`} />
                          <DeleteButton
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        </FieldArrayWrapper>
                      ))
                    ) : (
                      <></>
                    )}
                    <ActionButton
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Dodaj język
                    </ActionButton>
                  </ArrayWrapper>
                )}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Edytowanie" : null}
                type="submit"
              >
                Edytuj
              </Button>
            </FormWrapper>
          )}
        </Formik> */}
        <Message error show={error}>
          {error}
        </Message>
        <Message error show={error === false}>
          Profile updated
        </Message>
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

