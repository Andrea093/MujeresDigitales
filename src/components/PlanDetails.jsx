import React from 'react';
import iconMusic from '../../images/icon-music.svg';

const PlanDetails = () => {
  return (
    <div className="plan-details">
      <img src={iconMusic} alt="Music Icon" className="plan-details-icon" />
      <div className="plan-details-text">
        <h3>Annual Plan</h3>
        <p>$59.99/year</p>
      </div>
      <a href="#" className="change-link">Change</a>
    </div>
  );
};

export default PlanDetails;
