import React from "react";
import "./styles.css";
import TimeLine from "./Timeline";
import EventDetails from "./EventsDetails";
import Description from "./Description";
import Sponsors from "./Sponsors";
import Guest from "./Guests";

const CustomHr = () => {
  return <hr style={{ width: "95vw" }} />;
};

export default function Techathon() {
  return (
    <div className="techathon">
      <div>
        <img
          className="techathon-logo img-fluid"
          src="images/Techathon-logo.png"
          alt="img"
        />
        <div style={{ textAlign: "right", marginRight: "4%" }}>
          <a
            href="https://dare2compete.com/quiz/tech-a-thon-birla-institute-of-technology-bit-mesra-ranchi-193966?refId=sI6ijqy"
            target="_blank"
            rel="noreferrer"
          >
            <button type="submit" className="register-btn">
              REGISTER NOW!!
            </button>
          </a>
        </div>
        <div className="techathon-intro">
          <span className="make-it-large">
            Greetings from the ECE Society, BIT Mesra!!
          </span>{" "}
          <br />
          Are you bored off sitting at home? Do attending online classes has
          grossed you? When did you last attend an event which is full of
          enchantment and information? If you aren’t able to remember like many
          others then don’t worry, as we bring an engaging event this September
          for you. Since, we at ECE Society are back with a Mega fruitful Event{" "}
          <span>"TECH-A-THON"</span>
          that will get you involved in learning, attending webinars of
          industrial experts, competing in hackathon, winning Certificates and
          Prizes, and most important of all will give you the needed exposure to
          you in all the various technical fields. This will help you to realize
          your sole purpose of engineering!!
        </div>
      </div>
      <CustomHr />
      <EventDetails />
      <CustomHr />
      <TimeLine />
      <CustomHr />
      <Description />
      <CustomHr />
      <Guest />
      <CustomHr />
      <Sponsors />
    </div>
  );
}
