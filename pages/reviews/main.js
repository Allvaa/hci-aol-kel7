document.querySelector(".backbutton").addEventListener("mouseup", () => {
    location.pathname = (location.pathname.startsWith("/hci-aol-kel7") ? "hci-aol-kel7/" : "" ) + "pages/details/index.html"
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
