//jshint esversion:6
import React from "react";

import Navigation from "./Navigation"

function Header(){
  return (
    <>

    <div className="header-page">
      <nav className="navbar navbar-expand-lg">
        <img className="logo" src="images/logo_fav.png" alt="ecesoc logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top" aria-controls="top" aria-expanded="false" aria-label="Toggle navigation">
          <a className="navbar-toggler-icon"></a>
          <span>Menu</span>
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="top">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/events">Events</a></li>
            <li className="nav-item"><a className="nav-link" href="/members">Members</a></li>
            <li className="nav-item"><a className="nav-link" href="/alumini">Alumni</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          </ul>
        </div>
      </nav>
      <h1 className="heading">ECE SOCIETY, BIT MESRA</h1>
      <Navigation />
    </div>
    </>
  );
};

export default Header;
