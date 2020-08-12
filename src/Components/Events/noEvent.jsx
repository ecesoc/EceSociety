//jshint esversion:6

import React from "react";

function NoEvent({prop}){
  return (
    <div className="noEvent">
    <p>No</p>
    <p>{prop}</p>
    <p>Event</p>
    </div>
  )
}

export default NoEvent;
