import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import Modal from "../../components/Modal/Modal";
import { Message, Button } from "../../components/Form";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  z-index: 200;
  .p {
    font-size: 15px;
    color: red;
  }
`;

const DeleteJob = ({ show, close, jobs, deleteJob }) => {

  const dispatch = useDispatch();

  const [loading, error] = useSelector((state) => [
    state.job.deleteJob.loading,
    state.job.deleteJob.error,
  ]);

  async function jobDeleting() {
    await dispatch(actions.deleteJob(jobs));
    close();
  }
  return (
    <Modal opened={show} close={close}>
      <p>Czy na pewno chcesz usunąc tę ofertę pracy?</p>
      <Wrapper>
        <Button
          onClick={jobDeleting}
          disabled={loading}
          loading={loading ? "Deleting..." : null}
          profile
        >
          Usuń
        </Button>
        <Button profile onClick={close}>
          Anuluj
        </Button>
      </Wrapper>
      <Message error show={error}>
        {error}
      </Message>
      <Message error show={error === false}>
        Job deleted
      </Message>
    </Modal>
  );
};

export default DeleteJob;
