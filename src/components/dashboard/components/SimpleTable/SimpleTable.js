import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "./styles";
import PropTypes from "prop-types";

/**
 * This component is a table it accepts an array of objects of a format, material ui table is used
 */

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

SimpleTable.defaultProps = {
  data: [
    {
      id: 1,
      real_name: "real name",
      tz: "Asia",
      activity_periods: [
        {
          start_time: "Feb 1 2020 1:33 PM",
          end_time: "Feb 1 2020 1:54 PM",
        },
      ],
    },
  ],
};
SimpleTable.propTypes = {
  /** string value for heading*/
  data: PropTypes.array,
};
