import React from 'react';
import { FaAward, FaUsers, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1 className="display-4 text-white fade-in">About Us</h1>
          <p className="lead text-white fade-in">Our story, passion, and commitment</p>
        </div>
      </div>
      
      <section className="about-content py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Restaurant"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead">
                OUR Restaurant was founded in 2004 with a simple mission: to bring people
                together through exceptional food and warm hospitality.
              </p>
              <p>
                What started as a small family-owned establishment has grown into a beloved
                dining destination. We pride ourselves on using only the freshest, locally
                sourced ingredients and preparing each dish with care and creativity.
              </p>
              <p>
                Our team of talented chefs brings together diverse culinary traditions,
                creating a menu that celebrates both classic favorites and innovative new dishes.
              </p>
            </div>
          </div>
          
          <div className="row text-center mt-5 pt-5">
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <FaAward className="feature-icon" />
                <h3>Quality Food</h3>
                <p>We use only the finest ingredients to create memorable dishes</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <FaUsers className="feature-icon" />
                <h3>Expert Chefs</h3>
                <p>Our experienced team brings passion and skill to every plate</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <FaHeart className="feature-icon" />
                <h3>Made with Love</h3>
                <p>Every dish is prepared with care and attention to detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
