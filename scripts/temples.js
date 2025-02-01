document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuButton.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    });
});
