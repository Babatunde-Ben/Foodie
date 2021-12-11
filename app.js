const container = document.querySelector(".container");
let url = `https://api.spoonacular.com/food/search?query=rice&number=9&apiKey=838b6353edcb4753a360558332db1166`;
function fetchFood(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data.searchResults[0].results;
      console.log(result);
      generateFood(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

// generate food from spononacular API below here

window.addEventListener("DOMContentLoaded", fetchFood(url));
// window.addEventListener("load", fetchFood(url));

function generateFood(fetchArray) {
  const content = fetchArray.map(function (item) {
    const { image, name, link, content } = item;

    return ` <a href="${link}" target="_blank"><div class="food-container">
    <img
      src="${image}"
      class="img"
      alt="${name}"
    />
    <h2 class="food-title">${name}</h2>
    <p class="desc">
    ${content} 
    </p>
  </div></a>
  
  `;
  });
  container.innerHTML = content.join("");
}

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

// JS for footer

const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;
