import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import RemoveFromQueueIcon from "@mui/icons-material/RemoveFromQueue";
import { Button, DialogActions, MenuItem, Select, Stack } from "@mui/material";

const Form = () => {
  const initialState = {
    description: "",
    amount: "",
    category: "",
    date: "",
  };
  const [state, setState] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={""} />
            <TextField
              size="small"
              label="description"
              name="description"
              onChange={handleInputChange}
            />
          </ListItem>

          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={""} />
            <TextField
              size="small"
              label="amount"
              name="amount"
              onChange={handleInputChange}
            />
          </ListItem>

          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"category"} />
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              label="category"
              onChange={handleInputChange}
            >
              <MenuItem value={"income"}>income</MenuItem>
              <MenuItem value={"expense"}>expenses</MenuItem>
              <MenuItem value={"saving"}>savings</MenuItem>
            </Select>
          </ListItem>

          <ListItem className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={""} />
            <TextField
              size="small"
              fullWidth
              id="date"
              label="date"
              type="date"
              // defaultValue="2021-05-01"
              className="textField"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
            />
          </ListItem>
        </List>
        <DialogActions>
          {/* <Button color="primary">Cancel</Button> */}
          <Button color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </DialogActions>
      </form>
    </div>
  );
};

export default Form;
