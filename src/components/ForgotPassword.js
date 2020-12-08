import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'


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
      <h2>Log in</h2>
      {error && <p> {error}</p>}
      {message && <p>{message}</p>}
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input type="email" ref={emailRef} required />
        <Button disabled={loading} type="submit" >Reset password</Button>
      </form>
      <Link to="/login"> Log in</Link>
      <Text>
        Don't have an account? <Link to="/signup">create account</Link>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p``;
const Label = styled.label``;
const Input = styled.input`
  max-width: 300px;
  border: 1px solid #131313;
`;
const Button = styled.button`
  width: 150px;
`;

