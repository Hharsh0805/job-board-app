import React from 'react';

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <h2>What We Offer</h2>
      <div className="offer-grid">
        <div className="offer-item">
          <h3>For Job Seekers</h3>
          <ul>
            <li>Advanced job matching</li>
            <li>Career development resources</li>
            <li>Resume builder</li>
            <li>Interview preparation tools</li>
          </ul>
        </div>
        <div className="offer-item">
          <h3>For Recruiters</h3>
          <ul>
            <li>Efficient candidate search tools</li>
            <li>Applicant tracking system</li>
            <li>Job posting management</li>
            <li>Analytics and reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

