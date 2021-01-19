import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Modal from "../../components/Modal/Modal";

import { Message, Button } from '../../components/Form';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  background-color: blue;
  z-index: 200;
`;

const DeleteJob = ({
  show,
  close,
  isOpened,
  jobs,
  deleteJob,
  error,
  loading,
}) => {
  async function jobDeleting() {
    await deleteJob(jobs);
    close();
  }
  return (
    <Modal opened={show} close={close}>
      <p>Are you sure you want to delete job</p>
      <Wrapper>
        <Button
          onClick={jobDeleting}
          disabled={loading}
          loading={loading ? "Deleting..." : null}
        >
          Delete job
        </Button>
        <Button onClick={close}>Cancel</Button>
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

const mapStateToProps = ({ job }) => ({
  error: job.deleteJob.error,
  loading: job.deleteJob.loading,
});

const mapDispatchToProps = {
  deleteJob: actions.deleteJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteJob);


// import React from "react";
// import styled from "styled-components";
// import Modal from "../Items/Modal/Modal";
// import Button from "../Items/Form/Button";
// import { connect } from "react-redux";
// import * as actions from "../../store/actions";
// import Message from "../Items/Form/Message";
// const Wrapper = styled.div`
//   width: 200px;
//   height: 200px;
//   position: relative;
//   background-color: blue;
//   z-index: 200;
// `;

// const DeleteJob = ({
//   show,
//   close,
//   isOpened,
//   jobs,
//   deleteJob,
//   error,
//   loading,
// }) => {
//   async function jobDeleting() {
//     await deleteJob(jobs);
//     close();
//   }
//   return (
//     <Modal opened={show} close={close}>
//       <p>Are you sure you want to delete job</p>
//       <Wrapper>
//         <Button
//           onClick={jobDeleting}
//           disabled={loading}
//           loading={loading ? "Deleting..." : null}
//         >
//           Delete job
//         </Button>
//         <Button onClick={close}>Cancel</Button>
//       </Wrapper>
//       <Message error show={error}>
//         {error}
//       </Message>
//       <Message error show={error === false}>
//         Job deleted
//       </Message>
//     </Modal>
//   );
// };

// const mapStateToProps = ({ job }) => ({
//   error: job.deleteJob.error,
//   loading: job.deleteJob.loading,
// });

// const mapDispatchToProps = {
//   deleteJob: actions.deleteJob,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DeleteJob);
