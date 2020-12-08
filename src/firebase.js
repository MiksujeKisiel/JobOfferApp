import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'




const app = firebase.initializeApp({
    apiKey: "AIzaSyCKLqpVSbos1OcoT6Vk51Y0AIVnsI-Uln0",
    authDomain: "work-offer.firebaseapp.com",
    projectId: "work-offer",
    storageBucket: "work-offer.appspot.com",
    messagingSenderId: "583447750549",
    appId: "1:583447750549:web:97175358a59117aa4bb89c"
})

export const auth = app.auth();
export const db = app.firestore();
 
export default app