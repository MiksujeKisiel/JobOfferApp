import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { Message, Button, Input} from '../../components/Form';
import * as Yup from "yup";
import * as actions from "../../store/actions";
import Router from "../../components/UserSettings/Router";
import TopText from "../../components/UserSettings/Text";
import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 1100px;
  @media (min-width: ${768}px) {
    margin-left: 50px;
  }
  @media (min-width: ${1440}px) {
    margin-left: 150px;
  }
`;

const FormWrapper = styled(Form)`
  background: white;
  padding: 30px 40px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;

const BigText = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
`;
const Text = styled.p`
  max-width: 1100px;
  font-size: 15px;
  margin-bottom: 50px;
`;

const ProfileSchema = Yup.object().shape({

  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().min(3, "Too short.").max(25, "Too long."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const Profile = ({ firebase, loading, error, editProfile, cleanUp }) => {
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
          bigText="Ustawienia"
          smallText="Możesz zmieniać tu email oraz hasło"
        />

        <Formik
          initialValues={{
            email: firebase.auth.email,
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ProfileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await editProfile(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <FormWrapper>
              <BigText>Zmień email oraz hasło</BigText>
              <Text>
                Po zmianie adresu email wyślemy na nowy adres wiadomość
                zawierającą link aktywacyjny. Nowy adres email stanie się Twoim
                loginem dopiero, kiedy klikniesz w link aktywacyjny.
              </Text>
              <Field
                word="Nowy e-mail"
                type="email"
                name="email"
                component={Input}
                long
              />
       
              <Field
                word="Hasło"
                type="password"
                name="password"
                component={Input}
                long
              />
              <Field
                word="Potwierdź hasło"
                type="password"
                name="confirmPassword"
                component={Input}
                long
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
        </Formik>
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

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// import React, {useEffect} from "react";

// import { connect } from "react-redux";
// import { Formik, Field } from "formik";
// import { Form, FormWrapper, Text } from "../Items/Form/FormStyles";
// import Button from "../Items/Form/Button";
// import Message from "../Items/Form/Message";
// import Input from "../Items/Form/Input";
// import * as Yup from "yup";
// import * as actions from "../../store/actions";
// import Router from '../UserSettings/Router';
// import TopText from '../UserSettings/Text';
// import styled from 'styled-components';
// const Wrapper = styled.div`

// `

// const ProfileSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .required('Your first name is required.')
//     .min(3, 'Too short.')
//     .max(25, 'Too long.'),
//   lastName: Yup.string()
//     .required('Your last name is required.')
//     .min(3, 'Too short.')
//     .max(25, 'Too long.'),
//   email: Yup.string()
//     .email('Invalid email.')
//     .required('The email is required.'),
//     password: Yup.string()
//     .min(3, 'Too short.')
//     .max(25, 'Too long.'),
//     confirmPassword: Yup.string()
//        .oneOf([Yup.ref('password'), null], 'Passwords must match')
// });
// const Profile = ({ firebase, loading, error, editProfile, cleanUp}) => {
//   useEffect(() =>{
//     return () =>{
//     cleanUp();
//     }
//   },[cleanUp]);

//   if (!firebase.profile.isLoaded) return null;

//   return (
//     <Router>

//     <Wrapper>
//     <TopText
//      bigText="big text text big"
//      smallText="small text btw its wonderuflly that is small"
//      />

//         <Formik
//           initialValues={{
//             firstName: firebase.profile.firstName,
//             lastName: firebase.profile.lastName,
//             email: firebase.auth.email,
//             password: "",
//             confirmPassword: "",
//           }}
//           validationSchema={ProfileSchema}
//           onSubmit={async (values, { setSubmitting }) => {
//             console.log(values);
//            await editProfile(values);
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting, isValid }) => (
//             <div>
//               <Field
//                 word="First Name"
//                 type="text"
//                 name="firstName"
//                 component={Input}
//               />
//               <Field
//                 word="Last Name"
//                 type="text"
//                 name="lastName"
//                 component={Input}
//               />
//               <Field word="Email" type="email" name="email" component={Input} />
//               <Field
//                 word="Password"
//                 type="password"
//                 name="password"
//                 component={Input}
//               />
//               <Field
//                 word="Confirm Password"
//                 type="password"
//                 name="confirmPassword"
//                 component={Input}
//               />
//               <Button
//                 disabled={!isValid || isSubmitting}
//                 loading={loading ? "Edytowanie" : null}
//                 type="submit"
//               >
//                 Edytuj
//               </Button>
//             </div>
//           )}
//         </Formik>
//         <Message error show={error}>
//         {error}
//         </Message>
//         <Message error show={error === false}>
//         Profile updated
//         </Message>

//     </Wrapper>
//     </Router>

//   );
// };

// const mapStateToProps = ({ firebase, auth }) => ({
//   firebase,
//   loading: auth.profileEdit.loading,
//   error: auth.profileEdit.error
// });

// const mapDispatchToProps = {
//   editProfile: actions.editProfile,
//   cleanUp: actions.clean
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
