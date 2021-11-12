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

export default function DataTable() {
  return (
    <Box
      className="boxStyles"
      sx={{
        width: 780,
        height: 347,
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
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    Water bill
                  </TableCell>
                  <TableCell align="left">600</TableCell>
                  <TableCell align="left">expenses</TableCell>
                  <TableCell align="left">06/11/2021</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TableContainer>
      </div>
    </Box>
  );
}
