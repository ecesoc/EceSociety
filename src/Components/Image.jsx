//jshint esversion:6
import React from "react";

function Image(props){
   return (
     <img className="person-pic" src={props.src} alt="" />
   )
}

function Eventpic(props){
  return (
    <img className="event-pic" src={props.src} alt="" />
  )
}

export default Image;
export { Eventpic };
