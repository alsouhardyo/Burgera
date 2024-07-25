// Toggle Functionality of the Nav Bar:-
let menu = document.querySelector("#menu");
let nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
    if (menu.classList.contains("ri-apps-2-fill")) {
        menu.classList.remove("ri-apps-2-fill");
        menu.classList.add("ri-close-line");
    } else {
        menu.classList.remove("ri-close-line");
        menu.classList.add("ri-apps-2-fill");
    }
    nav.classList.toggle("hidden");
});

// Adding Box-Shadow to the Header on Scroll:-
let header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("shadow-small-img");
    } else {
        header.classList.remove("shadow-small-img");
    }
});

// Displaying the top icon on scroll:-
let up = document.querySelector("#up");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 350) {
        up.classList.remove("hidden");
        up.classList.add("block");
    } else {
        up.classList.remove("block");
        up.classList.add("hidden");
    }
});

// Adding ScrollReveal Animation to Burgera:-
let sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: false,
});
if (window.screen.width <= "1279") {
    sr.reveal(".home-content, .footer-data", { delay: 200, origin: "top" });
    sr.reveal(".home-banner", { delay: 800, origin: "top" });
    sr.reveal(".recipe-img, .delivery-data, .contact-data", {
        delay: 600,
        origin: "top",
    });
    sr.reveal(".recipe-data, .delivery-img, .contact-img", {
        delay: 700,
        origin: "bottom",
    });
    sr.reveal(".famous-card", { interval: 100 });
} else {
    sr.reveal(
        ".l-home-content, .l-recipe-img, .l-delivery-data, .l-contact-img",
        {
            delay: 600,
            origin: "left",
        }
    );
    sr.reveal(
        ".r-home-banner, .r-recipe-data, .r-delivery-img, .r-contact-data",
        {
            delay: 600,
            origin: "right",
        }
    );
    sr.reveal(".famous-card", { interval: 100 });
    sr.reveal(".footer-data", { delay: 200, origin: "top" });
}

// Scroll Sections Active Link:-
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 100,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector(
                ".nav-menu a[href*=" + sectionId + "]"
            );
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);
