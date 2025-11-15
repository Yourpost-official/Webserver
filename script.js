// Page Navigation with smooth transitions
function showPage(pageId) {
    // Fade out current page
    const currentPage = document.querySelector('main.active');
    if (currentPage) {
        currentPage.style.opacity = '0';
        setTimeout(() => {
            currentPage.classList.remove('active');
        }, 300);
    }
    
    // Fade in new page
    setTimeout(() => {
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.style.opacity = '0';
            setTimeout(() => {
                targetPage.style.opacity = '1';
            }, 10);
        }
    }, 300);
    
    // Close mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// Header scroll effect
const header = document.getElementById('header');
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('.service-tile, .value-card, .service-detail');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.28, 0.11, 0.32, 1), transform 0.6s cubic-bezier(0.28, 0.11, 0.32, 1)';
        observer.observe(el);
    });
});

// Service tiles hover effect
document.querySelectorAll('.service-tile').forEach(tile => {
    tile.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.12)';
    });
    
    tile.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        const messageEl = document.getElementById('formMessage');
        const submitBtn = this.querySelector('.btn-submit-large');
        
        // Validate privacy agreement
        if (!data.privacy) {
            messageEl.className = 'form-message error';
            messageEl.textContent = '개인정보 수집 및 이용에 동의해주세요.';
            return;
        }
        
        // Disable button
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '전송 중...';
        submitBtn.style.opacity = '0.6';
        
        try {
            // Log to console (development)
            console.log('=== 새로운 문의 ===');
            console.log('시간:', new Date().toLocaleString('ko-KR'));
            console.log('유형:', data.type);
            console.log('이름:', data.name);
            console.log('이메일:', data.email);
            console.log('연락처:', data.phone || '미입력');
            console.log('내용:', data.message);
            console.log('마케팅 동의:', data.marketing ? '예' : '아니오');
            console.log('==================');
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Success message
            messageEl.className = 'form-message success';
            messageEl.textContent = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.';
            this.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            messageEl.className = 'form-message error';
            messageEl.textContent = '전송 중 오류가 발생했습니다. 다시 시도해주세요.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
        }
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-fullscreen');
    if (heroSection && window.innerWidth > 734) {
        const scrolled = window.pageYOffset;
        const heroContent = heroSection.querySelector('.hero-content-center');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 600);
        }
    }
});

// Add smooth page transition opacity
document.querySelectorAll('main').forEach(main => {
    main.style.transition = 'opacity 0.3s ease';
});

// Lazy load images (if any images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// Performance optimization: debounce scroll events
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

// Apply debounce to scroll-heavy operations
window.addEventListener('scroll', debounce(() => {
    // Additional scroll-based animations can be added here
}, 10));

// Console message for developers
console.log('%c👋 Yourpost', 'font-size: 24px; font-weight: bold; color: #0071e3;');
console.log('%c편지로 전하는 마음', 'font-size: 14px; color: #6e6e73;');
console.log('');
console.log('개발자 도구를 열어주셔서 감사합니다.');
console.log('문의: contact@yourpost.co.kr');