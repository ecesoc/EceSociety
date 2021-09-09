import React from "react";

export default function SpeakerCard({ member }) {
  const { image, title, description, link } = member;
  return (
    <div
      className="speakers-card col-lg-2 col-md-3 col-sm-4"
      style={{
        width: "500px",
        height: "420px",
        borderRadius: "10px",
        marginTop: "-1%",
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="picture-wrapper">
          <img
            src={`/images/members/${image}`}
            alt="profile "
            style={{ width: "150px", height: "auto" }}
            className="profile-pic"
          />
        </div>
      </a>

      <h4>{title}</h4>
      <p
        style={{
          textAlign: "center",
          marginright: "-50px",
        }}
      >
        {description}
      </p>
    </div>
  );
}
