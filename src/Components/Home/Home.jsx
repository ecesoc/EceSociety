//jshint esversion:6
import React from "react";
import WhatWeDo from "./About/What-we-do";
import Carousel from "./Carousel";

function Bgimg(){
  return (
    <div class="bimg">
    </div>
  )
}

function Home (){
  return (
    <div>
    <Carousel />
    <Bgimg />
    <br />
    <br />
    <WhatWeDo />

    <p className="about-content">
    <strong>How will this help you</strong>
    <ul className="what-we-do">
      <li><strong>Guidance on projects from various topics:</strong>We have decided to assign a project to all those who are interested. They could choose from a large range of options. We would then guide them and help them finish what they started.
      </li>
      <li>
        <strong>Webinars with top seniors:</strong>We would organize webinars with top pass-outs of the society who could answer commonly asked questions and guide everyone with their experience.
      </li>
    </ul>
    </p>

    </div>
  )
}

export default Home;
