import React from 'react';
import './GalleryComponent.css';

const GalleryComponent = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery ${index + 1}`} />
          <div className="gallery-overlay">
            <span className="gallery-icon">+</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryComponent;
