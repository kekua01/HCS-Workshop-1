import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div 
      className="timeline-item"
      onClick ={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <h3>{props.title}</h3>
    </div>
  )
}

export default function ExperienceScreen() {

  const [activeTitle, setActiveTitle] = React.useState("Experience");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Boys and Girls Club Volunteer"
            description="During my high school days, I volunteered at an afterschool program for underprivilged kids. It was a great time."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
            title="Private Tutor"
            description="Throughout high school and college I have tutored middle-schoolers and high-schoolers in a variety of subjects."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
            title="Robotics"
            description="Some friends and I competed in the BEST robotics competitions for a few years in high school. We would have won some of them if it weren't for us not winning."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
