import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Backdrop from './Backdrop';

const Modal = ({ opened, close, children }) => {
  return createPortal(
    <>
      <Backdrop close={close} opened={opened} />
      <WrappedModal opened={opened}>
        <InsideWrapper>{children}</InsideWrapper>
      </WrappedModal>
    </>,
    document.getElementById('root-modal')
  );
};
export default Modal;

const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 0.5rem 3.5em rgba(21,21,21,0.3);
  border-radius: 1rem;
  background-color: rgba(244,244,244, 0.8);
  transition: all 0.1s;
`;

const InsideWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
 
`;