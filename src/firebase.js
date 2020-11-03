import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDr0fI_CmxKh7ixYPmyZsLv9Mx0ZExLWGg",
    authDomain: "e-clone-9c168.firebaseapp.com",
    databaseURL: "https://e-clone-9c168.firebaseio.com",
    projectId: "e-clone-9c168",
    storageBucket: "e-clone-9c168.appspot.com",
    messagingSenderId: "110171775626",
    appId: "1:110171775626:web:56a42dfa16e77311c04373",
    measurementId: "G-03V9PCKTJL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };