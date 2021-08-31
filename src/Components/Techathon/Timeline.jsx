import React from "react";
import "./styles.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    date: "4th September",
    topic: "Inauguration Ceremony",
    content: "Reowned personalities are invited along with our professors.",
  },
  {
    date: "5th September",
    topic: "ROUND-1 (Online Quiz)",
    content: "Basic Electronics,coding and aptitude would be asked in quiz.",
  },
  {
    date: "12th,19th September",
    topic: "Online Webinars",
    content:
      "Each webinar would be conducted in respective domains by industrial experts or reowned personalities.",
  },
  {
    date: "25th September",
    topic: "ROUND-2 (Prototype Submission)",
    content:
      "By the end of third week, we would ask for the Prototype Submission.",
  },
  {
    date: "2nd,3rd October",
    topic: "ROUND-3 (Video Submission)",
    content:
      "In the 4th week, its time to execute ideas, where we would ask for video submission of their Project Model.",
  },
  {
    date: "9th October",
    topic: "ROUND-4 (Presentation before Jury)",
    content:
      "Top 5-10 teams would be presenting their projects in fronts of the defined jury.",
  },
];

export default function TimeLine() {
  return (
    <React.Fragment>
      <h1 style={{ marginLeft: "3%" }}>Timeline</h1>
      <Timeline align="alternate" style={{ marginLeft: "3%" }}>
        {data.map((item, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    fontFamily: "none",
                  }}
                >
                  {item.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  style={{
                    padding: "6px",
                    textAlign: "center",
                    margin:'20px 0'
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      fontFamily: "none",
                    }}
                  >
                    {item.topic}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "none",
                      fontSize:'1.2rem'
                    }}
                  >
                    {item.content}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </React.Fragment>
  );
}
