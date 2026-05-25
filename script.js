// // Sticky header shadow on scroll
// const header = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
//   } else {
//     header.style.boxShadow = "none";
//   }
// });

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// Close mobile menu when a link is clicked
mobileNav.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
  });
});

// Sticky header shadow on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
  } else {
    header.style.boxShadow = "none";
  }
});
