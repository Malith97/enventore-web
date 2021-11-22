import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddRestaurants from "./pages/AddRestaurants";
import ViewRestaurants from "./pages/ViewRestaurants";
import UserComplaints from "./pages/UserComplaints";
import ViewUsers from "./pages/ViewUsers";
import AvailableDishes from "./pages/AvailableDishes";
import LoginPage from "./pages/LoginPage";
import RestHome from "./pages/RestHome";
import AddDish from "./pages/AddDish";
import ViewDishes from "./pages/ViewDishes";

const App = () => {
  const [user, setLoginUser] = useState({});
  const [isAuth, setIsAuth] = useState(true);
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Switch>
        <Route path="/admindashboard" component={HomePage} />
        <Route path="/add_restaurants" component={AddRestaurants} />
        <Route path="/view_restaurant" component={ViewRestaurants} />
        <Route path="/user_complaints" component={UserComplaints} />
        <Route path="/view_users" component={ViewUsers} />
        <Route path="/available_dishes" component={AvailableDishes} />
      </Switch>
      <Switch>
        <Route path="/restdashboard" component={RestHome} />
        <Route path="/add_dish" component={AddDish} />
        <Route path="/view_dishes" component={ViewDishes} />
      </Switch>
    </Router>
  );
};

export default App;
