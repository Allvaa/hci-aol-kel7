document.querySelector(".backbutton").addEventListener("mouseup", () => {
    location.pathname = "pages/home/index.html"
});

document.querySelector("a").addEventListener("mouseup", (e) => {
    e.preventDefault();
    location.pathname = "pages/reviews/index.html"
});
