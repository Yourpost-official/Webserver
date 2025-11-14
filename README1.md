# Your Post 웹사이트 - 순수 HTML 버전

검은 배경과 흰색 텍스트를 기반으로 한 미니멀한 디자인의 Your Post 웹사이트입니다.
각 페이지가 독립적인 HTML 파일로 구성되어 있으며, CSS와 JavaScript가 모두 파일 내에 포함되어 있습니다.

## 📁 파일 구조

```
yourpost-html/
├── index.html      # 홈 페이지
├── about.html      # About 페이지
├── onedaypost.html # 하루편지 서비스 소개
├── contact.html    # 연락처 및 문의
├── support.html    # 후원 안내
└── README.md       # 이 파일 (readme)
```

## 🚀 빠른 시작

### 로컬에서 실행

1. **웹 브라우저로 직접 열기**
   - `index.html` 파일을 더블클릭하거나
   - 브라우저에서 "파일 열기" (Ctrl+O / Cmd+O)로 열기

2. **로컬 서버 사용 (권장)**
   
   **Python이 설치되어 있다면:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js가 설치되어 있다면:**
   ```bash
   npx http-server
   ```
   
   **VS Code 사용자:**
   - Live Server 확장 프로그램 설치
   - 파일 우클릭 → "Open with Live Server"

3. 브라우저에서 `http://localhost:8000` 접속

## 🎨 페이지 구성

- **Home** (`index.html`) - 메인 페이지
- **About** (`about.html`) - 소개 페이지
- **하루편지** (`onedaypost.html`) - 서비스 소개
- **Contact** (`contact.html`) - 연락처 및 문의 폼
- **Support** (`support.html`) - 후원 안내

## ✨ 주요 특징

- ✅ 순수 HTML, CSS, JavaScript (프레임워크 없음)
- ✅ 모든 스타일과 스크립트가 파일 내에 포함
- ✅ 완전한 반응형 디자인
- ✅ 모바일 메뉴 지원
- ✅ 검은 배경 + 흰색 텍스트 미니멀 디자인
- ✅ 부드러운 애니메이션 효과

## 🛠️ 커스터마이징

### 텍스트 수정
각 HTML 파일을 열어서 내용을 직접 수정하세요.

### 색상 변경
각 HTML 파일의 `<style>` 태그 안에서 색상을 변경할 수 있습니다:

```css
body {
    background-color: #000;  /* 배경색 */
    color: #fff;             /* 텍스트 색 */
}
```

### 로고 변경
네비게이션의 "Your Post" 텍스트를 이미지로 교체하려면:

```html
<!-- 현재 -->
<span class="logo-text">Your Post</span>

<!-- 이미지로 변경 -->
<img src="logo.png" alt="Your Post" style="height: 40px;">
```

### 이미지 추가
이미지 플레이스홀더를 실제 이미지로 교체:

```html
<!-- 현재 -->
<div class="post-image-placeholder">
    <span class="image-label">support.webp</span>
</div>

<!-- 이미지로 변경 -->
<img src="support.webp" alt="Support" style="width: 100%; height: auto;">
```

## 🌐 배포 방법

### 1. GitHub Pages (무료)

1. GitHub 계정 생성
2. 새 리포지토리 생성
3. 파일 업로드
4. Settings → Pages → Source: main branch 선택
5. `https://username.github.io/repository-name/` 에서 접속

### 2. Netlify (무료)

1. Netlify 계정 생성
2. "Add new site" → "Deploy manually"
3. 폴더를 드래그 앤 드롭
4. 자동으로 URL 생성됨

### 3. Vercel (무료)

1. Vercel 계정 생성
2. "New Project"
3. 파일 업로드 또는 GitHub 연결
4. 자동 배포

### 4. 일반 웹 호스팅

FTP 클라이언트로 모든 HTML 파일을 서버에 업로드하세요.

## 📱 모바일 지원

- 768px 이하: 모바일 레이아웃
- 768px ~ 1024px: 태블릿 레이아웃
- 1024px 이상: 데스크톱 레이아웃

## 🔧 기능 설명

### 네비게이션
- 데스크톱: 상단 가로 메뉴
- 모바일: 햄버거 메뉴
- 현재 페이지 활성화 표시

### 폼 기능
- Contact 페이지: 문의 폼 (현재는 알림으로 처리)
- 실제 이메일 발송을 원하면 백엔드 연동 필요

### 버튼 동작
- 구독/후원 버튼: 현재는 알림 메시지 표시
- 실제 결제 연동이 필요한 경우 결제 서비스 연동

## 💡 자주 묻는 질문

**Q: 페이지 간 이동 시 새로고침이 됩니다**
A: 순수 HTML이므로 정상적인 동작입니다. SPA가 필요하면 React 버전을 사용하세요.

**Q: 폼 제출이 작동하지 않습니다**
A: 현재는 프론트엔드만 구현되어 있습니다. 실제 이메일 발송을 위해서는:
- FormSpree (https://formspree.io/)
- EmailJS (https://www.emailjs.com/)
- 직접 백엔드 구현

**Q: SEO 최적화를 하려면?**
A: 각 HTML 파일의 `<head>` 태그 안에:
- `<title>` 수정
- `<meta name="description">` 수정
- Open Graph 태그 추가
- Schema.org 마크업 추가

## 📞 지원

추가 도움이 필요하면:
1. HTML/CSS 기초: https://www.w3schools.com
2. 반응형 디자인: https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Responsive_Design
3. JavaScript 기초: https://javascript.info

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.
