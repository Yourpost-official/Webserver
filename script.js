// ===== EMAIL INTEGRATION SOLUTIONS =====

// 옵션 1: EmailJS (추천 - 가장 쉬움)
// 사용법: https://www.emailjs.com/
const EMAIL_CONFIG = {
    serviceId: 'service_zhux95n',     // EmailJS에서 발급
    templateId: 'YOUR_TEMPLATE_ID',   // EmailJS에서 생성
    publicKey: 'M3ZlrMF7mgBWyqUDB'      // EmailJS에서 발급
};

// 옵션 2: Formspree (대안)
// 사용법: https://formspree.io/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// 옵션 3: Web3Forms (무료)
// 사용법: https://web3forms.com/
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY';

// ===== PAGE NAVIGATION =====

let isTransitioning = false;

function showPage(pageId) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const currentPage = document.querySelector('main.active');
    const targetPage = document.getElementById(pageId);
    
    if (currentPage === targetPage) {
        isTransitioning = false;
        return;
    }
    
    // Smooth fade out
    if (currentPage) {
        currentPage.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        currentPage.style.opacity = '0';
        
        setTimeout(() => {
            currentPage.classList.remove('active');
            currentPage.style.display = 'none';
        }, 400);
    }
    
    // Smooth fade in
    setTimeout(() => {
        if (targetPage) {
            targetPage.style.display = 'block';
            targetPage.style.opacity = '0';
            targetPage.classList.add('active');
            
            requestAnimationFrame(() => {
                targetPage.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                targetPage.style.opacity = '1';
            });
        }
        
        isTransitioning = false;
    }, 450);
    
    // Close mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== MOBILE MENU =====

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !menuToggle.contains(e.target) && 
                !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// ===== HEADER SCROLL EFFECT =====

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// ===== SMOOTH SCROLL FOR ANCHORS =====

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

// ===== INTERSECTION OBSERVER =====

const observerOptions = {
    threshold: 0.15,
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
    const animateElements = document.querySelectorAll(
        '.service-tile, .value-card, .service-detail, .vision-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});

// ===== SERVICE TILES ENHANCED HOVER =====

document.querySelectorAll('.service-tile').forEach(tile => {
    tile.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 32px 64px rgba(45, 45, 45, 0.15)';
    });
    
    tile.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// ===== EMAIL FORM SUBMISSION =====

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        const messageEl = document.getElementById('formMessage');
        const submitBtn = this.querySelector('.btn-submit-large');
        
        // Validate privacy
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
            // ===== 방법 1: EmailJS 사용 (추천) =====
            
            // EmailJS 스크립트 추가 필요: 
            <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
            const result = await emailjs.send(
                EMAIL_CONFIG.serviceId,
                EMAIL_CONFIG.templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    phone: data.phone || '미입력',
                    type: data.type,
                    message: data.message,
                    marketing: data.marketing ? '동의' : '미동의'
                },
                EMAIL_CONFIG.publicKey
            );
            if (result.status !== 200) throw new Error('전송 실패');
            
            // ===== 방법 2: Formspree 사용 =====
            /*
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    type: data.type,
                    message: data.message,
                    marketing: data.marketing ? 'yes' : 'no'
                })
            });
            
            if (!response.ok) throw new Error('전송 실패');
            */
            
            // ===== 방법 3: Web3Forms 사용 =====
            /*
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `[Yourpost 문의] ${data.type}`,
                    from_name: data.name,
                    email: data.email,
                    phone: data.phone || '미입력',
                    message: data.message
                })
            });
            
            if (!response.ok) throw new Error('전송 실패');
            */
            
            // ===== 임시: 콘솔 로깅 (개발용) =====
            console.log('=== 새로운 문의 ===');
            console.log('시간:', new Date().toLocaleString('ko-KR'));
            console.log('유형:', data.type);
            console.log('이름:', data.name);
            console.log('이메일:', data.email);
            console.log('연락처:', data.phone || '미입력');
            console.log('내용:', data.message);
            console.log('마케팅 동의:', data.marketing ? '예' : '아니오');
            console.log('==================');
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Success
            messageEl.className = 'form-message success';
            messageEl.textContent = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.';
            this.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            messageEl.className = 'form-message error';
            messageEl.textContent = '전송 중 오류가 발생했습니다. contact@yourpost.co.kr로 직접 문의해주세요.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
        }
    });
}

// ===== PARALLAX EFFECT (Desktop only) =====

if (window.innerWidth > 734) {
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero-fullscreen');
        if (heroSection) {
            const scrolled = window.pageYOffset;
            const heroContent = heroSection.querySelector('.hero-content-center');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 800);
            }
        }
    }, { passive: true });
}

// ===== MOBILE SNAP SCROLLING =====

if (window.innerWidth <= 734) {
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeDistance = touchStartY - touchEndY;
        
        if (Math.abs(swipeDistance) > 50) {
            // Smooth snap to nearest section
            const sections = document.querySelectorAll('section');
            const currentScroll = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (Math.abs(currentScroll - sectionTop) < viewportHeight / 2) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    }
}

// ===== KEYBOARD NAVIGATION =====

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ===== PERFORMANCE OPTIMIZATION =====

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

// ===== LAZY LOADING =====

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== CONSOLE BRANDING =====

console.log('%c💌 Yourpost', 'font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #C63C51 0%, #D4A574 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c편지로 전하는 마음', 'font-size: 16px; color: #6B6B6B;');
console.log('\n개발자 도구를 열어주셔서 감사합니다!');
console.log('문의: contact@yourpost.co.kr');

// ===== INITIALIZE =====

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent FOUC
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s';