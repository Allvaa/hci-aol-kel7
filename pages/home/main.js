import { isBookmarked, restoran, toggleBookmark } from '../../data.js';

const listContainer = document.querySelector('.list');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const searchBtn = document.getElementById('searchBtn');

// Generate daftar restoran
function renderRestos(data) {
  listContainer.innerHTML = '';
  data.forEach(r => {
    const restoDiv = document.createElement('div');
    restoDiv.className = 'resto';
    restoDiv.dataset.rating = r.rating;
    restoDiv.dataset.jarak = r.jarak || 0;
    restoDiv.dataset.ulasan = r.ulasan || 0;
    restoDiv.dataset.harga = r.harga || 1;
    restoDiv.dataset.halal = r.halal || false;
    restoDiv.dataset.sehat = r.sehat || false;

    restoDiv.innerHTML = `
      <a href="../details/index.html?id=${r.id}">
        <img src="../../Assets/Restoran/${r.gambar}" alt="${r.nama}" />
        ${r.promo ? `<div class="mark">${r.promo}</div>` : ""}
      </a>
      <div class="resto-desc">
        <p><b>${r.nama}</b></p>
        <p>${r.alamat}</p>
        <p>⭐ ${r.rating}</p>
        <div class="resto-actions">
          <button class="write-review-btn">
            <a href="../addreview/index.html?id=${r.id}">Tulis Ulasan</a>
          </button>
          <button class="bookmark-btn" data-id="${r.id}"><img class="bookmark-btn-icon" src="../../Assets/Icons/${isBookmarked(r.id) ? "favorited" : "favorite"}.svg"></button>
        </div>
      </div>
    `;
    listContainer.appendChild(restoDiv);
  });
}

// Filter & search
function filterRestos() {
  let filtered = [...restoran];

  // Search by name
  const searchVal = searchInput.value.toLowerCase();
  if (searchVal) {
    filtered = filtered.filter(r => r.nama.toLowerCase().includes(searchVal));
  }

  // Filter/sort
  const filter = filterSelect.value;
    switch (filter) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'promo':
        filtered = filtered.filter(r => r.promo); 
        break;
      case 'all':
      default:
        // Tidak filter apa-apa
        break;
    }

  if (filtered.length == 0) {
    listContainer.textContent = `Tidak ada restoran dengan nama '${searchVal}'`;
    return;
  }

  renderRestos(filtered);
}

// Event listeners
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') filterRestos();
});
filterSelect.addEventListener('change', filterRestos);
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  filterRestos();
});

// Render awal
renderRestos(restoran);

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('bookmark-btn')) {
    const btn = e.target;
    const id = btn.dataset.id;

    const icon = document.querySelector(`.bookmark-btn[data-id="${id}"] img`);
    icon.src = `../../Assets/Icons/${toggleBookmark(id) ? "favorited" : "favorite"}.svg`;
  }
  if (e.target.classList.contains('bookmark-btn-icon')) {
    const icon = e.target;
    const btn = e.target.parentElement
    const id = btn.dataset.id;

    icon.src = `../../Assets/Icons/${toggleBookmark(id) ? "favorited" : "favorite"}.svg`;
  }
  if (e.target.classList.contains('write-review-btn')) {
    const btn = e.target;
    location.href = btn.querySelector("a").href;
  }
});