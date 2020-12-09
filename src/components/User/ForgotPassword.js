import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'
import { Form, StyledLink, FormWrapper, Wrapper, Text, Label, Input, Button} from './FormStyles';


export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  return (
    <Wrapper>
      <FormWrapper>
      <Text>Reset password</Text>
      {error && <p> {error}</p>}
      {message && <p>{message}</p>}
      <Form style={{ alignItems: "center" }} onSubmit={handleSubmit}>
      <div className="group" s>
        <Label>Email</Label>
        <Input type="email" ref={emailRef} required />
        </div>
        <Button disabled={loading} type="submit" >Reset password</Button>
      </Form>

    
      </FormWrapper>
    </Wrapper>
  );
}


