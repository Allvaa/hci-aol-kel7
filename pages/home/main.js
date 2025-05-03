document.querySelector(".resto").addEventListener("mouseup", () => {
    location.pathname = (location.pathname.startsWith("/hci-aol-kel7") ? "hci-aol-kel7/" : "" ) + "pages/details/index.html"
});
