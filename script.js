// Sahifa almashinuvi
function navTo(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Katalogga 10 ta element yuklash
function fillCatalog() {
    const list = document.getElementById('catalog-items');
    const items = [
        "Morfologiya", "Sintaksis", "Fonetika", "Leksikologiya", 
        "Uslubiyat", "Imlo qoidalari", "Punktuatsiya", "Frazeologiya",
        "Nutq madaniyati", "Morfema"
    ];
    
    list.innerHTML = items.map((t, i) => `
        <div class="cat-item">
            <div>
                <small style="color: #3b82f6">1${i} TA TEST</small>
                <h3>${t}</h3>
                <button style="background:#3b82f6; color:white; border:none; border-radius:8px; padding:5px 15px">Boshlash ›</button>
            </div>
            <div style="width:50px; height:50px; background:#3b82f6; border-radius:12px"></div>
        </div>
    `).join('');
}

window.onload = () => {
    fillCatalog();
    Telegram.WebApp.expand();
};
