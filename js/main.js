/* ============================================
   MyEnergyProvider.com - Main JavaScript
   ============================================ */

// Constants
const PHONE_NUMBER = '(888) 525-0250';
const PHONE_LINK = 'tel:8885250250';
const EMAIL = 'support@myenergyprovider.com';
const POPUP_REAPPEAR_DELAY = 3000; // 3 seconds

// Provider Data
const providerData = {
    'duke-energy': { 
        color: '#00629B', 
        title: 'Pay Duke Energy Bill', 
        message: 'Duke Energy customers – pay now!',
        name: 'Duke Energy'
    },
    'southern-company': { 
        color: '#CC092F', 
        title: 'Pay Southern Company Bill', 
        message: 'Southern Company customers – pay now!',
        name: 'Southern Company'
    },
    'dominion-energy': { 
        color: '#1C4EA3', 
        title: 'Pay Dominion Energy Bill', 
        message: 'Dominion Energy customers – pay now!',
        name: 'Dominion Energy'
    },
    'exelon': { 
        color: '#00274C', 
        title: 'Pay Exelon Bill', 
        message: 'ComEd, PECO, BGE customers – pay now!',
        name: 'Exelon'
    },
    'nextera-energy': { 
        color: '#6EB43F', 
        title: 'Pay NextEra Energy Bill', 
        message: 'Florida Power & Light customers – pay now!',
        name: 'NextEra Energy'
    },
    'aep': { 
        color: '#E31937', 
        title: 'Pay AEP Bill', 
        message: 'American Electric Power customers – pay now!',
        name: 'American Electric Power'
    },
    'xcel-energy': { 
        color: '#005776', 
        title: 'Pay Xcel Energy Bill', 
        message: 'Xcel Energy customers – pay now!',
        name: 'Xcel Energy'
    },
    'entergy': { 
        color: '#003DA5', 
        title: 'Pay Entergy Bill', 
        message: 'Entergy customers – pay now!',
        name: 'Entergy'
    },
    'pge': { 
        color: '#006BA6', 
        title: 'Pay PG&E Bill', 
        message: 'Pacific Gas & Electric customers – pay now!',
        name: 'Pacific Gas & Electric'
    },
    'con-edison': { 
        color: '#00A9CE', 
        title: 'Pay Con Edison Bill', 
        message: 'New York City customers – pay now!',
        name: 'Con Edison'
    }
};

// State
let popupTimeout = null;
let currentProvider = null;
let isPopupOpen = false;

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initNavbar();
    initMobileNav();
    initFAQ();
    initPopup();
    detectProviderPage();
    setActiveNavLink();
});

// ============================================
// Particle System
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 15) + 's';
        container.appendChild(particle);
    }
}

// ============================================
// Navbar
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.replace('.html', '').replace('/', ''))) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Mobile Navigation
// ============================================
function initMobileNav() {
    // Close mobile nav when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileNav();
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const hamburger = document.querySelector('.hamburger');
        
        if (mobileNav && mobileNav.classList.contains('active')) {
            if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileNav();
            }
        }
    });
}

function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileNav && hamburger) {
        mobileNav.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
}

function closeMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileNav && hamburger) {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// Popup System
// ============================================
function initPopup() {
    const overlay = document.getElementById('popupOverlay');
    if (!overlay) return;

    // Close popup when clicking overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isPopupOpen) {
            closePopup();
        }
    });
}

function detectProviderPage() {
    const path = window.location.pathname;
    const providerKeys = Object.keys(providerData);
    
    for (const key of providerKeys) {
        if (path.includes(key)) {
            currentProvider = key;
            // Show popup after 2 seconds
            setTimeout(() => showProviderPopup(key), 2000);
            break;
        }
    }
}

function showProviderPopup(provider) {
    const data = providerData[provider];
    if (!data) return;

    const overlay = document.getElementById('popupOverlay');
    const container = document.getElementById('popupContainer');
    const title = document.getElementById('popupTitle');
    const message = document.getElementById('popupMessage');
    const phoneBtn = document.querySelector('.popup-phone');

    if (!overlay || !container) return;

    // Update popup content
    container.style.setProperty('--popup-color', data.color);
    if (title) title.textContent = data.title;
    if (message) message.textContent = data.message;
    if (phoneBtn) {
        phoneBtn.style.background = `linear-gradient(135deg, ${data.color}, var(--accent-purple))`;
    }

    // Show popup
    overlay.classList.add('active');
    isPopupOpen = true;
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    if (!overlay) return;

    overlay.classList.remove('active');
    isPopupOpen = false;
    document.body.style.overflow = '';

    // Clear any existing timeout
    if (popupTimeout) {
        clearTimeout(popupTimeout);
    }

    // Set timeout to reshow popup after 3 seconds on provider pages
    if (currentProvider) {
        popupTimeout = setTimeout(() => {
            if (currentProvider && !isPopupOpen) {
                showProviderPopup(currentProvider);
            }
        }, POPUP_REAPPEAR_DELAY);
    }
}

// ============================================
// Utility Functions
// ============================================
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// ============================================
// Analytics Helper (placeholder)
// ============================================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    // Can be connected to Google Analytics, etc.
    console.log('Event:', category, action, label);
}

// Track phone clicks
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="tel:"]');
    if (link) {
        trackEvent('Contact', 'Phone Click', link.href);
    }
});

// Track email clicks
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="mailto:"]');
    if (link) {
        trackEvent('Contact', 'Email Click', link.href);
    }
});

// ============================================
// Expose functions globally
// ============================================
window.toggleMobileNav = toggleMobileNav;
window.closePopup = closePopup;
window.showProviderPopup = showProviderPopup;
