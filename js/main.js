const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");
const navItems = document.querySelectorAll("#nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

 if (navLinks.classList.contains("show")) {
    menuIcon.classList.replace("fa-bars", "fa-times");
} else {
    menuIcon.classList.replace("fa-times", "fa-bars");
}
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuIcon.classList.replace("fa-times", "fa-bars");
    });
});