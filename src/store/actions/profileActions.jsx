import * as actions from "./actionTypes";

export const editExperience = ({ experience }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const { uid: userId } = getState().firebase.auth;

  dispatch({ type: actions.PROFILE_EDIT_START });
  try {
    await firestore.collection("users").doc(userId).update({
      experience: experience,
    });
    dispatch({ type: actions.PROFILE_EDIT_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message });
  }
};

export const editLanguage = ({ language }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const { uid: userId } = getState().firebase.auth;

  dispatch({ type: actions.PROFILE_EDIT_START });
  try {
    await firestore.collection("users").doc(userId).update({
      language: language,
    });
    dispatch({ type: actions.PROFILE_EDIT_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message });
  }
};

export const editData = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  const { uid: userId } = getState().firebase.auth;
  dispatch({ type: actions.PROFILE_EDIT_START });
  try {
    await firestore.collection("users").doc(userId).update({
      age: data.age,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      location: data.location,
      phone: data.phone,
      payment: data.payment,
      experience: data.experience,
      profession: data.profession,
    });
    dispatch({ type: actions.PROFILE_EDIT_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message });
  }
};
