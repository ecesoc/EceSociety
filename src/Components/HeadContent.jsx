//jshint esversion:6
import React from "react";

function HeadContent(prop){
  return (
    <header>
    <h1>{prop.page}</h1>
    <h4><em>"{prop.quote}"</em></h4>
    </header>
  )
}
export default HeadContent;
