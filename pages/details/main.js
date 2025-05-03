document.querySelector(".backbutton").addEventListener("mouseup", () => {
    location.pathname = (location.pathname.startsWith("/hci-aol-kel7") ? "hci-aol-kel7/" : "" ) + "pages/home/index.html"
});

document.querySelector("a").addEventListener("mouseup", (e) => {
    e.preventDefault();
    location.pathname = (location.pathname.startsWith("/hci-aol-kel7") ? "hci-aol-kel7/" : "" ) + "pages/reviews/index.html"
});
