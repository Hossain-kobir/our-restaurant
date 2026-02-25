import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-title">OUR Restaurant</h4>
            <p className="footer-text">
              Experience the finest dining with our carefully crafted dishes made from the freshest ingredients.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Restaurant Street, Food City, FC 12345</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@ourrestaurant.com</span>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12 mb-4">
            <h4 className="footer-title">Opening Hours</h4>
            <div className="opening-hours">
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday - Sunday</span>
                <span>10:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 OUR Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
