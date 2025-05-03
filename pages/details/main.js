document.querySelector(".backbutton").addEventListener("mouseup", () => {
    location.pathname = "pages/home.html"
});

document.querySelector("a").addEventListener("mouseup", (e) => {
    e.preventDefault();
    location.pathname = "pages/reviews.html"
});
