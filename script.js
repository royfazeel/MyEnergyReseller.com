// ========================================
// MyEnergyProvider - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initModal();
    initHeader();
    initMobileMenu();
    initAnimations();
    initParticles();
    initCounters();
    initFAQ();
});

// ========================================
// Modal Functionality
// ========================================
function initModal() {
    const modal = document.getElementById('callModal');
    const modalClose = document.getElementById('modalClose');
    
    if (!modal) return;
    
    // Show modal after 2 seconds
    setTimeout(() => {
        openModal();
    }, 2000);
    
    // Close modal on button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    const modal = document.getElementById('callModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('callModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Show modal again on next page visit (stored in session)
        sessionStorage.setItem('modalShown', 'true');
    }
}

// ========================================
// Header Scroll Effect
// ========================================
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const nav = document.getElementById('nav');
    
    if (!mobileMenu || !nav) return;
    
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// ========================================
// Scroll Animations
// ========================================
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// ========================================
// Floating Particles
// ========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// Counter Animation
// ========================================
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Form Validation
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! We will get back to you shortly.');
        form.reset();
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========================================
// Phone Number Click Tracking
// ========================================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Track phone call clicks (can be integrated with analytics)
        console.log('Phone call initiated');
    });
});

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Back to Top Button (if needed)
// ========================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// Typing Effect for Headlines (optional)
// ========================================
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        };
        
        type();
    });
}

// ========================================
// Provider Page Modal (Shows on new page visits)
// ========================================
function showProviderModal() {
    // Check if this is a provider page and modal hasn't been shown this session
    const isProviderPage = document.body.classList.contains('provider-page');
    const modalShown = sessionStorage.getItem('providerModalShown');
    
    if (isProviderPage && !modalShown) {
        setTimeout(() => {
            openModal();
            sessionStorage.setItem('providerModalShown', 'true');
        }, 1500);
    }
}

// Call on page load
showProviderModal();
