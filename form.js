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
