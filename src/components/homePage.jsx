import React from "react";
import { Box } from "@mui/system";
import DataTable from "./dataTable";
import { ListItem } from "@mui/material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { FcUpLeft, FcPlus, FcNook, FcDoughnutChart } from "react-icons/fc";

import Form from "./form";
import CategoryBoxes from "./categoryBoxes";
import ProfileSection from "./profileSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <Box py={20} className="headerBox" color="white"></Box>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box p={2} mt={-30} mb={2} className="wrapper">
            <Container maxWidth="xl">
              <Container maxWidth="lg">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <ListItem>
                      <CategoryBoxes />
                    </ListItem>
                    <ListItem>
                      <DataTable />
                    </ListItem>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <ListItem>
                      <ProfileSection />
                    </ListItem>
                  </Grid>
                </Grid>
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
