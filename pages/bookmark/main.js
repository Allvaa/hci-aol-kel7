import { isBookmarked, restoran, toggleBookmark } from "../../data.js";

const listContainer = document.getElementById('bookmark-list');
const countLabel = document.getElementById('bookmark-count');

const bookmarkedRestos = restoran.filter(r => isBookmarked(r.id));
countLabel.textContent = `${bookmarkedRestos.length} restoran disimpan`;

if (bookmarkedRestos.length === 0) {
  listContainer.innerHTML = `
    <div class="bookmark-card"><em>Belum ada restoran yang dibookmark.</em></div>
  `;
} else {
  bookmarkedRestos.forEach(r => {
    const card = document.createElement('div');
    card.className = 'bookmark-card';
    card.dataset.id = r.id;
    card.innerHTML = `
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
    listContainer.appendChild(card);
  });
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('bookmark-btn')) {
    const btn = e.target;
    const id = btn.dataset.id;

    !toggleBookmark(id) ?
        document.querySelector(".bookmark-list").removeChild(document.querySelector(`.bookmark-card[data-id="${id}"`))
        : null;
    countLabel.textContent = `${restoran.filter(r => isBookmarked(r.id)).length} restoran disimpan`;
  }
  if (e.target.classList.contains('bookmark-btn-icon')) {
    const icon = e.target;
    const btn = e.target.parentElement
    const id = btn.dataset.id;

    !toggleBookmark(id) ?
        document.querySelector(".bookmark-list").removeChild(document.querySelector(`.bookmark-card[data-id="${id}"`))
        : null;
    countLabel.textContent = `${restoran.filter(r => isBookmarked(r.id)).length} restoran disimpan`;
  }
});