import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCK8MadZF1jIYnHBPqFbVwUTN6lp8__Acw",
    authDomain: "speedytype-5aa0a.firebaseapp.com",
    projectId: "speedytype-5aa0a",
    storageBucket: "speedytype-5aa0a.appspot.com",
    messagingSenderId: "111734148190",
    appId: "1:111734148190:web:22782efcbc31ca23d738cf",
    measurementId: "G-T89SQWT7F8"
  };

  //  firebase app ka initialise 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firebase take your config and auth check authentication of user
  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth,db}