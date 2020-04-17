import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "./styles";

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell align="left">Task Name</TableCell>
          <TableCell align="left">Completed</TableCell>
          <TableCell align="left">Incomplete</TableCell>
          <TableCell align="left">In Progress</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={row.title}>
            <TableCell component="th" scope="row">
              {row.num}
            </TableCell>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.complete}</TableCell>
            <TableCell align="left">
              {props.users - row.complete - row.inprogress}
            </TableCell>
            <TableCell align="left">{row.inprogress}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
