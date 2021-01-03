//jshint esversion:6
import React,{ useState} from "react";
import {membersk17, membersk18} from "./MemberDetails";
import Image from "../Image";
import "./styles.css";

function memberNames({name,linkedin},index){  // each title
  let imgAddress="images/members/" + name +".jpg";
  return (
    <div key={index}>
        <div>
          <Image src={imgAddress} />
        </div>
        <div className="member-name">
          <h4>{name}</h4>
          {name==="Sankalp Pandey" && <h5 style={{textAlign:"center"}}>(Web Design)</h5>}
          <a href={linkedin}><i className="fab fa-linkedin"></i></a>
        </div>
    </div>
  );
}

function member({post,member},index){ // for all title
  return(
    <div key={index}>
    <h3 className="post-title">{post}</h3>
    <div className="executive-div">
      {member.map(memberNames)}
    </div>
    <hr />
    </div>
  )
}


function Members(){
  function changeToK17(){
    setYear(true);
  }

  function changeToK18(){
    setYear(false);
  }

  let [isk17, setYear]=useState(true); // by default final years
  const k17=membersk17.map(member);
  const k18=membersk18.map(member);
  return (
    <div className="executive-Body">
    <div className="change-member">
    <span onClick={changeToK17} className={isk17?"changeMember":null}>EXECUTIVE BODY K17</span>
    <span onClick={changeToK18} className={!isk17?"changeMember":null}>EXECUTIVE BODY K18</span>
    </div>
    {isk17?k17:k18}
    </div>
  );
}

export default Members;
