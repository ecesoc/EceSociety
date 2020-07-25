//jshint esversion:6
import React,{useState} from "react";
import {BrowserRouter,Switch,Link,Route} from "react-router-dom";
import Alumni from "./Alumni/Alumni";
import Member from "./members/Members";
import Events from "./Events/Event";
import About from "./About/About";
import HeadContent from "./HeadContent";
import Home from "./Home/Home";


function Navigation(){
  var [isClosed, setIsClosed]=useState(false);

  var toggleChange= function(){
    setIsClosed(!isClosed);
  };

  return (
    <BrowserRouter basename="/EceSociety">
    <nav className="navbar fixed-top navbar-expand-lg">
    <img className="logo" src="images/logo_fav.png" alt="ecesoc logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top" aria-controls="top" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleChange}>
      <p>{!isClosed?"Menu":"X"}</p>
      </button>
      <div className="collapse navbar-collapse" id="top">
    <ul className="navbar-nav ml-auto">
      <Link to="/"><li>Home</li></Link>
      <Link to="/Events"><li>Events</li></Link>
      <Link to="/members"><li>Executive Body</li></Link>
      <Link to="/Alumni"><li>Alumni</li></Link>
      <Link to="/About"><li>About Us</li></Link>
    </ul>
    </div>
    </nav>

    <Switch>

    <Route exact path="/">
    <HeadContent page="Home" quote="Other kids went out and beat each other up or played cricket, and I built Electronics" />
    <Home />
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
