import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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

const HomePage = () => {
  return (
    <React.Fragment>
      <Box py={20} className="headerBox" color="white">
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
              {/* <Typography variant="h4">Open Job Listing</Typography>
              <Button variant="contained">Post a Job</Button> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box p={2} mt={-30} mb={2} className="wrapper">
            <Container maxWidth="xl">
              {/*<Grid container justify="space-between" spacing={2}>
                <Grid item xs={6} md={8}>
                  <ListItem>
                    <b className="numberVaue">Hi Welcome to Money Manager!</b>
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
                <Grid item xs={6} md={4}></Grid>
                <Grid item xs={6} md={8}>
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
              </Grid> */}
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
                  //   open={open}
                  //   onClose={() => setOpen(false)}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Add Transactions
                  </DialogTitle>
                  <DialogContent>
                    {/* text form */}
                    {/* <Form closePopup={closePopup} /> */}
                  </DialogContent>
                  {/* dialog action */}
                </Dialog>
              </Container>
            </Container>
          </Box>
        </Grid>
      </Grid>
      <img src="images/img1.png" alt="" className="homeImg" />
    </React.Fragment>
  );
};

export default HomePage;
