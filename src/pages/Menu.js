import React from 'react';
import FoodCard from '../components/FoodCard';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Grilled Salmon',
      price: 24.99,
      description: 'Fresh Atlantic salmon grilled to perfection with herbs and lemon',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80'
    },
    {
      id: 2,
      name: 'Beef Burger',
      price: 15.99,
      description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      price: 12.99,
      description: 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80'
    },
    {
      id: 4,
      name: 'Pasta Carbonara',
      price: 18.99,
      description: 'Classic Italian pasta with bacon, eggs, and parmesan cheese',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80'
    },
    {
      id: 5,
      name: 'Margherita Pizza',
      price: 16.99,
      description: 'Traditional pizza with tomato sauce, mozzarella, and fresh basil',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80'
    },
    {
      id: 6,
      name: 'Chicken Tikka',
      price: 19.99,
      description: 'Marinated chicken pieces grilled with Indian spices',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80'
    },
    {
      id: 7,
      name: 'Sushi Platter',
      price: 28.99,
      description: 'Assorted fresh sushi rolls with wasabi and soy sauce',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80'
    },
    {
      id: 8,
      name: 'Chocolate Cake',
      price: 8.99,
      description: 'Rich chocolate cake with creamy frosting and chocolate chips',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80'
    }
  ];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1 className="display-4 text-white fade-in">Our Menu</h1>
          <p className="lead text-white fade-in">Explore our delicious offerings</p>
        </div>
      </div>
      
      <section className="menu-content py-5">
        <div className="container">
          <div className="row g-4">
            {menuItems.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <FoodCard {...item} showDescription={true} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
