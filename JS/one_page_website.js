/* =========================
   SLIDESHOW FUNCTION
========================= */

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;

    let slides = document.getElementsByClassName("slide");

    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
}


/* =========================
   CONTACT FORM MESSAGE
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been sent.");

            form.reset();

        });

    }

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "#111a30";
    }

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});
