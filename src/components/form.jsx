import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import RemoveFromQueueIcon from "@mui/icons-material/RemoveFromQueue";
import { MenuItem, Select } from "@mui/material";

const Form = () => {
  return (
    <div>
      <form>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={""} />
            <TextField label="description" name="description" />
          </ListItem>

          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={""} />
            <TextField label="amount" name="amount" />
          </ListItem>

          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"category"} />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              label="category"
            >
              <MenuItem value={"income"}>income</MenuItem>
              <MenuItem value={"expense"}>expenses</MenuItem>
              <MenuItem value={"saving"}>savings</MenuItem>
            </Select>
          </ListItem>
        </List>
      </form>
    </div>
  );
};

export default Form;
