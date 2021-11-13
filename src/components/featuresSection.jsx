import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FcDoughnutChart, FcStatistics } from "react-icons/fc";

const FeaturesSection = () => {
  return (
    <Box
      className="boxStyles"
      sx={{
        width: 280,
        height: 130,
        bgcolor: "#fff",
      }}
    >
      <Box style={{ cursor: "pointer" }}>
        <div className="categoryContainer">
          <FcDoughnutChart className="categoryIcon" />
          <p>
            <b>Graphical Views</b>
          </p>
        </div>

        <div className="categoryContainer">
          <FcStatistics className="categoryIcon" />
          <p>
            <b>Set Budget</b>
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
