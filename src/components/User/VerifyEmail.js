import React, {useEffect} from "react";
import styled from "styled-components";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Button from "../Items/Form/Button";
import Message from "../Items/Form/Button";

const Wrapper = styled.div``;
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
        loading={loading ? "Sending email..." : null}
        onClick={() => sendVerification()}
      >
        Send again
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
