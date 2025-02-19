
const products = [
    { id: "prod1", name: "Laptop", averagerating: 4.5 },
    { id: "prod2", name: "Smartphone", averagerating: 4.5 },
    { id: "prod3", name: "Tablet", averagerating: 4.5 },
    { id: "prod4", name: "Headphones", averagerating: 4.5 },
    { id: "prod5", name: "Smartwatch", averagerating: 4.5 }
];

document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const reviewForm = document.querySelector("form");

    reviewForm.addEventListener("submit", function () {
        localStorage.setItem("reviewSubmitted", "true");
    });
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", 0);
    }
});
