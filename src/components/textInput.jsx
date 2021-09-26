import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TextInput = ({ name }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label={name} variant="standard" />
    </Box>
  );
};

export default TextInput;
