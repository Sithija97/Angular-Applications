// eslint-disable-next-line
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const DataTable = (props) => {
  return (
    <Box
      className="boxStyles"
      sx={{
        width: 780,
        height: 367,
        bgcolor: "#fff",
      }}
    >
      <div className="tableContainer">
        <b>Transactions</b>
        <TableContainer style={{ height: 300 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <b>Description</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Amount</b>{" "}
                  </TableCell>
                  {/* <TableCell align="left">Type</TableCell> */}
                  <TableCell align="left">
                    <b>Category</b>{" "}
                  </TableCell>
                  <TableCell align="left">
                    <b>Date</b>{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell component="th" scope="row">
                      {event.description}
                    </TableCell>
                    <TableCell align="left">{event.amount}</TableCell>
                    <TableCell align="left">{event.category}</TableCell>
                    <TableCell align="left">{event.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableContainer>
      </div>
    </Box>
  );
};

export default DataTable;
