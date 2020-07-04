//jshint esversion:6
import React from "react";
import {BrowserRouter,Switch,Link,Route} from "react-router-dom";
import Alumni from "./Alumni/Alumni";
import Member from "./members/Members";
import Events from "./Events/Event";
import About from "./About/About";
import HeadContent from "./HeadContent";


function Navigation(){
  return (
    <BrowserRouter>
    <nav className="navbar fixed-top navbar-expand-lg">
    <img className="logo" src="images/logo_fav.png" alt="ecesoc logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top" aria-controls="top" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="top">
    <ul className="navbar-nav ml-auto">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Events">Events</Link></li>
      <li><Link to="/members">Executive Body</Link></li>
      <li><Link to="/Alumni">Alumni</Link></li>
      <li><Link to="/About">About Us</Link></li>
    </ul>
    </div>
    </nav>

    <Switch>

    <Route exact path="/">
    <HeadContent page="Home" quote="Other kids wen out and beat each other up or played cricket. and I built Electronics" />
    <h2>This is home page</h2>
    </Route>

    <Route path="/Events">
    <HeadContent page="Events" quote="A goal without a plan is just a wish" />
    <Events />
    </Route>

    <Route path="/members">
    <HeadContent page="Executive Body" quote="Talent wins games, but teamwork and intelligence win championships." />
    <Member />

    </Route>

    <Route path="/Alumni">
    <HeadContent page="Our Alumni" quote="Any institution's alumni are key to its growth. We are focused on giving a global experience to our students." />
    <Alumni />
    </Route>

    <Route path="/About">
    <HeadContent page="About Us" quote="We play with Electronics" />
    <About />
    </Route>

    </Switch>
    </BrowserRouter>
  )
};

export default Navigation;
