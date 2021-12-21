import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth, providerGoogle } from "../firebase";
import { UserContext } from "../StateContext";
import "./Login.css";

function Login() {
  const { value, value5 } = useContext(UserContext);
  const [user, setUser] = value;
  const [isLoggedIn, setIsLoggedIn] = value5;
  const history = useHistory();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(providerGoogle)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        history.push("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  };

  return (
    <div className="login_container">
      <img
        className="login_img"
        src="https://image.freepik.com/free-vector/savings-concept-illustration_114360-1516.jpg"
        alt=""
      />
      <div className="login">
        <div className="login__divider"></div>

        <div className="login__loginwith" onClick={signInWithGoogle}>
          <span>login with google</span>
          <img
            src="https://image.flaticon.com/icons/png/512/281/281764.png"
            alt="google_icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
