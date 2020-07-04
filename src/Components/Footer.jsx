//jshint esversion:6

import React from "react";

function Footer(){
  return (
    <footer>
    <h2>ECE SOCIETY, BIT MESRA</h2>
    <div className="footer row">
    <div className="col-lg-3 col-md-12"></div>
      <div className="col-lg-3 col-md-12">
        <h3>Follow Us On</h3>
        <a className="icon" href="https://in.linkedin.com/company/ece-society-bit-mesra"><i className="fab fa-linkedin-in"></i></a>
        <a className="icon" href="https://www.instagram.com/ecesociety/?igshid=rzx7kqpvjuad"><i className="fab fa-instagram"></i></a>
        <a className="icon" href="https://www.facebook.com/ecesoc.bitmesra/"><i className="fab fa-facebook-f"></i></a>
      </div>

      <div className="col-lg-3 col-md-12">
        <h3>Contact Us</h3>
        <h4><span>Email: </span>ecesoc@bitmesra.ac.in</h4>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
