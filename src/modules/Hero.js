import React from "react";
import "./Hero.css";
// import heroImage from "../images/HeroCar.jpg";
import City from "../images/HeroCarsCity.svg";

function Hero() {
  return (
    
    <div className="Hero">
      <div className="Hero-background">

        <img src={City} alt="city" max-width="100%" height="auto" />
      </div>

      <h1>Buying New Car?</h1>
      <h1>Check now!</h1>
      <form action="post">
        <div className="Hero-options">
          <span>By model</span>
        </div>
        <div className="Hero-form">
          <input type="text" name="brand" id="brand" placeholder="Brand" />
          <input type="text" name="model" id="model" placeholder="Model" />
          <button className="btn btn-primary Hero-btn" type="submit">
            Search
          </button>
          <p className="Hero-mute">
            advance Search <i className="bi bi-chevron-right"></i>
          </p>
        </div>
      </form>
      <div className="Hero-filter"></div>
      
    </div>

    
  );
}

export default Hero;
