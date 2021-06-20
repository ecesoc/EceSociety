//jshint esversion:6
import React from "react";
import WhatWeDo from "../About/What-we-do";
import Carousel from "./Carousel";
import './Home.css';
function Home (){
  return (
    <div>
    <div className="bimg0"></div>
    <Carousel />
    <div className="bimg1"></div>
    <div className="home-content">
      <WhatWeDo />
    <div className="about-content">
    <strong className="inc">How will this help you</strong>
    <br/>
    <ul>
      <li><strong>Guidance on projects from various topics: </strong>We have decided to assign a project to all those who are interested. They could choose from a large range of options. We would then guide them and help them finish what they started.
      </li>
      <li>
        <strong>Webinars with top seniors: </strong>We would organize webinars with top pass-outs of the society who could answer commonly asked questions and guide everyone with their experience.
      </li>
    </ul>
    </div>
    </div>
    <div className="bimg2"></div>
    </div>
  )
}

export default Home;
