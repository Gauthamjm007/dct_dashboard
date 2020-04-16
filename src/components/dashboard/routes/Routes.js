import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserDetails from "../pages/UserDetails/UserDetails";
import WithLayoutRoute from "./WithLayoutRoute";
import DashboardLayout from "../layouts/Dashboard/Dashboard";

import Upload from "../pages/UploadFiles/Upload";

function Routes() {
  return (
    <Switch>
      <WithLayoutRoute
        component={Dashboard}
        exact
        layout={DashboardLayout}
        path="/dashboard"
      />

      <WithLayoutRoute
        component={UserDetails}
        exact
        layout={DashboardLayout}
        path="/details"
      />

      <WithLayoutRoute
        component={Upload}
        exact
        layout={DashboardLayout}
        path="/upload"
      />

      <Redirect to="/upload" />
    </Switch>
  );
}

export default Routes;
