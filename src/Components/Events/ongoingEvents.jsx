//jshint esversion:6
import React from "react";
import {ongoingEvents} from "./EventDetails";
import {Eventpic} from "../Image";
import NoEvent from "./noEvent";

function eachEvent({src,name, rlink,details,fblink,instalink},index){
  const imgAddress="images/events/"+src+".jpg";
  return(
    <div key={index} className="row">
      <div className="col-lg-5 col-md-10 events-pic">
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <h1 className="event-name">{name}</h1>
        <br />
        {details.map((detail,index)=>{  // content is in details array so looping 
           return <h5 key={index}>{detail}</h5>
        })}
        <br />
        <h3>For Registration :- <a href={rlink}>Click here</a><a href={instalink}><i className="fab fa-instagram event-icon"></i></a>
        <a href={fblink}><i className="fab fa-facebook-f event-icon"></i></a></h3>
      </div>
      <hr />
    </div>
  )
}

function OngoingEvents(){
  let eventSize=ongoingEvents.length;
  let listevents=ongoingEvents.map(eachEvent);
  return (
    eventSize ? listevents : <NoEvent prop="Ongoing" />
)}

export default OngoingEvents;
