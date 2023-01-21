import firebase from  "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_U-YHSmBL-S0yXmzzcBxHHhK72uDsMd4",
    authDomain: "netflixclone-7fbd1.firebaseapp.com",
    projectId: "netflixclone-7fbd1",
    storageBucket: "netflixclone-7fbd1.appspot.com",
    messagingSenderId: "516266996309",
    appId: "1:516266996309:web:0d9358110879edf31d1adc",
    measurementId: "G-VF3WD4VWDL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;