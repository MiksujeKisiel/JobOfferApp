
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import jobReducer from './jobReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    job: jobReducer,
    firebase:firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;