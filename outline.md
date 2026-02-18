# Seekers of the Truth Ministries - Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero, welcome, service schedule
├── about.html              # About the ministry and leadership profiles
├── fellowships.html        # Fellowship groups information
├── branches.html           # Branch locations and details
├── contact.html            # Contact information and form
├── services.html           # Service schedules and programs
├── main.js                 # All interactive functionality
├── resources/              # Images and media assets
│   ├── stm-logo.png       # Church logo
│   ├── hero-worship.png   # Hero worship image
│   ├── pastor-portrait.png # Pastor portrait
│   └── [other images]     # Fellowship and church images
├── interaction.md          # User interaction design document
├── design.md              # Design style guide
└── outline.md             # This project outline
```

## Page Structure & Content

### 1. index.html - Homepage
**Purpose**: Welcome visitors and provide quick access to key information

**Sections**:
- **Navigation Bar**: Sticky header with logo, menu items, CTA button
- **Hero Section**: 
  - Full-screen worship image with gradient overlay
  - Welcome message: "Welcome to Seekers of the Truth Ministries"
  - Animated text with church tagline
  - CTA buttons: "Join Us This Saturday", "Learn More", "Contact Us"
- **Welcome Message**: 
  - Brief introduction to the ministry
  - Mission statement
  - Core values
- **Service Schedule Preview**: 
  - Next service countdown timer
  - Weekly service times
  - Quick link to full schedule
- **Leadership Spotlight**: 
  - Apostle Sammy Nkansah profile preview
  - Link to full leadership page
- **Fellowships Preview**: 
  - Grid of fellowship groups
  - Quick links to fellowship pages
- **Branches Overview**: 
  - List of branch locations
  - Link to branches page
- **Testimonials**: 
  - Member testimonials carousel
- **Footer**: Contact info, social links, copyright

### 2. about.html - About the Ministry
**Purpose**: Provide detailed information about the church and leadership

**Sections**:
- **Page Header**: Breadcrumb, page title
- **Ministry Overview**: 
  - History and founding
  - Mission and vision statements
  - Core beliefs and doctrines
- **Leadership Profiles**: 
  - Apostle Sammy Nkansah (Head Pastor)
    - Photo, biography, contact
  - Deacon Eric Darko (Church Secretary)
    - Photo, biography, contact
  - Other key leaders
- **What We Believe**: 
  - Statement of faith
  - Core values
- **Our Story**: 
  - Timeline of church history
  - Milestones and achievements

### 3. fellowships.html - Fellowship Groups
**Purpose**: Showcase all fellowship groups and ministries

**Sections**:
- **Page Header**: Breadcrumb, page title
- **Men's Fellowship**: 
  - Description and mission
  - Meeting schedule
  - Leader information
  - Activities and programs
  - Join button
- **Women's Fellowship**: 
  - Description and mission
  - Meeting schedule
  - Leader information
  - Activities and programs
  - Join button
- **Youth Fellowship**: 
  - Description and mission
  - Meeting schedule
  - Leader information
  - Activities and programs
  - Join button
- **Prayer Team**: 
  - Description and mission
  - Meeting schedule
  - Prayer request submission
  - Join button
- **Other Groups**: 
  - Additional supportive groups
  - Contact information

### 4. branches.html - Branch Locations
**Purpose**: Display all church branches with details

**Sections**:
- **Page Header**: Breadcrumb, page title
- **Branch Map**: 
  - Interactive map showing all locations
  - Clickable markers
- **Branch Cards**: 
  - **Kasoa Branch**
    - Address, contact, service times
    - Branch pastor/leader
  - **Yeji Branch**
    - Address, contact, service times
    - Branch pastor/leader
  - **Nkwantah Branch**
    - Address, contact, service times
    - Branch pastor/leader
  - **Dawurampong Branch**
    - Address, contact, service times
    - Branch pastor/leader
  - **Diaspora Branch**
    - Online/virtual services
    - Contact information
    - Service times

### 5. services.html - Service Schedules
**Purpose**: Display detailed service schedules and programs

**Sections**:
- **Page Header**: Breadcrumb, page title
- **Weekly Schedule**: 
  - Saturday main service
  - Mid-week services
  - Special services
- **Service Details**: 
  - Service times
  - Activities during service
  - What to expect
- **Upcoming Events**: 
  - Calendar view
  - Special programs
  - Conferences and retreats
- **Programs**: 
  - Bible study
  - Prayer meetings
  - Fellowship meetings

### 6. contact.html - Contact Information
**Purpose**: Provide all contact methods and inquiry form

**Sections**:
- **Page Header**: Breadcrumb, page title
- **Contact Information**: 
  - Church address: Tafo, Kumasi
  - Email: isaac0594844398@gmail.com
  - Phone numbers:
    - Apostle Sammy Nkansah: +233 24 703 3250
    - Deacon Eric Darko: +233 54 165 5107
    - Isaac Ofori: +233 59 484 4398
- **Contact Form**: 
  - Name, email, phone
  - Inquiry type dropdown
  - Message textarea
  - Submit button
- **Prayer Request Form**: 
  - Name (optional)
  - Prayer request textarea
  - Submit button
- **Map**: 
  - Church location map
- **Social Media Links**: 
  - Facebook, WhatsApp, etc.

## Interactive Components Implementation

### 1. Service Countdown Timer (index.html)
- **Technology**: JavaScript Date object
- **Features**: Real-time countdown to next Saturday service
- **Display**: Days, hours, minutes, seconds

### 2. Testimonials Carousel (index.html)
- **Technology**: Swiper.js
- **Features**: Auto-play, manual navigation, touch support
- **Content**: Member testimonials with photos

### 3. Fellowship Cards (fellowships.html)
- **Technology**: CSS Grid + JavaScript
- **Features**: Hover effects, expand details, join buttons
- **Animation**: Fade-in on scroll

### 4. Branch Map (branches.html)
- **Technology**: Google Maps API or static map
- **Features**: Interactive markers, info windows
- **Display**: All 5 branch locations

### 5. Contact Forms (contact.html)
- **Technology**: HTML5 forms + JavaScript validation
- **Features**: Form validation, success message
- **Types**: General inquiry, prayer request

### 6. Event Calendar (services.html)
- **Technology**: JavaScript calendar library
- **Features**: Monthly view, event details, click to expand
- **Integration**: Service schedules and special events

## JavaScript Architecture (main.js)

```javascript
// Core modules
- NavigationManager: Handle menu, mobile toggle, active states
- AnimationController: Manage scroll animations and transitions
- CountdownTimer: Service countdown functionality
- TestimonialCarousel: Swiper initialization and control
- FormValidator: Contact form validation
- MapController: Branch map functionality
- ScrollEffects: Intersection Observer for scroll animations
```

## Content Requirements

### Text Content
- **Homepage**: ~600 words
- **About**: ~1,000 words including leadership bios
- **Fellowships**: ~800 words across all groups
- **Branches**: ~600 words across all branches
- **Services**: ~500 words
- **Contact**: ~300 words

### Images Required
- **Logo**: Generated STM logo (blue and white)
- **Hero**: Generated worship scene
- **Pastor**: Generated pastor portrait
- **Fellowships**: 4-6 fellowship group images
- **Branches**: 5 branch location images or icons

## Technical Specifications

### Libraries Used
1. **Tailwind CSS** - Styling framework
2. **Anime.js** - Smooth animations
3. **AOS** - Scroll animations
4. **Swiper.js** - Carousels
5. **CountUp.js** - Counter animations

### Performance Optimization
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized image formats
- Mobile-first responsive design

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement

This comprehensive outline ensures that the STM website will effectively communicate the ministry's mission, provide easy access to information, and create a welcoming online presence for both members and visitors.