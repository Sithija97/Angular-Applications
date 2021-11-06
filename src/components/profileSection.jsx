import { Box } from "@mui/system";
import React from "react";

const ProfileSection = () => {
  return (
    <div>
      <Box
        style={{ margin: "10px" }}
        sx={{
          width: 280,
          height: 455,
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

export default ProfileSection;
