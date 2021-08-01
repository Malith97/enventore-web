import "./App.css";
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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/add_restaurants" component={AddRestaurants} />
        <Route path="/view_restaurant" component={ViewRestaurants} />
        <Route path="/user_complaints" component={UserComplaints} />
        <Route path="/view_users" component={ViewUsers} />
        <Route path="/available_dishes" component={AvailableDishes} />
      </Switch>
    </Router>
  );
};

export default App;
