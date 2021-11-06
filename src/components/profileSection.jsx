import React from "react";
import { useAuth } from "../context/authContext";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

const ProfileSection = () => {
  const { user } = useAuth();
  return (
    <div>
      <Box
        className="boxStyles"
        sx={{
          width: 280,
          height: 265,
          bgcolor: "#fff",
        }}
      >
        <div>
          <Avatar
            style={{
              margin: "auto",
              top: "30px",
            }}
            alt="Remy Sharp"
            src={user && user.photoURL}
            sx={{ width: 140, height: 140 }}
          />
          <div className="profileName">
            <b>{user && user.displayName}</b>
            <br />
            <b>{user && user.email}</b>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ProfileSection;
