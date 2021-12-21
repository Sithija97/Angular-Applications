import React, { useContext, useEffect, useState } from "react";
import "./SectionStyles.css";
import { Avatar, Card, CardContent, Grid } from "@material-ui/core";
import { UserContext } from "../StateContext";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useHistory } from "react-router-dom";
import "./Form.css";
import Form from "./Form";
import db, { auth } from "../firebase";
import { useAuth } from "../context/authContext";

function SectionThree() {
  const { value, value2 } = useContext(UserContext);
  const { user } = useAuth();
  const history = useHistory();

  const signOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className="section_three">
      <Card className="section_three_profile_card">
        <h4>Profile</h4>
        <CardContent className="prfile_content">
          <img
            className="profile_picture"
            src={!user ? <Avatar></Avatar> : user.photoURL}
            alt=""
          />
          <div className="profile_name">
            <b>{user && user.displayName}</b>
          </div>
          {/* <br /> */}
          <Grid
            container
            direction="row"
            alignItems="center"
            className="logout_button "
            onClick={signOut}
          >
            <Grid item>
              <b>log out </b>
            </Grid>
            <Grid item>
              <ExitToAppRoundedIcon></ExitToAppRoundedIcon>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br></br>
      <Card className="section_three_form_card">
        <h4 className="form_title">Add Data</h4>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </div>
  );
}
// id={user === null ? "" : user.uid}
export default SectionThree;
