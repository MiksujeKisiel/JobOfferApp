import * as actions from "./actionTypes";

//Sign up action
export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    //Send verification email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore.collection("users").doc(res.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });
    dispatch({
      type: actions.AUTH_SUCCESS,
    });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

// Logout action
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};

// Sign in action
export const signIn = (data) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

// Clean messages
export const clean = () => ({
  type: actions.CLEAN_UP,
});

// Verify email
export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: actions.VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.VERIFY_FAIL, payload: err.message });
  }
};

// Send recover password
export const recoverPassword = data => async (dispatch, getState, {getFirebase}) =>{
  const firebase = getFirebase();
  dispatch({ type: actions.RECOVERY_START})
  try{
   await firebase.auth().sendPasswordResetEmail(data.email)

    dispatch({ type: actions.RECOVERY_SUCCESS});
  }

  catch(err){
dispatch({ type: actions.RECOVERY_FAIL, payload: err.message});
  }
}

// Profile edit
export const editProfile = data => async (dispatch, getState, {getFirebase, getFirestore}) =>{
 const firebase = getFirebase();
 const firestore = getFirestore();
 const user = firebase.auth().currentUser;
 const { uid: userId, email: userEmail}  = getState().firebase.auth;
 dispatch({type: actions.PROFILE_EDIT_START})
 try{
  if(data.email !== userEmail){
    await user.updateEmail(data.email)
  }
  await firestore.collection('users').doc(userId).set({
    firstName: data.firstName,
    lastName: data.lastName
  })

  if(data.password.length > 0){
    await user.updatePassword(data.password);
  }
  dispatch({type: actions.PROFILE_EDIT_SUCCESS})
 }
 catch (err){
   dispatch({type: actions.PROFILE_EDIT_FAIL, payload: err.message})
 }
}