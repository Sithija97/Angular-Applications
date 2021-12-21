import React, { useContext, useEffect, useState } from "react";
import "./SectionStyles.css";
import { Card, CardContent } from "@material-ui/core";
import Overview from "./Overview";
import Transactions from "./Transactions";
import db, { auth } from "../firebase";
import { UserContext } from "../StateContext";
import { useAuth } from "../context/authContext";

function SectionOne() {
  const { value, value2, value3, value4, value6 } = useContext(UserContext);
  const [userIncome, setUserIncome] = value2;
  const [userExpense, setUserExpense] = value3;
  const [userSaving, setUserSaving] = value4;
  const [events, setEvents] = value6;

  const { user } = useAuth();
  let sumIncome, sumExpense, sumSavings;

  sumIncome = sumExpense = sumSavings = 0;
  const filterData = () => {
    console.log(events);
    events.map((event) => {
      if (user && event.data.user === user.email) {
        // console.log(event.data.amount);
        if (event.data.type === "income") {
          sumIncome += parseInt(event.data.amount, 10);
        }
        if (event.data.type === "expense") {
          sumExpense += parseInt(event.data.amount, 10);
        }
        if (event.data.type === "saving") {
          sumSavings += parseInt(event.data.amount, 10);
        }
      }
    });
    // console.log("income: ", sumIncome);
    // setting data for context
    setUserIncome(sumIncome);
    setUserExpense(sumExpense);
    setUserSaving(sumSavings);
  };

  useEffect(() => {
    db.collection("events").onSnapshot((snapshot) => {
      console.log("db triggered");
      setEvents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [db, filterData()]);

  return (
    <div className="section_one">
      <Card className="section_one_overview_card">
        <h4>Overview</h4>
        <CardContent>
          <Overview
            income={sumIncome}
            expense={sumExpense}
            savings={sumSavings}
          />
        </CardContent>
      </Card>
      <br></br>
      <Card className="section_one_table_card">
        <h4>Past Transactions</h4>
        <CardContent>
          <Transactions />
        </CardContent>
      </Card>
    </div>
  );
}

export default SectionOne;
