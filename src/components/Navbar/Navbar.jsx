import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Coby Sheehan</h1>
        <div className="info-bar">
          <p className="info-item">cksheehan@college.harvard.edu</p>
        </div>
        <div className="info-bar">

          <Link 
            className="info-link" 
            target="_blank" 
            to = {{ pathname: 'https://github.com/kekua01' }}
          >
              GitHub
          </Link>
          <Link 
            className="info-link" 
            target="_blank" 
            to = {{ pathname: 'https://www.linkedin.com/in/coby-sheehan-851574190/' }}
          >
              LinkedIn
          </Link>
          <Link 
            className="info-link" 
            target="_blank" 
            to = {{ pathname: 'https://revojam.com' }}
          >
              Revojam
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className='nav-link' to={{ pathname: '/about'}}>About</Link>
        <Link className='nav-link' to={{ pathname: '/experience'}}>Experience</Link>
        <Link className='nav-link' to={{ pathname: '/projects'}}>Projects</Link>

      </div>
    </>
  );
}






