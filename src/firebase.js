import firebase from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1vN1RO3JpS4VGy402AHnEQjGDcyd1FL0",
  authDomain: "money-lover-a5f70.firebaseapp.com",
  projectId: "money-lover-a5f70",
  storageBucket: "money-lover-a5f70.appspot.com",
  messagingSenderId: "722824834776",
  appId: "1:722824834776:web:b3e23594d77d5f8831b1ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();

export { auth, providerGoogle, providerFacebook, providerGithub };
export default db;
