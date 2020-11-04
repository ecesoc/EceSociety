//jshint esversion:6
//jshint esversion:9
import React,{useState} from "react";
import OngoingEvents from "./ongoingEvents";
import UpcomingEvents from "./upcomingEvents";
import PastEvents from "./pastEvents";
import "./styles.css";

function Events(){
  let [event_Held,setEvent]=useState("U"); // start with upcoming events
  let changeEvent_P= ()=>setEvent("P"); // past events
  let changeEvent_O= ()=>setEvent("O"); // ongoing events
  let changeEvent_U= ()=>setEvent("U"); // Upcoming events
  return (
    <div className="event-List">
    <span onClick={changeEvent_U} className={event_Held==="U"?"changeEvent":null}>UPCOMING EVENTS</span>
    <span onClick={changeEvent_O} className={event_Held==="O"?"changeEvent":null}>ONGOING EVENTS</span>
    <span onClick={changeEvent_P} className={event_Held==="P"?"changeEvent":null}>PAST EVENTS</span>
    {event_Held==="U"&&<UpcomingEvents />}
    {event_Held==="O"&&<OngoingEvents />}
    {event_Held==="P"&&<PastEvents />}
    </div>
)}

export default Events
