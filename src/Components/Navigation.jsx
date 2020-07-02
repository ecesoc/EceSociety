//jshint esversion:6
import React from "react";
import {BrowserRouter,Switch,Link,Route} from "react-router-dom";

function Navigation(){
  return (
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/members">Members</Link></li>
      <li><Link to="/alumni">Alumni</Link></li>
      <li><Link to="/About">About Us</Link></li>
    </ul>
    <Switch>
    <Route exact path="/">
    <h2>This is home page</h2>
    </Route>
    <Route path="/events">
    <h2>This is events page</h2>
    </Route>
    <Route path="/members">
    <h2>This is member page</h2>
    </Route>
    <Route path="/alumni">
    <h2>This is member page</h2>
    </Route>
    <Route path="/About">
    <h2>This is member page</h2>
    </Route>
    </Switch>
    </BrowserRouter>
  )
};

export default Navigation;
