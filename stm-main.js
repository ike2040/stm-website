/**
 * Seekers of the Truth Ministries - Main JavaScript
 * Handles all interactive functionality for the church website
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initAOS();
    initMobileMenu();
    initSmoothScroll();
    initFormHandlers();
    initCountdownTimer();
    initSwiper();
    initNavigationHighlight();
    initScrollToTop();
    initKeyboardNavigation();
    initBreadcrumbs();
    initAutoUpdate();
});

/**
 * Initialize AOS (Animate On Scroll) Library
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
}

/**
 * Mobile Menu Toggle - Enhanced for Premium Experience
 */
function initMobileMenu() {
    setTimeout(() => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            // Re-initialize to ensure fresh listeners
            const newBtn = mobileMenuBtn.cloneNode(true);
            mobileMenuBtn.parentNode.replaceChild(newBtn, mobileMenuBtn);

            // Handle the "hidden" class which acts as the toggle state
            // But we use CSS transitions for opacity/transform
            newBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const isHidden = mobileMenu.classList.contains('hidden');

                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent background scroll
                    newBtn.innerHTML = '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
                } else {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = ''; // Restore scroll
                    newBtn.innerHTML = '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
                }
            });

            // Close menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = '';
                    newBtn.innerHTML = '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
                });
            });
        }
    }, 100);
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Handlers - Contact Form and Prayer Request Form
 */
function initFormHandlers() {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                window.location.href = 'success.html';
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // Prayer Request Form
    const prayerForm = document.getElementById('prayerForm');
    if (prayerForm) {
        prayerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const prayerRequest = document.getElementById('prayerRequest').value;

            if (!prayerRequest.trim()) {
                showNotification('Please enter your prayer request.', 'error');
                return;
            }

            // Show loading state
            const submitBtn = prayerForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                window.location.href = 'success.html';
                prayerForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
}

/**
 * Show Notification Toast
 */
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification-toast');
    existingNotifications.forEach(n => n.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-toast fixed top-24 right-4 z-50 px-6 py-4 rounded-lg shadow-xl transform translate-x-full transition-transform duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white max-w-md`;

    notification.innerHTML = `
        <div class="flex items-center">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${type === 'success'
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
        }
            </svg>
            <span class="font-medium">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
    });

    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/**
 * Countdown Timer for Next Saturday Service
 */
function initCountdownTimer() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function updateCountdown() {
        const now = new Date();
        const nextSaturday = new Date();

        // Calculate days until next Saturday (6 = Saturday)
        const daysUntilSaturday = (6 - now.getDay() + 7) % 7;
        nextSaturday.setDate(now.getDate() + daysUntilSaturday);
        nextSaturday.setHours(9, 0, 0, 0); // 9:00 AM

        // If it's already past Saturday 9 AM, go to next week
        if (nextSaturday <= now) {
            nextSaturday.setDate(nextSaturday.getDate() + 7);
        }

        const diff = nextSaturday - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Initialize Swiper for Testimonials
 */
function initSwiper() {
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-swiper')) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }
}

/**
 * Navigation Highlight - Active Page Indicator
 */
function initNavigationHighlight() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[href^=""]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-stm-blue', 'font-semibold');
            link.classList.remove('text-gray-600');
        }
    });
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.className = 'fixed bottom-8 right-8 bg-stm-blue text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transform translate-y-20 opacity-0 transition-all duration-300 hover:bg-stm-navy z-40';
    scrollBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top (Right-click for back button)');
    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            scrollBtn.classList.remove('translate-y-20', 'opacity-0');
        } else {
            scrollBtn.classList.add('translate-y-20', 'opacity-0');
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Back button functionality
    scrollBtn.addEventListener('contextmenu', function (e) {
        e.preventDefault();

        // Go back in browser history
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // If no history, go to home
            window.location.href = 'index.html';
        }
    });

    // Add tooltip for back button
    scrollBtn.addEventListener('mouseenter', function () {
        scrollBtn.setAttribute('title', 'Right-click for back button');
    });
}

/**
 * Utility: Debounce Function
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
 * Utility: Throttle Function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Reinitialize AOS on dynamic content changes
 */
function refreshAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Export functions for global access
window.STM = {
    showNotification,
    refreshAOS,
    debounce,
    throttle
};


/**
 * Keyboard Navigation Support
 */
