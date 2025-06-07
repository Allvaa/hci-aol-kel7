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
      </a>
      <div class="resto-desc">
        <p><b>${r.nama}</b></p>
        <p>${r.alamat}</p>
        <p>⭐ ${r.rating}</p>
        <div class="resto-actions">
          <button class="write-review-btn">
            <a href="../reviews/index.html?id=${r.id}">Tulis Review</a>
          </button>
          <button class="bookmark-btn" data-id="${r.id}"><img class="bookmark-btn-icon" src="../../Assets/Icons/${isBookmarked(r.id) ? "bookmarked" : "bookmark"}.svg"></button>
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
    case 'jarak':
      filtered.sort((a, b) => (a.jarak || 0) - (b.jarak || 0));
      break;
    case 'ulasan':
      filtered.sort((a, b) => (b.ulasan || 0) - (a.ulasan || 0));
      break;
    case 'harga':
      filtered.sort((a, b) => (a.harga || 1) - (b.harga || 1));
      break;
    case 'halal':
      filtered = filtered.filter(r => r.halal);
      break;
    case 'sehat':
      filtered = filtered.filter(r => r.sehat);
      break;
    case 'all':
    default:
      // Tidak filter apa-apa
      break;
  }

  renderRestos(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterRestos);
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
    icon.src = `../../Assets/Icons/${toggleBookmark(id) ? "bookmarked" : "bookmark"}.svg`;
  }
  if (e.target.classList.contains('bookmark-btn-icon')) {
    const icon = e.target;
    const btn = e.target.parentElement
    const id = btn.dataset.id;

    icon.src = `../../Assets/Icons/${toggleBookmark(id) ? "bookmarked" : "bookmark"}.svg`;
  }
});