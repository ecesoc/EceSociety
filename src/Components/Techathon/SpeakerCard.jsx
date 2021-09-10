import React from "react";

export default function SpeakerCard({ member }) {
  const { image, title, description, link, name } = member;

  let h4Style = {
    textAlign: "center",
  };

  return (
    <div className="speakers-card col-lg-2 col-md-3 col-sm-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="picture-wrapper"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <img
            src={`/images/members/${image}`}
            alt="profile "
            style={{ width: "150px", height: "auto" }}
            className="profile-pic"
          />
        </div>
      </a>

      <h4 style={h4Style}>{title}</h4>
      <h4 style={h4Style}>{name}</h4>
      <p
        style={{
          textAlign: "center",
        }}
      >
        {description}
      </p>
    </div>
  );
}
