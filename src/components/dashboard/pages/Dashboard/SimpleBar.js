import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "@material-ui/core";
import PropTypes from "prop-types";

/** This component accepts data of array of objects having keys of user and hours with string and number values respectively */
export default function SimpleBar(props) {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart width={900} height={250} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="num" />
        <YAxis />
        <Bar dataKey="complete" barSize={7} fill="#34d12c" />
        <Bar dataKey="inprogress" barSize={7} fill="#faa302" />
        <Bar dataKey="incomplete" barSize={7} fill="#f04a29" />
      </BarChart>
    </ResponsiveContainer>
  );
}

SimpleBar.propTypes = {
  /**accepts array of objects as value */
  data: PropTypes.array,
};
