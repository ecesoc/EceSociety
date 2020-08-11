//jshint esversion:6
//jshint esversion:9
import React,{useState} from "react";
import OngoingEvents from "./ongoingEvents";
import UpcomingEvents from "./upcomingEvents";
import PastEvents from "./pastEvents";


function Events(){
  let [event_Held,setEvent]=useState("P");
  let changeEvent_P= ()=>setEvent("P");
  let changeEvent_O= ()=>setEvent("O");
  let changeEvent_U= ()=>setEvent("U");
  return (
    <div className="event-List">
    <span onClick={changeEvent_U} className={event_Held==="U"&&"changeEvent"}>Upcoming Events</span>
    <span onClick={changeEvent_O} className={event_Held==="O"&&"changeEvent"}>Ongoing Events</span>
    <span onClick={changeEvent_P} className={event_Held==="P"&&"changeEvent"}>Past Events</span>
    {event_Held==="U"&&<UpcomingEvents />}
    {event_Held==="O"&&<OngoingEvents />}
    {event_Held==="P"&&<PastEvents />}
    </div>
)}

export default Events
