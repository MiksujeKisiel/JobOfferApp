import React from "react";
import { connect } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import AddJob from "../../pages/JobActions/AddJob";

const JobEditor = (props) => {
  useFirestoreConnect([{ collection: "jobs" }])
  const { job } = props;
  const { jobId } = props;
  return (
    <div>
      <AddJob jobEditing={true} jobs={job} id={jobId}/>
    </div>
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


export default connect(mapStateToProps)(JobEditor);
