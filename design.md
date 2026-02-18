# KEN'S BUSINESS CENTRE - Design Style Guide

## Design Philosophy

### Visual Language
**Professional Dual-Sector Integration**: The design seamlessly blends the agricultural and advertising sectors through a sophisticated visual language that communicates reliability, quality, and comprehensive business solutions. The aesthetic bridges the natural warmth of agricultural products with the precision of modern printing technology.

### Color Palette
**Primary Colors**:
- **Deep Forest Green** (#1B4332) - Represents agricultural roots, growth, and natural quality
- **Warm Gold** (#D4A574) - Symbolizes premium maize and rice grains, prosperity
- **Professional Navy** (#1E3A8A) - Conveys trust, reliability, and corporate professionalism

**Secondary Colors**:
- **Soft Cream** (#FEF7ED) - Clean background, represents purity of products
- **Charcoal Gray** (#374151) - Modern typography, professional contrast
- **Accent Orange** (#EA580C) - Call-to-action elements, energy and innovation

### Typography
**Primary Font**: **Playfair Display** (Serif) - For headings and brand elements
- Elegant, editorial quality that conveys premium positioning
- Strong character for business name and section headers

**Secondary Font**: **Inter** (Sans-serif) - For body text and UI elements
- Clean, highly readable, modern
- Excellent for forms, product descriptions, and navigation

**Font Hierarchy**:
- H1: Playfair Display, 3.5rem, Bold
- H2: Playfair Display, 2.5rem, Semi-bold
- H3: Inter, 1.5rem, Semi-bold
- Body: Inter, 1rem, Regular
- Small: Inter, 0.875rem, Regular

## Visual Effects & Styling

### Used Libraries & Effects
1. **Anime.js** - Smooth entrance animations for product cards and service sections
2. **ECharts.js** - Interactive data visualization for product specifications and service comparisons
3. **Splide.js** - Elegant image carousels for portfolio galleries and testimonials
4. **Typed.js** - Dynamic typewriter effect for hero section taglines
5. **p5.js** - Subtle particle background effects representing grain movement
6. **Splitting.js** - Letter-by-letter text animations for section headers
7. **Pixi.js** - Advanced image filters and hover effects on product galleries

### Header & Hero Effects
**Agricultural Hero Section**:
- Cinematic landscape photography with subtle parallax scrolling
- Typewriter animation for main tagline: "Connecting Agriculture with Innovation"
- Floating particle effect using p5.js to simulate grain movement across the screen
- Gradient overlay transitioning from transparent to soft cream

**Printing Services Hero**:
- Dynamic carousel of printing equipment and finished products
- Ken Burns effect (subtle zoom and pan) on hero images
- Color-cycling text emphasis on key service benefits
- Split-by-letter stagger animation for section introductions

### Interactive Elements
**Product Catalog**:
- Cards with 3D tilt effect on hover using CSS transforms
- Image zoom with displacement reveal on hover
- Smooth filter animations when sorting products
- Loading skeleton animations for better perceived performance

**Service Calculator**:
- Real-time price updates with number counter animations
- Progress indicators with smooth fill animations
- Interactive sliders with custom styling
- Success/error states with shake and pulse animations

**Portfolio Gallery**:
- Masonry layout with staggered entrance animations
- Lightbox modal with smooth scale transitions
- Category filter buttons with active state morphing
- Infinite scroll with fade-in loading

### Background & Layout
**Consistent Background**: Soft cream (#FEF7ED) throughout all pages
- Subtle texture overlay suggesting paper grain (connecting to printing services)
- No section-specific background colors to maintain visual continuity

**Decorative Elements**:
- Geometric patterns inspired by grain kernels and printing registration marks
- Subtle diagonal lines in brand colors as section dividers
- Circular motifs representing both agricultural cycles and printing plates

### Scroll Motion & Interactions
**Scroll Animations**:
- Elements fade in when entering the upper 50% of viewport
- Subtle 16px vertical translation with 200ms duration
- Staggered delays for card grids (50ms between items)
- Parallax limited to ±8% for decorative background elements

**Hover Effects**:
- Product cards: Lift with expanded shadow and subtle scale (1.02x)
- Buttons: Color morphing with soft glow edge
- Images: Zoom to 1.1x with overlay text reveal
- Navigation: Underline animation growing from center

### Data Visualization Style
**Chart Colors**: Muted earth tones with saturation below 50%
- Primary: Deep Forest Green variations
- Secondary: Warm Gold variations
- Maximum 2 colors per chart for clarity
- Clean, minimal styling with subtle grid lines

### Mobile Responsiveness
**Breakpoints**:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

**Mobile Adaptations**:
- Simplified animations (reduced motion for performance)
- Touch-friendly button sizes (minimum 44px)
- Stacked layouts for product filters
- Collapsible navigation with smooth slide transitions

This design system creates a cohesive, professional brand experience that effectively communicates KEN'S BUSINESS CENTRE's unique position as both an agricultural distributor and printing services provider, while ensuring excellent user experience across all devices and interactions.