//jshint esversion:6
import React from "react";
import {pastEvents} from "./EventDetails";
import {Eventpic} from "../Image";

function eachEvent({name,Participants,src,Description,fblink,instalink},index){
const imgAddress="images/events/"+src+".jpg";
  return(
    <div key={index} className="row">
      <div className="col-lg-5 col-md-10 events-pic">
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <h1 className="event-name">{name}</h1>
        <h4>Participants: {Participants}</h4>
        <h4>Description :</h4>
        <h6><em>{Description}</em></h6>
        {instalink!=="" && <a href={instalink}><i className="fab fa-instagram pevent-icon"></i></a>}
        <a href={fblink}><i className="fab fa-facebook-f pevent-icon"></i></a>
      </div>
      <hr />
    </div>
  )
}

function PastEvents(){
  return (
    pastEvents.map(eachEvent)
)}

export default PastEvents;
