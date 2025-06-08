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
    document.querySelector(".info .rating .rate").innerText = `${data.rating}`;

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

    // Promo info tampil hanya jika ada promo di data.js
    const promoInfoElem = document.querySelector(".promo-info");

    const normalPrices = document.querySelectorAll(".harga-normal");
    const discountPrices = document.querySelectorAll(".harga-diskon");
    if (promoInfoElem) {
        if (data.promo) {
            promoInfoElem.innerHTML = `🎉 Restoran ini sedang ada promo <b>${data.promo}</b> untuk beberapa menu! 🎉`;
            promoInfoElem.style.display = "";

            discountPrices.forEach(d => {
              d.style.display = "initial";   
            });
        } else {
            normalPrices.forEach(d => {
              d.className = "";
              d.outerHTML = d.outerHTML.replaceAll("span", "b");   
            });
            
            promoInfoElem.style.display = "none";
        }
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