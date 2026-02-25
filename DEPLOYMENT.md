# Deployment Guide

## 🚀 Deploy Your Restaurant Website

### Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build` folder onto the page
4. Your site is live! 🎉

#### Method B: GitHub Integration
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

**Custom Domain**: Settings → Domain management → Add custom domain

---

### Option 2: Vercel

#### Method A: CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```
3. Follow the prompts
4. Done! ✅

#### Method B: GitHub Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects React
6. Click "Deploy"

**Custom Domain**: Settings → Domains → Add

---

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/our-restaurant",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings

---

### Option 4: AWS S3 + CloudFront

1. Build project:
   ```bash
   npm run build
   ```

2. Create S3 bucket:
   - Enable static website hosting
   - Upload `build` folder contents

3. Create CloudFront distribution:
   - Origin: Your S3 bucket
   - Default root object: `index.html`

4. Update DNS to point to CloudFront

---

### Option 5: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```
   - Public directory: `build`
   - Single-page app: `Yes`

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🔧 Pre-Deployment Checklist

- [ ] Test all pages locally
- [ ] Check responsive design on mobile
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check console for errors
- [ ] Optimize images if needed
- [ ] Update meta tags for SEO
- [ ] Add favicon
- [ ] Test in different browsers

---

## 🌐 Custom Domain Setup

### Netlify
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Netlify → Domain settings → Add custom domain
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### Vercel
1. Vercel → Settings → Domains
2. Add your domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 📊 Post-Deployment

### Add Analytics
- Google Analytics
- Vercel Analytics
- Netlify Analytics

### Performance Monitoring
- Lighthouse scores
- PageSpeed Insights
- GTmetrix

### SEO
- Submit sitemap to Google
- Add meta descriptions
- Optimize images
- Add structured data

---

## 🔒 Environment Variables

If you add backend integration:

### Netlify
```bash
netlify env:set API_KEY your_key_here
```

### Vercel
```bash
vercel env add API_KEY
```

Or use dashboard → Settings → Environment Variables

---

## 🐛 Troubleshooting

### Blank page after deployment
- Check browser console
- Verify `homepage` in package.json
- Check build folder contents

### 404 on refresh
- Configure redirects:
  
**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Images not loading
- Check image URLs
- Verify CORS settings
- Use relative paths

---

## 📱 Testing Deployed Site

- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Check all pages load
- [ ] Verify navigation works
- [ ] Test contact form
- [ ] Check loading speed
- [ ] Verify SSL certificate

---

## 🎉 Your Site is Live!

Share your portfolio project:
- Add to LinkedIn
- Share on Twitter
- Include in resume
- Add to portfolio website

**Congratulations!** 🚀
