import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FcSurvey, FcHighPriority, FcApproval } from "react-icons/fc";
import { MenuItem, Select } from "@mui/material";

const Form = (props) => {
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
    for (const field in state) {
      if (typeof state[field] === "string" && !state[field]) {
        alert("All the input fields should be filled.");
        return;
      }
    }
    // console.log(state);
    props.postData(state);
  };
  return (
    <Dialog open={props.open}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <form>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem className="form_elements">
              <ListItemIcon>
                <FcSurvey className="categoryIcon" />
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
                <FcSurvey className="categoryIcon" />
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
                <FcSurvey className="categoryIcon" />
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
                <MenuItem value={"expense"}>expense</MenuItem>
                <MenuItem value={"saving"}>savings</MenuItem>
              </Select>
            </ListItem>

            <ListItem className="form_elements">
              <ListItemIcon>
                <FcSurvey className="categoryIcon" />
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
            <b>Cancel</b>
            <FcHighPriority
              className="categoryIcon"
              onClick={props.handleClose}
            />
            <b>Add</b>
            <FcApproval className="categoryIcon" onClick={handleSubmit} />
          </DialogActions>
        </form>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default Form;
