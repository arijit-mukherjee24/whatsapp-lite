import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCi1mBX1KRl7uSVUBWvHojOa2nFbvFw-DE",
    authDomain: "whats-app-clone-bdc2d.firebaseapp.com",
    databaseURL: "https://whats-app-clone-bdc2d.firebaseio.com",
    projectId: "whats-app-clone-bdc2d",
    storageBucket: "whats-app-clone-bdc2d.appspot.com",
    messagingSenderId: "595755977664",
    appId: "1:595755977664:web:8dc4543d605ccc48491625"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;