import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About" id="about">
      <h4>
        About <i className="bi bi-file-person-fill text-primary"></i>
      </h4>
      <div className="container About-banner">
        <div>
          <h4>lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            ullam quas harum odit a sit eum dolorem, laudantium aliquam eaque
            fuga enim architecto similique. Minima explicabo id beatae aliquid
            odio?
          </p>
        </div>
        <i className="bi bi-building text-primary"></i>
      </div>
    </div>
  );
}

export default About;
