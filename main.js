/**
 * KEN'S BUSINESS CENTRE - Main JavaScript File
 * Handles all interactive functionality across the website
 */

// Global variables
let currentPage = 'index';
let heroRotationInterval;
let particleSystem;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Main initialization function
 */
function initializeApp() {
    // Determine current page
    currentPage = getCurrentPage();
    
    // Initialize common functionality
    initializeNavigation();
    initializeScrollAnimations();
    initializeParticleSystem();
    
    // Initialize page-specific functionality
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'products':
            initializeProductsPage();
            break;
        case 'services':
            initializeServicesPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
    }
    
    // Initialize common components
    initializeCarousels();
    initializeCounters();
    
    console.log('KEN\'S BUSINESS CENTRE website initialized successfully');
}

/**
 * Get current page from URL
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');
    return page || 'index';
}

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate menu icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(90deg)';
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active navigation highlighting
    updateActiveNavigation();
}

/**
 * Update active navigation state
 */
function updateActiveNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/index.html')) {
            link.classList.add('text-green-700', 'font-semibold');
        }
    });
}

/**
 * Initialize scroll animations
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Trigger specific animations based on element type
                if (entry.target.classList.contains('stats-counter')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('product-card')) {
                    animateProductCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal-element').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Initialize particle system for hero section
 */
function initializeParticleSystem() {
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer || typeof p5 === 'undefined') return;
    
    new p5(function(p) {
        let particles = [];
        const numParticles = 50;
        
        p.setup = function() {
            const canvas = p.createCanvas(particleContainer.offsetWidth, particleContainer.offsetHeight);
            canvas.parent(particleContainer);
            
            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    opacity: p.random(0.3, 0.8)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(255, 255, 255, particle.opacity * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(particleContainer.offsetWidth, particleContainer.offsetHeight);
        };
    });
}

/**
 * Initialize home page specific functionality
 */
function initializeHomePage() {
    // Hero background rotation
    initializeHeroRotation();
    
    // Typewriter effect
    initializeTypewriter();
    
    // Portfolio filtering
    initializePortfolioFiltering();
}

/**
 * Initialize hero background rotation
 */
function initializeHeroRotation() {
    const heroBg1 = document.getElementById('hero-bg-1');
    const heroBg2 = document.getElementById('hero-bg-2');
    
    if (!heroBg1 || !heroBg2) return;
    
    let currentHero = 1;
    
    heroRotationInterval = setInterval(() => {
        if (currentHero === 1) {
            heroBg1.style.opacity = '0';
            heroBg2.style.opacity = '1';
            currentHero = 2;
        } else {
            heroBg1.style.opacity = '1';
            heroBg2.style.opacity = '0';
            currentHero = 1;
        }
    }, 5000);
}

/**
 * Initialize typewriter effect
 */
function initializeTypewriter() {
    const typedElement = document.getElementById('typed-text');
    if (!typedElement || typeof Typed === 'undefined') return;
    
    new Typed('#typed-text', {
        strings: [
            'Your Complete Business Solution',
            'Premium Agricultural Products',
            'Professional Printing Services',
            'Quality You Can Trust'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

/**
 * Initialize portfolio filtering
 */
function initializePortfolioFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length === 0 || portfolioItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            const filter = this.dataset.filter;
            filterPortfolioItems(filter, portfolioItems);
        });
    });
}

/**
 * Filter portfolio items with animation
 */
function filterPortfolioItems(filter, items) {
    items.forEach(item => {
        const category = item.dataset.category;
        
        if (filter === 'all' || category === filter) {
            anime({
                targets: item,
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 300,
                easing: 'easeOutQuad',
                begin: function() {
                    item.style.display = 'block';
                }
            });
        } else {
            anime({
                targets: item,
                opacity: [1, 0],
                scale: [1, 0.8],
                duration: 200,
                easing: 'easeInQuad',
                complete: function() {
                    item.style.display = 'none';
                }
            });
        }
    });
}

/**
 * Initialize products page functionality
 */
function initializeProductsPage() {
    // Product filtering and search
    initializeProductFiltering();
    
    // Product modals
    initializeProductModals();
}

/**
 * Initialize product filtering
 */
function initializeProductFiltering() {
    const searchInput = document.getElementById('product-search');
    const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const sortSelect = document.getElementById('sort-select');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (!searchInput) return;
    
    // Debounced search
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterProducts();
        }, 300);
    });
    
    // Filter checkboxes
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    
    // Sort select
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
    
    // Clear filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

/**
 * Filter products based on current criteria
 */
function filterProducts() {
    // This function would be implemented based on the specific product data structure
    console.log('Filtering products...');
    
    // Animate product cards
    const productCards = document.querySelectorAll('.product-card');
    anime({
        targets: productCards,
        opacity: [1, 0.3, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeInOutQuad'
    });
}

/**
 * Clear all product filters
 */
function clearAllFilters() {
    const searchInput = document.getElementById('product-search');
    const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const sortSelect = document.getElementById('sort-select');
    
    if (searchInput) searchInput.value = '';
    filterCheckboxes.forEach(checkbox => checkbox.checked = true);
    if (sortSelect) sortSelect.value = 'name-asc';
    
    filterProducts();
}

/**
 * Initialize product modals
 */
function initializeProductModals() {
    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    
    if (!modal || !modalClose) return;
    
    // Close modal functionality
    modalClose.addEventListener('click', closeProductModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeProductModal();
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProductModal();
        }
    });
}

/**
 * Close product modal
 */
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: function() {
                modal.style.display = 'none';
            }
        });
    }
}

