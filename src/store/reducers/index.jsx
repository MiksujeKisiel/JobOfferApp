import { combineReducers} from 'redux';
import { firebaseReducer} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import jobReducer from './jobReducer';
import authReducer from './authReducer';



export default combineReducers({
    auth: authReducer,
    job: jobReducer,
    firebase:firebaseReducer,
    firestore: firestoreReducer
})
