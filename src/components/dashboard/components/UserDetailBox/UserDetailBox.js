import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeStudent } from "../../../../actions/studentAction";
/**
 * This component is a component for user details, material ui is used
 */

const UserDetailBox = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    setAnchorEl(null);
    props.dispatch(removeStudent(id));
  };
  const { className, title, route, email, mobile, lastlogin } = props;

  const classes = useStyles({ ...props });

  return (
    <Card className={clsx(classes.root, className)} elevation={0}>
      <CardHeader
        action={
          <>
            <IconButton
              aria-label="more"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to={route} className={clsx(classes.route, className)}>
                  View More
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleClose(mobile)}>Remove</MenuItem>
            </Menu>
          </>
        }
        title={title}
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Grid container justify="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <p style={{ fontSize: "7" }}>{email}</p>
            <p style={{ fontSize: "7" }}>{mobile}</p>
            <p style={{ fontSize: "7" }}>
              Last Login: {new Date(lastlogin).toDateString()} at{" "}
              {new Date(lastlogin).toLocaleTimeString()}
            </p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

UserDetailBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default connect()(UserDetailBox);
