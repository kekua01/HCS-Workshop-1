import React from "react";
import "./About.css";
import CutePic from "../../assets/headshot-circle.PNG";

function ButtomItem(props) {
  return (
    <div 
      className="button-item"
      onClick ={() => {
        props.setExtraInfo(props.info);
      }}
    >
      <span>{props.title}</span>
    </div>
  )
}

function Really(props) {
  return (
      <span
      className="really-item"
      onClick ={() => {
        props.setReally(props.answer);
      }}
      >
        Really?
      </span>
  )
}

export default function AboutScreen() {

  const [extraInfo, setExtraInfo] = React.useState("");
  const [really, setReally] = React.useState("");

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img className='intro-picture' src={CutePic} />
        </div>


        <div className="intro-item">
          <p>Hello! Welcome to my online portfolio. My name is Coby, but my friends call me Boby and old people call me "Colby."
          I enjoy playing sports and reading books, my favorite type of dip is hummus, and
          my favorite chord to play on guitar is Gsus.
          Some fun facts about me:</p>
          <ul className="about-list">
            <li>I have two different colored eyes
            <Really setReally={setReally} answer="Yes, one blue and one green." ></Really></li>
            <li>I'm from Hawaii
            <Really setReally={setReally} answer="Yep" ></Really></li>
            <li>I enjoy drinking coffee with butter in it
            <Really setReally={setReally} answer="Yeah it's delicious" ></Really></li>
            <li>I'm ambidextrous
            <Really setReally={setReally} answer="Kinda...I just do different, random things with different hands." ></Really></li>
            <li>I put my pants on two legs at a time
            <Really setReally={setReally} answer="No, that's just absurd." ></Really></li>
          </ul>
          <h3 className="really">{really}</h3>
        </div>
      </div>
      <div className="button-container">
        <ButtomItem
          title="More about me"
          info="I'm a second year student at Harvard College, and I'm planning on doing a joint 
          concentration (major) in Computer Science and Neuroscience. I grew up surfing, mountain biking, and hiking on Maui, so I love being outside. I enjoy coding, and some other hobbies include skateboarding, playing guitar, 
          board games, and Spikeball. I don't know where my life is going to go, but try to just focus on the present and hope for the best."
          setExtraInfo={setExtraInfo}
          ></ButtomItem>
        <ButtomItem
          title="About this site"
          info="The website was created for the Harvard Computer Society 'comp' process using ReactJS. It's pretty simple. I like building websites for the most part, but CSS can be a doozie."
          setExtraInfo={setExtraInfo}
          ></ButtomItem>
        <ButtomItem
          title="Hide"
          info=""
          setExtraInfo={setExtraInfo}
          ></ButtomItem>
      </div>

      <div className="extra">
        <p>{extraInfo}</p>
      </div>

    </div>
  );
}
