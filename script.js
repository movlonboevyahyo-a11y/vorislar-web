const tg = window.Telegram.WebApp;
tg.expand();

function showPage(pageId) {
    // Barcha sahifalarni yopish
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Tanlangan sahifani ochish
    document.getElementById(pageId).classList.add('active');
    
    // Telegram vibration feedback
    tg.HapticFeedback.impactOccurred('light');
}

// Boshlang'ich yuklanishda Qidiruvni ko'rsatish
window.onload = () => {
    showPage('qidiruv');
};
