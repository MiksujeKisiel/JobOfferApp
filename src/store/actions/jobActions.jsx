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

// all jobs
// export const allJobs = (data) => async (
//   dispatch,
//   getState,
//   { getFirestore }
// ) => {
//   const firestore = getFirestore();
//   const observer = firestore.onSnapshot;
     
//   try{
//     firestore.collection("categories").valueChanges().map(document => {
//       return document(a => {
//         const data = a.payload.doc.data();//Here is your content
//         const id = a.payload.doc.id;//Here is the key of your document
//         return { id, ...data };
//       });
//   }
// }
//   catch(err){
//     dispatch({ type: actions.EDIT_JOB_FAIL, payload: err.message });
//   }


  
//   }
// }
  

  
