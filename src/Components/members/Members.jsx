//jshint esversion:6
import React from "react";
import members from "./MemberDetails";
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
  return (
    members.map(member)
  );
}

export default Members;
