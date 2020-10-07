import React from "react";
import Project from "../../components/Project/Project";
import Jane from "../../assets/janestreet.png";
import Revo from "../../assets/monkey.svg";
import Podcast from "../../assets/alchemy.jpg";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project 
      	title="Revojam" 
      	link="https://revojam.com"
        description="A webapp a friend and I made during the summer of 2020."
      	source={Revo}>
      </Project>

      <Project 
        title="Project Alchemy" 
        link="https://podcasts.apple.com/us/podcast/project-alchemy-what-happened-in-between/id1463669729"
        description="A podcast I created during my senior year of high school. It features interviews with some inspiring role models in my community."
        source={Podcast}>
      </Project>

      <Project 
        title="HCS Porfolio Site" 
        link="\"
        description="My personal portfolio (this site)."
        source={Jane}>
      </Project>

    </div>
  );
}
