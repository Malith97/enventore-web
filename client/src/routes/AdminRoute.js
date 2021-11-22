import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AddRestaurants from "../pages/AddRestaurants";
import ViewRestaurants from "../pages/ViewRestaurants";
import UserComplaints from "../pages/UserComplaints";
import ViewUsers from "../pages/ViewUsers";
import AvailableDishes from "../pages/AvailableDishes";

const AdminRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admindashboard" exact component={HomePage} />
        <Route path="/add_restaurants" component={AddRestaurants} />
        <Route path="/view_restaurant" component={ViewRestaurants} />
      </Switch>
    </Router>
  );
};

export default withRouter(AdminRoute);
