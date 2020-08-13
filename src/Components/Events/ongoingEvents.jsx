//jshint esversion:6
import React from "react";
import {ongoingEvents} from "./EventDetails";
import {Eventpic} from "../Image";
import NoEvent from "./noEvent";

function EachEvent({rlink,fblink,instalink,details,imgAddress}){
  return(
    <div className="row">
      <div className="col-lg-5 col-md-10 events-pic">
      <br />
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <br />
        {details.map((detail)=>{
           return <h3>{detail}</h3>
        })}
        <h3>Registration Link:- {rlink}</h3>
        <a href={instalink}><i className="fab fa-instagram"></i></a>
        <a href={fblink}><i className="fab fa-facebook-f"></i></a>
      </div>
      <hr />
    </div>
  )
}

function eventList({src, rlink,details,fblink,instalink},index){
const imgAddress="images/events/"+src+".jpg";
  return(
    <EachEvent key={index} imgAddress={imgAddress} rlink={rlink} details={details} fblink={fblink} instalink={instalink} />
  )
}

function OngoingEvents(){
  let eventSize=ongoingEvents.length;
  let listevents=ongoingEvents.map(eventList);
  return (
    eventSize ? listevents : <NoEvent prop="Ongoing" />
)}

export default OngoingEvents;
