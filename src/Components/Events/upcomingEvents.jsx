//jshint esversion:6
import React from "react";
import {comingEvents} from "./EventDetails";
import {Eventpic} from "../Image";
import NoEvent from "./noEvent";

function EachEvent({participants,description,imgAddress}){
  return(
    <div className="row">
      <div className="col-lg-5 col-md-10 events-pic">
      <br />
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <br />
        <h3>Participants: {participants}</h3>
        <h3>Description :</h3>
        <h5><em>{description}</em></h5>
      </div>
      <hr />
    </div>
  )
}

function eventList(event,index){
const imgAddress="images/events/"+event.src+".jpg";
  return(
    <EachEvent key={index} imgAddress={imgAddress} participants={event.Participants} description={event.Description} />
  )
}

function UpcomingEvents(){
  let eventSize=comingEvents.length;
  let listevents=comingEvents.map(eventList);
  return (
    eventSize ? listevents : <NoEvent prop="Upcoming" />
  )}

export default UpcomingEvents;
