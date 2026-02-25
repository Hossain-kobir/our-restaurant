import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1 className="display-4 text-white fade-in">Contact Us</h1>
          <p className="lead text-white fade-in">We'd love to hear from you</p>
        </div>
      </div>
      
      <section className="contact-content py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h2 className="mb-4">Get In Touch</h2>
              <ContactForm />
            </div>
            
            <div className="col-lg-6">
              <h2 className="mb-4">Restaurant Information</h2>
              
              <div className="info-card">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h5>Address</h5>
                    <p>123 Restaurant Street, Food City, FC 12345</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h5>Email</h5>
                    <p>info@ourrestaurant.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <h5>Opening Hours</h5>
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="map-container mt-4">
                <iframe
                  title="Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9875!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMTUuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
