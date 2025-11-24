// 파일 다운로드 매니저 (Vercel 환경)
const FileDownloadManager = {
    download: function(filename, category) {
        const filePath = `/downloads/${category}/${filename}`;
        
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filename;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        link.click();
        
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
    }
};

// 글로벌 유틸리티
window.YourpostUtils = {
    scrollToTop: function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    openLink: function(url, newTab = true) {
        if (newTab) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = url;
        }
    },

    copyEmail: function(email) {
        navigator.clipboard.writeText(email)
            .then(() => alert('이메일이 복사되었습니다: ' + email))
            .catch(err => console.error('복사 실패:', err));
    },

    downloadFile: function(filename, category) {
        FileDownloadManager.download(filename, category);
    },

    isMobile: function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    trackEvent: function(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }
};