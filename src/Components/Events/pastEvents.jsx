//jshint esversion:6
import React from "react";
import {pastEvents} from "./EventDetails";
import {Eventpic} from "../Image";

function EachEvent({participants,description,imgAddress,name,fblink,instalink}){
  return(
    <div className="row">
      <div className="col-lg-5 col-md-10 events-pic">
      <br />
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <h1 className="event-name">{name}</h1>
        <br />
        <h3>Participants: {participants}</h3>

        <h3>Description :</h3>
        <h5><em>{description}</em></h5>
        {instalink!=="" && <a href={instalink}><i className="fab fa-instagram pevent-icon"></i></a>}
        <a href={fblink}><i className="fab fa-facebook-f pevent-icon"></i></a>
      </div>
      <hr />
    </div>
  )
}

function eventList(event,index){
const imgAddress="images/events/"+event.src+".jpg";
  return(
    <EachEvent key={index} imgAddress={imgAddress} participants={event.Participants} description={event.Description} name={event.name} fblink={event.fblink} instalink={event.instalink} />
  )
}

function PastEvents(){
  return (
    pastEvents.map(eventList)
)}

export default PastEvents;
