import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Toolbar, IconButton, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import ThemeToggler from "../../../../components/ThemeToggler/ThemeToggler";
import { connect } from "react-redux";
import { getStudent } from "./../../../../../../actions/studentAction";

/**
 * This component is a top bar it accpets 4 props a style ,onToggleSidebar , openSideBar, childreb
 */

function Topbar(props) {
  const { className, children, openSidebar, onToggleSidebar } = props;
  const classes = useStyles(props);

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.brandWrapper}>
          <div className={classes.logo}>
            <div align="center">
              <img
                src="https://i.ibb.co/NjSMLR8/dct.png"
                alt="logo"
                className={classes.logoimg}
              ></img>
            </div>
          </div>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={onToggleSidebar}
            disabled={props.student.length === 0 ? true : false}
          >
            {openSidebar ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <ThemeToggler className={classes.themeToggler} />
        <IconButton className={classes.homeButton}>
          <Link to="/">
            <HomeIcon className={clsx(classes.homeicon, className)} />
          </Link>
        </IconButton>
      </Toolbar>
      {children}
    </AppBar>
  );
}

Topbar.propTypes = {
  /** a style class name */
  className: PropTypes.string,
  /** a call back funciton on toogle */
  onToggleSidebar: PropTypes.func,
  /** a sidebar on open */
  openSidebar: PropTypes.bool,
  /** a children to accept props */
  children: PropTypes.node,
};

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Topbar);
