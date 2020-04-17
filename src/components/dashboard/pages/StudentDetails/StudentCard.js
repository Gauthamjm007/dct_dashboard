import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {bull}Name : {props.name}
          <br />
          <br />
          {bull}Email : {props.email}
          <br />
          <br />
          {bull}Mobile : {props.mobile}
          <br />
          <br />
          {bull}Enrolled Date : {new Date(props.enroll_date).toDateString()}
          <br />
          <br />
          {bull}Validity Till : {props.validity}
          <br />
          <br />
          {bull}Time Spent : {props.time_spent}min
          <br />
          <br />
          {bull}Completed Task : {props.completed}
          <br />
          <br />
          {bull}Incompleted Task : {props.incompleted}
          <br />
          <br />
          {bull}In Progress Task : {props.progress}
          <br />
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/details">
          <Button size="small">Back</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
