import { addReview, restoran, reviews } from "../../data.js";

export const params = new URLSearchParams(location.search);

let restoId;

function createReview(data) {
    const review = document.createElement("div");
    review.className = "review";
    
    const user = document.createElement("div");
    user.className = "user";
    
    const profilePic = document.createElement("div");
    profilePic.className = "profilepic";
    
    const imgProfile = document.createElement("img");
    imgProfile.src = "../../Assets/Restoran/kwetiau 79.jpg";
    imgProfile.alt = "pfp";
    
    profilePic.appendChild(imgProfile);
    
    const userInfo = document.createElement("div");
    
    const username = document.createElement("span");
    username.innerText = data.username;
    
    const details = document.createElement("div");
    details.className = "details";
    
    const sec2 = document.createElement("div");
    sec2.className = "sec2";
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("img");
        star.src = "../../Assets/Logo/star.png";
        star.width = 16;
        star.alt = "star";
        sec2.appendChild(star);
    }
    
    const dateDiv = document.createElement("div");
    const date = document.createElement("span");
    date.innerText = "30 December 2024";
    dateDiv.appendChild(date);
    
    details.appendChild(sec2);
    details.appendChild(dateDiv);
    
    userInfo.appendChild(username);
    userInfo.appendChild(details);
    
    user.appendChild(profilePic);
    user.appendChild(userInfo);
    
    const content = document.createElement("div");
    content.className = "content";
    
    const contentText = document.createElement("span");
    contentText.innerText = data.ulasan;
    
    content.appendChild(contentText);
    
    review.appendChild(user);
    review.appendChild(content);
    
    return review;
}

if (params.has("id")) {
    const data = restoran.find(resto => resto.id == params.get("id"));
    
    restoId = data.id;
    document.querySelector(".info .nama span").innerText = data.nama;
    document.querySelector(".info .alamat span").innerText = data.alamat;
    
    const totalRating = reviews[data.id].reduce((prev, curr) => prev + curr.rating, 0);
    document.querySelector(".info .rating .rate").innerText = `${(totalRating / reviews[data.id].length).toFixed(1)}`;
    document.querySelector(".info .rating .ulasan").innerText = `${reviews[data.id].length} ulasan`;

    for (const review of reviews[restoId]) {
        document.querySelector(".list").appendChild(createReview(review));
    }
}

document.querySelector(".backbutton").addEventListener("mouseup", () => {
    location.href = "../details/index.html?id=" + new URLSearchParams(location.search).get("id");
});

function toggleAddReview() {
    const dim = document.querySelector(".dim");
    const addreview = document.querySelector(".addreview");
    
    dim.classList.contains("hidden") ? dim.classList.remove("hidden") : dim.classList.add("hidden");
    addreview.classList.contains("hidden") ? addreview.classList.remove("hidden") : addreview.classList.add("hidden");
}

document.querySelector("a").addEventListener("mouseup", () => {
    toggleAddReview();
});

document.addEventListener("mouseup", e => {
    if (e.target.className === "dim") {
        toggleAddReview();
    }
});

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const ulasan = document.querySelector("textarea").value;
    if (ulasan == "") return;
    const resto = restoId;
    const username = "User 1";
    const rating = 5;
    addReview(resto, username, rating, ulasan)
    toggleAddReview();
    document.querySelector("textarea").value = "";
    document.querySelector(".list").appendChild(createReview({
        username,
        rating,
        ulasan
    }));
    const totalRating = reviews[restoId].reduce((prev, curr) => prev + curr.rating, 0);
    document.querySelector(".info .rating .rate").innerText = `${(totalRating / reviews[restoId].length).toFixed(1)}`;
    document.querySelector(".info .rating .ulasan").innerText = `${reviews[restoId].length} ulasan`;
})
