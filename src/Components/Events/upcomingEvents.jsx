//jshint esversion:6
import React from "react";
import {comingEvents} from "./EventDetails";
import {Eventpic} from "../Image";
import NoEvent from "./noEvent";

function EachEvent({rlink,fblink,instalink,details,name,imgAddress}){
  return(
    <div className="row">
      <div className="col-lg-5 col-md-10 events-pic">
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <h1 className="event-name">{name}</h1>
        <br />
        {details.map((detail,index)=>{
           return <h3 key={index}>{detail}</h3>
        })}
        <br />
        <h3>For Registration :- <a href={rlink}>Click here</a><a href={instalink}><i className="fab fa-instagram event-icon"></i></a>
        <a href={fblink}><i className="fab fa-facebook-f event-icon"></i></a></h3>
      </div>
      <hr />
    </div>
  )
}

function eventList({src,name, rlink,details,fblink,instalink},index){
const imgAddress="images/events/"+src+".jpg";
  return(
    <EachEvent key={index} name={name} imgAddress={imgAddress} rlink={rlink} details={details} fblink={fblink} instalink={instalink} />
  )
}

function UpcomingEvents(){
  let eventSize=comingEvents.length;
  let listevents=comingEvents.map(eventList);
  return (
    eventSize ? listevents : <NoEvent prop="Upcoming" />
  )}

export default UpcomingEvents;
