/* ===================================
   Yourpost Global Navigation Script
   전역 사용 - 페이지 네비게이션 및 인터랙션
   파일: /script.js
   =================================== */

(function () {
    'use strict';

    // ===== 페이지 네비게이션 시스템 =====
    let isTransitioning = false;

    window.showPage = function (pageId) {
        if (isTransitioning) return;
        isTransitioning = true;

        const pages = document.querySelectorAll('main');
        const currentPage = document.querySelector('main.active');
        const targetPage = document.getElementById(pageId);

        if (!targetPage || currentPage === targetPage) {
            isTransitioning = false;
            return;
        }

        // 현재 페이지 페이드 아웃
        if (currentPage) {
            currentPage.style.opacity = '0';
            currentPage.style.transition = 'opacity 0.3s ease';

            setTimeout(() => {
                currentPage.classList.remove('active');
                currentPage.style.opacity = '';
            }, 300);
        }

        // 새 페이지 페이드 인
        setTimeout(() => {
            targetPage.classList.add('active');
            targetPage.style.opacity = '0';

            requestAnimationFrame(() => {
                targetPage.style.transition = 'opacity 0.4s ease';
                targetPage.style.opacity = '1';
            });

            // 스크롤 최상단으로
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 모바일 메뉴 닫기
            closeMobileMenu();

            isTransitioning = false;
        }, 350);
    };

    // ===== 모바일 메뉴 =====
    function initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        if (!menuToggle || !navLinks) return;

        // 햄버거 버튼 클릭
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');

            // body 스크롤 제어
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // 링크 클릭 시 메뉴 닫기
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', function (e) {
            if (navLinks.classList.contains('active') &&
                !menuToggle.contains(e.target) &&
                !navLinks.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    function closeMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        if (menuToggle) menuToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== 헤더 스크롤 효과 =====
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScroll = 0;
        let ticking = false;

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    const currentScroll = window.pageYOffset;

                    if (currentScroll > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }

                    lastScroll = currentScroll;
                    ticking = false;
                });

                ticking = true;
            }
        }, { passive: true });
    }

    // ===== 부드러운 스크롤 앵커 =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // 페이지 네비게이션이 아닌 경우에만 스크롤
                if (href === '#' || !href.startsWith('#')) return;

                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 70;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== Intersection Observer (요소 등장 애니메이션) =====
    function initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // 애니메이션 대상 요소
        const animateElements = document.querySelectorAll(
            '.feature-card, .service-tile, .who-card, .benefit-card, .step'
        );

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ===== 키보드 네비게이션 =====
    function initKeyboardNav() {
        document.addEventListener('keydown', function (e) {
            // ESC 키로 모바일 메뉴 닫기
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }

    // ===== 터치 스와이프 (모바일 메뉴) =====
    function initTouchGestures() {
        const navLinks = document.getElementById('navLinks');
        if (!navLinks) return;

        let touchStartX = 0;
        let touchEndX = 0;

        navLinks.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        navLinks.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            // 오른쪽으로 스와이프 시 메뉴 닫기
            if (touchEndX > touchStartX + 50) {
                closeMobileMenu();
            }
        }
    }

    // ===== 성능 최적화: Debounce =====
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

    // ===== 초기화 =====
    function init() {
        // DOM이 준비되었는지 확인
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAll);
        } else {
            initAll();
        }
    }

    function initAll() {
        initMobileMenu();
        initHeaderScroll();
        initSmoothScroll();
        initKeyboardNav();
        initTouchGestures();

        // Intersection Observer는 약간 지연 후 실행 (성능 최적화)
        setTimeout(initIntersectionObserver, 100);

        // FOUC 방지
        document.body.style.opacity = '1';

        // 디버그 로그 (개발 환경)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('✅ Yourpost Navigation System Loaded');
            console.log('📍 Current Page:', document.querySelector('main.active')?.id || 'None');
        }
    }

    // FOUC 방지 초기 설정
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s';

    // 전역 노출
    window.YourpostNav = {
        version: '2.0.0',
        showPage: window.showPage,
        closeMobileMenu: closeMobileMenu
    };

    // 초기화 실행
    init();

})();

// ===== 콘솔 브랜딩 =====
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    console.log(
        '%c💌 Yourpost',
        'font-size: 32px; font-weight: bold; color: #ab2e2c; padding: 10px;'
    );
    console.log(
        '%c편지로 전하는 마음',
        'font-size: 16px; color: #666; padding: 5px;'
    );
}