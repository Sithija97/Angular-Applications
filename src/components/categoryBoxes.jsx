import { Box } from "@mui/system";
import React from "react";

const CategoryBoxes = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box
        style={{ margin: "10px" }}
        sx={{
          width: 225,
          height: 100,
          bgcolor: "#00802b",
          "&:hover": {
            backgroundColor: "#00cc44",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Box
        style={{ margin: "10px" }}
        sx={{
          width: 225,
          height: 100,
          bgcolor: "#00802b",
          "&:hover": {
            backgroundColor: "#00cc44",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Box
        style={{ margin: "10px" }}
        sx={{
          width: 225,
          height: 100,
          bgcolor: "#00802b",
          "&:hover": {
            backgroundColor: "#00cc44",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </div>
  );
};

export default CategoryBoxes;
