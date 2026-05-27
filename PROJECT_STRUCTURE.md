# Castro Express Cargo - Website Structure

## Project Overview

A modern, responsive institutional website for Castro Express Cargo, a Brazilian air cargo and corporate logistics company. Built with Next.js 16, TypeScript, and CSS Modules.

## Key Features

### ✨ Core Features
- **Responsive Design**: Mobile-first approach with full responsive support
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Modular Architecture**: Component-based structure with CSS Modules
- **Modern UI/UX**: Premium corporate design with smooth animations
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Performance**: Optimized images, clean code structure, fast loading times

### 🎨 Design Elements
- **Color Palette**: Dark blue (#001f3f), Light Blue (#003d7a), White, Gray, Silver, with Orange (#ff8c00) and Cyan (#00bcd4) accents
- **Typography**: Professional and clean with hierarchical structure
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **Sticky Header**: Navigation remains accessible while scrolling
- **Gradient Overlays**: Modern gradient backgrounds and overlays

## Project Structure

```
app/
├── components/
│   ├── Header/
│   │   ├── Header.tsx           # Sticky header with navigation
│   │   └── Header.module.css    # Header styles
│   ├── Hero/
│   │   ├── Hero.tsx             # Full-screen hero section
│   │   └── Hero.module.css      # Hero styles
│   ├── About/
│   │   ├── About.tsx            # Company information & values
│   │   └── About.module.css     # About styles
│   ├── Services/
│   │   ├── Services.tsx         # Service cards grid
│   │   └── Services.module.css  # Services styles
│   ├── Coverage/
│   │   ├── Coverage.tsx         # National coverage section
│   │   └── Coverage.module.css  # Coverage styles
│   ├── Differentials/
│   │   ├── Differentials.tsx    # Company differentials
│   │   └── Differentials.module.css
│   ├── Contact/
│   │   ├── Contact.tsx          # Contact form & information
│   │   └── Contact.module.css   # Contact styles
│   └── Footer/
│       ├── Footer.tsx           # Footer with links
│       └── Footer.module.css    # Footer styles
├── globals.css                  # Global styles & variables
├── layout.tsx                   # Root layout with metadata
└── page.tsx                     # Homepage composition

public/
├── robots.txt                   # SEO robots configuration
└── sitemap.xml                  # XML sitemap

next.config.ts                   # Next.js configuration
tsconfig.json                    # TypeScript configuration
package.json                     # Project dependencies
```

## Component Descriptions

### Header
- Sticky navigation with responsive hamburger menu
- Logo with gradient accent
- Navigation links with hover animations
- WhatsApp CTA button
- Mobile-friendly responsive design

### Hero
- Full-width banner with background image
- Headline and subtitle
- Primary and secondary CTA buttons
- Scroll indicator animation
- Overlay gradient for text readability

### About
- Company presentation text
- Grid of value propositions (4 cards)
- Company image with accent overlay
- Hover animations on value cards

### Services
- 6 service cards in responsive grid
- Icons, title, and description per service
- Hover animations and top border accent
- Learn more links

### Coverage
- National coverage statistics (27 states, 120+ airports, etc.)
- Left content with highlights list
- Right side image with overlay
- 2-column layout on desktop, stacked on mobile

### Differentials
- 6 differential cards showcasing company advantages
- Emoji icons
- Hover animations with gradient background
- Responsive grid layout

### Contact
- Contact information section with icons
- WhatsApp CTA button
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Phone (required)
  - Company (optional)
  - Message (required)
- Form validation and styling

### Footer
- Company information
- Quick navigation links
- Services list
- Contact details
- Social media links
- Copyright and legal links

## CSS Architecture

### Global Variables
CSS custom properties defined in `globals.css`:
- `--color-dark-blue`: #001f3f
- `--color-light-blue`: #003d7a
- `--color-white`: #ffffff
- `--color-gray-light`: #f8f9fa
- `--color-gray-medium`: #e0e0e0
- `--color-gray-dark`: #333333
- `--color-silver`: #c0c0c0
- `--color-orange-accent`: #ff8c00
- `--color-cyan-accent`: #00bcd4

### Spacing System
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-2xl`: 4rem
- `--spacing-3xl`: 6rem

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: Below 768px

## SEO Implementation

### Metadata
- Title tag with company name and tagline
- Meta description
- OG tags for social sharing
- Twitter card configuration
- Robots meta tag

### Structured Data
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3, h4)
- Alt text for all images
- ARIA labels for interactive elements

### Sitemap & Robots
- `robots.txt`: Configured for search engine crawling
- `sitemap.xml`: URL list with priority and frequency

## Technologies Used

- **Next.js 16.2.6**: React framework with server-side rendering
- **React 19.2.4**: UI library
- **TypeScript**: Type-safe JavaScript
- **CSS Modules**: Scoped CSS styling
- **Tailwind CSS**: Utility-first CSS framework (configured)
- **Next.js Image**: Optimized image component

## Features Implemented

### Navigation
- Smooth scrolling to sections
- Sticky header with transparent background
- Mobile hamburger menu
- Desktop navigation links
- WhatsApp integration

### Interactivity
- Form handling with state management
- Hover animations and transitions
- Scroll animations
- Mobile menu toggle
- Link hover effects

### Accessibility
- Semantic HTML structure
- ARIA labels on buttons and interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text on images

### Performance
- CSS Modules for scoped styling
- Next.js image optimization
- Clean component structure
- No unnecessary dependencies
- Optimized animations using CSS

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Customization Guide

### Changing Colors
Update the CSS variables in `app/globals.css`:
```css
:root {
  --color-dark-blue: #001f3f;
  --color-orange-accent: #ff8c00;
  /* etc */
}
```

### Modifying Content
Each component's content is easily editable in the respective `.tsx` files. Replace text, add/remove service cards, or modify contact information.

### Adding New Sections
1. Create a new component folder in `app/components/`
2. Create `ComponentName.tsx` and `ComponentName.module.css`
3. Import and add the component to `app/page.tsx`
4. Update the Header navigation links as needed

### Updating Contact Information
- Phone numbers in `Header.tsx`, `Contact.tsx`, and `Footer.tsx`
- Email in `Contact.tsx` and `Footer.tsx`
- WhatsApp links throughout the site

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Deployment

The site is ready for deployment to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js-compatible hosting

### Environment Variables
No environment variables required for basic functionality.

## Future Enhancements

- Blog section for industry news
- Customer testimonials/case studies
- API integration for real-time tracking
- Multi-language support
- Dark mode toggle
- Analytics integration
- Newsletter signup
- Live chat support

## License

All rights reserved © 2024 Castro Express Cargo
