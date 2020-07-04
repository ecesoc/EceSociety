//jshint esversion:6
import React from "react";
import eventDetails from "./EventDetails";
import {Eventpic} from "../Image";

function eventList(event,index){
  const imgAddress="images/events/"+event.src+".jpg";
  return(
    <div class="row">
      <div class="col-lg-5 col-md-10 events-pic">
      <br />
        <Eventpic key={index} src={imgAddress} />
      </div>
      <div class="col-lg-7 col-md-10">
        <br />
        <h3>Participants: {event.Participants}</h3>
        <h3>Description :</h3>
        <h5><em>{event.Description}</em></h5>
      </div>
      <br />
      <hr />
      <br />
    </div>
  )
}

function Events(){
  return (
    eventDetails.map(eventList)
)}

export default Events
