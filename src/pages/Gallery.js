import React from 'react';
import GalleryComponent from '../components/GalleryComponent';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80',
    'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80'
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <div className="container">
          <h1 className="display-4 text-white fade-in">Gallery</h1>
          <p className="lead text-white fade-in">A visual journey through our culinary creations</p>
        </div>
      </div>
      
      <section className="gallery-content py-5">
        <div className="container">
          <GalleryComponent images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
