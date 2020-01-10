import React from "react";
import "../App.css";

//components
import Header from "./Header";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Untitled from "../images/Untitled.png";

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
      console.log("user", user);
    });
  };
  render() {
    return (
      <div className="mainContainer">
        {/* header */}
        <Header />

        {this.state.isSignedIn ? (
          <div>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <h3>Sign in</h3>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          </div>
        ) : (
          <div>
            
              <img src={Untitled} align="right" className="Img" />
              <h2>What is Patron</h2>
              <h3>
                "Patron is the platform which connects benificiaries and
                benifactors..<br></br>here you can chose the available projects and Donate!"
              </h3>
           
           
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            
          </div>
        )}
      </div>
    );
  }
}
export default Auth;
