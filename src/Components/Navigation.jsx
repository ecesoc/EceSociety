//jshint esversion:6
import React from "react";
import {BrowserRouter,Switch,Link,Route} from "react-router-dom";
import Alumni from "./Alumni/Alumni";
import Member from "./members/Members";

function Navigation(){
  return (
    <BrowserRouter>
    <div className="collapse navbar-collapse" id="top">
    <ul className="navbar-nav ml-auto">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/members">Members</Link></li>
      <li><Link to="/alumni">Alumni</Link></li>
      <li><Link to="/About">About Us</Link></li>
    </ul>
    </div>
    <Switch>
    <Route exact path="/">
    <h2>This is home page</h2>
    </Route>
    <Route path="/events">
    <h2>This is events page</h2>
    </Route>
    <Route path="/members">
    <Member />
    </Route>
    <Route path="/alumni">
    <Alumni />
    </Route>
    <Route path="/About">
    <h2>This is About page</h2>
    </Route>
    </Switch>
    </BrowserRouter>
  )
};

export default Navigation;
