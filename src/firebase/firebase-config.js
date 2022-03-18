import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDfyUd8Rjd_Kc-PzCCvWXD--f1TrH_pU_U",
    authDomain: "react-app-cursos-fdff5.firebaseapp.com",
    projectId: "react-app-cursos-fdff5",
    storageBucket: "react-app-cursos-fdff5.appspot.com",
    messagingSenderId: "81108511239",
    appId: "1:81108511239:web:43c6e8cd66221f0d0ed8a2"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      app,
      db,
      googleAuthProvider      
  }