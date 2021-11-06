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

import TextInput from "./textInput";
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

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={6} md={8}>
            <ListItem>
              <b>Hi {user && user.displayName} Welcome to Money Manager!</b>
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
                  <Button variant="contained" onClick={handleLoggedOut}>
                    logout
                  </Button>
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
                  <Button variant="contained">Set Budget</Button>
                </ListItem>
              </Grid>
              <Grid item>
                <ListItem>
                  <Button variant="contained" onClick={() => setOpen(true)}>
                    Add
                  </Button>
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
              <Form />
            </DialogContent>
            {/* dialog action */}
          </Dialog>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Home;
