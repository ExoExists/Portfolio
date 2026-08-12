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


//art gallery
const artGallery = document.getElementById("art-gallery");

const leftButton = document.getElementById("art-left");
const rightButton = document.getElementById("art-right");

rightButton.addEventListener("click", () => {

    artGallery.scrollBy({
        left: 400,
        behavior: "smooth"
    });

});

leftButton.addEventListener("click", () => {

    artGallery.scrollBy({
        left: -400,
        behavior: "smooth"
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