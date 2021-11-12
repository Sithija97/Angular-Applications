import React from "react";
import { useAuth } from "../context/authContext";
import { Avatar, IconButton } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";
import { Box } from "@mui/system";

const ProfileSection = (props) => {
  const { user } = useAuth();
  return (
    <React.Fragment>
      <Box
        className="boxStyles"
        sx={{
          width: 280,
          height: 275,
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
          <Box ml={3} className="profileName">
            {user && user.displayName}
            <br />
            {user && user.email} <br />
            <Box style={{ cursor: "pointer" }} onClick={props.handleLoggedOut}>
              logout
              <IconButton>
                <TiArrowBack />
              </IconButton>
            </Box>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default ProfileSection;
