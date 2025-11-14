// 페이지 네비게이션
function showPage(pageId) {
    // 모든 main 요소 숨기기
    document.querySelectorAll('main').forEach(page => {
        page.classList.remove('active');
    });
    
    // 선택된 페이지 표시
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 모바일 메뉴 닫기
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // 페이지 상단으로 스크롤
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // 메뉴 링크 클릭 시 메뉴 닫기
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// 문의 폼 처리
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        const messageEl = document.getElementById('formMessage');
        const submitBtn = this.querySelector('.btn-primary');
        
        // 개인정보 동의 확인
        if (!data.privacy) {
            messageEl.className = 'form-message error';
            messageEl.textContent = '개인정보 수집 및 이용에 동의해주세요.';
            return;
        }
        
        // 버튼 비활성화
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '전송 중...';
        
        try {
            // 콘솔에 로깅 (개발 단계)
            console.log('=== 새로운 문의 ===');
            console.log('시간:', new Date().toLocaleString('ko-KR'));
            console.log('유형:', data.type);
            console.log('이름:', data.name);
            console.log('이메일:', data.email);
            console.log('연락처:', data.phone || '미입력');
            console.log('내용:', data.message);
            console.log('마케팅 수신 동의:', data.marketing ? '예' : '아니오');
            console.log('==================');
            
            // 실제 서버 전송 (구현 필요)
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
            
            // 성공 메시지
            messageEl.className = 'form-message success';
            messageEl.textContent = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.';
            this.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            messageEl.className = 'form-message error';
            messageEl.textContent = '전송 중 오류가 발생했습니다. 다시 시도해주세요.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// 스크롤 시 헤더 효과
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});