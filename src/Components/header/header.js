import React from "react";
import "./header.css";
import Safe from "../images/stay-safe.png";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

export default function Header() {
  return (
    <React.Fragment>
      <header>
        <img id="safe-img" src={Safe} alt="Stay Home Stay Safe" />
        <div id="heading">
          <h1 id="project-title">COVID TRACKER INDIA</h1>
        </div>
        <div id="accounts-icon">
          <a href="https://github.com/Priyan2208" target="blank">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/priyaranjan-pattanaik-b0856722b/"
            target="blank"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
      </header>
    </React.Fragment>
  );
}
