const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("active");

    navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", !isOpen);

    // Optional: Add scrolled class on scroll
    window.addEventListener("scroll", () => {
        document
            .querySelector(".navbar")
            .classList.toggle("scrolled", window.scrollY > 50);
    });
});
