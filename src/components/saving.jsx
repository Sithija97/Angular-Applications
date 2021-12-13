import React from "react";
import { FcMoneyTransfer, FcPositiveDynamic, FcBearish } from "react-icons/fc";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Saving = (props) => {
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
          <FcMoneyTransfer className="categoryIcon" />
          <p>
            <b>Savings</b> <br />{" "}
            <p className="numberVaue">{props.categories.saving}</p>
          </p>
        </div>
      </Box>
    </Grid>
  );
};

export default Saving;
