# Customization Guide

## 🎨 How to Customize Your Restaurant Website

### Change Colors

#### Primary Color (Red/Pink)
Search for `#ff6b6b` and `#ee5a6f` in all CSS files and replace with your colors.

**Files to update:**
- `src/App.css`
- `src/components/Navbar.css`
- `src/components/Footer.css`
- `src/components/FoodCard.css`
- `src/components/HeroSection.css`

**Example:**
```css
/* Change from */
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);

/* To your color */
background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
```

#### Dark Colors
- `#2c3e50` - Main dark color
- `#34495e` - Secondary dark
- `#7f8c8d` - Gray text

---

### Change Restaurant Name

1. **Navbar** - `src/components/Navbar.js`:
```javascript
<span className="brand-text">YOUR Restaurant</span>
```

2. **Hero Section** - `src/components/HeroSection.js`:
```javascript
<h1 className="hero-title fade-in">Welcome to YOUR Restaurant</h1>
```

3. **Footer** - `src/components/Footer.js`:
```javascript
<h4 className="footer-title">YOUR Restaurant</h4>
```

4. **Page Title** - `public/index.html`:
```html
<title>YOUR Restaurant</title>
```

---

### Change Images

#### Hero Background
`src/components/HeroSection.css`:
```css
background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url('YOUR_IMAGE_URL') center/cover no-repeat;
```

#### Menu Items
`src/pages/Menu.js` - Update the `menuItems` array:
```javascript
{
  id: 1,
  name: 'Your Dish Name',
  price: 19.99,
  description: 'Your description',
  image: 'YOUR_IMAGE_URL'
}
```

#### Gallery Images
`src/pages/Gallery.js` - Update the `galleryImages` array:
```javascript
const galleryImages = [
  'YOUR_IMAGE_URL_1',
  'YOUR_IMAGE_URL_2',
  // ... more images
];
```

**Free Image Sources:**
- [Unsplash](https://unsplash.com) - High-quality free images
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

---

### Change Content

#### Hero Tagline
`src/components/HeroSection.js`:
```javascript
<p className="hero-tagline fade-in">Your Custom Tagline</p>
```

#### About Section
`src/pages/About.js` - Update the story text:
```javascript
<p className="lead">
  Your restaurant story here...
</p>
```

#### Contact Information
`src/components/Footer.js`:
```javascript
<span>Your Address Here</span>
<span>Your Phone Number</span>
<span>your@email.com</span>
```

---

### Add New Menu Items

`src/pages/Menu.js`:
```javascript
const menuItems = [
  // ... existing items
  {
    id: 9,
    name: 'New Dish',
    price: 22.99,
    description: 'Delicious new dish description',
    image: 'https://images.unsplash.com/photo-xxx'
  }
];
```

---

### Change Opening Hours

`src/components/Footer.js`:
```javascript
<div className="hours-item">
  <span>Your Days</span>
  <span>Your Hours</span>
</div>
```

---

### Modify Social Media Links

`src/components/Footer.js`:
```javascript
<a href="https://facebook.com/yourpage" className="social-icon">
  <FaFacebook />
</a>
<a href="https://instagram.com/yourpage" className="social-icon">
  <FaInstagram />
</a>
```

---

### Add New Page

1. Create page file: `src/pages/NewPage.js`
```javascript
import React from 'react';
import './NewPage.css';

const NewPage = () => {
  return (
    <div className="new-page">
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;
```

2. Create CSS: `src/pages/NewPage.css`

3. Add route in `src/App.js`:
```javascript
import NewPage from './pages/NewPage';

// In Routes:
<Route path="/newpage" element={<NewPage />} />
```

4. Add to navbar in `src/components/Navbar.js`:
```javascript
<li className="nav-item">
  <Link className={`nav-link ${location.pathname === '/newpage' ? 'active' : ''}`} to="/newpage">
    New Page
  </Link>
</li>
```

---

### Change Fonts

`src/App.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

**Google Fonts:**
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select a font
3. Add to `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

---

### Adjust Animations

#### Speed
Change animation duration in CSS:
```css
/* Slower */
transition: all 0.5s ease;

/* Faster */
transition: all 0.2s ease;
```

#### Disable Animations
Remove animation classes:
- `fade-in`
- `slide-in-left`
- `slide-in-right`

---

### Change Button Styles

`src/App.css`:
```css
.btn-primary {
  background: your-color;
  border-radius: 25px; /* More rounded */
  padding: 15px 40px; /* Bigger */
}
```

---

### Modify Layout

#### Container Width
Add to CSS:
```css
.container {
  max-width: 1400px; /* Wider */
}
```

#### Section Padding
```css
.py-5 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}
```

---

### Add Logo

1. Add logo image to `public/` folder
2. Update `src/components/Navbar.js`:
```javascript
<Link className="navbar-brand" to="/">
  <img src="/logo.png" alt="Logo" height="40" />
  <span className="brand-text">Restaurant</span>
</Link>
```

---

### Change Footer Background

`src/components/Footer.css`:
```css
.footer {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

---

### Customize Contact Form

`src/components/ContactForm.js`:

**Add Phone Field:**
```javascript
<div className="form-group">
  <label htmlFor="phone">Phone</label>
  <input
    type="tel"
    className="form-control"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Your phone number"
  />
</div>
```

**Connect to Backend:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    alert('Message sent successfully!');
  }
};
```

---

## 🎯 Quick Customization Checklist

- [ ] Change restaurant name
- [ ] Update colors
- [ ] Replace images
- [ ] Modify menu items
- [ ] Update contact information
- [ ] Change opening hours
- [ ] Add social media links
- [ ] Customize about text
- [ ] Update hero tagline
- [ ] Add your logo
- [ ] Change fonts (optional)
- [ ] Adjust animations (optional)

---

## 💡 Pro Tips

1. **Keep backups** before making changes
2. **Test locally** with `npm start`
3. **Use browser DevTools** to preview CSS changes
4. **Commit often** to Git
5. **Check responsive** design after changes
6. **Optimize images** before uploading
7. **Keep consistent** color scheme
8. **Test on mobile** devices

---

## 🆘 Need Help?

- Check browser console for errors
- Use React DevTools extension
- Verify file paths are correct
- Make sure imports are updated
- Clear browser cache if changes don't appear

Happy customizing! 🎨
