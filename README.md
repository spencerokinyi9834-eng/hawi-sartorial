# Hawi Sartorial Ltd - Premium Uniforms & Tailoring

A modern, responsive website for Hawi Sartorial Ltd, a premium uniform and tailoring company in Nairobi, Kenya.

## Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Clean, professional design with premium feel
- **Interactive Elements**:
  - Smooth navigation and scrolling
  - Mobile-friendly hamburger menu
  - Image gallery with lightbox
  - Testimonials carousel
  - Animated statistics counters
  - Contact form with validation
- **Accessibility**: WCAG compliant with semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient CSS
- **SEO**: Proper meta tags and structured content

## Sections

1. **Hero** - Eye-catching introduction with clear call-to-action
2. **About** - Company mission, vision, values, and story
3. **Services** - Corporate wear, school uniforms, workwear, custom tailoring
4. **Why Choose Us** - Key features and benefits
5. **Process** - Step-by-step workflow from consultation to delivery
6. **Portfolio** - Gallery of past work
7. **Testimonials** - Customer reviews and feedback
8. **Statistics** - Key metrics displayed with animations
9. **Contact** - Contact form and company information
10. **Footer** - Links, social media, and legal information

## File Structure

```
hawi-sartorial/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── assets/
    └── images/         # Placeholder for product images
        ├── portfolio-1.svg
        ├── portfolio-2.svg
        ├── portfolio-3.svg
        └── portfolio-4.svg
```

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. No dependencies or build process required

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --color-primary: #161616;        /* Main dark color */
  --color-secondary: #d4af37;      /* Gold accent */
  --color-accent: #f5f5f5;         /* Light text */
  /* ... more variables ... */
}
```

### Content
- Update company information in the HTML
- Replace placeholder images in the `assets/images/` folder
- Update contact form action in the `contactForm` data attribute
- Configure Formspree endpoint for form submissions

### Fonts
Custom fonts from Google Fonts:
- **Cormorant Garamond** - Elegant serif for headings
- **Inter** - Clean sans-serif for body text

## Contact Form Setup

1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the `data-formspree` attribute in `index.html`:
   ```html
   <form class="contact-form" id="contactForm" data-formspree="https://formspree.io/f/YOUR-FORM-ID">
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- No external dependencies
- Fast page load time

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## License

© 2026 Hawi Sartorial Ltd. All rights reserved.

## Contact

- **Email**: hawisartorial@gmail.com
- **Phone**: +254 717 983 802
- **WhatsApp**: +254 717 983 802
- **Location**: Nairobi, Kenya
