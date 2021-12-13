import React from "react";
import { FcMoneyTransfer, FcPositiveDynamic, FcBearish } from "react-icons/fc";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Expense = (props) => {
  console.log(props.categories);
  return (
    <Grid style={{ display: "flex" }}>
      <Box
        className="boxStyles"
        sx={{
          width: 225,
          height: 100,
          bgcolor: "#fff",
        }}
      >
        <div className="categoryContainer">
          <FcBearish className="categoryIcon" />
          <p>
            <b>Expenses</b> <br />{" "}
            <p className="numberVaue">{props.categories.expense}</p>
          </p>
        </div>
      </Box>
    </Grid>
  );
};

export default Expense;
