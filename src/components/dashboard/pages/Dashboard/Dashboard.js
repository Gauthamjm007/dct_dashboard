import React from "react";
import { Grid } from "@material-ui/core";
import { InfoBox, Widget, SimpleTable } from "../../components";
import useStyles from "./styles";
import GroupIcon from "@material-ui/icons/Group";
import { connect } from "react-redux";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import TimerIcon from "@material-ui/icons/Timer";
import SimpleBar from "./SimpleBar";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
/**
 * This component is dashboard component it is displayed in main page, on route /dashboard
 */

const Dashboard = (props) => {
  const classes = useStyles();
  console.log(props.student, "student");
  console.log();

  const totalTasks =
    (Object.keys(props.student[1]).length - 11) * props.student.length;

  const numStudents = String(props.student.length);
  const numTasks = String(Object.keys(props.student[1]).length - 11);
  const avgTime = String(
    (
      props.student
        .map((time) => time["Time Spent(mins)"])
        .map(Number)
        .reduce((a, b) => a + b, 0) /
      props.student.filter((num) => Number(num["Time Spent(mins)"]) !== 0)
        .length
    ).toFixed(2)
  );

  const findIncludes = (str) => {
    return props.student
      .map((num) => Object.values(num))
      .flat()
      .filter((value) => value.includes(str)).length;
  };

  const checknum = /[1-9]+/g;

  const alltaskname = Object.keys(props.student[0]).filter((ele) =>
    checknum.test(ele)
  );

  const alltasksdata = alltaskname.map((ele, i) => {
    return {
      title: ele,
      num: i,
      complete: props.student.filter((task) => task[ele].includes("Completed"))
        .length,
      inprogress: props.student.filter((task) => task[ele].includes("In"))
        .length,
      incomplete: Math.abs(
        alltaskname.length -
          props.student.filter((task) => task[ele].includes("Completed"))
            .length -
          props.student.filter((task) => task[ele].includes("In")).length
      ),
    };
  });

  console.log(alltasksdata, "all tasks data");

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Total Number of Students"
            value={numStudents}
            icon={<GroupIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Number of Assignments Given"
            value={numTasks}
            icon={<LaptopChromebookIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Average Time Spent on assignments "
            value={avgTime.concat(" min")}
            icon={<TimerIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="A/g Time Per Assignment "
            value={
              String((Number(avgTime) / Number(numTasks)).toFixed(2)) +
              " " +
              "min"
            }
            icon={<TimelapseIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title={`Number of Completed tasks out of ${totalTasks}`}
            value={String(findIncludes("Completed"))}
            icon={<CheckCircleIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title={`In Progress tasks out of ${totalTasks}`}
            value={String(findIncludes("In"))}
            icon={<HourglassEmptyIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title={`In Complete tasks out of ${totalTasks}`}
            value={String(
              Math.abs(
                totalTasks - findIncludes("In") - findIncludes("Completed")
              )
            )}
            icon={<CancelIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>

        <Grid item xs={12}>
          <Widget title="Completed(G) vs In Progress(O) vs InComplete(R) Assignments">
            <SimpleBar data={alltasksdata} />
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget title="Student Tasks Details">
            <SimpleTable
              data={alltasksdata}
              users={numStudents}
              tasks={alltaskname.length}
            />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Dashboard);
