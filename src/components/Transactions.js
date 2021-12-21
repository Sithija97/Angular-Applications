import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserContext } from "../StateContext";
import db from "../firebase";
import { useAuth } from "../context/authContext";

const useStyles = makeStyles({
  table: {},
});

function Transactions() {
  const { value, value2, value3, value4, value6 } = useContext(UserContext);
  const [events, setEvents] = value6;
  const { user } = useAuth();

  const myArray = [];
  const collectData = () => {
    events.map((event) => {
      if (user && event.data.user === user.email) {
        myArray.push(event);
      }
    });
    console.log("in tr:", myArray);
  };

  // const setCollectedData = () => {
  //   // setLocalData(myArray);
  //   myArray.map(data => {
  //     console.log(data.data.name);
  //   })
  // };

  useEffect(() => {}, [collectData()]);
  const classes = useStyles();
  return (
    <TableContainer style={{ height: 300 }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <b>Name</b>
              </TableCell>
              <TableCell align="left">Amount</TableCell>
              {/* <TableCell align="left">Type</TableCell> */}
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myArray.map((data) => (
              <TableRow key={data.data.id}>
                <TableCell component="th" scope="row">
                  {data.data.name}
                </TableCell>
                <TableCell align="left">{data.data.amount}</TableCell>
                {/* <TableCell align="left">{data.data.type}</TableCell> */}
                <TableCell align="left">{data.data.category}</TableCell>
                <TableCell align="left">{data.data.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainer>
  );
}

export default Transactions;