/**
 * Initialize services page functionality
 */
function initializeServicesPage() {
    // Service calculator
    initializeServiceCalculator();
    
    // Equipment showcase animations
    initializeEquipmentShowcase();
}

/**
 * Initialize service calculator
 */
function initializeServiceCalculator() {
    const calculatorForm = document.getElementById('calculator-form');
    if (!calculatorForm) return;
    
    const inputs = calculatorForm.querySelectorAll('select, input');
    inputs.forEach(input => {
        input.addEventListener('change', updateServiceCalculator);
    });
    
    // Initial calculation
    updateServiceCalculator();
}

/**
 * Update service calculator pricing
 */
function updateServiceCalculator() {
    const serviceType = document.getElementById('service-type');
    const quantity = document.getElementById('quantity');
    const totalPrice = document.getElementById('total-price');
    const priceBreakdown = document.getElementById('price-breakdown');
    
    if (!serviceType || !quantity || !totalPrice) return;
    
    // Calculate pricing (simplified)
    const basePrice = 25;
    const qty = parseInt(quantity.value) || 1;
    const multiplier = qty > 1000 ? 0.8 : qty > 500 ? 0.9 : 1;
    
    const total = basePrice * qty * multiplier;
    
    // Animate price update
    anime({
        targets: totalPrice,
        innerHTML: [totalPrice.innerHTML, `$${total.toFixed(2)}`],
        duration: 500,
        easing: 'easeOutQuad',
        round: 1
    });
    
    if (priceBreakdown) {
        priceBreakdown.textContent = `Base price × Quantity × Bulk discount = Total`;
    }
}

/**
 * Initialize equipment showcase
 */
function initializeEquipmentShowcase() {
    const equipmentItems = document.querySelectorAll('.equipment-item');
    
    equipmentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -8,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

/**
 * Initialize contact page functionality
 */
function initializeContactPage() {
    // Multi-step form
    initializeMultiStepForm();
    
    // FAQ functionality
    initializeFAQ();
}

/**
 * Initialize multi-step form
 */
function initializeMultiStepForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitContactForm();
    });
}

/**
 * Submit contact form
 */
function submitContactForm() {
    // Collect form data
    const formData = new FormData(document.getElementById('contact-form'));
    
    // Simulate form submission
    anime({
        targets: '.btn-primary[type="submit"]',
        scale: [1, 0.95, 1],
        duration: 200,
        easing: 'easeInOutQuad',
        complete: function() {
            showSuccessMessage();
        }
    });
}

/**
 * Show success message
 */
function showSuccessMessage() {
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
}

/**
 * Initialize FAQ functionality
 */
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('svg');
            
            // Close other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.nextElementSibling.classList.remove('active');
                    q.querySelector('svg').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

/**
 * Initialize carousels
 */
function initializeCarousels() {
    // Products carousel
    const productsCarousel = document.getElementById('products-carousel');
    if (productsCarousel && typeof Splide !== 'undefined') {
        new Splide('#products-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                }
            }
        }).mount();
    }
    
    // Testimonials carousel
    const testimonialsCarousel = document.getElementById('testimonials-carousel');
    if (testimonialsCarousel && typeof Splide !== 'undefined') {
        new Splide('#testimonials-carousel', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 6000,
            pauseOnHover: true,
            arrows: false,
            pagination: true
        }).mount();
    }
}

/**
 * Initialize counters
 */
function initializeCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        
        // Animate when element becomes visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target, duration);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

/**
 * Animate counter to target value
 */
function animateCounter(element, target, duration) {
    anime({
        targets: { value: 0 },
        value: target,
        duration: duration,
        easing: 'easeOutQuad',
        update: function(anim) {
            element.textContent = Math.round(anim.animatables[0].target.value);
        }
    });
}

/**
 * Animate product card
 */
function animateProductCard(card) {
    anime({
        targets: card,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad',
        delay: Math.random() * 200
    });
}

/**
 * Utility function to show notifications
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: function() {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

/**
 * Utility function to format currency
 */
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
    }).format(amount);
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle window resize events
 */
window.addEventListener('resize', debounce(function() {
    // Reinitialize components that need resize handling
    if (particleSystem && particleSystem.windowResized) {
        particleSystem.windowResized();
    }
}, 250));

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        if (heroRotationInterval) {
            clearInterval(heroRotationInterval);
        }
    } else {
        // Resume animations when page becomes visible
        if (currentPage === 'index') {
            initializeHeroRotation();
        }
    }
});

/**
 * Smooth scroll to top function
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Add scroll to top button when page is scrolled
 */
window.addEventListener('scroll', debounce(function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 500) {
        // Show scroll to top button
        if (!document.getElementById('scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.id = 'scroll-to-top';
            scrollBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-green-700 transition-colors';
            scrollBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>';
            scrollBtn.onclick = scrollToTop;
            document.body.appendChild(scrollBtn);
            
            // Animate in
            anime({
                targets: scrollBtn,
                scale: [0, 1],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuad'
            });
        }
    } else {
        // Hide scroll to top button
        const scrollBtn = document.getElementById('scroll-to-top');
        if (scrollBtn) {
            anime({
                targets: scrollBtn,
                scale: [1, 0],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInQuad',
                complete: function() {
                    document.body.removeChild(scrollBtn);
                }
            });
        }
    }
}, 100));

// Export functions for global use
window.KensBusinessCentre = {
    showNotification,
    formatCurrency,
    scrollToTop,
    filterProducts,
    updateServiceCalculator,
    submitContactForm
};

console.log('KEN\'S BUSINESS CENTRE - Main JavaScript loaded successfully');