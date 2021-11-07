import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Login from "./components/login";
// import Home from "./components/home";
import HomePage from "./components/homePage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
