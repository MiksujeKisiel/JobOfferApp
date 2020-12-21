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

    
    
    await firestore.collection("jobs").add({
      userid: userId,
      name: data.name,
      companyName: data.company,
      earnings: data.earnings,
      earningsType: data.earningsType,
      location: data.location,
      contract: data.contract,
      timelapse: data.timelapse,
      employmentType: data.employmentType,
      interview: data.interview,
      responsibility: data.responsibility
  })

 
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

//edit Job
export const editJob = (id, data) => async(dispatch, getState, {getFirestore}) =>{
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.EDIT_JOB_START });
 
  try {
    const res = await firestore
      .collection('jobs')
      .doc(userId)
      .get();
    const jobs = res.data().jobs;
    const index = jobs.findIndex(job => job.id === id);
    jobs[index] = data.jobs;

    await firestore
      .collection('jobs')
      .doc(userId)
      .update({
        jobs,
      });
    dispatch({ type: actions.EDIT_JOB_SUCCESS });
    return true;
  }
  catch (err){

    dispatch({ type: actions.EDIT_JOB_FAIL, payload: err.message });

  }
}

export const allJobs = (id, data) => async(dispatch, getState, {getFirestore}) =>{
  const firestore = getFirestore

  const snapshot = await firestore().collection('jobs').get()
  return snapshot.docs.map(doc => doc.data());

}


  

  
