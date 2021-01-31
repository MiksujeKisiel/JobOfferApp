import React, {useEffect} from "react";
import styled from "styled-components";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { Message, Button } from '../../components/Form';

const Wrapper = styled.div`
height: calc(100vh - 90px);
`;
const Text = styled.p``;

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
    useEffect(() => {
        return () => {
            cleanUp();
        };
    }, [cleanUp]);
  return (
    <Wrapper>
      <Text>Verify your email</Text>
      <Button
        disabled={loading}
        loading={loading ? "Wysyłanie maila" : null}
        onClick={() => sendVerification()}
      >
        Wyślij ponowanie
      </Button>
      <Message error show={error}>
        {error}
      </Message>
      <Message success show={error === false}>
          message sent succesfuly
      </Message>
    </Wrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
