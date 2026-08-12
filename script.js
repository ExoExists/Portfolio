const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


// Highlight current section
window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// Mobile menu
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu when a link is clicked
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});