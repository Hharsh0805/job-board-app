import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import WhatWeOffer from '../components/WhatWeOffer';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <section className="hero">
          <h1>Find Your Dream Job</h1>
          <p>Connect with top employers and discover exciting career opportunities</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Sign Up as Job Seeker</button>
            <button className="btn btn-secondary">Sign Up as Recruiter</button>
          </div>
        </section>
        <WhatWeOffer />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

