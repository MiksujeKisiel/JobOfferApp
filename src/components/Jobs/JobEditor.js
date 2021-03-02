import React
// , { useState }
 from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import AddJob from "../../pages/JobActions/AddJob";
// import DeleteJob from "../../pages/JobActions/DeleteJob";

const Wrapper = styled.div``;
// const Control = styled.p`
//   cursor: pointer;
//   font-size: 40px;
// `;

const JobEditor = (props) => {
  const { job } = props;
  const { jobId } = props;
  // const [isDeleting, setisDeleting] = useState(false);
  return (
    <Wrapper>
      <AddJob jobEditing={true} jobs={job} id={jobId}/>
      {/* <Control onClick={() => setisDeleting(true)}>delete</Control> */}
      {/* <DeleteJob
        jobs={jobId}
        show={isDeleting}
        close={() => setisDeleting(false)}
      /> */}
    </Wrapper>
  );
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const jobs = state.firestore.data.jobs;
  const job = jobs ? jobs[id] : null;
  return {
    job: job,
    jobId: id,
    loggedIn: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(JobEditor);
