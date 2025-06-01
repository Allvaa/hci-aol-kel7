// Tombol back sudah pakai inline onclick di HTML (history.back())

// Preview image upload
const photoInput = document.getElementById('photo');
const previewContainer = document.getElementById('preview-container');

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
  reader.onload = (function(aImg) {
    return function(e) {
      aImg.src = e.target.result;
    };
  })(img);

  reader.readAsDataURL(file);
});

// Contoh validasi sederhana sebelum submit (optional)
const form = document.querySelector('.review-form');
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Tolong lengkapi semua kolom wajib!');
  }
});
