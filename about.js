// JS for responsive navbar

const openMenu = document.querySelector(".menu-bar");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector(".nav-header nav");
const navLinks = document.querySelectorAll(".nav-links");

openMenu.addEventListener("click", () => {
  nav.classList.add("show-link");
});
closeMenu.addEventListener("click", (e) => {
  nav.classList.remove("show-link");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("show-link");
  });
});

// JS for leave a message form

var contactForm = document.querySelector(".contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.classList.add("form-success");
      status.innerHTML = "Thanks for your submission!";
      contactForm.reset();
    })
    .catch((error) => {
      status.classList.add("form-fail");
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
contactForm.addEventListener("submit", handleSubmit);

// JS for footer

const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;
