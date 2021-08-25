import React from "react";

export default function SpeakerCard({ member }) {
  const { image, title, description, link } = member;
  return (
    <div className="speakers-card" style={{
      width:'300px',
      height:'400px'
    }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="picture-wrapper">
          <img
            src={`/images/members/${image}`}
            alt="profile "
            className="profile-pic"
          />
        </div>
      </a>

      <h4 className="title">{title}</h4>
      <p className="description" style={{
        textAlign:'center',
        marginright:'-50px'
      }}>{description}</p>
     
    </div>
  );
}
