// ===== PAGE NAVIGATION =====

let isTransitioning = false;

// 글로벌 스코프에 함수 등록
window.showPage = function(pageId) {
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
        document.body.style.overflow = '';
    }
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

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

const header = document.querySelector('header');
let lastScroll = 0;

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ===== SMOOTH SCROLL FOR ANCHORS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = header ? header.offsetHeight : 60;
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
        '.feature-item, .who-item, .process-step, .benefit-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});

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

console.log('%c💌 Yourpost', 'font-size: 32px; font-weight: bold; color: #1a2f4a;');
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

// ===== FOOTER 및 확장성 유틸리티 함수 =====

// 현재 페이지 경로 감지
function getCurrentPagePath() {
    return window.location.pathname;
}

// 현재 페이지가 서브페이지인지 확인
function isSubpage() {
    return window.location.pathname.includes('/ondaypost/');
}

// 기본 경로 가져오기
function getBasePath() {
    return isSubpage() ? '../' : './';
}

// 동적 경로 해석 함수 (향후 서브사이트 확장 시 사용)
function resolvePath(filePath) {
    const basePath = getBasePath();
    // 이미 절대 경로거나 외부 링크면 그대로 반환
    if (filePath.startsWith('http') || filePath.startsWith('/')) {
        return filePath;
    }
    // 상대 경로에 기본 경로 추가
    if (filePath.startsWith('../')) {
        return filePath;
    }
    return basePath + filePath;
}

// 페이지 로드 시 디버그 정보 (개발 시 유용)
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('✅ Yourpost System Loaded');
        console.log('📍 Current Path:', getCurrentPagePath());
        console.log('🌐 Is Subpage:', isSubpage());
        console.log('📂 Base Path:', getBasePath());
    }
});
// ===== TALLY FORM LOADER (크리스마스 말씀) =====
var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}