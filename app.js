const container = document.querySelector(".container");
let url = `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=838b6353edcb4753a360558332db1166`;

// ------ for front page ------

function fetchFood(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data.recipes;
      console.log(result);
      generateFood(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function generateFood(fetchArray) {
  const content = fetchArray.map(function (item) {
    const { image, title, spoonacularSourceUrl, summary } = item;

    return ` <a href="${spoonacularSourceUrl}" target="_blank"><div class="food-container">
    <img
      src="${image}"
      class="img"
      alt="${title}"
    />
    <h2 class="food-title">${title}</h2>
    <p class="desc">
    ${summary} 
    </p><p class="read-more">Read more</p>
  </div>
  </a>
  
  `;
  });
  container.innerHTML = content.join("");
}

// generate food from spononacular API

window.addEventListener("DOMContentLoaded", fetchFood(url));

//------ for search page ------

function fetchFoodSearch(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const searchResult = data.searchResults[0].results;
      // const result = data.recipes;
      console.log(searchResult);
      generateFoodSearch(searchResult);
    })
    .catch((error) => {
      console.log(error);
    });
}

function generateFoodSearch(fetchArray) {
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
    </p><p class="read-more">Read more</p>
  </div></a>
  
  `;
  });
  container.innerHTML = content.join("");
}

// JS for search functionality

const form = document.querySelector(".search-form");
const searchBox = document.querySelector(".search-box");
const searchResultText = document.querySelector(".search-result-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchBox.value;
  const container = document.querySelector(".container");
  searchResultText.innerHTML = `search results for "<b>${searchValue}</b>"...`;
  container.innerHTML = `<section class="waiting">
    <div class="preloader">
      <img src="./images/pre-loader.svg" alt="preloader" />
    </div>
    <p class="waiting-text">waiting for results...</p>
  </section>`;
  console.log(searchValue);

  url = `https://api.spoonacular.com/food/search?query=${searchValue}&number=9&apiKey=838b6353edcb4753a360558332db1166`;

  fetchFoodSearch(url);
  form.reset();
});

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
