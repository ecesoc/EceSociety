//jshint esversion:6
import React,{ useState} from "react";
import {membersk17, membersk18} from "./MemberDetails";
import Image from "../Image";

function names(name,index){
  const imgAddress="images/members/" + name +".jpg";
  return (
    <div className="col-lg-4 col-md-12">
        <div className="pic">
          <Image key={index} src={imgAddress} />
        </div>
        <br />
        <div className="member-name">
          <h4>{name}</h4>
        </div>
    </div>
  );
};

function member(item){
  return (
    <div>
    <h3 className="post-title">{item.post}</h3>
    <br />
    <div className="row">
      {item.member.map(names)}
    </div>
    <br />
    <hr />
    <br />
    </div>
  )
};

function Members(){
  function changeToK17(){
    setYear(true);
  }

  function changeToK18(){
    setYear(false);
  }

  let [isk17, setYear]=useState(true);
  const k17=membersk17.map(member);
  const k18=membersk18.map(member);
  return (
    <div className="executive-Body">
    <span onClick={changeToK17} className={isk17 && "changeMember"}>Executive Body k17</span>
    <span onClick={changeToK18} className={!isk17 && "changeMember"}>Executive Body k18</span>
    {isk17?k17:k18}
    </div>
  );
}

export default Members;
