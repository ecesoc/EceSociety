//jshint esversion:6
import React from "react";

function Carousel(){
  return (
    <div id="homepic" class="carousel slide" data-ride="carousel" data-interval="2500">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="homeimg" src="images/random/home1.jpg" alt="img">
        </div>
        <div class="carousel-item">
          <img class="homeimg" src="images/random/home2.jpg" alt="img">
        </div>
        <div class="carousel-item">
          <img class="homeimg" src="images/random/home3.jpg" alt="img">
        </div>
        <div class="carousel-item">
          <img class="homeimg" src="images/random/home4.jpg" alt="img">
        </div>
      </div>
      <a class="carousel-control-prev" href="#homepic" role="button" data-slide="prev">
        <span> < </span>
        </a>
        <a class="carousel-control-next" href="#homepic" role="button" data-slide="next">
            <span> > </span>
      </a>
    </div>
  )
}

export default Carousel;
