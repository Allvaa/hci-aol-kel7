// Tombol back sudah pakai inline onclick di HTML (history.back())

import { addReview, restoran } from "../../data.js";

const params = new URLSearchParams(location.search);
const idStr = params.get("id");

// Cek data restoran
const restoData = restoran.find(r => String(r.id) === idStr);
const restoNameElem = document.querySelector('.resto-name');
if (restoData && restoNameElem) {
    restoNameElem.innerText = restoData.nama;
}

// Preview image upload
const photoInput = document.getElementById('photo');
const previewContainer = document.getElementById('preview-container');

let photo;

photoInput.addEventListener('change', () => {
  previewContainer.innerHTML = ''; // Bersihkan preview sebelumnya
  const files = photoInput.files;

  if (files.length === 0) return;

  const file = files[0];
  if (!file.type.startsWith('image/')) return;

  const img = document.createElement('img');
  img.classList.add('preview-image');
  img.file = file;

  previewContainer.appendChild(img);

  const reader = new FileReader();
  reader.onload = (function (aImg) {
    return function (e) {
      photo = aImg.src = e.target.result;
    };
  })(img);

  reader.readAsDataURL(file);
});

// Contoh validasi sederhana sebelum submit (optional)
const form = document.querySelector('.review-form');
form.addEventListener('submit', (e) => {
  if (!restoData) {
    e.preventDefault();
    return;
  }
  if (!form.checkValidity()) {
    alert('Tolong lengkapi semua kolom wajib!');
    e.preventDefault();
    return;
  }

  const username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const review = document.getElementById('review').value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value;

  // Cetak ke console (atau bisa diolah sesuai kebutuhan)
  addReview(idStr, username, rating, review, photo);
  alert("Review ditambah");
  history.back();
  e.preventDefault();
});
