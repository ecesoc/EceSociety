//jshint esversion:6

import React from "react";

function Footer(){
  var year=new Date().getFullYear();
  return (
    <footer>
    <h3>Follow Us On</h3>
      <ul>
        <li><a href="https://in.linkedin.com/company/ece-society-bit-mesra"><i className="fab fa-linkedin-in icon"></i></a></li>
        <li><a href="https://www.instagram.com/ecesociety/?igshid=rzx7kqpvjuad"><i className="fab fa-instagram icon"></i></a></li>
        <li><a  href="https://www.facebook.com/ecesoc.bitmesra/"><i className="fab fa-facebook-f icon"></i></a></li>
        <li><a  href="mailto:ecesoc@bitmesra.ac.in?subject='Query' "><i className="fa fa-envelope icon"></i></a></li>
      </ul>

      <div>
        <h3>Copyright &#169; {year} ECE Society,BIT Mesra</h3>
      </div>
    </footer>
  );
}

export default Footer;
