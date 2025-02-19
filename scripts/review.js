document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("reviewSubmitted") === "true") {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;

        localStorage.setItem("reviewCount", reviewCount);
        document.getElementById("review-count").textContent = reviewCount;

        localStorage.removeItem("reviewSubmitted");
    } else {
        document.getElementById("review-count").textContent = localStorage.getItem("reviewCount") || 0;
    }
});
