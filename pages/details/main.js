import { restoran, reviews } from "../../data.js";

const params = new URLSearchParams(location.search);

if (params.has("id")) {
    const idStr = String(params.get("id"));
    const data = restoran.find(resto => String(resto.id) === idStr);
    if (!data) {
        alert("Restoran tidak ditemukan!");
        location.href = "../home/index.html";
    }

    // Gambar cover
    const coverImg = document.querySelector(".cover img");
    coverImg.src = `../../Assets/Restoran/${data.gambar}`;
    coverImg.alt = data.nama;

    // Nama restoran
    document.querySelector(".info .nama h2").innerText = data.nama;

    // Jam buka
    document.querySelector(".info .jam span").innerText = data.jam_buka;

    // Rating & jumlah ulasan
    let restoReviews = [];
    if (reviews && typeof reviews === "object" && reviews[idStr] && Array.isArray(reviews[idStr])) {
        restoReviews = reviews[idStr];
    }
    let avgRating = data.rating;
    let reviewCount = 0;
    if (restoReviews.length > 0) {
        const totalRating = restoReviews.reduce((prev, curr) => prev + Number(curr.rating || 0), 0);
        avgRating = (totalRating / restoReviews.length).toFixed(1);
        reviewCount = restoReviews.length;
    }
    document.querySelector(".info .rating .rate").innerText = `${avgRating}`;

    // Alamat
    document.querySelector(".info .alamat").innerText = data.alamat;

    // Kategori masakan
    const categoriesContainer = document.querySelector(".categories");
    categoriesContainer.innerHTML = "";
    if (Array.isArray(data.jenis_masakan)) {
        data.jenis_masakan.forEach(cat => {
            const category = document.createElement("div");
            category.className = "cat";
            category.innerText = cat;
            categoriesContainer.appendChild(category);
        });
    }
}

// Tombol kembali
document.querySelector(".backbutton").addEventListener("mouseup", () => {
    history.back();
});

// Tombol lihat ulasan
document.querySelector(".lihat-ulasan-btn").addEventListener("mouseup", (e) => {
    e.preventDefault();
    location.href = "../reviews/index.html?id=" + params.get("id");
});