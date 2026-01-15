/* ===================================
   Yourpost Global Footer Component V2.0
   전역 사용 - 2026 디자인 트렌드 반영
   파일: /footer.js
   =================================== */

(function () {
    'use strict';

    const currentYear = new Date().getFullYear();

    // 푸터 HTML
    const footerHTML = `
        <footer class="global-footer">
            <div class="footer-container">
                <div class="footer-grid">
                    <!-- 회사 정보 -->
                    <div class="footer-section footer-brand">
                        <h4>Yourpost</h4>
                        <p class="footer-tagline">더 멀리, 더 가까이</p>
                        <p class="footer-desc">마음을 전하는 다양한 방법을 제공합니다</p>
                    </div>
                    
                    <!-- 서비스 -->
                    <div class="footer-section">
                        <h4>Services</h4>
                        <a href="/ondaypost/" class="footer-link">하루편지</a>
                        <a href="/heartsend/" class="footer-link">HeartSend</a>
                        <a href="/#services" class="footer-link">전체 서비스</a>
                    </div>
                    
                    <!-- 회사 -->
                    <div class="footer-section">
                        <h4>Company</h4>
                        <a href="/" class="footer-link">홈</a>
                        <a href="/#about" class="footer-link">회사 소개</a>
                        <a href="/business/" class="footer-link">비즈니스</a>
                        <a href="/#contact" class="footer-link">문의하기</a>
                        <a href="/collab/" class="footer-link">협업관련</a>
                    </div>
                    
                    <!-- 법적 고지 -->
                    <div class="footer-section">
                        <h4>Legal</h4>
                        <a href="/privacy.html" class="footer-link">개인정보처리방침</a>
                        <a href="/terms.html" class="footer-link">이용약관</a>
                    </div>
                    
                    <!-- Partners -->
                    <div class="footer-section">
                        <h4>Partners</h4>
                        <a href="https://ipceo.kaist.ac.kr" target="_blank" rel="noopener noreferrer" class="footer-link">KAIST CCE</a>
                        <a href="https://ceo.postech.ac.kr" target="_blank" rel="noopener noreferrer" class="footer-link">POSTECH CEO</a>
                        <a href="https://impactceo.art" target="_blank" rel="noopener noreferrer" class="footer-link">IMPACT</a>
                        <a href="https://www.youtube.com/@%ED%8F%AC%EC%97%94%EC%B9%B4" target="_blank" rel="noopener noreferrer" class="footer-link">PNK</a>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-info">
                        <p class="company-details">상호: 유어포스트 | 대표: 윤세연 | 사업자등록번호: 414-01-72641</p>
                        <p class="company-contact">
                            주소: 경기도 성남시 수정구 | 
                            이메일: <a href="mailto:cs@yourpost.co.kr" class="footer-email">cs@yourpost.co.kr</a>
                        </p>
                    </div>
                    <p class="copyright">&copy; ${currentYear} Yourpost. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    // 푸터 CSS (2026 트렌드 반영)
    const footerCSS = `
        /* ===== GLOBAL FOOTER STYLES ===== */
        .global-footer {
            background: linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%);
            color: rgba(255, 255, 255, 0.9);
            padding: clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(1.5rem, 3vw, 2rem);
            margin-top: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
        }
        
        /* 2026 트렌드: 미세한 그라데이션 오버레이 */
        .global-footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent 0%,
                rgba(171, 46, 44, 0.5) 50%,
                transparent 100%
            );
        }
        
        .footer-container {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: clamp(2rem, 5vw, 2.5rem);
            margin-bottom: clamp(2rem, 5vw, 2.5rem);
            padding-bottom: clamp(2rem, 5vw, 2.5rem);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .footer-section h4 {
            font-size: clamp(0.75rem, 2vw, 0.8125rem);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1rem;
            color: #C63C51;
        }
        
        .footer-brand .footer-tagline {
            font-size: clamp(0.9375rem, 2.5vw, 1rem);
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .footer-desc {
            font-size: clamp(0.8125rem, 2vw, 0.875rem);
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
        }
        
        .footer-link {
            display: flex;
            align-items: center;
            font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            margin-bottom: 0.75rem;
            padding: 0.375rem 0;
            line-height: 1.5;
            transition: all 0.2s ease;
            border-radius: 0.25rem;
            
            /* 모바일 터치 영역 */
            min-height: 2.75rem;
        }
        
        .footer-link:hover {
            color: #C63C51;
            padding-left: 0.5rem;
        }
        
        .footer-bottom {
            padding-top: 1.5rem;
            text-align: center;
        }
        
        .footer-info {
            margin-bottom: 1rem;
        }
        
        .company-details,
        .company-contact {
            font-size: clamp(0.75rem, 2vw, 0.8125rem);
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }
        
        .footer-email {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        
        .footer-email:hover {
            color: #C63C51;
            text-decoration: underline;
        }
        
        .copyright {
            font-size: clamp(0.75rem, 2vw, 0.8125rem);
            color: rgba(255, 255, 255, 0.4);
            margin: 0;
        }
        
        /* ===== RESPONSIVE - SMALL TABLET ===== */
        @media (min-width: 480px) {
            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* ===== RESPONSIVE - TABLET ===== */
        @media (min-width: 768px) {
            .footer-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .footer-bottom {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                text-align: left;
            }
            
            .footer-info {
                margin-bottom: 0;
            }
            
            .copyright {
                text-align: right;
            }
        }
        
        /* ===== RESPONSIVE - DESKTOP ===== */
        @media (min-width: 1024px) {
            .footer-grid {
                grid-template-columns: 2fr repeat(4, 1fr);
            }
            
            .footer-link {
                min-height: 2.25rem;
            }
        }
        
        /* ===== PRINT ===== */
        @media print {
            .global-footer {
                display: none;
            }
        }
    `;

    // 푸터 초기화
    function initGlobalFooter() {
        // CSS 추가
        const styleEl = document.createElement('style');
        styleEl.id = 'yourpost-footer-styles';
        styleEl.textContent = footerCSS;

        // 기존 스타일이 있으면 제거
        const existingStyle = document.getElementById('yourpost-footer-styles');
        if (existingStyle) {
            existingStyle.remove();
        }

        document.head.appendChild(styleEl);

        // 푸터 HTML 추가
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        } else {
            // footer-container가 없으면 body 끝에 추가
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }

        // 디버그 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('✅ Global Footer V2.0 Loaded');
        }
    }

    // DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalFooter);
    } else {
        initGlobalFooter();
    }

    // 전역 노출
    window.YourpostFooter = {
        version: '2.0.0',
        reload: initGlobalFooter
    };

})();