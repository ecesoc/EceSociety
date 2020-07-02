//jshint esversion:6
import React from "react";
import members from "./MemberDetails";
import Image from "../Image";

function names(name){
  const imgAddress="images/members" + name.name;
  return (
    <div className="col-md-3 col-sm-12">
        <div className="pic">
          <Image src={imgAddress} />
        </div>
        <div className="member-name">
          <p>{name.name}</p>
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

    <hr>

  )
}

function Member(){
  return(
    members.map(member)
  );
}

export default Member;
