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
        <Navigation />
      </nav>
      <h1 className="heading">ECE SOCIETY, BIT MESRA</h1>
    </div>
    </>
  );
};

export default Header;
