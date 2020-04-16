import React from "react";
import { Grid } from "@material-ui/core";
import { UserDetailBox } from "../../components";
import useStyles from "./styles";
import { connect } from "react-redux";
import minutesDiff from "../../../../selectors/minutesDiff";

const UserDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {props.student
          .sort((a, b) => a.Name.localeCompare(b.Name))
          .map((data) => {
            return (
              <Grid item lg={4} sm={6} xl={3} xs={12} key={data.id}>
                <UserDetailBox
                  route={`/student/${data.Mobile}`}
                  id={data.Mobile}
                  title={data.Name}
                  email={data.Email}
                  mobile={data.Mobile}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.members,
    student: state.student,
  };
};
export default connect(mapStateToProps)(UserDetails);
