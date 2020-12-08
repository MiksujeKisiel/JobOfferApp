import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

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
            <h2>Sign Up</h2>
       
    {error ?? <p> {error}</p>}
            <form style={{display: "flex"}}
            onSubmit={handleSubmit}>
            <Label>Email</Label>
            <Input type="email" ref={emailRef} required/>
            <Label >Password</Label>
            <Input type="password" ref={passwordRef} required/>
            <Label >Confirm Password</Label>
            <Input type="password" ref={passwordConfirmRef} required/>
        <Button disabled={loading}>Sign in</Button>
        </form>
        <Text>Already have an account? <Link to="/login">Log in</Link></Text>
        </Wrapper>
    )
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;



`
const Text = styled.p`

`
const Label = styled.label`

`
const Input = styled.input`
max-width: 300px;
border: 1px solid #131313;

`
const Button = styled.button`
width: 150px;
`

