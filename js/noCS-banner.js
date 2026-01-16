// ============================================
// bug-banner.js
// 모든 Yourpost 사이트에서 재사용 가능한 버그 배너
// ============================================

(function () {
    'use strict';

    // 배너 설정 (필요시 수정)
    const config = {
        email: 'ds@yourpost.co.kr',
        closeDuration: 30 * 60 * 1000, // 30분 (ms) A*B*C A:분(*B:초*C:밀리초)
        title: '⚠️ 현재 모든 구성원들이 출장중입니다',
        description: 'CS,관련 문의가 1월 21일 까지 지연될 수 있습니다. 긴급 문의는 ',
        descriptionEnd: '로 문의해주세요! 빠르게 답변드리겠습니다.',
        icon: '⚠️'
    };

    // 배너 HTML 생성
    function createBannerHTML() {
        return `
            <div id="bug-banner-button" class="bug-banner-button" onclick="openBugBanner()">
                <span class="bug-banner-button-icon">⚠️</span>
            </div>

            <div id="bug-report-banner" class="bug-report-banner">
                <div class="bug-report-content">
                    <div class="bug-report-left">
                        <span class="bug-icon">${config.icon}</span>
                        <div class="bug-text">
                            <p class="bug-title">${config.title}</p>
                            <p class="bug-description">
                                ${config.description}
                                <a href="mailto:${config.email}" class="bug-link">${config.email}</a>
                                ${config.descriptionEnd}
                            </p>
                        </div>
                    </div>
                    <button class="bug-close" onclick="closeBugBanner()">✕</button>
                </div>
            </div>
        `;
    }

    // 배너 CSS 생성
    function createBannerCSS() {
        return `
            /* ============================================
               버그 리포트 배너 - 하단 팝업 스타일
               ============================================ */

            /* 하단 우측 버튼 */
            .bug-banner-button {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #FFB81C 0%, #FFA500 100%);
                border: none;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: all 0.3s ease;
                animation: bugButtonBounce 2s infinite;
            }

            .bug-banner-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
            }

            .bug-banner-button:active {
                transform: scale(0.95);
            }

            .bug-banner-button-icon {
                font-size: 28px;
            }

            @keyframes bugButtonBounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-8px);
                }
            }

            /* 배너 팝업 */
            .bug-report-banner {
                position: fixed;
                bottom: -200;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #FFB81C 0%, #FFA500 100%);
                z-index: 10000;
                padding: 24px 20px;
                box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.15);
                max-height: 0;
                overflow: hidden;
                transition: bottom 0.4s ease;
            }

            .bug-report-banner.show {
                max-height: 200px;
                animation: bugBannerSlideUp 0.4s ease;
                bottom: 0;
            }

            @keyframes bugBannerSlideUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            @keyframes bugBannerSlideDown {
                from {
                    transform: translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateY(100%);
                    opacity: 0;
                }
            }

            .bug-report-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }

            .bug-report-left {
                display: flex;
                align-items: center;
                gap: 12px;
                flex: 1;
            }

            .bug-icon {
                font-size: 28px;
                flex-shrink: 0;
            }

            .bug-text {
                margin: 0;
            }

            .bug-title {
                margin: 0;
                font-size: 14px;
                font-weight: 700;
                color: #333;
                letter-spacing: -0.5px;
            }

            .bug-description {
                margin: 4px 0 0 0;
                font-size: 13px;
                color: #555;
                line-height: 1.5;
            }

            .bug-link {
                color: #C63C51;
                text-decoration: none;
                font-weight: 700;
                transition: all 0.2s;
                border-bottom: 1px solid #C63C51;
            }

            .bug-link:hover {
                color: #A02E3F;
                border-bottom-color: #A02E3F;
            }

            .bug-close {
                background: transparent;
                border: none;
                color: #333;
                font-size: 24px;
                cursor: pointer;
                padding: 4px 8px;
                transition: all 0.2s;
                font-weight: bold;
                flex-shrink: 0;
            }

            .bug-close:hover {
                transform: scale(1.2);
                color: #C63C51;
            }

            /* ============================================
               반응형
               ============================================ */

            @media (max-width: 768px) {
                .bug-banner-button {
                    bottom: 20px;
                    right: 20px;
                    width: 54px;
                    height: 54px;
                }

                .bug-banner-button-icon {
                    font-size: 24px;
                }

                .bug-report-banner {
                    padding: 16px 12px;
                }

                .bug-report-banner.show {
                    max-height: 220px;
                }

                .bug-report-content {
                    gap: 12px;
                }

                .bug-icon {
                    font-size: 24px;
                }

                .bug-title {
                    font-size: 13px;
                }

                .bug-description {
                    font-size: 12px;
                }

                .bug-close {
                    font-size: 20px;
                    padding: 2px 6px;
                }
            }

            @media (max-width: 480px) {
                .bug-banner-button {
                    bottom: 16px;
                    right: 16px;
                    width: 50px;
                    height: 50px;
                }

                .bug-banner-button-icon {
                    font-size: 22px;
                }

                .bug-report-banner {
                    padding: 12px 10px;
                }

                .bug-report-banner.show {
                    max-height: 240px;
                }

                .bug-report-content {
                    flex-direction: column;
                    gap: 8px;
                    align-items: flex-start;
                }

                .bug-report-left {
                    width: 100%;
                }

                .bug-title {
                    font-size: 12px;
                }

                .bug-description {
                    font-size: 11px;
                }

                .bug-close {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    font-size: 18px;
                }
            }
        `;
    }

    // 배너 열기 함수 (전역)
    window.openBugBanner = function () {
        const banner = document.getElementById('bug-report-banner');
        if (!banner) return;

        banner.classList.add('show');

        // 1시간 동안 다시 표시 안 함
        localStorage.setItem('bugBannerOpened', Date.now());
    };

    // 배너 닫기 함수 (전역)
    window.closeBugBanner = function () {
        const banner = document.getElementById('bug-report-banner');
        if (!banner) return;

        banner.style.animation = 'bugBannerSlideDown 0.3s ease forwards';
        setTimeout(() => {
            banner.classList.remove('show');
            banner.style.animation = '';
        }, 300);

        // localStorage에 닫은 시간 저장
        localStorage.setItem('bugBannerClosed', Date.now());
    };

    // 배너 초기화 함수
    function initBugBanner() {
        // 이미 배너가 있으면 중복 추가 방지
        if (document.getElementById('bug-report-banner')) {
            return;
        }

        // localStorage 확인 (1시간 이내면 버튼 숨김)
        const closedTime = localStorage.getItem('bugBannerClosed');
        if (closedTime) {
            const timeDiff = Date.now() - parseInt(closedTime);
            if (timeDiff < config.closeDuration) {
                // 1시간 이내면 버튼만 숨김 (닫은 상태 유지)
            }
        }

        // CSS 추가
        const styleEl = document.createElement('style');
        styleEl.textContent = createBannerCSS();
        document.head.appendChild(styleEl);

        // HTML 추가
        const bannerHTML = createBannerHTML();
        document.body.insertAdjacentHTML('beforeend', bannerHTML);
    }

    // DOM Ready 확인
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBugBanner);
    } else {
        initBugBanner();
    }

})();