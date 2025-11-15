# Yourpost 공식 웹사이트

> 편지로 전하는 마음 - Yourpost & 하루편지

## 📁 프로젝트 구조

```
yourpost-website/
├── index.html              # 메인 사이트 (Yourpost)
├── styles.css             # 공통 스타일시트
├── script.js              # 공통 JavaScript
├── footer.js              # 공통 푸터 컴포넌트
├── privacy.html           # 개인정보처리방침
├── terms.html             # 이용약관
├── logo.png               # 로고 이미지 (빨간 원 우체통)
├── ondaypost/
│   ├── index.html         # 하루편지 사이트
│   └── ondaypost-styles.css  # 하루편지 전용 스타일
└── README.md
```

## 🎨 디자인 특징

- **POSTECH 스타일**: 깔끔하고 전문적인 디자인
- **완전 반응형**: 모바일, 태블릿, 데스크톱 완벽 대응
- **공통 푸터**: 한 번 수정으로 전체 사이트 업데이트
- **최소 리소스**: 외부 라이브러리 없이 순수 HTML/CSS/JS
- **빠른 로딩**: 최적화된 코드로 빠른 페이지 로드

## 🚀 빠른 시작

### 1. 로고 이미지 추가

루트 디렉토리에 `logo.png` 파일을 추가하세요.
- 빨간 원형 배경에 흰색 우체통 아이콘
- 권장 크기: 200x200px 이상
- 형식: PNG (투명 배경)

### 3. 테스트
```
✓ PC에서 스크롤 (끝까지 스크롤해야 넘어감)
✓ 모바일에서 스와이프 (릴스처럼)
✓ 문의 폼 이메일 전송
✓ 하루편지 vs 메인 디자인 차이
✓ 모든 링크 작동
```

## 📝 최종 파일 구조
```
Webserver/
├── index.html              ✅ 브랜드 컬러 + 풀스크롤
├── styles.css             ✅ 메인 스타일
├── script.js              ✅ 이메일 + 스크롤 로직
├── EMAIL_SETUP.md         ✅ 이메일 설정 가이드
├── privacy.html           
├── terms.html             
├── logo.png               
└── ondaypost/
    └── index.html         ✅ 친근한 디자인

### 2. 정보 수정

다음 파일들에서 실제 정보로 교체하세요:

**footer.js** (한 번만 수정하면 모든 페이지에 반영)
```javascript
<p>상호: 유어포스트 | 대표: [대표자명] | 사업자등록번호: [번호]</p>
```

**privacy.html**
```
[책임자명]
[전화번호]
[AI 서비스 제공업체명]
[우편 서비스 제공업체명]
```

**terms.html**
```
시행일: 2025년 XX월 XX일
```

## 📦 GitHub 배포

### 1단계: 저장소에 업로드

```bash
# 저장소 클론
git clone https://github.com/Yourpost-official/Webserver.git
cd Webserver

# 모든 파일 추가
git add .
git commit -m "Update website with POSTECH style and common footer"
git push origin main
```

### 2단계: Netlify 배포

1. **Netlify 로그인**: https://netlify.com
2. **New site from Git** 클릭
3. **GitHub** 연결
4. **저장소 선택**: Yourpost-official/Webserver
5. **설정**:
   - Build command: (비워둠)
   - Publish directory: `/`
6. **Deploy site** 클릭

### 3단계: 도메인 연결

**메인 사이트**
- yourpost.co.kr → index.html

**하루편지 (옵션 1 - 하위도메인 권장)**
```
Netlify Dashboard → Domain settings → Add domain alias
ondaypost.yourpost.co.kr → /ondaypost/index.html
```

**하루편지 (옵션 2 - 별도 도메인)**
- 새 Netlify 사이트 생성
- ondaypost.co.kr 연결

## 📧 이메일 포워딩 설정

### ForwardEmail 사용 (무료)

1. https://forwardemail.net 가입
2. **도메인 추가**: yourpost.co.kr
3. **DNS 레코드 추가**:
   ```
   Type: TXT
   Name: @
   Value: forward-email=실제이메일@gmail.com
   ```
4. **MX 레코드 추가**:
   ```
   Priority: 10
   Value: mx1.forwardemail.net
   Priority: 20
   Value: mx2.forwardemail.net
   ```
5. **포워딩 설정**:
   - contact@yourpost.co.kr → 실제 이메일
   - privacy@yourpost.co.kr → 실제 이메일

## 🎯 Family Sites 관리

푸터의 Family Sites는 `footer.js`에서 관리됩니다.

현재 링크:
- **KAIST CCE** → https://ipceo.kaist.ac.kr
- **POSTECH CEO** → https://ceo.postech.ac.kr
- **IMPACT** → https://impactceo.art

### 링크 추가/수정

`footer.js` 파일을 열고 다음 섹션을 수정:

```javascript
<div class="footer-section">
    <h4>Family Sites</h4>
    <a href="https://ipceo.kaist.ac.kr" target="_blank" rel="noopener">KAIST CCE</a>
    <a href="https://ceo.postech.ac.kr" target="_blank" rel="noopener">POSTECH CEO</a>
    <a href="https://impactceo.art" target="_blank" rel="noopener">IMPACT</a>
    <!-- 새 링크 추가 -->
    <a href="https://example.com" target="_blank" rel="noopener">새 사이트</a>
</div>
```

저장 후 GitHub에 푸시하면 자동으로 모든 페이지에 반영됩니다.

## 🛠️ 커스터마이징

### 색상 변경

`styles.css`에서 CSS 변수 수정:

```css
:root {
    --primary: #C63C51;        /* 메인 빨간색 */
    --primary-dark: #A02E3F;   /* 어두운 빨간색 */
    --dark: #1A1A1A;           /* 텍스트 색상 */
    --gray: #666;              /* 회색 텍스트 */
}
```

### 폰트 변경

`styles.css`의 body 섹션:

```css
body {
    font-family: 'Your-Font', -apple-system, sans-serif;
}
```

### 로고 크기 조정

`styles.css`:

```css
.logo-img {
    width: 36px;   /* 원하는 크기로 변경 */
    height: 36px;
}
```

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px 이상
- **Tablet**: 768px ~ 1199px
- **Mobile**: 767px 이하

## ⚡ 성능 최적화

- ✅ 외부 라이브러리 없음
- ✅ 최소화된 CSS/JS
- ✅ 이미지 지연 로딩
- ✅ 공통 컴포넌트 재사용

## 🐛 문제 해결

### 푸터가 표시되지 않는 경우

1. `footer.js` 파일 경로 확인
2. HTML에 `<div id="footer-container"></div>` 있는지 확인
3. 브라우저 콘솔에서 에러 확인

### 로고가 표시되지 않는 경우

1. `logo.png` 파일이 올바른 위치에 있는지 확인
2. 하루편지 페이지: `../logo.png` 경로 확인
3. 이미지 파일명 대소문자 확인

### 스타일이 적용되지 않는 경우

1. CSS 파일 경로 확인
2. 브라우저 캐시 삭제
3. F12로 개발자 도구에서 CSS 로드 확인

## 📞 지원

문제가 발생하거나 질문이 있으시면:
- Email: contact@yourpost.co.kr
- GitHub Issues: https://github.com/Yourpost-official/Webserver/issues

## 📄 라이선스

© 2025 Yourpost. All rights reserved.

---

**Last Updated**: 2025-11-13
**Version**: 2.0.0