//jshint esversion:6
import React from "react";

function HeadContent(prop){
  return (
    <header>
    <p>{prop.page}</p>
    <p className="quote">"{prop.quote}"</p>
    </header>
  )
}
export default HeadContent;
