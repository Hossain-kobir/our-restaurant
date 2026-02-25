import React from 'react';
import './FoodCard.css';

const FoodCard = ({ image, name, price, description, showDescription = false }) => {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt={name} />
        <div className="food-card-overlay">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
      <div className="food-card-body">
        <h3 className="food-card-title">{name}</h3>
        {showDescription && <p className="food-card-description">{description}</p>}
        <div className="food-card-footer">
          <span className="food-card-price">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
