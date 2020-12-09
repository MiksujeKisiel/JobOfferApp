import React, {useRef, useState} from 'react'

import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom'
import { Form, StyledLink, FormWrapper, Wrapper, Text, Label, Input, Button} from './FormStyles';
export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()
    
        try{
            setError('')
            setLoading(true)
           await login(emailRef.current.value, passwordRef.current.value)
           history.push('/')
        } catch{
            setError('Failed to log in')
        }
        setLoading(false)

       
    }
    return (
<Wrapper>
        <FormWrapper>

           <Text>Sign In</Text>
    {error ?? <p> {error}</p>}
            <Form 
            onSubmit={handleSubmit}>
                <div className="group">
            <Label>Email</Label>
            <Input type="email" ref={emailRef} required/>
            </div>
            <div className="group">
            <Label >Password</Label>
            <Input type="password" ref={passwordRef} required/>
            </div>
        <Button disabled={loading}>Log in</Button>
        </Form>
     <div className="links">
            <StyledLink to="/forgot-password"> forgot password?</StyledLink>
        <p>Don't have an account? <StyledLink to="/signup">create account</StyledLink>
        </p>
        </div>
        </FormWrapper>
        </Wrapper>
    )
}

