// 공통 푸터 HTML
const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-main">
            <div class="footer-section">
                <h4>Yourpost</h4>
                <p>편지로 전하는 마음</p>
                <p class="footer-desc">마음을 전하는 다양한 방법을 제공합니다</p>
            </div>
            
            <div class="footer-section">
                <h4>서비스</h4>
                <a href="https://ondaypost.yourpost.co.kr" target="_blank">하루편지</a>
                <a href="#" onclick="showPage && showPage('services')">전체 서비스</a>
            </div>
            
            <div class="footer-section">
                <h4>회사</h4>
                <a href="#" onclick="showPage && showPage('about')">회사 소개</a>
                <a href="#" onclick="showPage && showPage('contact')">문의하기</a>
            </div>
            
            <div class="footer-section">
                <h4>Family Sites</h4>
                <a href="https://ipceo.kaist.ac.kr" target="_blank" rel="noopener">KAIST CCE</a>
                <a href="https://ceo.postech.ac.kr" target="_blank" rel="noopener">POSTECH CEO</a>
                <a href="https://impactceo.art" target="_blank" rel="noopener">IMPACT</a>
            </div>
            
            <div class="footer-section">
                <h4>법적 고지</h4>
                <a href="privacy.html" target="_blank">개인정보처리방침</a>
                <a href="terms.html" target="_blank">이용약관</a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="company-info">
                <p>상호: 유어포스트 | 대표: [대표자명] | 사업자등록번호: [번호]</p>
                <p>주소: 경기도 성남시 수정구 | 이메일: contact@yourpost.co.kr</p>
            </div>
            <p class="copyright">&copy; 2025 Yourpost. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// 푸터 스타일
const footerStyle = `
<style>
footer {
    background: #1A1A1A;
    color: #FFFFFF;
    padding: 3rem 2rem 1.5rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-main {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 2.5rem;
    margin-bottom: 3rem;
}

.footer-section h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #C63C51;
}

.footer-section p, .footer-section a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    display: block;
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
    line-height: 1.6;
}

.footer-section a:hover {
    color: #FFFFFF;
}

.footer-desc {
    margin-top: 0.5rem;
    font-size: 0.85rem;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.company-info p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    line-height: 1.6;
}

.copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
}

@media (max-width: 968px) {
    .footer-main {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .footer-main {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    footer {
        padding: 2rem 1.5rem 1rem;
    }
    
    .footer-main {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
</style>
`;

// 푸터 삽입
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        // 스타일 먼저 삽입
        document.head.insertAdjacentHTML('beforeend', footerStyle);
        // 푸터 HTML 삽입
        footerContainer.innerHTML = footerHTML;
    }
});