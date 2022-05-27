import React from "react";
export default function SpeakerCard({ member }) {
  const { image, title, description, name,link } = member;

  return (
    <a className='speaker-link' href={link}>
    <div className="speaker-card" >
      <div className="speaker-pic-info">
      <img
        className="speaker-pic"
        alt="nahi mili"
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
/*
export default function ImgMediaCard() {

}

  );
}
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
    </div>*/
