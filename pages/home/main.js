import { restoran, reviews } from "../../data.js";

function createResto(data) {
    const resto = document.createElement("div");
    resto.setAttribute("data-id", data.id);
    resto.className = "resto";

    const restoImg = document.createElement("img");
    restoImg.src = "../../Assets/Restoran/kwetiau 79.jpg";
    restoImg.alt = data.nama;
    resto.appendChild(restoImg);

    const restoDesc = document.createElement("div");
    restoDesc.className = "resto-desc";

    const nama = document.createElement("p");
    nama.innerText = data.nama;

    const alamat = document.createElement("p");
    alamat.innerText = data.alamat;

    const totalRating = reviews[data.nama].reduce((prev, curr) => prev + curr.rating, 0);
    const rating = document.createElement("p");
    rating.innerText = `⭐ ${(totalRating / reviews[data.nama].length).toFixed(1)}`;

    restoDesc.appendChild(nama);
    restoDesc.appendChild(alamat);
    restoDesc.appendChild(rating);

    resto.appendChild(restoDesc);

    return resto;
}

function rate(resto) {
    const totalRating = reviews[resto.nama].reduce((prev, curr) => prev + curr.rating, 0);
    return (totalRating / reviews[resto.nama].length).toFixed(1);
}

let restoList = restoran;

function handleFilter() {
    switch (document.querySelector(".filter select").value) {
        case "rating":
            restoList = restoList.sort((a, b) => rate(b) - rate(a));
            break;
        case "ulasan":
            restoList = restoList.sort((a, b) => reviews[b.nama].length - reviews[a.nama].length);
            break;
    }
}

handleFilter();

function createList() {
    for (const resto of restoList) {
        document.querySelector(".list").appendChild(createResto(resto));
    }
    
    document.querySelectorAll(".resto").forEach(resto => {
        resto.addEventListener("mouseup", () => {
            location.href = "../details/index.html?id=" + resto.getAttribute("data-id");
        });
    })
}

document.querySelector(".filter select").addEventListener("change", (e) => {
    handleFilter();
    document.querySelector(".list").innerHTML = "";
    createList();
})

createList();
