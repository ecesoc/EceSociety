import React from "react";
import "./styles.css";

const details = [
  {
    topic: "Two Domains:",
    subTopic: ["Embedded Systems / Core Electronics", "Machine Learning / AI"],
  },
  {
    topic: "Sub-Events",
    subTopic: [
      "Webinars (On both the domains)",
      "Hackathon (On theme based project making in given domains)",
      "Study Materials (For Reference - through Website/Discord/Mail)",
      "Certifications for each round and Prizes for winners",
    ],
  },
  {
    topic: "Participation Criteria",
    subTopic: [
      "Team Size: 1-3",
      "Eligibility: First, Second and Third Year (Engineering Students)",
      "Registration Platform: D2C",
      "Registration Fee: Zero",
    ],
  },
];

const rounds = [
  "Online Quiz",
  "Prototype Submission",
  "Video Submission of the Project Model",
  "Final Round is a Live Presentation Interview Round",
];

export default function EventDetails() {
  return (
    <React.Fragment>
      <div className="event-details">
        <h1>Details</h1>
        <h2>
          The event "TECH-A-THON" will be a 5-week long event which will mainly
          consist of:
        </h2>
        <ul className="event-list">
          {details.map((val, index) => {
            return (
              <li key={index}>
                {val.topic}
                <ol style={{ marginLeft: "4rem" }}>
                  {val.subTopic.map((item, ind) => (
                    <li key={ind}>{item}</li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="event-rounds">
        <h3>The event will consist of 4-rounds:</h3>
        <ul>
          {rounds.map((val, index) => {
            return (
              <li key={index}>
                <h4 style={{ textAlign: "left" }}>
                  <span className="make-it-bold">ROUND - {index + 1}:</span>{" "}
                  {val}
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
