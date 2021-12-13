import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Grid, ListItem } from "@mui/material";
import { Box } from "@mui/system";

const Login = () => {
  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <React.Fragment>
      {/* <div>
        <b>Login</b>
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={handleLogIn}>
          Google login
        </Button>
      </div> */}

      <div class="row">
        <div class="column" style={{ backgroundColor: "white" }}>
          <ListItem>
            <img src="images/img2.jpg" alt="" className="loginImg" />
          </ListItem>
        </div>

        <div class="column" style={{ backgroundColor: "#d63031" }}>
          <Box
            className="boxStyles loginContainer"
            sx={{
              width: 350,
              height: 350,
              bgcolor: "#d63031",
            }}
          >
            <p className="loginTitle">Login</p>

            <div style={{ padding: "30px" }}>
              <div className="loginLoginwith" onClick={handleLogIn}>
                <span className="loginText">login with google</span>
                <img
                  src="https://image.flaticon.com/icons/png/512/281/281764.png"
                  alt="google_icon"
                />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
