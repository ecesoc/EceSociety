//jshint esversion:6
import React from "react";

import alumniDetails from "./alumniDetails";
import Image from "../Image";
import "./styles.css";

function alumnus({name,batch,company,description,linkedin},index){
  const imgAddress="images/Alumini/" + name +".jpg";
  return (
    <div key={index} className="row">
      <div className="col-lg-5 col-md-12 alumnus-pic">
         <Image src={imgAddress} />
      </div>
      <div className="col-lg-5 col-md-12 alumnus-content">
      <h4>Name: {name}<span className="alumni-linkedin">
      <a href={linkedin}><i className="fab fa-linkedin"></i></a></span>
      </h4>
      <h4>Company: {company}</h4>
      <h4>Batch: {batch}</h4>
      <em>
        <h6>"{description}"</h6>
      </em>
    </div>
    <br />
    <hr />
    <br />
  </div>
  )
}

function Alumni(){
return (
  alumniDetails.map(alumnus)
);
}

export default Alumni;
