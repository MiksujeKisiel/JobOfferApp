import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import firebase from '../Firebase/Firebase';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore } from 'redux-firestore';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
   rootReducer, 
   composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig), 
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})))
 );

 export default store;
