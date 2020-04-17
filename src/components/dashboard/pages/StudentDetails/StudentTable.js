import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import useStyles from "./styleTable";

export default function StudentTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="left">Time Taken</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={row.title}>
            <TableCell component="th" scope="row">
              {row.task}
            </TableCell>
            <TableCell align="left">{row.taskName}</TableCell>
            <TableCell align="left">{row.time}s</TableCell>
            <TableCell align="left">
              {row.status === "In" ? (
                <Button variant="contained" color="inherit">
                  In Progress
                </Button>
              ) : row.status === "Completed" ? (
                <Button variant="contained" color="primary">
                  Completed
                </Button>
              ) : (
                <Button variant="contained" color="secondary">
                  In Complete
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
