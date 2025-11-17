// 공통 푸터 HTML
// footer.js - 공통 푸터 (최적화 + 확장성)
document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지가 어디인지 감지
    const isSubpage = window.location.pathname.includes('/ondaypost/');
    
    // 경로 자동 설정
    const basePath = isSubpage ? '../' : './';
    
    const footerHTML = `
    <footer class="footer" role="contentinfo">
        <div class="footer-content">
            <div class="footer-main">
                <!-- Yourpost 브랜드 정보 -->
                <div class="footer-section">
                    <h4>Yourpost</h4>
                    <p>더 멀리, 더 가까이</p>
                    <p class="footer-desc">마음을 전하는 다양한 방법을 제공합니다</p>
                </div>
                
                <!-- 서비스 -->
                <div class="footer-section">
                    <h4>Services</h4>
                    <a href="${basePath}ondaypost/" target="_self">하루편지</a>
                    <a href="#" onclick="showPage && showPage('services'); return false;">전체 서비스</a>
                </div>
                
                <!-- 회사 -->
                <div class="footer-section">
                    <h4>Company</h4>
                    <a href="#" onclick="showPage && showPage('about'); return false;">회사 소개</a>
                    <a href="#" onclick="showPage && showPage('contact'); return false;">문의하기</a>
                </div>
                
                <!-- 법적 고지 -->
                <div class="footer-section">
                    <h4>Legal</h4>
                    <a href="${basePath}privacy.html" target="_self">개인정보처리방침</a>
                    <a href="${basePath}terms.html" target="_self">이용약관</a>
                </div>
                
                <!-- Family Sites -->
                <div class="footer-section">
                    <h4>Family Sites</h4>
                    <a href="https://ipceo.kaist.ac.kr" target="_blank" rel="noopener noreferrer">KAIST CCE</a>
                    <a href="https://ceo.postech.ac.kr" target="_blank" rel="noopener noreferrer">POSTECH CEO</a>
                    <a href="https://impactceo.art" target="_blank" rel="noopener noreferrer">IMPACT</a>
                </div>
            </div>
            
            <!-- 푸터 바텀 -->
            <div class="footer-bottom">
                <div class="company-info">
                    <p>상호: 유어포스트 | 대표: 윤세연 | 사업자등록번호: 414-01-72641</p>
                    <p>주소: 경기도 성남시 수정구 | 이메일: <a href="mailto:cs@yourpost.co.kr">cs@yourpost.co.kr</a></p>
                </div>
                <p class="copyright">&copy; 2025 Yourpost. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
