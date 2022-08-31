
import React from "react";
export default function SpeakerCard({ member }) {
  const { image, title, description, name,link } = member;

  return (
    <a className='speaker-link' href={link}>
    <div className="speaker-card" >
      <div className="speaker-pic-info">
      <img
        className="speaker-pic"
        alt="not found"
        src={`/images/members/${image}`}
      />
       <p className="speaker-description">"{description}"</p>
      </div>

      <div className="speaker-details">
      <h2 className="speaker-name">{name}</h2>
      <div className="speaker-info">
        <h5 className="speaker-title">{title}</h5>
      </div>
      </div>
    </div>
    </a>
  );
}
