//jshint esversion:6
import React,{useState} from "react";

import {alumniDetailsk14,alumniDetailsk15,alumniDetailsk16} from "./alumniDetails";
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
  function changeYear(){
    var year=document.getElementById('branch').value;
    changeBranch(year);
  }
  const [branch,changeBranch]=useState('k16');
  const alumnik14=alumniDetailsk14.map(alumnus);
  const alumnik15=alumniDetailsk15.map(alumnus);
  const alumnik16=alumniDetailsk16.map(alumnus);
return (
  <>
  <div className='alumni-select'>
  <label>Branch:</label>
  <select onChange={changeYear} name='branch' id="branch" value={branch}>
    <option value='k16'>2k16</option>
    <option value='k15'>2k15</option>
    <option value='k14'>2k14</option>
  </select>
  </div>
  {branch==='k16' && alumnik16}
  {branch==='k15' && alumnik15}
  {branch==='k14' && alumnik14}
  </>
);
}

export default Alumni;
