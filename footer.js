// footer.js - Vercel 호환 네비게이션 및 푸터 통합

document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지 URL 감지
    const currentUrl = window.location.pathname;
    const isBusiness = currentUrl.includes('/business');
    const isOndaypost = currentUrl.includes('/ondaypost');
    const isChristmasCard = currentUrl.includes('/christmascard');
    //
    //IR,협업문의,비즈니스 --> 추후 /business 로 변경요망
    // 푸터 HTML 생성
    const footerHTML = `
    <div class="footer-content">
        <div class="footer-main">
            <!-- Yourpost 정보 -->
            <div class="footer-section">
                <h4>Yourpost</h4>
                <p>더 멀리, 더 가까이</p>
                <p class="footer-desc">마음을 전하는 다양한 방법을 제공합니다</p>
                <a href="/business" title="협업/채용/투자 페이지로 이동">IR</a> 
                <a href="/" title="협업/채용/투자 페이지로 이동">협업문의</a> 
            </div>
            
            <!-- 서비스 -->
            <div class="footer-section">
                <h4>Services</h4>
                <a href="/ondaypost/" title="하루편지 페이지로 이동">하루편지</a>
                <a href="/christmascard/" title="크리스마스 엽서 신청하러가기">크리스마스 엽서</a>
                <a href="/#services" title="전체 서비스 보기">전체 서비스</a>
            </div>
            
            <!-- 회사 -->
            <div class="footer-section">
                <h4>Company</h4>
                <a href="/" title="홈으로 이동">홈</a>
                <a href="/#about" title="회사 소개 보기">회사 소개</a>
                <a href="/" title="협업/채용/투자 페이지로 이동">비즈니스</a>  
                <a href="/#contact" title="문의하기">문의하기</a>
            </div>
            
            <!-- 법적 고지 -->
            <div class="footer-section">
                <h4>Legal</h4>
                <a href="/privacy.html" title="개인정보처리방침 보기">개인정보처리방침</a>
                <a href="/terms.html" title="이용약관 보기">이용약관</a>
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
    `;
    
    // 푸터 삽입
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.classList.add('footer');
        footerContainer.setAttribute('role', 'contentinfo');
        footerContainer.innerHTML = footerHTML;
    }
});

