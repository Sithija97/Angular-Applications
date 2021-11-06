import React from "react";
import { FcMoneyTransfer, FcPositiveDynamic, FcBearish } from "react-icons/fc";
import { Box } from "@mui/system";

const CategoryBoxes = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box
        className="boxStyles"
        sx={{
          width: 225,
          height: 100,
          bgcolor: "#fff",
        }}
      >
        <div className="categoryContainer">
          <FcPositiveDynamic className="categoryIcon" />
          <p>
            <b>Income</b> <br /> <p className="numberVaue">280 000</p>
          </p>
        </div>
      </Box>
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
            <b>Expenses</b> <br /> <p className="numberVaue">30 000</p>
          </p>
        </div>
      </Box>
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
            <b>Savings</b> <br /> <p className="numberVaue">250 000</p>
          </p>
        </div>
      </Box>
    </div>
  );
};

export default CategoryBoxes;
