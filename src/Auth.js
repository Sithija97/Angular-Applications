import React from "react";
import "./App.css";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyAjSRy3TtXjpON7pO1F7MYhVxb6m644qEw",
  authDomain: "patron-b11e8.firebaseapp.com"
});

class Auth extends React.Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="Header">
        </div>

        <div className="AppContainer">
          {this.state.isSignedIn ? (
            <div>
              <h3>Sign in</h3>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out
              </button>
            </div>
          ) : (
            <div>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Auth;
