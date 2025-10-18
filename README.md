# Pratiksha Pandit - Portfolio Website

A modern, responsive single-page portfolio website showcasing the work of Pratiksha Pandit, a Geologist and Choreographer.

## 🌟 Features

- **Modern Design**: Sleek, contemporary UI with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth scrolling between sections
- **Performance Optimized**: Fast loading with lazy-loaded videos
- **Pure Static Site**: No build process required - just HTML, CSS, and JavaScript

## 🚀 Live Demo

Visit the live site at: `https://jainishshah17.github.io/pratikshapandit.com`

## 📁 Project Structure

```
pratikshapandit.com/
├── index.html              # Main HTML file
├── styles.css              # Modern CSS styling
├── script.js               # Vanilla JavaScript for interactions
├── assets/
│   ├── images/            # Profile and background images
│   └── documents/         # Resume/CV PDF
├── public/
│   └── images/            # Favicon and logo
├── README.md              # This file
└── LICENSE                # MIT License
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: Pure ES6+ JavaScript (no frameworks)
- **Font Awesome**: Icon library

## 🌐 Deploy to GitHub Pages

### Simple Deployment Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click **Save**

3. **Access your site:**
   - Your site will be live at: `https://jainishshah17.github.io/pratikshapandit.com`
   - It may take a few minutes for the first deployment

That's it! GitHub Pages will automatically serve your static files.

## 🖥️ Local Development

To run the site locally, use any simple HTTP server:

### Using Python (easiest):
```bash
python3 -m http.server 8000
# or
python -m http.server 8000
```

### Using PHP:
```bash
php -S localhost:8000
```

### Using Node.js:
```bash
npx http-server -p 8000
```

Then open your browser and navigate to `http://localhost:8000`

## 📝 Customization

### Update Content
Simply edit the text in `index.html` - it's all in one file!

### Change Colors
Modify the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### Add/Remove Videos
In the `#performances` section of `index.html`, add or remove video items with YouTube embed URLs.

### Update Images
Replace images in the `assets/images/` directory with your own (keep the same filenames, or update the references in `index.html`).

## 📧 Contact Form

The contact form currently uses a `mailto:` link as a fallback. For production, consider integrating:

- **[Formspree](https://formspree.io)** - Free tier available, easy setup
- **[EmailJS](https://www.emailjs.com/)** - Send emails directly from JavaScript
- **[Netlify Forms](https://www.netlify.com/products/forms/)** - If deploying to Netlify

## 📱 Sections

1. **Home**: Hero section with introduction
2. **About**: Education and work experience
3. **Performances**: YouTube video gallery
4. **Contact**: Contact form and social media links

## 🎨 Design Features

- Gradient hero section with floating animation
- Smooth scroll animations
- Active navigation highlighting
- Mobile-responsive hamburger menu
- Lazy-loaded YouTube videos
- Card-based layouts with hover effects
- Modern typography and spacing

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Designed and Developed by**: Jainish Shah

## 📮 Contact

- **LinkedIn**: [Pratiksha Pandit](https://www.linkedin.com/in/pratiksha-pandit-6386bb53)
- **YouTube**: [Dance Performances](https://www.youtube.com/channel/UCAloVYHTNxkyfbi4oUIYDvQ)
- **Facebook**: [Profile](https://www.facebook.com/jainish.shah.3979)
- **Pinterest**: [Portfolio](https://www.pinterest.com/panditpratiksha/)

---

Made with ❤️ for Pratiksha Pandit
