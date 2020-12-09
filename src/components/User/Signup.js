import React from 'react'
import { Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Group, Form, StyledLink, FormWrapper, Wrapper, Text, Label, Input, Button} from './FormStyles';
import styled from 'styled-components';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';


const Error = styled(ErrorMessage)`
font-size: 10px;
color: red;
`
const LoginSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('Your first name is required')
    .min(3, 'Too short')
    .max(25, 'Too long'),
    lastName: Yup.string()
    .required('Your last name is required')
    .min(3, 'Too short')
    .max(25, 'Too long'),
    email: Yup.string()
    .email("invalid email")
    .required("the email is required."),
    password: Yup.string()
    .required("the password is required")
    .min(8, 'Too short')
    .max(25, 'Too long'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required("You need to confirm your password")

    
  });
  

 const Signup = ({signUp, loading}) =>{

  console.log(loading);
   return (
     <Wrapper>
       <FormWrapper>
         <Text>Sign Up</Text>
         <Formik
           initialValues={{
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             confirmPassword: "",
           }}
           validationSchema={LoginSchema}
           onSubmit= {(values, { setSubmitting }) => {
             console.log(values);
            signUp(values);
            setSubmitting(false);
          }}
         >
           {({ isSubmitting, isValid }) => (
             <Form>
               <Group>
                 <Label>Email</Label>
                 <Input type="email" name="email" />
                 <Error name="email"></Error>
               </Group>
               <Group>
                 <Label>Password</Label>
                 <Input type="password" name="password" />
                 <Error name="password"></Error>
               </Group>
               <Group>
                 <Label>Confirm Password</Label>
                 <Input type="password" name="confirmPassword" />
                 <Error name="confirmPassword"></Error>
               </Group>
               <Group>
                 <Label>First Name</Label>
                 <Input type="text" name="firstName" />
                 <Error name="firstName"></Error>
               </Group>
               <Group>
                 <Label>Last Name</Label>
                 <Input type="text" name="lastName" />
                 <Error name="lastName"></Error>
               </Group>

               <Button disabled={!isValid} loading={loading ? 'Signing up' : null} type="submit">Log in</Button>
             </Form>
           )}
         </Formik>
         <div className="links">
           <p>
             Already have an account?
             <StyledLink to="/login">Log in</StyledLink>
           </p>
         </div>
       </FormWrapper>
     </Wrapper>
   );
 }

const mapStateToProps = ({auth}) => ({
  loading: auth.loading,
})

const mapDispatchToProps = {
  signUp: actions.signUp
}

 export default connect(mapStateToProps, mapDispatchToProps)(Signup);

