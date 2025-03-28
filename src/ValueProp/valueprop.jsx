import React from 'react';
import './valueprop.css';
import ValueImg from '../images/Value proposition.png';

const ValueProp = () => {
  return (
    <header>
      <div className="valueprop-container">
        <div className="valueprop-text">
          <p className="valueprop-description">
            <b>Value Proposition</b>
            <br /><br />
            A value proposition is the core of any solution—it defines how a product or service 
            uniquely solves a user’s problems and delivers specific benefits. For our transit 
            concept, the value proposition centers around providing convenient and carefree 
            transport through eco-friendly, intelligent mobility options. We address user pains 
            like long travel times, unreliable service, noise, and the hassle of switching modes
            by offering battery-powered buses, e-scooters, and AI-optimized vans. Our system 
            reduces travel time, ensures quiet and direct commutes, and supports multitasking with 
            device-friendly spaces—all available through pay-per-ride or subscription models that 
            keep transportation flexible and stress-free.
          </p>
        </div>
        <div className="valueprop-image">
          <img className="valueprop-img" src={ValueImg} alt="Value Proposition Diagram" />
        </div>
      </div>
    </header>
  );
};

export default ValueProp;
