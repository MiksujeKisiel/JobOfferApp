import * as actions from "./actionTypes";

//Add job
export const addJob = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_JOB_START });
  try {
    const res = await firestore.collection("jobs").doc(userId).get();
    const newJob = {
      id: new Date().valueOf(),
      workName: data.name,
      companyName: data.company,
      earningsNumber: data.earnings,
      attributes: data.attribute,
    };
    if (!res.data()) {
      firestore
        .collection("jobs")
        .doc(userId)
        .set({
          jobs: [newJob],
        });
    } else{
      firestore
        .collection("jobs")
        .doc(userId)
        .update({
          jobs: [...res.data().jobs, newJob],
        });
    }
    dispatch({ type: actions.ADD_JOB_SUCCESS});
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_JOB_FAIL, payload: err.message });
  }
};

// Delete job

export const deleteJob = id => async(dispatch, getState, {getFirestore}) =>{
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.DELETE_JOB_START });
  try {
    const res = await firestore
      .collection('jobs')
      .doc(userId)
      .get();
    const previousJobs = res.data().jobs;
    const newJobs = previousJobs.filter(job => job.id !== id);
    await firestore
      .collection('jobs')
      .doc(userId)
      .update({
        jobs: newJobs
      });

    dispatch({type: actions.DELETE_JOB_SUCCESS})
  }
  catch(err){
    dispatch({type: actions.DELETE_JOB_FAIL})
  }
}