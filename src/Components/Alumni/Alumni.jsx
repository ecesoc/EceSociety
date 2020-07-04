//jshint esversion:6
import React from "react";

import alumniDetails from "./alumniDetails";
import Image from "../Image";

function alumnus(info,index){
  const imgAddress="images/Alumini/" + info.name +".jpg";
  return (
    <div className="row">
      <div className="col-lg-5 col-md-12 alumnus-pic">
         <Image key={index} src={imgAddress} />
      </div>
      <div className="col-lg-5 col-md-12 alumnus-content">
      <h3><span className="alumini-name">Name:</span> {info.name}<span className="alumni-linkedin">
      <a href={info.linkedin}><i className="fab fa-linkedin"></i></a></span>
      </h3>
      <h3><span className="alumini-name">Company:</span> {info.company}</h3>
      <h3><span className="alumini-name">Batch:</span> {info.batch}</h3>
      <em>
        <p>"{info.description}"</p>
      </em>
    </div>
    <br />
    <hr />
    <br />
  </div>
)}

function Alumni(){
return (
  alumniDetails.map(alumnus)
);
}

export default Alumni;
