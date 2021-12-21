import React from "react";
import './Overview.css'
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

function Overview({ income, expense, savings }) {
  return (
    <List component="nav" aria-label="main mailbox folders" className="List">
      <ListItem button className="ListItem">
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary={"Inflows :" + income} />
      </ListItem>
      <ListItem button className="ListItem">
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary={"Outflows :" + expense} />
      </ListItem>
      <ListItem button className="ListItem">
        <ListItemIcon>
          <SaveAltIcon />
        </ListItemIcon>
        <ListItemText primary={"Savings :" + savings} />
      </ListItem>
    </List>
  );
}

export default Overview;
