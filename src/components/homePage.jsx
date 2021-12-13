import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { useAuth } from "../context/authContext";

import { Box } from "@mui/system";
import DataTable from "./dataTable";
import { Fab, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Container, Grid } from "@mui/material";

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import Form from "./form";
import CategoryBoxes from "./categoryBoxes";
import ProfileSection from "./profileSection";
import FeaturesSection from "./featuresSection";
import Income from "./income";
import Expense from "./expense";
import Saving from "./saving";

const HomePage = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const initialCategory = {
    income: 0.0,
    expense: 0.0,
    saving: 0.0,
  };
  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    /* other func if user is there */
    fetchData();
    console.log(user);
  }, [user, history]);

  const handleLoggedOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    // fetch data
    setLoading(true);
    const eventsRef = collection(db, "events");
    const queryData = query(eventsRef, orderBy("date", "desc"));
    const response = await getDocs(queryData);

    const userData = await response.docs.filter(
      (doc) => doc.data().user === user.email
    );

    const tempData = await userData.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      date: doc.data().date,
    }));

    await console.log("userData", userData);
    await setEvents(tempData);
    setLoading(false);
  };

  const calculateCategories = async () => {
    let sumOfExpense = 0.0;
    let sumOfIncome = 0.0;
    let sumOfSaving = 0.0;

    // expense
    const expenses = await events.filter(
      (expense) => expense.category === "expense"
    );
    await expenses.map((value) => {
      sumOfExpense += parseFloat(value.amount);
    });
    await console.log(sumOfExpense);

    // income
    const incomes = await events.filter(
      (income) => income.category === "income"
    );
    await incomes.map((value) => {
      sumOfIncome += parseFloat(value.amount);
    });

    // saving
    const savings = await events.filter(
      (saving) => saving.category === "saving"
    );
    await savings.map((value) => {
      sumOfSaving += parseFloat(value.amount);
    });

    // set caegory values
    await setCategory({
      income: sumOfIncome,
      expense: sumOfExpense,
      saving: sumOfSaving,
    });
  };

  const postData = async (state) => {
    // post data
    await addDoc(collection(db, "events"), {
      ...state,
      user: user.email,
    });
    await fetchData();
    await calculateCategories();
    handleClose();
  };

  useEffect(async () => {
    await fetchData();
    await calculateCategories();
  }, []);

  return (
    <React.Fragment>
      <Box py={18} className="headerBox" color="white"></Box>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box p={2} mt={-30} mb={2} className="wrapper">
            <Container maxWidth="xl">
              <Container maxWidth="lg">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <ListItem>
                      <Income categories={category} />
                      <Expense categories={category} />
                      <Saving categories={category} />
                    </ListItem>
                    <ListItem>
                      <DataTable events={events} />
                    </ListItem>
                  </Grid>
                  <Grid item xs={6} md={4} display="table-column">
                    <ListItem>
                      <ProfileSection handleLoggedOut={handleLoggedOut} />
                    </ListItem>
                    <ListItem>
                      <FeaturesSection />
                    </ListItem>
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab
                        color="secondary"
                        className="addButton"
                        aria-label="add"
                      >
                        <AddIcon onClick={handleOpen} />
                      </Fab>
                    </Box>
                    <Form
                      open={open}
                      handleClose={handleClose}
                      postData={postData}
                    />
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
