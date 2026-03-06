const database = {
    grammatika: [
        { id: 1, t: "Otlarning yasalishi", d: "Affiksatsiya va kompozitsiya." },
        { id: 2, t: "Sifat darajalari", d: "Oddiy, qiyosiy va orttirma." },
        { id: 3, t: "Son va uning turlari", d: "Miqdor, tartib va dona sonlar." },
        { id: 4, t: "Olmoshlarning ma'no turlari", d: "Kishilik, o'zlik va ko'rsatish." },
        { id: 5, t: "Fe'l nisbatlari", d: "Aniq, majhul va orttirma nisbat." },
        { id: 6, t: "Ravishlarning imlosi", d: "Payt va o'rin ravishlari." },
        { id: 7, t: "Yordamchi so'zlar", d: "Ko'makchi, bog'lovchi va yuklama." },
        { id: 8, t: "Sodda gap tahlili", d: "Ega va kesimning moslashuvi." },
        { id: 9, t: "Qo'shma gaplar", d: "Bog'langan va ergashgan gaplar." },
        { id: 10, t: "Punktuatsiya", d: "Vergul va tirening ishlatilishi." }
    ],
    esseler: [
        { id: 1, t: "Ona tili — millat ruhi", l: "C1" },
        { id: 2, t: "Kitobxonlik madaniyati", l: "B2" },
        { id: 3, t: "Ekologiya va biz", l: "B2" },
        { id: 4, t: "Globallashuv va milliy qadriyatlar", l: "C1" },
        { id: 5, t: "Vatan ostonadan boshlanadi", l: "B1" },
        { id: 6, t: "Ustoz — otangdek ulug'", l: "B2" },
        { id: 7, t: "Sun'iy intellekt kelajagi", l: "C1" },
        { id: 8, t: "Oila muqaddas dargoh", l: "B2" },
        { id: 9, t: "Sog'lom turmush tarzi", l: "B1" },
        { id: 10, t: "Kasb tanlash mas'uliyati", l: "B2" }
    ]
};

// Sahifani ochish funksiyasini kengaytiramiz
function openSubCategory(type) {
    const container = document.getElementById('category-list');
    const data = database[type];
    
    let html = `<button class="btn-primary" onclick="loadKatalog()">⬅ Orqaga</button><br><br>`;
    
    data.forEach(item => {
        html += `
            <div class="card">
                <h3>${item.t}</h3>
                <p>${item.d || "Daraja: " + item.l}</p>
                <button class="btn-primary" style="background:#10b981">Ochish</button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}
