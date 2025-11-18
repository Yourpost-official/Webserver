// footer.js - 완벽한 네비게이션 통합
document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지 경로 감지
    const currentPath = window.location.pathname;
    const isOndaypost = currentPath.includes('/ondaypost/');
    const basePath = isOndaypost ? '../' : './';
    
    // 푸터 HTML 생성
    const footerHTML = `
    <footer class="footer" role="contentinfo">
        <div class="footer-content">
            <div class="footer-main">
                <!-- Yourpost 정보 -->
                <div class="footer-section">
                    <h4>Yourpost</h4>
                    <p>더 멀리, 더 가까이</p>
                    <p class="footer-desc">마음을 전하는 다양한 방법을 제공합니다</p>
                </div>
                
                <!-- 서비스 -->
                <div class="footer-section">
                    <h4>Services</h4>
                    <a href="${basePath}ondaypost/" title="하루편지 페이지로 이동">하루편지</a>
                    <a href="${basePath}#services" onclick="navigateToMain('services'); return false;" title="전체 서비스 보기">전체 서비스</a>
                </div>
                
                <!-- 회사 -->
                <div class="footer-section">
                    <h4>Company</h4>
                    <a href="${basePath}#about" onclick="navigateToMain('about'); return false;" title="회사 소개 보기">회사 소개</a>
                    <a href="${basePath}#contact" onclick="navigateToMain('contact'); return false;" title="문의하기">문의하기</a>
                </div>
                
                <!-- 법적 고지 -->
                <div class="footer-section">
                    <h4>Legal</h4>
                    <a href="${basePath}privacy.html" title="개인정보처리방침 보기">개인정보처리방침</a>
                    <a href="${basePath}terms.html" title="이용약관 보기">이용약관</a>
                </div>
                
                <!-- Family Sites -->
                <div class="footer-section">
                    <h4>Family Sites</h4>
                    <a href="https://ipceo.kaist.ac.kr" target="_blank" rel="noopener noreferrer" title="KAIST CCE 방문">KAIST CCE</a>
                    <a href="https://ceo.postech.ac.kr" target="_blank" rel="noopener noreferrer" title="POSTECH CEO 방문">POSTECH CEO</a>
                    <a href="https://impactceo.art" target="_blank" rel="noopener noreferrer" title="IMPACT 방문">IMPACT</a>
                </div>
            </div>
            
            <!-- 푸터 하단 -->
            <div class="footer-bottom">
                <div class="company-info">
                    <p>상호: 유어포스트 | 대표: 윤세연 | 사업자등록번호: 414-01-72641</p>
                    <p>주소: 경기도 성남시 수정구 | 이메일: <a href="mailto:cs@yourpost.co.kr" title="이메일 보내기">cs@yourpost.co.kr</a></p>
                </div>
                <p class="copyright">&copy; 2025 Yourpost. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    // 푸터 삽입
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});

// 유어포스트 메인사이트로 네비게이션 함수
function navigateToMain(pageId) {
    // ondaypost에서 실행 중이면 메인사이트로 이동
    const isOndaypost = window.location.pathname.includes('/ondaypost/');
    
    if (isOndaypost) {
        // ondaypost에서는 메인사이트로 이동 후 페이지 로드
        window.location.href = '../#' + pageId;
    } else {
        // 메인사이트에서는 showPage 함수 사용 (있으면)
        if (typeof showPage === 'function') {
            showPage(pageId);
        }
    }
}