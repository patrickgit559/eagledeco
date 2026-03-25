# EAGLE DECO - Workspace Instructions

## Project Overview

**Project**: EAGLE DECO Website  
**Type**: Business/Service Company Website  
**Client**: EAGLE DECO (Painting & Decoration Company)  
**Target Market**: Private individuals, companies, real estate promoters in Côte d'Ivoire (Abidjan)  
**Language**: French (for content and UI)

---

## Project Goals

1. Present company services professionally
2. Build company image and credibility
3. Generate quote requests from potential clients
4. Facilitate customer contact and communication
5. Include WhatsApp integration for direct contact

---

## Website Structure

### Pages Required

- **Homepage (Accueil)**: Hero section with CTA button
- **About (À propos)**: Company mission and vision
- **Services (Nos prestations & services)**: Grid layout of service offerings
- **Why Choose Us (Pourquoi nous choisir)**: Competitive advantages
- **Contact (Contact)**: Contact form + information display

### Key Content Elements

**Company Info**:
- Name: EAGLE DECO
- Slogan: "Des services de qualité auxquels vous pouvez faire confiance"
- Phone: +225 05 74 45 52 07
- Email: eagledeco24@gmail.com
- Location: Yopougon Millionnaire

**Services** (8 total):
- Peinture bâtiment (Building painting)
- Peinture décorative (Decorative painting)
- Enduit (Coating)
- Staff (Stucco finishing)
- Stuc (Stucco)
- Placoplâtre (Drywall)
- Papier peint (Wallpaper)
- Peinture antigriffes (Anti-scratch paint)

---

## Development Principles

### Frontend Stack
- **HTML5** for semantic structure
- **CSS3** (or Tailwind CSS) for responsive design
- **JavaScript** (vanilla or framework) for interactivity
- Responsive mobile-first design (target: Ivorian mobile users)

### Requirements by Page

#### Homepage
- Logo and company name display
- Slogan integration
- Banner image (construction/painting work)
- Prominent CTA button ("Demander un devis")
  - Links to contact section or WhatsApp direct message
- Hero-based layout with call-to-action focus

#### Services Page
- Grid layout (responsive: 1-2 columns mobile, 3-4 columns desktop)
- Service cards with icons/images
- Optional: Add images for each service
- Organized and visually distinct service presentation

#### Contact Page
- Contact form (name, email, message, phone)
- Display: Phone, email, location
- WhatsApp integration (direct link with preset message)
- Map or location embed (optional)

---

## Conventions & Best Practices

### Code Organization
- Separate HTML, CSS, and JavaScript files
- Use semantic HTML5 elements
- CSS: Use consistent naming conventions (BEM or similar)
- File structure:
  ```
  index.html
  css/
    style.css
  js/
    script.js
  images/
    [company images, logos, service icons]
  ```

### Language & Localization
- **Primary Language**: French
- Use French content exactly as specified in "cahier de charge"
- Ensure UTF-8 encoding for proper French character display (accents, etc.)
- French meta tags and descriptions for SEO

### Responsive Design
- Mobile-first approach
- Test on small screens (common in Côte d'Ivoire)
- Touch-friendly elements (buttons, links)
- Optimize for slower internet connections (common in region)

### Performance
- Optimize images (compress without quality loss)
- Minimize CSS/JS files
- Lazy load images below the fold
- Keep page load time < 3 seconds target

### Accessibility
- Use alt text for all images
- Proper heading hierarchy (h1, h2, h3)
- Sufficient color contrast ratios
- Keyboard navigation support

---

## CTA & Conversion Strategy

### Call-to-Action Button ("Demander un devis")
- **Location**: Homepage (hero), Services page
- **Actions**:
  1. Link to Contact form (recommended)
  2. Link to WhatsApp with preset message:
     ```
     https://wa.me/22505744552007?text=Bonjour,%20je%20souhaite%20demander%20un%20devis
     ```
     (Replace with actual phone number format)

---

## Assets & Requirements

### To Obtain from Client
- [ ] Company logo (various formats: PNG, SVG, favicon)
- [ ] Banner/hero image (recommended: 1200x600px minimum)
- [ ] Service images (recommended: 400x300px for grid)
- [ ] Company photos/team photos (optional but recommended)
- [ ] Color palette preferences
- [ ] Brand guidelines (if available)

### Design Recommendations
- Color scheme: Professional, trustworthy (blues, greens, greys)
- Typography: Clean, readable sans-serif fonts
- Whitespace: Generous margins for professional appearance
- Imagery: High-quality photos of completed projects recommended

---

## Development Workflow

### Phase 1: Setup
- [ ] Create project structure
- [ ] Obtain assets from client
- [ ] Set up version control (Git)

### Phase 2: Static Pages
- [ ] Build Homepage template
- [ ] Build About page
- [ ] Build Services page with grid layout
- [ ] Build Why Choose Us page
- [ ] Build Contact page with form

### Phase 3: Interactivity & Polish
- [ ] Add form validation
- [ ] Add form submission handler
- [ ] Add WhatsApp integration
- [ ] Add smooth scrolling/navigation
- [ ] Test responsive design
- [ ] Optimize images and performance

### Phase 4: Deployment
- [ ] Choose hosting (Netlify, Vercel, or traditional hosting)
- [ ] Configure domain name
- [ ] Set up SSL/HTTPS
- [ ] Deploy website

---

## Testing Checklist

- [ ] All pages load correctly
- [ ] Forms submit and validate properly
- [ ] WhatsApp links work
- [ ] Responsive design on mobile (320px+, tablets, desktop)
- [ ] All images load and display
- [ ] Links navigate correctly
- [ ] CTA buttons have clear hover states
- [ ] French text displays correctly (accents, special characters)
- [ ] Page load time acceptable
- [ ] Contact information is accurate
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

## Common Pitfalls to Avoid

1. **Overcomplication**: Keep design simple and professional
2. **Poor mobile optimization**: Test thoroughly on mobile devices
3. **Slow performance**: Compress images, minimize assets
4. **Missing accessibility**: Always include alt text, proper semantics
5. **Incorrect contact information**: Double-check phone, email, address
6. **Form validation**: Ensure form submission works before deployment
7. **Missing favicon**: Add favicon for professional appearance
8. **No SSL/HTTPS**: Always use HTTPS in production

---

## Tools & Resources

- **VS Code Extensions**: Live Server, Prettier, Thunder Client (for API testing)
- **Design**: Figma for mockups (optional)
- **Testing**: Browser DevTools for responsive design
- **Hosting**: Netlify, Vercel, or HostGator (popular in African regions)
- **Analytics**: Google Analytics for tracking conversions

---

## Notes for AI Agent

- This is a **business website** - focus on clarity, professionalism, and conversion
- **French language** is critical - ensure proper encoding and content
- **Geographic context**: Optimize for Ivorian users (mobile-heavy, variable internet)
- **Goal-oriented**: Every design decision should support lead generation
- **CTA focus**: Make "Demander un devis" prominent and easy to use
