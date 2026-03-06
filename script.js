// Sahifalarni almashtirish funksiyasi
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Ma'lumotlar bazasi (10 tadan element)
const database = {
    grammatika: Array.from({length: 10}, (_, i) => ({ id: i+1, title: `Mavzu ${i+1}`, info: "Batafsil ma'lumot..." })),
    testlar: Array.from({length: 10}, (_, i) => ({ id: i+1, title: `${i+1}-test`, questions: 20 })),
    esseler: Array.from({length: 10}, (_, i) => ({ id: i+1, title: `Esse mavzusi ${i+1}` }))
};

// Katalog sahifasini yuklash
function loadKatalog() {
    const container = document.getElementById('category-list');
    const categories = [
        { name: 'Grammatika', count: 10, icon: '📖' },
        { name: 'Ilmiy matn', count: 10, icon: '🔬' },
        { name: 'Badiiy matn', count: 10, icon: '📚' },
        { name: 'Imlo/Lugat', count: 10, icon: '🔤' }
    ];

    container.innerHTML = categories.map(cat => `
        <div class="card">
            <span>${cat.icon}</span>
            <h3>${cat.name}</h3>
            <p>${cat.count} ta material</p>
            <button class="btn-primary" onclick="alert('${cat.name} bo\\'limi tanlandi')">Boshlash</button>
        </div>
    `).join('');
}

// Telegram WebApp yuklanganda
window.onload = () => {
    loadKatalog();
    const tg = window.Telegram.WebApp;
    tg.expand(); // WebAppni to'liq ekranga ochish
};
