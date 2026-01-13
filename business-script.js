/* ===================================
   Yourpost Global Navigation Script
   Static Page Safe Version
   =================================== */

(function () {
    'use strict';

    /* ===== 페이지 타입 판별 ===== */
    const isStaticPage = document.body.classList.contains('static-page');

    // ===== 페이지 네비게이션 시스템 =====
    let isTransitioning = false;

    window.showPage = function (pageId) {
        if (isStaticPage) return;           // 🔒 정적 페이지 차단
        if (isTransitioning) return;

        isTransitioning = true;

        const currentPage = document.querySelector('main.active');
        const targetPage = document.getElementById(pageId);

        if (!targetPage || currentPage === targetPage) {
            isTransitioning = false;
            return;
        }

        if (currentPage) {
            currentPage.style.opacity = '0';
            currentPage.style.transition = 'opacity 0.3s ease';

            setTimeout(() => {
                currentPage.classList.remove('active');
                currentPage.style.opacity = '';
            }, 300);
        }

        setTimeout(() => {
            targetPage.classList.add('active');
            targetPage.style.opacity = '0';

            requestAnimationFrame(() => {
                targetPage.style.transition = 'opacity 0.4s ease';
                targetPage.style.opacity = '1';
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMobileMenu();
            isTransitioning = false;
        }, 350);
    };

    // ===== 모바일 메뉴 =====
    function initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (!menuToggle || !navLinks) return;

        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        document.addEventListener('click', function (e) {
            if (
                navLinks.classList.contains('active') &&
                !menuToggle.contains(e.target) &&
                !navLinks.contains(e.target)
            ) {
                closeMobileMenu();
            }
        });
    }

    function closeMobileMenu() {
        document.getElementById('menuToggle')?.classList.remove('active');
        document.getElementById('navLinks')?.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== 헤더 스크롤 =====
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // ===== 초기화 =====
    function initAll() {
        initMobileMenu();
        initHeaderScroll();

        // FOUC 복구 (SPA만)
        if (!isStaticPage) {
            document.body.style.opacity = '1';
        }
    }

    // ===== FOUC 방지 (SPA만 적용) =====
    if (!isStaticPage) {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

})();
