import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Grid, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { FcPositiveDynamic, FcGoogle } from "react-icons/fc";

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
      <Grid container spacing={0}>
        <Grid
          item
          xs={6}
          md={6}
          style={{ backgroundColor: "white", height: "100vh" }}
        >
          <ListItem>
            <img src="images/img2.jpg" alt="" className="loginImg" />
          </ListItem>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          style={{ backgroundColor: "#d63031", height: "100vh" }}
        >
          <ListItem>
            {/* <Button variant="contained" >
              Google login
            </Button> */}
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
          </ListItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
