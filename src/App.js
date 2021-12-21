import Home from "./components/Home";
import Login from "./components/Login";
import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { auth } from "./firebase";
import { UserContext } from "./StateContext";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./context/authContext";

function App() {
  const { value, value5 } = useContext(UserContext);
  const [user, setUser] = value;
  const [isLoggedIn, setIsLoggedIn] = value5;
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("onAuthStateChanged: signed in");
        history.push("/home");
        // set current user as user
        // setUser(auth.currentUser);
        //console.log("user", user);
      } else {
        // No user is signed in.
        console.log("onAuthStateChanged: No user ");
        history.push("/login");
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
