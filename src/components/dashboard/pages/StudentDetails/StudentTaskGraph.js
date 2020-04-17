import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import PropTypes from "prop-types";

/** This component accepts data of array of objects having keys of user and hours with string and number values respectively */
export default function StudentTaskGraph(props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart width={900} height={250} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="task" />
        <YAxis />
        <Bar dataKey="time" barSize={7} fill="#34d12c" />
      </BarChart>
    </ResponsiveContainer>
  );
}

StudentTaskGraph.propTypes = {
  data: PropTypes.array,
};