function initKeyboardNavigation() {
    const pages = [
        { name: 'Home', url: 'index.html', key: 'h' },
        { name: 'About', url: 'about.html', key: 'a' },
        { name: 'Services', url: 'services.html', key: 's' },
        { name: 'Program', url: 'program.html', key: 'p' },
        { name: 'Sermons', url: 'sermons.html', key: 'e' },
        { name: 'Testimonies', url: 'testimonies.html', key: 't' },
        { name: 'Giving', url: 'giving.html', key: 'g' },
        { name: 'Fellowships', url: 'fellowships.html', key: 'f' },
        { name: 'Branches', url: 'branches.html', key: 'b' },
        { name: 'Contact', url: 'contact.html', key: 'c' }
    ];

    // Create keyboard help modal
    const keyboardHelp = document.createElement('div');
    keyboardHelp.id = 'keyboard-help';
    keyboardHelp.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
    keyboardHelp.innerHTML = `
        <div class="bg-white rounded-2xl max-w-md w-full p-6 transform scale-95 opacity-0 transition-all duration-300">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-stm-navy">Keyboard Shortcuts</h3>
                <button id="close-keyboard-help" class="text-gray-400 hover:text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="space-y-2 text-sm">
                ${pages.map(page => `
                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                        <span class="text-gray-700">${page.name}</span>
                        <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">${page.key.toUpperCase()}</kbd>
                    </div>
                `).join('')}
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <span class="text-gray-700">Show this help</span>
                    <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">?</kbd>
                </div>
                <div class="flex justify-between items-center py-2">
                    <span class="text-gray-700">Toggle floating nav</span>
                    <kbd class="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-menu">N</kbd>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(keyboardHelp);

    // Keyboard event handler
    document.addEventListener('keydown', function (e) {
        // Only trigger when not typing in input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.contentEditable === 'true') {
            return;
        }

        const key = e.key.toLowerCase();

        // Help modal
        if (key === '?') {
            e.preventDefault();
            const modal = document.getElementById('keyboard-help');
            const content = modal.querySelector('div > div');
            modal.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
            return;
        }

        // Toggle floating nav
        if (key === 'n') {
            e.preventDefault();
            const toggle = document.getElementById('floating-nav-toggle');
            if (toggle) {
                toggle.click();
            }
            return;
        }

        // Page navigation
        const page = pages.find(p => p.key === key);
        if (page) {
            e.preventDefault();
            // Show notification
            if (window.STM && window.STM.showNotification) {
                window.STM.showNotification(`Navigating to ${page.name}...`, 'info');
            }
            // Navigate after a short delay
            setTimeout(() => {
                window.location.href = page.url;
            }, 300);
        }
    });

    // Close help modal
    document.getElementById('close-keyboard-help').addEventListener('click', function () {
        const modal = document.getElementById('keyboard-help');
        const content = modal.querySelector('div > div');
        content.classList.add('scale-95', 'opacity-0');
        content.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });

    // Close help modal on background click
    keyboardHelp.addEventListener('click', function (e) {
        if (e.target === keyboardHelp) {
            document.getElementById('close-keyboard-help').click();
        }
    });

    // Close help modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('keyboard-help');
            if (!modal.classList.contains('hidden')) {
                document.getElementById('close-keyboard-help').click();
            }
        }
    });
}

/**
 * Breadcrumb Navigation
 */
function initBreadcrumbs() {
    const pageInfo = {
        'index.html': { name: 'Home', icon: '🏠' },
        'about.html': { name: 'About', icon: 'ℹ️' },
        'services.html': { name: 'Services', icon: '⛪' },
        'sermons.html': { name: 'Sermons', icon: '📖' },
        'testimonies.html': { name: 'Testimonies', icon: '💬' },
        'giving.html': { name: 'Giving', icon: '💝' },
        'fellowships.html': { name: 'Fellowships', icon: '👥' },
        'branches.html': { name: 'Branches', icon: '📍' },
        'contact.html': { name: 'Contact', icon: '📞' }
    };

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentPageInfo = pageInfo[currentPage];

    if (!currentPageInfo || currentPage === 'index.html') {
        return; // No breadcrumbs on home page
    }

    // Create breadcrumb container
    const breadcrumbContainer = document.createElement('div');
    breadcrumbContainer.className = 'bg-stm-gray border-b border-gray-200 py-3 px-4';
    breadcrumbContainer.innerHTML = `
        <div class="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
            <a href="index.html" class="text-stm-blue hover:text-stm-navy transition-colors flex items-center">
                <span class="mr-1">🏠</span>
                Home
            </a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="text-gray-700 flex items-center">
                <span class="mr-1">${currentPageInfo.icon}</span>
                ${currentPageInfo.name}
            </span>
        </div>
    `;

    // Insert breadcrumb after the navigation
    const nav = document.querySelector('nav');
    if (nav && nav.nextSibling) {
        nav.parentNode.insertBefore(breadcrumbContainer, nav.nextSibling);
    } else if (nav) {
        nav.parentNode.appendChild(breadcrumbContainer);
    }

    // Add smooth scroll behavior for breadcrumb links
    breadcrumbContainer.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}

/**
 * Auto-Update System
 * Periodically checks version.json and refreshes if a new version is detected
 */
function initAutoUpdate() {
    const CHECK_INTERVAL = 120000; // Check every 2 minutes
    const VERSION_FILE = 'version.json';

    async function checkVersion() {
        try {
            const response = await fetch(`${VERSION_FILE}?t=${Date.now()}`); // Cache busting query
            if (!response.ok) return;

            const data = await response.json();
            const currentVersion = sessionStorage.getItem('stm_site_version');

            if (!currentVersion) {
                // First load, just store the version
                sessionStorage.setItem('stm_site_version', data.version);
            } else if (currentVersion !== data.version) {
                // New version detected!
                console.log('New version detected. Refreshing...');
                sessionStorage.setItem('stm_site_version', data.version);

                // Show a brief notification before refresh if STM.showNotification is available
                if (window.STM && window.STM.showNotification) {
                    window.STM.showNotification('Updating website to the latest version...', 'info');
                    setTimeout(() => window.location.reload(), 2000);
                } else {
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error('Update check failed:', error);
        }
    }

    // Run check on load and then periodically
    checkVersion();
    setInterval(checkVersion, CHECK_INTERVAL);
}
