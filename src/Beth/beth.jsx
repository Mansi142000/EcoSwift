import React from 'react';
import './beth.css';
import BethImg from '../images/beth.png';

const Beth = () => {
  return (
    <header>
      <div className="eco-container">
        <div className="eco-image-section">
          <img className="eco-logo" src={BethImg} alt="Beth Image" />
        </div>

        <div className="eco-text-section">
          <p className="eco-paragraph">
            <b>User Persona Analysis</b>
            <br /><br />
            As part of the Innovation Challenge, we were given a detailed user persona—Beth, a 34-year-old eco-conscious teacher from Winthrop, MA. We analyzed Beth’s lifestyle, values, daily habits, and transportation needs to better understand her motivations and pain points. This process helped us build empathy with our target audience and informed our solution design. By aligning our transit concept with Beth’s eco-friendly, community-oriented values, we ensured our service truly catered to users like her.
          </p>
        </div>
        <p className="eco-analysis">From Beth’s persona, we learned that convenience, sustainability, and community impact are at the heart of her daily decisions. As an environmentally conscious teacher with a busy, structured schedule, Beth values reliability, affordability, and access to green spaces. Her lifestyle showed us that a one-size-fits-all transit system doesn’t work—especially for users who juggle multiple roles and locations throughout the day. Inspired by her needs, we designed a transit solution that’s flexible yet eco-friendly: battery-operated buses running on fixed routes for consistency, paired with e-scooters for last-mile connectivity. Additionally, route-optimized vans provide door-to-door service for irregular trips like visits to local nurseries or educational stores. Our goal was simple—build a transit experience that feels personal, intuitive, and sustainable, just like Beth would want it to.</p>
      </div>
    </header>
  );
};

export default Beth;
