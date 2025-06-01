import { reviews, restoran } from '../../data.js';

// Ambil id restoran dari query string
const params = new URLSearchParams(location.search);
const idStr = params.get("id");

// Cek data restoran
const restoData = restoran.find(r => String(r.id) === idStr);
const restoNameElem = document.querySelector('.ulasan-resto-nama');
if (restoData && restoNameElem) {
    restoNameElem.innerText = restoData.nama;
}

// Ambil data ulasan dari reviewsData
const ulasan = (reviews && reviews[idStr]) ? reviews[idStr] : [];

// Render ke HTML
const ulasanList = document.querySelector('.ulasan-list');
ulasanList.innerHTML = ""; // Kosongkan dulu

if (ulasan.length === 0) {
    ulasanList.innerHTML = "<p>Belum ada ulasan untuk restoran ini.</p>";
} else {
    ulasan.forEach(item => {
        const card = document.createElement('div');
        card.className = 'ulasan-card';
        card.innerHTML = `
            <div class="ulasan-header-row">
                <span class="ulasan-user">${item.username}</span>
                <span class="ulasan-rating">⭐ ${item.rating}</span>
            </div>
            <p class="ulasan-text">${item.ulasan}</p>
            ${item.photo ? `<img src='${item.photo}' width=200>` : ""}
        `;
        ulasanList.appendChild(card);
    });
}