import React from "react";
import "./styles.css";

const week1 = [
  "The Inauguration Ceremony will begin from the 4th of September where Renowned Personalities are invited along with our Professors.",
  "Round-1, The Online Quiz, will take place on 5th September on the D2C Platform itself and the shortlisted candidates will continue for further rounds.",
  "The Online Quiz will consist of basic questions from electronics, coding and aptitude.",
  "A package of study material week-wise will be shared on Website and Discord, as a reference for the project model based on their selected domain to the shortlisted candidates.",
  "Ample amount of Study and Preparation Time would be provided and shortlisted candidates can join the discord channel for Doubt Solving along with constant guidance.",
  "On the 12th of Sept, First webinar would be conducted on one of the two domains by the industrial experts.",
];

const week2 = [
  "On the 19th of Sept., the second webinar would be conducted on another domain by the industrial experts.",
  "Ample amount of Study and Preparation Time would be provided and shortlisted candidates can join the discord channel for Doubt Solving along with constant guidance.",
];

const week3 = [
  "At the end of the 3rd week, the participants need to submit a prototype of their project model for Round 2 on 25-09-2021.",
  "Ample amount of Study and Preparation Time would be provided and shortlisted candidates can join the discord channel for Doubt Solving along with constant guidance.",
];

const week4 = [
  "This week is for the execution of the Prototype Ideas and Video making, where few of the selected videos will be posted on our social media handles with credits.",
  "On the 2nd and 3rd Oct, the candidates need to send the video of their project model and based on certain judgmental criteria top 5-10 teams will be shortlisted.",
];

const week5 = [
  "Ample time would be provided to the shortlisted teams for any changes/enhancing the project and PPT preparation for the Live Presentation Interview Round.",
  "On 9th Oct, the shortlisted teams will have to present their project idea in the form of PPT and Simulation/Live presentation in front of the defined jury panel for the final interview.",
  "Top 3 winner teams in each field will be announced soon after the event ends and will be acknowledged with prizes and certificates.",
];

const weekNum = ["st", "nd", "rd", "th", "th"];

export default function Description() {
  return (
    <div className="description">
      <h1>Description:</h1>
      <ul className="description-list">
        {[week1, week2, week3, week4, week5].map((week, ind) => {
          return (
            <li key={ind}>
              <h3>
                {ind + 1}
                {weekNum[ind]} week
              </h3>
              <ol>
                {week.map((val, index) => {
                  return <li key={index}>{val}</li>;
                })}
              </ol>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
