// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqHfX50nMRvZ29sFyIYMrhUBqJvXh4Vhc",
    authDomain: "clone-26150.firebaseapp.com",
    projectId: "clone-26150",
    storageBucket: "clone-26150.appspot.com",
    messagingSenderId: "65591638363",
    appId: "1:65591638363:web:60fbbf1e4b28e89dcc027e",
    measurementId: "G-C7T1W0766K"
  };
  //Use this to initialize the firebase App

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //Use these for db & auth

  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  export {db,auth};