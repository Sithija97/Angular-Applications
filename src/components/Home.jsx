import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ListItem } from "@mui/material";
import DataTable from "./dataTable";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { FcUpLeft, FcPlus, FcNook, FcDoughnutChart } from "react-icons/fc";
import TextInput from "./textInput";
import Badge from "@mui/material/Badge";
import Form from "./form";
import CategoryBoxes from "./categoryBoxes";
import ProfileSection from "./profileSection";

const Home = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    /* other func if user is there */
  }, [user, history]);

  const handleLoggedOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* */}
      <Container maxWidth="xl">
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={6} md={8}>
            <ListItem>
              <b className="numberVaue">
                Hi {user && user.displayName}, Welcome to Money Manager!
              </b>
            </ListItem>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <ListItem>
                  <FcUpLeft
                    className="categoryIcon"
                    onClick={handleLoggedOut}
                  />{" "}
                  <b> logout</b>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={6} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <ListItem>
                  <b>Set Budget</b>
                  <Badge color="secondary" badgeContent={"new"}>
                    <FcNook className="categoryIcon" />
                  </Badge>
                </ListItem>
              </Grid>
              <Grid item>
                <ListItem>
                  <b>Graphs</b>{" "}
                  <Badge color="secondary" badgeContent={"new"}>
                    <FcDoughnutChart className="categoryIcon" />
                  </Badge>
                </ListItem>
              </Grid>
              <Grid item>
                <ListItem>
                  <b>Add</b>{" "}
                  <FcPlus
                    className="categoryIcon"
                    onClick={() => setOpen(true)}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <ListItem>
                <ProfileSection />
              </ListItem>
            </Grid>
            <Grid item xs={6} md={8}>
              <ListItem>
                <CategoryBoxes />
              </ListItem>
              <ListItem>
                <DataTable />{" "}
              </ListItem>
            </Grid>
          </Grid>
          {/* <DataTable /> */}
          <Dialog
            maxWidth="lg"
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add Transactions</DialogTitle>
            <DialogContent>
              {/* text form */}
              <Form closePopup={closePopup} />
            </DialogContent>
            {/* dialog action */}
          </Dialog>
        </Container>
      </Container>
      <img src="images/img1.png" alt="" className="homeImg" />
    </React.Fragment>
  );
};

export default Home;
