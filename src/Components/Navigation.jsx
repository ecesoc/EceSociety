//jshint esversion:6
import React,{useState} from "react";
import {HashRouter as Router,Switch,Link,Route} from "react-router-dom";
import Alumni from "./Alumni/Alumni";
import Member from "./members/Members";
import Events from "./Events/Event";
import About from "./About/About";
import HeadContent from "./HeadContent";
import Home from "./Home/Home";
import './Navigation.css';
function Navigation(){
  var [isClosed, setIsClosed]=useState(false);
  var toggleChange= function(){
    setIsClosed(!isClosed);
  };

  return (
    <Router>
    <nav className="navbar fixed-top navbar-expand-lg">
    <Link to="/"><img className="logo" src="images/logo_fav.png" alt="ecesoc logo" /></Link>
    <a href="https://www.bitmesra.ac.in/"><img className="logo" src="images/BIT-Mesra-logo.jpg" alt="BIT logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top" aria-controls="top" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleChange}>
      <span className={isClosed?"menuOpen":"menuClose"}></span>
      <span className={isClosed?"menuOpen":"menuClose"}></span>
      <span className={isClosed?"menuOpen":"menuClose"}></span>
      </button>

    <div className="collapse navbar-collapse" id="top">
    <ul className="navbar-nav ml-auto">
      <Link to="/"><li className="nav-items">HOME</li></Link>
      <Link to="/Events"><li className="nav-items">EVENTS</li></Link>
      <Link to="/members"><li className="nav-items">EXECUTIVE BODY</li></Link>
      <Link to="/Alumni"><li className="nav-items">ALUMNI</li></Link>
      <Link to="/About"><li className="nav-items">ABOUT US</li></Link>
    </ul>
    </div>
    </nav>

    <Switch>

    <Route exact path="/">
    <HeadContent page="ECE SOCIETY" quote="Electronic Communication is an instantaneous and illusory contact that creates a sense of intimacy without the emotional investment that leads to close friendships." />
    <Home />
    </Route>

    <Route path="/Events">
    <HeadContent page="EVENTS" quote="Events, we have completed demonstrate what we know. Future Events show what we learn." />
    <Events />
    </Route>

    <Route path="/members">
    <HeadContent page="EXECUTIVE BODY" quote="Talent wins games, but teamwork and intelligence win championships." />
    <Member />
    </Route>

    <Route path="/Alumni">
    <HeadContent page="OUR ALUMNI" quote="Life is like a semiconductor, neither conductor nor insulator." />
    <Alumni />
    </Route>

    <Route path="/About">
    <HeadContent page="ABOUT US" quote="There's nothing I believe in more strongly than getting young people interested in Science and Engineering, for a better Tomorrow." />
    <About />
    </Route>

    </Switch>
    </Router>
  )
};

export default Navigation;
