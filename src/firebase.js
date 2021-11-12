import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8tw7eTGyQqL-0jP47KKJDKUTALTb1hOU",
  authDomain: "expense-manager-595d9.firebaseapp.com",
  projectId: "expense-manager-595d9",
  storageBucket: "expense-manager-595d9.appspot.com",
  messagingSenderId: "792223775882",
  appId: "1:792223775882:web:8031b4d911067b99538173",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
