import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
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
            <h2>Log in</h2>
    {error ?? <p> {error}</p>}
            <form style={{display: "flex"}}
            onSubmit={handleSubmit}>
            <Label>Email</Label>
            <Input type="email" ref={emailRef} required/>
            <Label >Password</Label>
            <Input type="password" ref={passwordRef} required/>
   
        <Button disabled={loading}>Log in</Button>
        </form>
        <div>
            <Link to="/forgot-password"> forgot password?</Link>
        </div>
        <Text>Don't have an account? <Link to="/signup">create account</Link></Text>
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

