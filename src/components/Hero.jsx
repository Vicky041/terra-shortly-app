import React from "react";
import "../styles/hero.css";
import Button from "./Button";
import Boost from "./Boost";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-subContainer">
          <h1>
            <span className="hero-span">More than just</span>
            <span className="hero-span">shorter links</span>
          </h1>
          <h6>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </h6>
          <button className="hero-butt">Get Started</button>
        </div>
        <div className="hero-section">
          <img
            className="hero-image"
            src="src/assets/images/illustration-working.svg"
            alt="images"
          />
        </div>
      </div>
    </div>
  );
}
