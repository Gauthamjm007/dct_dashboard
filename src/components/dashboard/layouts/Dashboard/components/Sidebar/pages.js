import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PublishIcon from "@material-ui/icons/Publish";
const pages = [
  {
    title: "Upload",
    href: "/upload",
    icon: <PublishIcon />,
  },
  {
    title: "Members Details",
    href: "/details",
    icon: <PersonOutlineIcon />,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
];

export default pages;
