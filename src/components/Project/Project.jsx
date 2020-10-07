import React from "react";
import "./Project.css";
import {Link} from "react-router-dom";

export default function Project(props) {
  return (
  	<Link 
  		to={{pathname: props.link }} 
  		className="project-background" 
  		target="_blank"
  	>
    			<img className="project-image" src={props.source} />
    			<h3 className="project-title">{props.title}</h3>
          <p className="project-description">{props.description}</p>
  	</Link>
  );
}
