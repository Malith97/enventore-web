import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withRouter } from "react-router-dom";

import RestHome from "../pages/RestHome";

const RestRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/restdashboard" exact component={RestHome} />
      </Switch>
    </Router>
  );
};

export default withRouter(RestRoute);
