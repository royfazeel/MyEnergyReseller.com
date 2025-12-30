/* ============================================
   MyEnergyProvider.com - Enhanced Script
   Google Ads Policy Compliant
   ============================================ */

const CONFIG = {
    phoneNumber: '(888) 524-0250',
    phoneLink: 'tel:+18885240250',
    popupDelay: 5000,           // Show after 5 seconds
    particleCount: 50,
    // Pages where popup should NOT appear
    noPopupPages: ['/', '/index.html', '/index', 'index.html']
};

// ============================================
// Particle Background System
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) {
        const particleDiv = document.createElement('div');
        particleDiv.id = 'particles';
        particleDiv.className = 'particles';
        document.body.prepend(particleDiv);
    }
    
    const particles = document.getElementById('particles');
    particles.innerHTML = '';
    
    for (let i = 0; i < CONFIG.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 20}s;
            animation-duration: ${15 + Math.random() * 20}s;
            opacity: ${0.1 + Math.random() * 0.3};
            width: ${2 + Math.random() * 4}px;
            height: ${2 + Math.random() * 4}px;
        `;
        particles.appendChild(particle);
    }
}

// ============================================
// Mobile Navigation
// ============================================
function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
        hamburger?.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
}

// ============================================
// Enhanced Interactive Popup System
// ============================================
let popupTimeout = null;
let isPopupOpen = false;
let mouseX = 0, mouseY = 0;

function createEnhancedPopup() {
    const existing = document.getElementById('megaPopup');
    if (existing) existing.remove();

    const popup = document.createElement('div');
    popup.id = 'megaPopup';
    popup.className = 'mega-popup-overlay';
    popup.innerHTML = `
        <div class="mega-popup-bg">
            <div class="mega-popup-orb orb-1"></div>
            <div class="mega-popup-orb orb-2"></div>
            <div class="mega-popup-orb orb-3"></div>
            <div class="mega-popup-grid"></div>
        </div>
        
        <div class="mega-popup-container">
            <button class="mega-popup-close" onclick="closePopup()">
                <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" fill="none"/></svg>
            </button>
            
            <div class="mega-popup-spotlight" id="popupSpotlight"></div>
            
            <div class="mega-popup-content">
                <div class="mega-popup-header">
                    <div class="mega-popup-live-badge">
                        <span class="live-dot"></span>
                        <span class="live-text">LIVE</span>
                        <span class="live-agents">Agents Available Now</span>
                    </div>
                </div>
                
                <div class="mega-popup-icon-section">
                    <div class="mega-icon-container">
                        <div class="mega-icon-pulse"></div>
                        <div class="mega-icon-pulse delay-1"></div>
                        <div class="mega-icon-pulse delay-2"></div>
                        <div class="mega-icon-inner">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <h2 class="mega-popup-title">
                    <span class="title-word" style="--i:0">Pay</span>
                    <span class="title-word" style="--i:1">Your</span>
                    <span class="title-word" style="--i:2">Bill</span>
                    <span class="title-word highlight" style="--i:3">Now!</span>
                </h2>
                
                <p class="mega-popup-subtitle">Talk to a real person. No robots. No waiting.</p>
                
                <a href="${CONFIG.phoneLink}" class="mega-popup-cta" id="popupCTA">
                    <div class="cta-bg"></div>
                    <div class="cta-content">
                        <div class="cta-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <div class="cta-text">
                            <span class="cta-label">Call Now - Free</span>
                            <span class="cta-number">${CONFIG.phoneNumber}</span>
                        </div>
                        <div class="cta-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                    <div class="cta-shine"></div>
                </a>
                
                <div class="mega-popup-features">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <span>24/7 Available</span>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                        </div>
                        <span>100% Secure</span>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
                            </svg>
                        </div>
                        <span>Instant Confirm</span>
                    </div>
                </div>
                
                <div class="mega-popup-stats">
                    <div class="stat-item">
                        <span class="stat-num" data-target="100000">0</span>
                        <span class="stat-label">Happy Customers</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <span class="stat-num" data-target="50">0</span>
                        <span class="stat-label">Energy Providers</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <span class="stat-num" data-target="2">0</span>
                        <span class="stat-label">Min Avg Call</span>
                    </div>
                </div>
            </div>
            
            <div class="mega-popup-footer">
                <span>We are NOT affiliated with any energy provider</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Spotlight effect following mouse
    const spotlight = document.getElementById('popupSpotlight');
    const container = popup.querySelector('.mega-popup-container');
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 212, 255, 0.15) 0%, transparent 50%)`;
    });
    
    // Close on overlay click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });
    
    return popup;
}

function animateStats() {
    document.querySelectorAll('.stat-num').forEach(stat => {
        const target = parseInt(stat.dataset.target);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            if (target >= 1000) {
                stat.textContent = Math.floor(current).toLocaleString() + '+';
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
}

function showPopup() {
    if (isPopupOpen) return;
    
    const popup = createEnhancedPopup();
    isPopupOpen = true;
    document.body.style.overflow = 'hidden';
    
    requestAnimationFrame(() => {
        popup.classList.add('active');
        setTimeout(animateStats, 500);
    });
}

function closePopup() {
    const popup = document.getElementById('megaPopup');
    if (popup) {
        popup.classList.remove('active');
        popup.classList.add('closing');
        isPopupOpen = false;
        document.body.style.overflow = '';
        
        setTimeout(() => popup.remove(), 500);
        
        // Mark as dismissed for this session - NO recurring popup (Google Ads compliant)
        sessionStorage.setItem('popupDismissed', 'true');
    }
}

function isHomepage() {
    const path = window.location.pathname;
    return CONFIG.noPopupPages.some(p => 
        path === p || path.endsWith(p) || path === '' || path === '/'
    );
}

function initPopup() {
    // Don't show popup on homepage (Google Ads compliant)
    if (isHomepage()) {
        return;
    }
    
    // Only show popup once per session (Google Ads compliant - respects user choice)
    if (sessionStorage.getItem('popupDismissed')) {
        return;
    }
    
    // Show popup after delay
    setTimeout(showPopup, CONFIG.popupDelay);
    
    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isPopupOpen) closePopup();
    });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll, .stat-card, .area-card, .step-card, .provider-card').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ============================================
// Tilt Effect on Cards
// ============================================
function initTiltEffect() {
    document.querySelectorAll('.stat-card, .step-card, .area-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ============================================
// Magnetic Button Effect
// ============================================
function initMagneticButtons() {
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// Typing Effect
// ============================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initPopup();
    initScrollAnimations();
    initTiltEffect();
    initMagneticButtons();
});

// Global functions
window.toggleMobileNav = toggleMobileNav;
window.closePopup = closePopup;
window.showPopup = showPopup;
