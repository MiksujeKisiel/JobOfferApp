import React, {useRef, useState} from 'react'

import { useAuth } from '../../contexts/AuthContext';
import {  useHistory } from 'react-router-dom';
import { Form, StyledLink, FormWrapper, Wrapper, Text, Label, Input, Button} from './FormStyles';


export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }
        try{
            setError('')
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
           history.push('/')
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)

       
    }
    return (
        <Wrapper>
            <FormWrapper>
            <Text>Sign Up</Text>
       
    {error ?? <p> {error}</p>}

            <Form style={{display: "flex"}}
            onSubmit={handleSubmit}>
                    <div className="group">
            <Label>Email</Label>
            <Input type="email" ref={emailRef} required/>
           </div>
            <div className="group">
            <Label >Password</Label>
            <Input type="password" ref={passwordRef} required/>
            </div>
            <div className="group">
            <Label >Confirm Password</Label>
            <Input type="password" ref={passwordConfirmRef} required/>
            </div>
        <Button disabled={loading}>Sign in</Button>
        </Form>
        <div className="links">
        <p>Already have an account? <StyledLink to="/login">Log in</StyledLink></p>
        </div>
  
        </FormWrapper>
        </Wrapper>
    )
}


