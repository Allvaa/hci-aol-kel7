import { restoran, reviews } from "../../data.js";

export const params = new URLSearchParams(location.search);

console.log(params);

if (params.has("id")) {
    const data = restoran.find(resto => resto.id == params.get("id"));
    document.querySelector(".info .jam span").innerText = data.jam_buka;
    document.querySelector(".info .nama span").innerText = data.nama;

    const totalRating = reviews[data.nama].reduce((prev, curr) => prev + curr.rating, 0);
    document.querySelector(".info .rating .rate").innerText = `${(totalRating / reviews[data.nama].length).toFixed(1)} (${reviews[data.nama].length})`;

    function createCategory(data) {
        const category = document.createElement("div");
        category.className = "cat";
        category.innerText = data;
        return category;
    }
    
    for (const cat of data.jenis_masakan) {
        document.querySelector(".categories").appendChild(createCategory(cat));
    }
}

document.querySelector(".backbutton").addEventListener("mouseup", () => {
    location.href = "../home/index.html";
});

document.querySelector("a").addEventListener("mouseup", (e) => {
    e.preventDefault();
    location.href = "../reviews/index.html?id=" + new URLSearchParams(location.search).get("id");
});
