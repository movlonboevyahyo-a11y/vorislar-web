const database = {
    grammatika: [
        { id: 1, t: "Morfologiya", d: "So'z turkumlari tizimi", tests: "45 ta test" },
        { id: 2, t: "Sintaksis", d: "Gap bo'laklari va tahlil", tests: "30 ta test" },
        { id: 3, t: "Punktuatsiya", d: "Tinish belgilari qoidalari", tests: "25 ta test" },
        { id: 4, t: "Leksikologiya", d: "So'z boyligi va ma'nolari", tests: "40 ta test" },
        { id: 5, t: "Fonetika", d: "Tovushlar va imlo", tests: "20 ta test" },
        { id: 6, t: "Uslubiyat", d: "Nutq uslublari tahlili", tests: "15 ta test" },
        { id: 7, t: "Imlo qoidalari", d: "Xatosiz yozish ko'nikmasi", tests: "50 ta test" },
        { id: 8, t: "Frazeologiya", d: "Iboralar tahlili", tests: "10 ta test" },
        { id: 9, t: "Morfema", d: "So'z tarkibi tahlili", tests: "22 ta test" },
        { id: 10, t: "Paronimlar", d: "Shakldosh so'zlar", tests: "18 ta test" }
    ],
    esseler: [
        { id: 1, t: "Ona tilining milliy o'zlikni anglashdagi o'rni", l: "B2/C1", words: "Kamida 250 so'z" },
        { id: 2, t: "Sun'iy intellekt va ta'lim", l: "C1", words: "Kamida 300 so'z" },
        { id: 3, t: "Global isish va ekologiya", l: "B2", words: "Kamida 250 so'z" },
        { id: 4, t: "Kitobxonlikning foydasi", l: "B1", words: "Kamida 200 so'z" },
        { id: 5, t: "Kasb tanlashdagi xatolar", l: "B2", words: "Kamida 250 so'z" },
        { id: 6, t: "Oila va jamiyat munosabati", l: "B2", words: "Kamida 250 so'z" },
        { id: 7, t: "Internetning yoshlar ongiga ta'siri", l: "B2", words: "Kamida 250 so'z" },
        { id: 8, t: "Sport - sog'lik garovi", l: "B1", words: "Kamida 200 so'z" },
        { id: 9, t: "Milliy qadriyatlarimiz", l: "C1", words: "Kamida 300 so'z" },
        { id: 10, t: "Vaqtni to'g'ri boshqarish", l: "B2", words: "Kamida 250 so'z" }
    ]
};

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if(pageId === 'katalog') loadKatalog();
}

function loadKatalog() {
    const container = document.getElementById('category-list');
    container.innerHTML = database.grammatika.map(item => `
        <div class="card category-card">
            <div class="card-info">
                <span class="test-count">${item.tests}</span>
                <h3>${item.t}</h3>
                <p>${item.d}</p>
                <button class="btn-start">Boshlash ›</button>
            </div>
            <div class="card-icon blue-box"></div>
        </div>
    `).join('');
}
