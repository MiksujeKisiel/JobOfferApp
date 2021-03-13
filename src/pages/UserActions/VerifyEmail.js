import React, { useEffect } from "react";
import styled from "styled-components";
import * as actions from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { Message, Button } from "../../components/Form";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledLink = styled(NavLink)`
  margin-top: 20px;
  color: red;
`;
const SmallWrapper = styled.div`
  max-width: 500px;
  width: 80%;
  color: wheat;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
`;
const Text = styled.p`
  font-size: 20px;
  color: green;
`;

const VerifyEmail = () => {
  useEffect(() => {
    return () => {
      dispatch(actions.clean);
    };
  });

  const dispatch = useDispatch();

  const [loading, error] = useSelector((state) => [
    state.auth.verifyEmail.loading,
    state.auth.verifyEmail.error,
  ]);

  return (
    <Wrapper>
      <SmallWrapper>
        <Text>Zweryfikuj swój email</Text>
        <Button
          profile
          disabled={loading}
          loading={loading ? "Wysyłanie maila" : null}
          onClick={() => dispatch(actions.verifyEmail)}
        >
          Wyślij ponowanie
        </Button>

        <StyledLink to="/logout">Wyloguj się</StyledLink>
        <Message error show={error}>
          {error}
        </Message>
        <Message success show={error === false}>
          message sent succesfuly
        </Message>
      </SmallWrapper>
    </Wrapper>
  );
};

export default VerifyEmail;
