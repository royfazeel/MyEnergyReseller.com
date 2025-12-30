# MyEnergyProvider.com

A professional energy bill payment assistance website with a modern dark cyberpunk theme.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI**: Dark cyberpunk theme with animated backgrounds and particles
- **10 Energy Providers**: Individual pages for major US energy providers
- **Interactive Popups**: Provider-branded popups with auto-reappear functionality
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Optimized**: Minimal dependencies, CSS animations, lazy loading
- **Google Ads Compliant**: Clear third-party disclaimers throughout

## 📁 Project Structure

```
myenergyprovider-vercel/
├── index.html              # Home page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript
├── pages/
│   ├── providers.html      # Providers listing
│   ├── about.html          # About page
│   ├── services.html       # Services page
│   ├── faq.html            # FAQ page
│   ├── contact.html        # Contact page
│   ├── privacy.html        # Privacy Policy
│   ├── terms.html          # Terms of Service
│   └── providers/          # Individual provider pages
│       ├── duke-energy.html
│       ├── southern-company.html
│       ├── dominion-energy.html
│       ├── exelon.html
│       ├── nextera-energy.html
│       ├── aep.html
│       ├── xcel-energy.html
│       ├── entergy.html
│       ├── pge.html
│       └── con-edison.html
├── vercel.json             # Vercel configuration
└── README.md
```

## 🛠️ Deployment to Vercel

### Option 1: Deploy from GitHub

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎨 Customization

### Phone Number
Update the phone number in:
- `index.html` (multiple locations)
- `js/main.js` (PHONE_NUMBER constant)
- All page files

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-bg: #0a0a0f;
    --accent-cyan: #00f5ff;
    --accent-purple: #a855f7;
    /* ... */
}
```

### Provider Colors
Each provider has its own brand color defined in `css/styles.css`:
```css
--duke-color: #00629B;
--southern-color: #CC092F;
/* ... */
```

## 📱 Mobile Optimization

- Hamburger menu for mobile navigation
- Touch-optimized button sizes
- Reduced animations on mobile
- Responsive grid layouts
- Optimized font sizes

## ⚡ Performance

- No external JavaScript frameworks
- Minimal CSS (single file)
- Google Fonts with preconnect
- SVG icons (no icon libraries)
- Efficient CSS animations

## 📜 Legal Pages

- **Privacy Policy**: Data collection, usage, security
- **Terms of Service**: Third-party disclaimer, payment processing
- Clear disclaimers that the site is NOT affiliated with energy providers

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

All rights reserved.
