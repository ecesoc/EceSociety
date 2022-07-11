//jshint esversion:6
import React, { useState } from "react";
import { membersk20, membersk19, campusAmbassadors } from "./MemberDetails";
import Image from "../Image";
import "./styles.css";

function memberNames({ name, linkedin, ext }, index) {
  // each title
  let imgAddress = "images/members/" + name + (ext ? ext : ".jpg");
  return (
    <div key={index}>
      <div>
        <Image src={imgAddress} />
      </div>
      <div className="member-name">
        <h4>{name}</h4>

        <a href={linkedin}>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

function member({ post, member }, index) {
  // for all title
  return (
    <div className="member" key={index}>
      <h3 className="post-title">{post}</h3>
      <div className="executive-div">{member.map(memberNames)}</div>
      <hr />
    </div>
  );
}

function Members() {
  function changeToK19() {
    setYear(1);
  }

  function changeToK20() {
    setYear(2);
  }
  function changeTocamp() {
    setYear(3);
  }

  let [isk18, setYear] = useState(1); // by default final years
  // const k18 = membersk18.map(member);
  const k19 = membersk19.map(member);
  const k20 = membersk20.map(member);
  const camp = campusAmbassadors.map(member);

  return (
    <div className="executive-Body">
      <div className="change-member">
        <span
          onClick={changeToK19}
          className={isk18 === 1 ? "changeMember" : null}
        >
          EXECUTIVE BODY K19
        </span>
        <span
          onClick={changeToK20}
          className={isk18 === 2 ? "changeMember" : null}
        >
          EXECUTIVE BODY K20
        </span>
        <span
          onClick={changeTocamp}
          className={isk18 === 3 ? "changeMember" : null}
        >
          CAMPUS AMBASSADORS
        </span>
      </div>
      {isk18 === 1 ? k19 : isk18 === 2 ? k20 : camp}
    </div>
  );
}

export default Members;
