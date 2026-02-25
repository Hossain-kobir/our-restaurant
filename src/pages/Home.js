import React from 'react';
import HeroSection from '../components/HeroSection';
import FoodCard from '../components/FoodCard';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredFoods = [
    {
      id: 1,
      name: 'Grilled Salmon',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80'
    },
    {
      id: 2,
      name: 'Beef Burger',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80'
    },
    {
      id: 4,
      name: 'Pasta Carbonara',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80'
    }
  ];

  return (
    <div className="home-page">
      <HeroSection />
      
      <section className="featured-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Dishes</h2>
            <p className="section-subtitle">Discover our chef's special selections</p>
          </div>
          <div className="row g-4">
            {featuredFoods.map((food) => (
              <div key={food.id} className="col-lg-3 col-md-6">
                <FoodCard {...food} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/menu" className="btn btn-outline-primary btn-lg">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      
      <section className="about-preview py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant Interior"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">About Our Restaurant</h2>
              <p className="lead">
                Welcome to OUR Restaurant, where culinary artistry meets exceptional service.
              </p>
              <p>
                For over 20 years, we've been serving the finest dishes crafted from locally
                sourced ingredients. Our passionate chefs create memorable dining experiences
                that keep our guests coming back.
              </p>
              <Link to="/about" className="btn btn-primary mt-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
