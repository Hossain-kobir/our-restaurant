import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title fade-in">Welcome to OUR Restaurant</h1>
        <p className="hero-tagline fade-in">Experience Culinary Excellence</p>
        <Link to="/menu" className="btn btn-primary btn-lg hero-btn fade-in">
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
