import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";
import StudentTaskGraph from "./StudentTaskGraph";
import { PageTitle, Widget } from "../../components";
import StudentTable from "./StudentTable";

const StundetDetail = (props) => {
  const checknum = /[1-9]+/g;
  const checkAlpha = /[a-z]+/gi;
  const alltaskname = Object.keys(props.student).filter((ele) =>
    checknum.test(ele)
  );

  const allTaskDetails = alltaskname.map((ele, i) => {
    return {
      task: String(i),
      taskName: ele,
      time:
        props.student[ele].length !== 0
          ? props.student[ele].match(/\d+/g)[0]
          : 0,
      status:
        props.student[ele].length !== 0
          ? props.student[ele].match(checkAlpha)[0]
          : 0,
    };
  });
  return (
    <>
      <Grid container spacing={3}>
        <Grid items xs={12}>
          <PageTitle title={`${props.student.Name} Details`}></PageTitle>
        </Grid>
        <Grid items xs={12}>
          <Grid container justify="center">
            <StudentCard
              name={props.student.Name}
              email={props.student.Email}
              mobile={props.student.Mobile}
              enroll_date={props.student.EnrollDate}
              validity={props.student.ValidTill}
              time_spent={props.student["Time Spent(mins)"]}
              completed={
                Object.values(props.student).filter((ele) =>
                  ele.includes("Completed")
                ).length
              }
              progress={
                Object.values(props.student).filter((ele) => ele.includes("In"))
                  .length
              }
              incompleted={Math.abs(
                19 -
                  Object.values(props.student).filter((ele) =>
                    ele.includes("Completed")
                  ).length -
                  Object.values(props.student).filter((ele) =>
                    ele.includes("In")
                  ).length
              )}
            />
          </Grid>
        </Grid>
        <Grid items xs={12}></Grid>
        <Grid items xs={12}>
          <Grid container justify="center">
            <PageTitle title="Student task completed in sec"></PageTitle>
            <StudentTaskGraph data={allTaskDetails} />
          </Grid>
        </Grid>
        <Grid items xs={12}>
          <Grid container justify="center">
            <Widget title="student task detail">
              <StudentTable data={allTaskDetails} />
            </Widget>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    student: state.student.find((ele) => String(ele.Mobile) === String(id)),
  };
};
export default connect(mapStateToProps)(StundetDetail);
