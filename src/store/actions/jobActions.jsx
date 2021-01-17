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
      employees: data.employees,
      earnings: data.earnings,
      earningsType: data.earningsType,
      location: data.location,
      contract: data.contract,
      timelapse: data.timelapse,
      employmentType: data.employmentType,
      interview: data.interview,
      responsibility: data.responsibility,
      requirement: data.requirement,
      offer: data.offer,
      about: data.about,
    });
    dispatch({ type: actions.ADD_JOB_SUCCESS });
   
  } catch (err) {
    dispatch({ type: actions.ADD_JOB_FAIL, payload: err.message });
  }
};

// Delete job
export const deleteJob = (id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  dispatch({ type: actions.DELETE_JOB_START });
  try {
    await firestore.collection("jobs").doc(id).delete();
    dispatch({ type: actions.DELETE_JOB_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_JOB_FAIL });
  }
};

//edit Job
export const editJob = (id, data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  dispatch({ type: actions.EDIT_JOB_START });
  try {
    await firestore.collection("jobs").doc(id).update({
      name: data.name,
      companyName: data.company,
      employees: data.employees,
      earnings: data.earnings,
      earningsType: data.earningsType,
      location: data.location,
      contract: data.contract,
      timelapse: data.timelapse,
      employmentType: data.employmentType,
      interview: data.interview,
      responsibility: data.responsibility,
      requirement: data.requirement,
      offer: data.offer,
      about: data.about,
    });
    dispatch({ type: actions.EDIT_JOB_SUCCESS });
 
  } catch (err) {
    dispatch({ type: actions.EDIT_JOB_FAIL, payload: err.message });
  }
};
