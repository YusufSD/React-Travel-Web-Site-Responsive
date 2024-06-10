import React from "react";
import "../styles/Hero.css";
import { Buttons } from "./Buttons";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="./videos/earth.mp4" autoPlay loop muted />

      <h1>NEW ADVENTURES</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <div className="hero-buttons">
        <Buttons
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Buttons>
        <Buttons
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAİLER <i className="far fa-play-circle"></i>
        </Buttons>
      </div>
    </div>
  );
};

export default Hero;
