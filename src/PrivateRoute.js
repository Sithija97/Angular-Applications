import React, { useContext } from 'react'
import { UserContext } from './StateContext';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
     const { value5 } = useContext(UserContext);
     const [isLoggedIn, setIsLoggedIn] = value5;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn==true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

export default PrivateRoute
