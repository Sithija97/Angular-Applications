import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import db from "../firebase";
import { UserContext } from "../StateContext";
function Report() {
  const { value, value2, value3, value4, value6 } = useContext(UserContext);
  const [user, setUser] = value;
  const [userIncome, setUserIncome] = value2;
  const [userExpense, setUserExpense] = value3;
  const [userSaving, setUserSaving] = value4;
  const [events, setEvents] = value6;

  const data = {
    labels: ["inflows", "outflows", "savings"],
    datasets: [
      {
        label: "My First Dataset",
        data: [userIncome, userExpense, userSaving],
        backgroundColor: [" #d63031", "#ff5252 ", "#dfe4ea "],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      {console.log("inside report: ", userIncome)}
      <Doughnut data={data} />
    </>
  );
}

export default Report;
